import {createClient} from '@sanity/client';

export const projectId = 'yt08sdph';
export const dataset = 'production';
export const apiVersion = '2023-01-01';

export const sanityClient = createClient({projectId, dataset, apiVersion, useCdn: true});
