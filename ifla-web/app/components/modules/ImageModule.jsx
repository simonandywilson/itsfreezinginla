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
            id={image._id}
            width={1000}
            mode="contain"
            hotspot={image.hotspot}
            crop={image.crop}
            alt={image.alt || ''}
            preview={image.preview}
            // sizes={'100vw'}
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
