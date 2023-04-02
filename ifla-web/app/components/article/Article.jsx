import React from 'react';
import {Layout} from '../parts/Layout';
import {Banner} from '../parts/Banner';
import {ArticleBannerModule} from '../modules/ArticleBannerModule';
import {Content} from '../content/Content';
import {BlockLink, ButtonLink} from '../parts/Links';
import {ArticleBlock} from './ArticleBlock';
import { cx } from 'class-variance-authority';

export const Article = ({article}) => {
  const {date, content, related, colourDark} = article;
  return (
    <>
      <Layout intent={'article'}>
        <ArticleBannerModule content={article} />
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
          return (
            <Content
              key={content._id || content._key}
              content={content}
              colour={colourDark}
            />
          );
        })}
      </Layout>
      {related && (
        <>
          <Banner>More Reads</Banner>
          <Layout intent={'grid'} as={'ul'}>
            {related.map((article) => {
              return (
                <li key={article._id} className={'w-full'}>
                  <BlockLink to={article.slug}>
                    <ArticleBlock article={article} />
                  </BlockLink>
                </li>
              );
            })}
            <li
              className={cx(
                'w-full flex items-center justify-center aspect-square',
                'lg:hidden 3xl:flex',
              )}
            >
              <ButtonLink to={'/articles'} intent={'text-lg'}>
                Read more
              </ButtonLink>
            </li>
          </Layout>
        </>
      )}
    </>
  );
};
