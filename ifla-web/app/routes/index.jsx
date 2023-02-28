import {json} from '@shopify/remix-oxygen';
import groq from 'groq';
import { useLoaderData } from 'react-router';

import Hero from '../components/home/Hero';
import Link from '../components/parts/Link';
import ArticleBlockBanner from '../components/article/ArticleBlockBanner';
import ArticleBlock from '../components/article/ArticleBlock';
import Banner from '../components/parts/Banner';

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
    const { homepage } = useLoaderData();
  return (
    <div>
      <Banner>
        {homepage.heroBanner ? homepage.heroBanner : 'Currently…'}
      </Banner>
      <Hero hero={{}} />
      {homepage.featured ? (
        <>
          <Banner>
            {homepage.featuredBanner
              ? homepage.featuredBanner
              : 'Featured articles'}
          </Banner>
          <ul className={'w-full grid-layout'}>
            <li className={'col-span-full w-full'}>
              <Link to={homepage.featured[0].slug}>
                <ArticleBlockBanner article={homepage.featured[0]} />
              </Link>
            </li>
            {homepage.featured.map((article, index) => {
              if (index === 0) {
                return;
              }
              return (
                <li key={article._id} className={'w-full'}>
                  <Link to={article.slug}>
                    <ArticleBlock article={article} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <Banner>No featured articles</Banner>
      )}
    </div>
  );
}

async function getHomepageData({sanityClient}) {
  const query = groq`*[_type == "home"][0] {
		"heroBanner": heroBanner,
		"featuredBanner": featuredBanner,
		"featured": featured[0...3] -> {
			_id,
			headline,
			"slug": slug.fullUrl,
			intro,
			"colour":colour->colourLight,
			author-> {name},
			media[],
			image {
          		alt,
            	asset->
          	}
		}}`;
  const homepage = await sanityClient.fetch(query);
  return homepage;
}
