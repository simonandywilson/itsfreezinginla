import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import groq from 'groq';
import React from 'react';
import ArticleBlockBanner from '../../components/article/ArticleBlockBanner';
import {Content} from '../../components/content/Content';
import {Layout} from '../../components/parts/Layout';
import {contentFragment} from '../../lib/fragments';
import swiperStyles from 'swiper/swiper.min.css';
import {getSession} from '~/sessions';
import {articleDataQuery} from '../../lib/queries';
import { ArticlePreview } from '../../components/preview/ArticlePreview';

const seo = ({data}) => ({
  title: 'UPDATE ME',
  description: 'article description',
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
    return {preview: true, articleDataQuery};
  }
  const article = await sanityClient.fetch(articleDataQuery, params);
  return json({
    article,
    usePreview
  });
}

export default function Article() {
  const {preview, article, query, usePreview} = useLoaderData();

  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <ArticlePreview query={query} usePreview={usePreview} />
    </PreviewSuspense>
  ) : (
    <Article article={article} />
  );
}
