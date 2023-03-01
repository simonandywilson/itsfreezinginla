import {defer, json} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useMatches,
} from '@remix-run/react';
import {ShopifySalesChannel, Seo} from '@shopify/hydrogen';
import {Layout} from '~/components';
import {GenericError} from './components/GenericError';
import {NotFound} from './components/NotFound';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {DEFAULT_LOCALE, parseMenu} from './lib/utils';
import invariant from 'tiny-invariant';
import groq from 'groq';
import {useAnalytics} from './hooks/useAnalytics';

import GlobalHeader from './components/global/GlobalHeader';
import GlobalFooter from './components/global/GlobalFooter';

const seo = ({data: {settings}, pathname}) => ({
  title: settings.seoTitle,
  titleTemplate: `%s | ${settings.shortTitle}`,
  description: settings.seoDescription,
  handle: settings.seoTwitter,
  url: `${settings.seoDomain}${pathname}`,
});

export const handle = {
  seo,
};

export const links = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {rel: 'preconnect', href: 'https://cdn.shopify.com'},
    {rel: 'preconnect', href: 'https://shop.app'},
    // {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [cartId, shop, allProducts, settings, menu, footer] = await Promise.all(
    [
      context.session.get('cartId'),
      getShopData(context),
      getAllProductsData(context),
      getSettingsData(context),
      getMenuData(context),
      getFooterData(context),
    ],
  );

  return defer({
    settings,
    menu,
    footer,
    cart: cartId ? getCart(context, cartId) : undefined,
    allProducts,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: shop.shop.id,
    },
    sanityProjectDetails: context.sanityProjectDetails,
  });
}

const badRequest = (data) => json(data, {status: 400});

// export async function action({request, context, params}) {
//   await new Promise((res) => setTimeout(res, 1000));
//   const {storefront} = context;
//   const formData = await request.formData();
//   const email = formData.get('email');

//   const CUSTOMER_CREATE_MUTATION = `#graphql
//   mutation customerCreate($input: CustomerCreateInput!) {
//     customerCreate(input: $input) {
//       customer {
//         id
//       }
//       customerUserErrors {
//         code
//         field
//         message
//       }
//     }
//   }
// `;

//   if (!email) {
//     console.log('no email');
//     return badRequest({
//       formError: 'Please provide both an email and a password.',
//     });
//   }

//   try {
//     const data = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
//       variables: {
//         input: {email: 'user@example.com'},
//       },
//     });

//     if (!data?.customerCreate?.customer?.id) {
//       /**
//        * Something is wrong with the user's input.
//        */
//       throw new Error(data?.customerCreate?.customerUserErrors.join(', '));
//     }
//   } catch (error) {
//     if (storefront.isApiError(error)) {
//       console.log(error);
//       return badRequest({
//         formError: 'Something went wrong. Please try again later.',
//       });
//     }
//     return badRequest({
//       formError:
//         'Sorry. We could not create an account with this email. User might already exist.',
//     });
//   }
// }



export default function App() {
  const locale = {
    label: 'United Kingdom (GBP £)',
    language: 'EN',
    country: 'GB',
    currency: 'GBP',
  };
  const hasUserConsent = true;

  useAnalytics(hasUserConsent, locale);

  return (
    <html lang="en">
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalHeader />
        <main
          className={
            'selection:bg-green-200 min-h-screen flex flex-col leading-tight pt-24 text-lg'
          }
        >
          <Outlet />
        </main>
        <GlobalFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const [root] = useMatches();
  const caught = useCatch();
  const isNotFound = caught.status === 404;
  const locale = root.data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language}>
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          layout={root?.data?.layout}
          key={`${locale.language}-${locale.country}`}
        >
          {isNotFound ? (
            <NotFound type={caught.data?.pageType} />
          ) : (
            <GenericError
              error={{message: `${caught.status} ${caught.data}`}}
            />
          )}
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}) {
  const [root] = useMatches();
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language}>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout layout={root?.data?.layout}>
          <GenericError error={error} />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

async function getShopData({storefront}) {
  const query = `#graphql
  {
    shop {
      id
    }
  }
  `;
  const shop = await storefront.query(query);
  invariant(shop, 'No data returned from Shopify API');
  return shop;
}

async function getSettingsData({sanityClient}) {
  const query = groq`*[_type == "settings"][0]`;
  const settings = await sanityClient.fetch(query);

  return settings;
}

async function getMenuData({sanityClient}) {
  const query = groq`*[_type == 'section'] | order(orderRank asc) {
		_id,
		name,
		"children": *[_type == "page" && !(_id in path('drafts.**')) && references(^._id)] | order(orderRank asc) {
			_id,
    		title,
    		"slug":slug.fullUrl
		}
	}	
`;
  const menu = await sanityClient.fetch(query);
  return menu;
}

async function getFooterData({sanityClient}) {
  const query = groq`*[_type == "settings"][0] {
  footerLinks[] -> {
    _id,
    title,
    "slug": slug.fullUrl
  },
  footerText
}
`;
  const menu = await sanityClient.fetch(query);
  return menu;
}

const CART_QUERY = `#graphql
  query CartQuery($cartId: ID!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }

  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }

  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`;

export async function getCart({storefront}, cartId) {
  invariant(storefront, 'missing storefront client in cart query');

  const {cart} = await storefront.query(CART_QUERY, {
    variables: {
      cartId,
      // country: storefront.i18n.country,
      // language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  });

  return cart;
}

const ALL_PRODUCTS_QUERY = `#graphql
  query AllProducts(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
      products(first: 100) {
        nodes {
          id
          title
          publishedAt
          handle 
          featuredImage {
            url
            altText
            width
            height
          }
          variants(first: 5) {
            nodes {
              id
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              product {
                handle
                title
              }
            }
          }
        }
      }
    }
  
`;

export async function getAllProductsData({storefront}) {
  invariant(storefront, 'missing storefront client in all products query');

  const {products} = await storefront.query(ALL_PRODUCTS_QUERY, {
    variables: {
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  return products;
}
