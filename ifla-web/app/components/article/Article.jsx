import React from 'react';
import {Layout} from '../parts/Layout';
import {Banner} from '../parts/Banner';

import {ArticleBlockBanner} from '../article/ArticleBlockBanner';

import {Content} from '../content/Content';

export const Article = ({article}) => {
  return (
    <Layout intent={'article'}>
      <ArticleBlockBanner article={article} />
      {article.date && (
        <Banner>
          {new Date(article.date).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          })}
        </Banner>
      )}
      {article.content.map((content) => {
        return <Content key={content._id || content._key} content={content} />;
      })}
    </Layout>
  );
};
