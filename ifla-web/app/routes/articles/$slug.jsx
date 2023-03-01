import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import groq from 'groq';
import React from 'react';
import ArticleBlockBanner from '../../components/article/ArticleBlockBanner';
import {Content} from '../../components/content/Content';
import {Layout} from '../../components/parts/Layout';
import {contentFragment} from '../../lib/fragments';
import swiperStyles from 'swiper/swiper.min.css';
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

export async function loader({context, params}) {
  const [article, articleContent] = await Promise.all([
    getArticleData(context, params),
    getArticleContentData(context, params),
  ]);
  return json({
    article,
    articleContent,
  });
}

export default function Article() {
  const {article, articleContent} = useLoaderData();

  return (
    <Layout intent={'article'}>
      <ArticleBlockBanner article={article} />
      {articleContent.content.map((content) => {
        return <Content key={content._id || content._key} content={content} />;
      })}
    </Layout>
  );
}

async function getArticleData(context, params) {
  const {sanityClient} = context;
  const query = groq`*[_type == "article" && slug.current == $slug][0]{
        _id,
  		headline,
  		"slug": slug.fullUrl,
  		intro,
  		"colour":colour->colourLight,
  		author-> {name},
  		media[],
  		image {
  			alt,
  			asset->
  		}
    }`;
  const article = await sanityClient.fetch(query, params);

  return article;
}

async function getArticleContentData(context, params) {
  const {sanityClient} = context;
  const query = groq`*[_type == "article" && slug.current == $slug][0]{
       ${contentFragment}
    }`;
  const article = await sanityClient.fetch(query, params);

  return article;
}
