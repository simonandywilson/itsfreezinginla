import React from 'react';
import {Image} from './Image';
import {Text} from './Text';

export const Topic = ({topic}) => {
  const {image} = topic;
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
        id={image._id}
        width={200}
        alt={`Topic: ${topic.topic}`}
        sizes={'200px'}
        className={'h-full w-full group-hover/topic:invisible'}
      />
    </span>
  );
};
