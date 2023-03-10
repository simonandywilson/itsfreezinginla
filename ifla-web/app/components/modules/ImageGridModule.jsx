import  { Image } from '../parts/Image';
import {Layout} from '../parts/Layout';

export const ImageGridModule = ({content}) => {
  const inline = true;
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
              <Image
                asset={{
                  _id: image._id,
                }}
                hotspot={image.hotspot}
                crop={image.crop}
                alt={image.alt}
                width={1000}
                options={{aspectRatio: true}}
                className={'h-full object-cover'}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
