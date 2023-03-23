import React from 'react';
import {Image} from './Image';
import {Text} from './Text';

export const Topic = ({topic}) => {
  return (
    <span
      className={
        'group/topic relative float inline-block h-[1em] mr-4 group-hover:hidden'
      }
    >
      <div
        className={
          'absolute w-full h-full inset-0 border-2 border-black whitespace-wrap hidden p-2 group-hover/topic:block'
        }
      >
        <Text intent={'text-sm'}>{topic.topic}</Text>
      </div>
      <Image
        asset={{
          _id: topic.image._id,
        }}
        hotspot={topic.image.hotspot}
        crop={topic.image.crop}
        alt={`Topic: ${topic.topic}`}
        width={1000}
        options={{aspectRatio: true}}
        className={'h-full group-hover/topic:invisible'}
      />
    </span>
  );
};
