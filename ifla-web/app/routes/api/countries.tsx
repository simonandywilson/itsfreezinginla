import {json, type LoaderArgs} from '@shopify/remix-oxygen';

export async function loader({context: {storefront}}: LoaderArgs) {
  return json(
    {
      default: {
        label: 'United Kingdom (GBP £)',
        language: 'EN',
        country: 'GB',
        currency: 'GBP',
      },
    },
    {
      headers: {
        'cache-control': storefront.generateCacheControlHeader(
          storefront.CacheLong(),
        ),
      },
    },
  );
}

// no-op
export default function CountriesApiRoute() {
  return null;
}
