import React from 'react';
import {Layout} from '../parts/Layout';
import {Banner} from '../parts/Banner';
import {ArticleBannerModule} from '../modules/ArticleBannerModule';
import {FeaturedBlocksModule} from '../modules/FeaturedBlocksModule';
import {Content} from '../content/Content';
import {useRouteLoaderData} from '@remix-run/react';
import clsx from 'clsx';
import { Submenu } from '../parts/Submenu';
import { TextLink } from '../parts/Links';
import { PortableText } from '../parts/PortableText';

export const Article = ({article}) => {
  const {date, content, related, colourDark} = article;
  const { keyPages } = useRouteLoaderData(`root`);
  
  console.log(article);

  return (
    <>
      <Layout intent={'article'}>
        <Submenu className={'fixed '}>
          <TextLink to={`/${keyPages.articles}`}>{'<'} Back</TextLink>
        </Submenu>
        <div className={'pt-8'}>
          <ArticleBannerModule content={article} />
          {date && (
            <div className={'relative w-full flex'}>
              <div className={'mx-auto px-4 lg:mx-0'}>
                <time
                  dateTime={date}
                  className={clsx(
                    'block w-[45rem] relative mt-9 mx-auto',
                    'lg:absolute lg:w-max lg:ml-4',
                  )}
                >
                  {new Date(date).toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  })}
                </time>
              </div>
            </div>
          )}
          <div className={'mt-8'}>
            <PortableText text={article.intro} intent={'articleIntro'} />
          </div>
          {content.map((content) => {
            return (
              <Content
                key={content._id || content._key}
                content={content}
                colour={colourDark}
              />
            );
          })}
        </div>
      </Layout>
      {related && (
        <>
          <Banner>More Reads</Banner>
          <FeaturedBlocksModule
            content={related}
            link={{link: `/${keyPages.articles}`, title: 'Read more'}}
          />
        </>
      )}
    </>
  );
};
