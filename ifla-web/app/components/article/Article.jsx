import React from 'react';
import {Layout} from '../parts/Layout';
import {Banner} from '../parts/Banner';
import {ArticleBannerModule} from '../modules/ArticleBannerModule';
import {FeaturedBlocksModule} from '../modules/FeaturedBlocksModule';
import {Content} from '../content/Content';
import {useRouteLoaderData} from '@remix-run/react';

export const Article = ({article}) => {
  const {date, content, related, colourDark} = article;
  const {keyPages} = useRouteLoaderData(`root`);

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
          <FeaturedBlocksModule
            content={related}
            link={{link: `/${keyPages.article}`, title: 'Read more'}}
          />
        </>
      )}
    </>
  );
};
