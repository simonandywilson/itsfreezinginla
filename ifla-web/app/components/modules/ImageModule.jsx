import React from 'react';
import SanityImage from '../parts/SanityImage';

export const ImageModule = ({content}) => {
  const {caption, image} = content;
  return (
    <figure>
      {image && (
        <div className={'w-full aspect-video'}>
          <SanityImage value={image} className={'h-full object-cover'} />
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
