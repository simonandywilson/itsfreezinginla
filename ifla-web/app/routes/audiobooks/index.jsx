import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from 'react-router';
import {Image} from '../../components/parts/Image';
import {Layout} from '../../components/parts/Layout';
import {BlockLink} from '../../components/parts/Links';
import {PortableText} from '../../components/parts/PortableText';
import {allAudiobooksDataQuery} from '../../lib/queries';

export const handle = {
  seo: {
    title: 'Audiobooks',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [audiobooks] = await Promise.all([getAllAudiobooksData(context)]);
  return defer({
    audiobooks,
  });
}

export default function Audiobooks() {
  const {audiobooks} = useLoaderData();
  return (
    <Layout intent={'page'}>
      <Layout intent={'grid'} as={'ul'}>
        {audiobooks.map((audiobook) => {
          const {_id, slug, image, intro} = audiobook;
          return (
            <li key={_id} className={'w-full'}>
              <BlockLink to={slug} className={'group'}>
                <div className={'relative'}>
                  <div
                    className={
                      'absolute w-full h-full inset-0 p-4 justify-between flex-col bg-audiobook hidden group-hover:flex group-focus-visible:flex'
                    }
                  >
                    <PortableText text={intro} intent={'preview'} />
                    <p className={'ml-auto'}>Listen {'>'}</p>
                  </div>
                  <Image
                    id={image._id}
                    width={500}
                    mode="cover"
                    hotspot={image.hotspot}
                    crop={image.crop}
                    alt={image.alt || ''}
                    preview={image.preview}
                    className={'w-full h-full object-cover'}
                    sizes="33vw"
                  />
                  <span className={'sr-only'}>{audiobook.headline}</span>
                </div>
              </BlockLink>
            </li>
          );
        })}
      </Layout>
    </Layout>
  );
}

async function getAllAudiobooksData({sanityClient}) {
  const audiobooks = await sanityClient.fetch(allAudiobooksDataQuery);
  return audiobooks;
}
