import {json} from '@shopify/remix-oxygen';
import { cx } from 'class-variance-authority';
import groq from 'groq';
import {useLoaderData} from 'react-router';

import {ArticleBlock} from '../components/article/ArticleBlock';
import {ArticleBlockBanner} from '../components/article/ArticleBlockBanner';
import Hero from '../components/hero/Hero';
import {Banner} from '../components/parts/Banner';
import {Layout} from '../components/parts/Layout';
import { BlockLink } from '../components/parts/Links';
import {shopLinkQuery} from '../lib/queries';

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

  return json({
    homepage,
  });
}

export default function Index() {
  const {homepage} = useLoaderData();
  return (
    <Layout intent={'home'}>
      <Banner>
        {homepage.heroBanner ? homepage.heroBanner : 'Currently…'}
      </Banner>
      <Hero hero={homepage.hero} />
      {homepage.featured ? (
        <>
          <Banner>
            {homepage.featuredBanner
              ? homepage.featuredBanner
              : 'Featured articles'}
          </Banner>
          <Layout intent={'grid'} as={'ul'}>
            <li className={'col-span-full w-full'}>
              <span className={cx('hidden', 'sm:block')}>
                <ArticleBlockBanner
                  article={homepage.featured[0]}
                  link={homepage.featured[0].slug}
                />
              </span>
              <span className={cx('block', 'sm:hidden')}>
                <BlockLink to={homepage.featured[0].slug}>
                  <ArticleBlock article={homepage.featured[0]} />
                </BlockLink>
              </span>
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
          </Layout>
        </>
      ) : (
        <Banner>No featured articles</Banner>
      )}
    </Layout>
  );
}

async function getHomepageData({sanityClient}) {
  const query = groq`*[_type == "home"][0] {
		"heroBanner": heroBanner,
    "hero": hero -> {colour, store {
      title,
      "image": previewImageUrl,
      "slug": ${shopLinkQuery},
    }},
		"featuredBanner": featuredBanner,
		"featured": featured[0...4] -> {
			_id,
			headline,
			"slug": slug.fullUrl,
			intro,
			"colour":colour->colourLight,
			author-> {name},
      topic -> {
        topic,
        image {
          asset-> {_id}
        }
      },
			category[] -> {_id, category},
			image {
          		alt,
            	asset->{_id}
          	}
		}}`;
  const homepage = await sanityClient.fetch(query);
  return homepage;
}
