import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import {Seo, ShopifySalesChannel} from '@shopify/hydrogen';
import {defer, json} from '@shopify/remix-oxygen';
import groq from 'groq';
import invariant from 'tiny-invariant';
import {NotFound} from './components/error/NotFound';
import GlobalFooter from './components/global/GlobalFooter';
import GlobalHeader from './components/global/GlobalHeader';
import {useAnalytics} from './hooks/useAnalytics';
import {shopLinkQuery} from './lib/queries';
import styles from './styles/app.css';

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
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: './favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: './favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: './favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: './favicon/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: './favicon/safari-pinned-tab.svg',
      color: '#000000',
    },
    {
      rel: 'shortcut icon',
      href: './favicon/favicon.ico',
    },
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: './favicon/browserconfig.xml',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [cartId, shop, allProducts, settings, menu, footer, shopLink] =
    await Promise.all([
      context.session.get('cartId'),
      getShopData(context),
      getAllProductsData(context),
      getSettingsData(context),
      getMenuData(context),
      getFooterData(context),
      getShopPage(context),
    ]);

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
    shop: shopLink,
  });
}

const badRequest = (data) => json(data, {status: 400});
const goodRequest = (data) => json(data, {status: 200});

export async function action({request, context}) {
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();
  const apiKey = context.mailerLiteApi;

  const email = formData.get('email');
  const subscribedAt = new Date().toLocaleString('sv-SE');

  const subscriber = {
    email: email,
    subscribed_at: subscribedAt,
  };

  if (!email) {
    console.log('no email');
    return badRequest({
      formError: 'Please provide an email.',
    });
  }

  try {
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'post',
      body: JSON.stringify(subscriber),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: ` Bearer ${apiKey}`,
      },
    });

    return json({res});
  } catch (error) {
    return badRequest({
      formError:
        'Sorry. We could not create an account with this email. User might already exist.',
    });
  }
}

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
      <body className={'selection:bg-accent/20'}>
        <GlobalHeader />
        <main className={'min-h-screen flex flex-col pt-24'}>
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
  const caught = useCatch();
  const isNotFound = caught.status === 404;
  const locale = {
    label: 'United Kingdom (GBP £)',
    language: 'EN',
    country: 'GB',
    currency: 'GBP',
  };
  return (
    <html lang={locale.language}>
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NotFound error={error} />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}) {
  const locale = {
    label: 'United Kingdom (GBP £)',
    language: 'EN',
    country: 'GB',
    currency: 'GBP',
  };
  return (
    <html lang={locale.language}>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NotFound error={error} />
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
    		"slug":slug.current
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

export async function getShopPage({sanityClient}) {
  const shop = await sanityClient.fetch(shopLinkQuery);
  return shop;
}
