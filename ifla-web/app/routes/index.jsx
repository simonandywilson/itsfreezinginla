import {sanityClient} from '~/lib/sanity';
import {homepageDataQuery} from '../lib/sanity.queries';
import {defer} from '@remix-run/server-runtime';
import {useLoaderData} from '@remix-run/react';
import {Layout} from '../components/parts/Layout';
import {HeroModule} from '../components/modules/HeroModule';
import {ArticleBannerModule} from '../components/modules/ArticleBannerModule';
import {FeaturedBlocksModule} from '../components/modules/FeaturedBlocksModule';

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
  const {homepage} = useLoaderData();
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
              <FeaturedBlocksModule
                key={content._key}
                content={content.blocks}
                link={content.link}
              />
            );
          default:
            return null;
        }
      })}
    </Layout>
  );
}

async function getHomepageData() {
  const homepage = await sanityClient.fetch(homepageDataQuery);
  return homepage;
}
