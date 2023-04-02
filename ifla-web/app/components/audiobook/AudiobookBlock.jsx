import React from 'react';
import {Layout} from '../parts/Layout';
import clsx from 'clsx';
import {Image} from '../parts/Image';
import { PortableText } from '../parts/PortableText';

export const AudiobookBlock = ({audiobook}) => {
  const {image, intro} = audiobook;
  return (
    <Layout
      as={'div'}
      intent={'block'}
      className={clsx(
        'relative w-full aspect-square flex flex-col justify-between gap-6 bg-audiobook',
      )}
    >
      <div
        className={
          'h-full w-full flex justify-between flex-col bg-audiobook z-10 invisible group-hover:visible group-focus:visible'
        }
      >
        <PortableText text={intro} intent={'preview'} />
        <p className={'text-16 ml-auto'}>Listen {'>'}</p>
      </div>
      <div
        className={
          'absolute w-full h-full inset-0 group-hover:invisible group-focus:invisible'
        }
      >
        {image && (
          <Image
            id={image._id}
            width={1000}
            mode="cover"
            hotspot={image.hotspot}
            crop={image.crop}
            alt={image.alt || ''}
            preview={image.preview}
            className={'w-full h-full object-cover'}
            sizes="33vw"
          />
        )}
      </div>
    </Layout>
  );
};
