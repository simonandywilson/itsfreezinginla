import React from 'react';
import {Layout} from '../parts/Layout';
import {Banner} from '../parts/Banner';
import {ArticleBlockBanner} from '../article/ArticleBlockBanner';
import {Content} from '../content/Content';

export const Article = ({ article }) => {
  const { date, content, related } = article
  console.log(related);
  return (
    <Layout intent={'article'}>
      <ArticleBlockBanner article={article} />
      {date && (
        <Banner>
          <time>
            {new Date(date).toLocaleDateString('en-UK', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
          </time>
        </Banner>
      )}
      {content.map((content) => {
        return <Content key={content._id || content._key} content={content} />;
      })}
    </Layout>
  );
};
