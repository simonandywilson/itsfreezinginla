import React from 'react';
import {Image} from './Image';

export const Topic = ({topic}) => {
  return (
    <span className={'float inline-block h-[1em] mr-4'}>
      <Image
        asset={{
          _id: topic.image._id,
        }}
        hotspot={topic.image.hotspot}
        crop={topic.image.crop}
        alt={`Topic: ${topic.topic}`}
        width={1000}
        options={{aspectRatio: true}}
        className={'h-full'}
      />
    </span>
  );
};
