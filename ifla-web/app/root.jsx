import {defer} from '@shopify/remix-oxygen';
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
  const [cartId, shop, settings, menu, footer] = await Promise.all([
    context.session.get('cartId'),
    getShopData(context),
    getSettingsData(context),
    getMenuData(context),
    getFooterData(context),
  ]);

  return defer({
    settings,
    menu,
    footer,
    cart: cartId ? getCart(context, cartId) : undefined,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: shop.shop.id,
    },
  });
}

export async function action({ request }) {
   await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();
  console.log(formData);
  // const email = formData.get('email');

  // const API_KEY = '...';
  // const FORM_ID = '...';
  // const API = 'https://api.convertkit.com/v3';

  // const res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
  //   method: 'post',
  //   body: JSON.stringify({email, api_key: API_KEY}),
  //   headers: {
  //     'Content-Type': 'application/json; charset=utf-8',
  //   },
  // });

   return formData.json();
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
      <body>
        <main className={'selection:bg-green-200 min-h-screen flex flex-col'}>
          <GlobalHeader />
          <Outlet />
          <GlobalFooter />
        </main>
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
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  });

  return cart;
}
