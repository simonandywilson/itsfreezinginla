// Virtual entry point for the app
import * as remixBuild from '@remix-run/dev/server-build';
import {createRequestHandler, getBuyerIp} from '@shopify/remix-oxygen';
import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import PicoSanity from 'picosanity';
import {definePreview} from '@sanity/preview-kit';
import {HydrogenSession} from './app/lib/session.server';
/**
 * Export a fetch handler in module format.
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      /**
       * Open a cache instance in the worker and a custom session instance.
       */
      if (!env?.SESSION_SECRET) {
        throw new Error('SESSION_SECRET environment variable is not set');
      }

      const waitUntil = (p: Promise<any>) => executionContext.waitUntil(p);
      const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        HydrogenSession.init(request, [env.SESSION_SECRET]),
      ]);

      /**
       * Create Hydrogen's Storefront client.
       */
      const {storefront} = createStorefrontClient({
        cache,
        waitUntil,
        buyerIp: getBuyerIp(request),
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
        // storefrontId: env.PUBLIC_STOREFRONT_ID,
        requestGroupId: request.headers.get('request-id'),
      });

      const projectId = env.SANITY_PUBLIC_PROJECT_ID;
      const dataset =
        !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
          ? 'staging'
          : env.SANITY_PUBLIC_DATASET;
      const apiVersion = env.SANITY_PUBLIC_API_VERSION;
      const sanityClient = new PicoSanity({
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
      });
      const usePreview = definePreview({projectId, dataset});
      const sanityProjectDetails = {
        projectId,
        dataset,
        apiVersion,
      };
      /**
       * Create a Remix request handler and pass
       * Hydrogen's Storefront client to the loader context.
       */
      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          cache,
          session,
          waitUntil,
          storefront,
          env,
          sanityClient,
          usePreview,
          sanityProjectDetails,
          mailerLiteApi: env.MAILERLITE_API_KEY,
          analyticsTrackingId: env.GA_TRACKING_ID,
        }),
      });

      const response = await handleRequest(request);

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({request, response, storefront});
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};
