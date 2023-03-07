// Virtual entry point for the app
import * as remixBuild from '@remix-run/dev/server-build';
import {createRequestHandler} from '@remix-run/server-runtime';
import {createStorefrontClient} from '@shopify/hydrogen';
import {HydrogenSession} from '~/lib/session.server';
import {createClient} from '@sanity/client';
import {definePreview} from '@sanity/preview-kit';

/**
 * Export a fetch handler in module format.
 */
export default async function (request: Request): Promise<Response> {
  try {
    /**
     * This has to be done so messy because process.env can't be destructured
     * and only variables explicitly named are present inside a Vercel Edge Function.
     * See https://github.com/vercel/next.js/pull/31237/files
     */
    const env: Env = {
      SESSION_SECRET: '',
      PUBLIC_STOREFRONT_API_TOKEN: '',
      PUBLIC_STOREFRONT_API_VERSION: '',
      PRIVATE_STOREFRONT_API_TOKEN: '',
      PUBLIC_STORE_DOMAIN: '',
      SANITY_PUBLIC_PROJECT_ID: '',
      SANITY_PUBLIC_DATASET: '',
      SANITY_PUBLIC_API_VERSION: '',
      SANITY_PUBLIC_API_VERSION: '',
      MAILERLITE_API_KEY: '',
    };
    env.SESSION_SECRET = process.env.SESSION_SECRET;
    env.PUBLIC_STOREFRONT_API_TOKEN = process.env.PUBLIC_STOREFRONT_API_TOKEN;
    env.PRIVATE_STOREFRONT_API_TOKEN = process.env.PRIVATE_STOREFRONT_API_TOKEN;
    env.PUBLIC_STOREFRONT_API_VERSION =
      process.env.PUBLIC_STOREFRONT_API_VERSION;
    env.PUBLIC_STORE_DOMAIN = process.env.PUBLIC_STORE_DOMAIN;

    env.SANITY_PUBLIC_PROJECT_ID = process.env.SANITY_PUBLIC_PROJECT_ID;
    env.SANITY_PUBLIC_DATASET = process.env.SANITY_PUBLIC_DATASET;
    env.SANITY_PUBLIC_API_VERSION = process.env.SANITY_PUBLIC_API_VERSION;
    env.MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    /**
     * Open a cache instance in the worker and a custom session instance.
     */
    if (!env?.SESSION_SECRET) {
      throw new Error('SESSION_SECRET process.environment variable is not set');
    }

    const [session] = await Promise.all([
      HydrogenSession.init(request, [process.env.SESSION_SECRET]),
    ]);

    /**
     * Create Hydrogen's Storefront client.
     */
    const {storefront} = createStorefrontClient({
      buyerIp: request.headers.get('x-forwarded-for') ?? undefined,
      i18n: {
        label: 'United Kingdom (GBP £)',
        language: 'EN',
        country: 'GB',
        currency: 'GBP',
      },
      publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
      privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
      storeDomain: `https://${env.PUBLIC_STORE_DOMAIN}`,
      storefrontApiVersion: env.PUBLIC_STOREFRONT_API_VERSION || '2023-01',
      // storefrontId: process.env.PUBLIC_STOREFRONT_ID,
      // requestGroupId: request.headers.get('request-id'),
    });

    const projectId = env.SANITY_PUBLIC_PROJECT_ID;
    const dataset = env.SANITY_PUBLIC_DATASET;
    const apiVersion = env.SANITY_PUBLIC_API_VERSION;
    const mailerLiteApi = env.MAILERLITE_API_KEY;

    const sanityClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
    const usePreview = definePreview({projectId, dataset});

    const sanityProjectDetails = {
      projectId: env.SANITY_PUBLIC_PROJECT_ID,
      dataset: env.SANITY_PUBLIC_DATASET,
      apiVersion: env.SANITY_PUBLIC_API_VERSION,
    };

    const handleRequest = createRequestHandler(remixBuild as any, 'production');

    const response = await handleRequest(request, {
      session,
      storefront,
      env,
      sanityClient,
      usePreview,
      sanityProjectDetails,
      mailerLiteApi,
      waitUntil: () => Promise.resolve(),
    });

    if (response.status === 404) {
      /**
       * Check for redirects only when there's a 404 from the app.
       * If the redirect doesn't exist, then `storefrontRedirect`
       * will pass through the 404 response.
       */
      // return storefrontRedirect({request, response, storefront});
    }

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return new Response('An unexpected error occurred', {status: 500});
  }
}
