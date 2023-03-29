import {defer} from '@shopify/remix-oxygen';
import {cx} from 'class-variance-authority';
import {useLoaderData} from 'react-router';
import {ArticleBlock} from '../components/article/ArticleBlock';
import {ArticleBlockBanner} from '../components/article/ArticleBlockBanner';
import {Hero} from '../components/hero/Hero';
import {Layout} from '../components/parts/Layout';
import {BlockLink, ButtonLink} from '../components/parts/LinksButton';
import { homepageDataQuery } from '../lib/queries';


export const handle = {
  seo: {
    title: 'Home',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [homepage] = await Promise.all([getHomepageData(context)]);
  return defer({
    homepage,
  });
}

export default function Index() {
  const {homepage} = useLoaderData();
  return (
    <Layout intent={'home'}>
      {homepage.hero &&
        homepage.hero.map((hero) => <Hero key={hero._key} hero={hero} />)}
      {homepage.featured && (
        <>
          <Layout intent={'grid'} as={'ul'}>
            <li className={'col-span-full w-full'}>
              <ArticleBlockBanner
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
              className={cx(
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
      )}
    </Layout>
  );
}

async function getHomepageData({sanityClient}) {
  const homepage = await sanityClient.fetch(homepageDataQuery);
  return homepage;
}
