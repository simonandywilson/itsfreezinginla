import {useLoaderData} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';
import React from 'react';
import swiperStyles from 'swiper/swiper.min.css';
import {articleDataQuery} from '../../lib/queries';
import {Article} from '../../components/article/Article';
import {ArticlePreview} from '../../components/preview/ArticlePreview';
import {PreviewSuspense} from '@sanity/preview-kit';

const seo = ({data}) => ({
  title: data.article.seoTitle,
  description:
    data.article.seoDescription.length > 155
      ? data.article.seoDescription.substring(0, 154) + '…'
      : data.article.seoDescription,
});

export const handle = {
  seo,
};

export const links = () => {
  return [{rel: 'stylesheet', href: swiperStyles}];
};

export async function loader({context, params, request}) {
  const {sanityClient, usePreview} = context;

  if (preview) {
    return {preview: true, query: articleDataQuery, params};
  }

  const article = await sanityClient.fetch(articleDataQuery, params);

  if (!article) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
  
  return defer({
    article,
    usePreview,
  });
}

export default function ArticleRoute() {
  const { preview, article, query, params, usePreview } = useLoaderData();

  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <ArticlePreview query={query} params={params} usePreview={usePreview} />
    </PreviewSuspense>
  ) : (
    <Article article={article} />
  );
}
