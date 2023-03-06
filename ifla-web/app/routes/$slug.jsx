import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import React from 'react';
import swiperStyles from 'swiper/swiper.min.css';
import {getSession} from '~/sessions';
import {pageDataQuery} from '../lib/queries';
import { Page } from '../components/page/Page';

const seo = ({data}) => ({
  title: data.page?.seoTitle || "Page",
  description:  data.page?.seoDescription ? 
    data.page.seoDescription.length > 155
      ? data.page.seoDescription.substring(0, 154) + '…'
      : data.page.seoDescription : '',
});

export const handle = {
  seo,
};

export const links = () => {
  return [{rel: 'stylesheet', href: swiperStyles}];
};

export async function loader({context, params, request}) {
  const {sanityClient, usePreview} = context;
  const session = await getSession(request.headers.get('Cookie'));
  const preview = session.get('preview');

  if (preview) {
    return {preview: true, query: pageDataQuery, params};
  }
  const page = await sanityClient.fetch(pageDataQuery, params);
  return json({
    page,
    usePreview,
  });
}

export default function PageRoute() {
  const {page} = useLoaderData();

  return <Page page={page} />;
}
