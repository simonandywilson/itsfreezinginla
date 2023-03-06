import { Layout } from '../parts/Layout';
import SanityImage from '../parts/SanityImage';

export const ImageGridModule = ({ content }) => {
  const inline = true
  const {images} = content;
    return (
      <Layout intent={inline ? 'module-inline' : 'module'}>
        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
          {images.map((image) => {
            return (
              <div
                className={'w-full aspect-square'}
                key={image._id || image._key}
              >
                <SanityImage value={image} className={'h-full object-cover'} />
              </div>
            );
          })}
        </div>
      </Layout>
    );
};
