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
                id={image._id}
                width={500}
                mode="cover"
                hotspot={image.hotspot}
                crop={image.crop}
                alt={image.alt || ''}
                preview={image.preview}
                // sizes={'100vw'}
                className={'h-full object-cover'}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
