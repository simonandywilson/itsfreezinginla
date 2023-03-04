import React from 'react';
import {Layout} from '../parts/Layout';
import SanityImage from '../parts/SanityImage';
import {Text} from '../parts/Text';

export const ImageModule = ({content}) => {
  const {caption, image, colour} = content;
  return (
    <Layout intent={'module'}>
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
