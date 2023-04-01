import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from 'react-router';
import {Layout} from '../../components/parts/Layout';
import {
  allAudiobooksDataQuery,
  audiobookDataQuery,
} from '../../lib/sanity.queries';
import {sanityClient} from '../../lib/sanity';
import {Banner} from '../../components/parts/Banner';
import {Content} from '../../components/content/Content';
import {AudiobookBanner} from '../../components/audiobook/AudiobookBanner';
import {AudiobookBlock} from '../../components/audiobook/AudiobookBlock';
import clsx from 'clsx';
import { BlockLink, ButtonLink } from '../../components/parts/LinksButton';

const seo = ({data}) => ({
  title: data.audiobook.seoTitle,
  description:
    data.audiobook?.seoDescription?.length > 155
      ? data.audiobook.seoDescription.substring(0, 154) + '…'
      : data.audiobook.seoDescription,
});

export const handle = {
  seo,
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({params}) {
  const [audiobook] = await Promise.all([getAudiobookData(params)]);
  return defer({
    audiobook,
  });
}

export default function Audiobook() {
  const {audiobook} = useLoaderData();
  const { date, content, related } = audiobook;
  return (
    <>
      <Layout intent={'article'}>
        <AudiobookBanner audiobook={audiobook} />
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
            <Content key={content._id || content._key} content={content} />
          );
        })}
      </Layout>
      {related?.length > 0 && (
        <>
          <Banner>More listens</Banner>
          <Layout intent={'grid'} as={'ul'}>
            {related.map((audiobook) => {
              return (
                <li key={audiobook._id} className={'w-full'}>
                  <BlockLink to={audiobook.slug}>
                    <AudiobookBlock audiobook={audiobook} />
                  </BlockLink>
                </li>
              );
            })}
            <li
              className={clsx(
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
}

async function getAudiobookData(params) {
  const audiobook = await sanityClient.fetch(audiobookDataQuery, params);
  return audiobook;
}
