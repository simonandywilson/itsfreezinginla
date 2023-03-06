import {Layout} from '../parts/Layout';
import SanityImage from '../parts/SanityImage';
import {Text} from '../parts/Text';

export const ImageModule = ({content, inline}) => {
  const {caption, image, colour} = content;
  return (
    <Layout intent={inline ? 'module-inline' : 'module'}>
      {image && (
        <div className={'w-full'}>
          <SanityImage value={image} />
        </div>
      )}
      {caption && (
        <Text
          tag={'figcaption'}
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
