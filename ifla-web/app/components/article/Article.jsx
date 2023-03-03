import React from 'react';
import {Layout} from '../parts/Layout';
import {ArticleBlockBanner} from '../article/ArticleBlockBanner';

import {Content} from '../content/Content';

export const Article = ({article}) => {
  return (
    <Layout intent={'article'}>
      <ArticleBlockBanner article={article} />
      {article.content.map((content) => {
        return <Content key={content._id || content._key} content={content} />;
      })}
    </Layout>
  );
};
