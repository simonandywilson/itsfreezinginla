import {createClient} from '@sanity/client';
import {definePreview} from '@sanity/preview-kit';

export const projectId = process.env.SANITY_PUBLIC_PROJECT_ID;
export const dataset = process.env.SANITY_PUBLIC_DATASET;
export const apiVersion = process.env.SANITY_PUBLIC_API_VERSION;

export const client = createClient({projectId, dataset});
export const usePreview = definePreview({projectId, dataset});
