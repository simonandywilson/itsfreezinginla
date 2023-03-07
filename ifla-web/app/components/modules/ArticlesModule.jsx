import {Link} from '@remix-run/react';
import React from 'react';
import {ArticleBlock} from '~/components/article/ArticleBlock';
import {Layout} from '../parts/Layout';

export const ArticlesModule = ({content}) => {
  return (
    <Layout as={'ul'} intent={'grid'} className={'grid-layout'}>
      {content.articles.map((article) => {
        return (
          <li key={article._id} className={'w-full'}>
            <Link to={article.slug}>
              <ArticleBlock article={article} />
            </Link>
          </li>
        );
      })}
    </Layout>
  );
};
