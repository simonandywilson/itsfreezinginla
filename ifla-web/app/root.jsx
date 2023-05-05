import {defer, json} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react';
import {ShopifySalesChannel, Seo} from '@shopify/hydrogen';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import invariant from 'tiny-invariant';
import {useAnalytics} from './hooks/useAnalytics';
import {
  shopifyStoreDataQuery,
  shopifyCartQuery,
  shopifyAllCollectionsQuery,
} from './lib/shopify.queries';
import {sanityClient} from './lib/sanity';
import groq from 'groq';
import {useEffect} from 'react';
import {gdprConsent} from './cookies';
import ReactGA from 'react-ga4';
import {GlobalHeader} from './components/global/GlobalHeader';
import {GlobalCookie} from './components/global/GlobalCookie';
import {GlobalFooter} from './components/global/GlobalFooter';

const seo = ({data: {settings}, pathname}) => ({
  title: settings.seoTitle,
  titleTemplate: pathname === '/' ? `` : `%s | ${settings.shortTitle}`,
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
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context, request}) {
  const [
    cartId,
    storeData,
    shopifyAllCollections,
    settings,
    menu,
    footer,
    keyPages,
    colours,
  ] = await Promise.all([
    context.session.get('cartId'),
    getShopifyStoreData(context),
    getAllCollectionsData(context),
    getSettingsData(),
    getMenuData(),
    getFooterData(),
    getKeyPages(),
    getColoursData(),
  ]);

  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await gdprConsent.parse(cookieHeader)) || {};

  return defer({
    locale: context.storefront.i18n,
    cart: cartId ? getCart(context, cartId) : undefined,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: storeData.shop.id,
    },
    mailerLiteApi: context.mailerLiteApi,
    gaTrackingId: context.analyticsTrackingId,
    track: cookie.gdprConsent,
    shopifyAllCollections,
    settings,
    menu,
    footer,
    keyPages,
    colours,
  });
}

export default function App() {
  const location = useLocation();
  const {locale, track, gaTrackingId} = useLoaderData();
  useAnalytics(track, locale);

  useEffect(() => {
    if (track && gaTrackingId?.length) {
      ReactGA.initialize(gaTrackingId);
    }
  }, [track, gaTrackingId]);

  useEffect(() => {
    if (track && gaTrackingId?.length) {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname,
      });
    }
  }, [track, location, gaTrackingId]);

  return (
    <html lang={'en'}>
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body className={'selection:bg-yellow-200/50 hyphens-auto'}>
        <GlobalHeader />
        <div className={'min-h-screen overflow-x-hidden'}>
          <Outlet />
        </div>
        <GlobalCookie />
        <GlobalFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const badRequest = (data) => json(data, {status: 400});

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
    console.log(error);
    return badRequest({
      formError:
        'Sorry. We could not create an account with this email. User might already exist.',
    });
  }
}

// Shopify Data

async function getShopifyStoreData({storefront}) {
  const shopData = await storefront.query(shopifyStoreDataQuery);
  invariant(shopData, 'No data returned from Shopify API');
  return shopData;
}

export async function getCart({storefront}, cartId) {
  invariant(storefront, 'missing storefront client in cart query');
  const {cart} = await storefront.query(shopifyCartQuery, {
    variables: {
      cartId,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  });

  return cart;
}

export async function getAllCollectionsData({storefront}) {
  invariant(storefront, 'missing storefront client in all collections query');
  const {collections} = await storefront.query(shopifyAllCollectionsQuery);
  return collections;
}

// Sanity Data

async function getSettingsData() {
  const query = groq`*[_type == "settings"][0]`;
  const settings = await sanityClient.fetch(query);

  return settings;
}

async function getMenuData() {
  const query = groq`
  {
    "menuItems":*[_type == 'section'] | order(orderRank asc) {
      _id,
      name,
      "children": *[_type == "page" && !(_id in path('drafts.**')) && references(^._id)] | order(orderRank asc) {
        _id,
        title,
        "slug":slug.current
      },
      "submenuActiveOn": *[_type == "page" && !(_id in path('drafts.**')) && references(^._id)].slug.current,
      name == 'Explore' => {
        'submenuActiveOn': *[_type == "page" && !(_id in path('drafts.**')) && references(^._id)].slug.current + *[_type == "article"].slug.fullUrl + *[_type == "audiobook"].slug.fullUrl
      },
    },    
    "submenuActiveOnAll": *[_type == "page" && !(_id in path('drafts.**'))].slug.current + *[_type == "article"].slug.fullUrl + *[_type == "audiobook"].slug.fullUrl
	}	
`;
  const menu = await sanityClient.fetch(query);
  return menu;
}

async function getFooterData() {
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

async function getColoursData() {
  const query = groq`{"dark":array::unique(*[_type == "colour"].colourDark), "light":array::unique(*[_type == "colour"].colourLight)}`;
  const colours = await sanityClient.fetch(query);
  return colours;
}

async function getKeyPages() {
  const keyPagesQuery = groq`{
    "shop":*[_type == "settings"][0].shopPage->slug.current,
    "articles":*[_type == "settings"][0].articlesPage->slug.current,
    "audiobooks":*[_type == "settings"][0].audiobooksPage->slug.current,
    "privacy":*[_type == "settings"][0].privacyPage->slug.current
}`;
  const keyPages = await sanityClient.fetch(keyPagesQuery);
  return keyPages;
}
