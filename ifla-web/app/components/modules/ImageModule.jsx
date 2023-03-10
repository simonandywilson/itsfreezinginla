import  { Image } from '../parts/Image';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';

export const ImageModule = ({content}) => {
  const inline = true;
  const {caption, image, colour} = content;

  return (
    <Layout intent={inline ? 'module-inline' : 'module'}>
      {image && (
        <div className={'w-full'}>
          <Image
            asset={{
              _id: image._id,
            }}
            hotspot={image.hotspot}
            crop={image.crop}
            alt={image.alt}
            width={1000}
            options={{aspectRatio: true}}
          />
        </div>
      )}
      {caption && (
        <Text
          as={'figcaption'}
          intent={'bl-body-alt'}
          className={'my-4'}
          colour={colour}
        >
          {caption}
        </Text>
      )}
    </Layout>
  );
};
