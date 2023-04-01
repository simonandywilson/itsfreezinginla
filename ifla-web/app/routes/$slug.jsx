import {useLoaderData} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';
import React from 'react';
import swiperStyles from 'swiper/swiper.min.css';
import {
  pageDataQuery,
  allArticlesDataQuery,
  allTopicsDataQuery,
  allArticlesDataQueryFiltered,
  allAudiobooksDataQuery,
} from '../lib/sanity.queries';
import {Page} from '../components/page/Page';
import { sanityClient } from '../lib/sanity';

const seo = ({data}) => ({
  title: data.page?.seoTitle || 'Page',
  description: data.page?.seoDescription
    ? data.page.seoDescription.length > 155
      ? data.page.seoDescription.substring(0, 154) + '…'
      : data.page.seoDescription
    : '',
});

export const handle = {
  seo,
};

export const links = () => {
  return [{rel: 'stylesheet', href: swiperStyles}];
};

export async function loader({ params, request}) {

  const [page, articles, topics, audiobooks] = await Promise.all([
    getAllPageData(params),
    getAllArticlesData(request),
    getAllTopicsData(),
    getAllAudiobooksData(request),
  ]);

  if (!page) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return defer({
    page,
    articles,
    topics,
    audiobooks
  });
}

export default function PageRoute() {
  const {page, articles, topics, audiobooks} = useLoaderData();
  return (
    <Page
      page={page}
      articles={articles}
      topics={topics}
      audiobooks={audiobooks}
    />
  );
}

async function getAllPageData(params) {
  const page = await sanityClient.fetch(pageDataQuery, params);
  return page;
}

async function getAllArticlesData(request) {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search).get('search-query');
  const topic = new URLSearchParams(url.search).getAll('topic-query');

  const rawArticles = await sanityClient.fetch(
    topic === undefined || topic.length == 0
      ? allArticlesDataQuery
      : allArticlesDataQueryFiltered,
    {
      search: `${search || ''}*`,
      topic: topic,
    },
  );

  const articles = {};
  rawArticles.forEach((d) => {
    const date = new Date(d.date);
    const year = date.getFullYear();
    if (!articles[year]) {
      articles[year] = [];
    }
    articles[year].push(d);
  });

  return articles;
}

async function getAllTopicsData() {
  const topics = await sanityClient.fetch(allTopicsDataQuery);
  return topics;
}

async function getAllAudiobooksData() {
  const audiobooks = await sanityClient.fetch(allAudiobooksDataQuery);
  return audiobooks;
}
