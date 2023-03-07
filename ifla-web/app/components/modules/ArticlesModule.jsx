import React from 'react';
import {ArticleBlock} from '~/components/article/ArticleBlock';
import {Layout} from '../parts/Layout';
import { BlockLink } from '../parts/Links';

export const ArticlesModule = ({content}) => {
  return (
    <Layout as={'ul'} intent={'grid'} className={'grid-layout'}>
      {content.articles.map((article) => {
        return (
          <li key={article._id} className={'w-full'}>
            <BlockLink to={article.slug}>
              <ArticleBlock article={article} />
            </BlockLink>
          </li>
        );
      })}
    </Layout>
  );
};
