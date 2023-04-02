import {sanityClient} from '~/lib/sanity';
import {homepageDataQuery} from '../lib/sanity.queries';
import {defer} from '@remix-run/server-runtime';
import {useLoaderData} from '@remix-run/react';
import {Layout} from '../components/parts/Layout';
import {HeroModule} from '../components/modules/HeroModule';
import { ArticleBannerModule } from '../components/modules/ArticleBannerModule';
import {FeaturedBlocksModule} from '../components/modules/FeaturedBlocksModule';
import {ArticleBlock} from '../components/article/ArticleBlock';
import {BlockLink, ButtonLink} from '~/components/parts/LinksButton';
import clsx from 'clsx';

export const handle = {
  seo: {
    title: 'Home',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader() {
  const [homepage] = await Promise.all([getHomepageData()]);
  return defer({
    homepage,
  });
}

export default function Homepage() {
  const { homepage } = useLoaderData();
  return (
    <Layout intent={'home'}>
      {homepage.content.map((content) => {
        switch (content._type) {
          case 'heroModule':
            return <HeroModule key={content._key} content={content} />;
          case 'articleBannerModule':
            return (
              <ArticleBannerModule
                key={content._key}
                content={content.article}
                homepage
              />
            );
          case 'featuredBlocksModule':
            return (
              <FeaturedBlocksModule key={content._key} content={content.blocks} link={content.link} />
            );
        }
      })}
{/* 
      {homepage.featured && (
        <>
          <Layout intent={'grid'} as={'ul'}>
            <li className={'col-span-full w-full'}>
              <ArticleBanner
                article={homepage.featured[0]}
                link={homepage.featured[0].slug}
                truncate
              />
            </li>
            {homepage.featured.map((article, index) => {
              if (index === 0) {
                return;
              }
              return (
                <li key={article._id} className={'w-full'}>
                  <BlockLink to={article.slug}>
                    <ArticleBlock article={article} />
                  </BlockLink>
                </li>
              );
            })}
            <li
              className={clsx(
                'w-full hidden items-center justify-center aspect-square',
                'md:flex xl:hidden 3xl:flex',
              )}
            >
              <ButtonLink
                colour={'mono'}
                to={'/articles'}
                className={'button-24 md:button-32 mt-[1em] break-before-avoid'}
              >
                Read more
              </ButtonLink>
            </li>
          </Layout>
        </>
      )} */}
    </Layout>
  );
}

async function getHomepageData() {
  const homepage = await sanityClient.fetch(homepageDataQuery);
  return homepage;
}
