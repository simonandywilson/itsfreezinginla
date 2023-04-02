import { cx } from 'class-variance-authority';
import React from 'react';
import {Image} from './Image';

export const Topic = ({topic}) => {
  const {image} = topic;
  return (
    <span
      className={cx(
        'group/topic relative float-left inline-block h-[1.8em] top-2 mr-3 group-hover:hidden',
        'md:h-[0.8em] md:mr-4',
      )}
    >
      <div
        className={
          'absolute w-full h-full inset-0 border-2 border-black whitespace-wrap hidden p-2 group-hover/topic:block'
        }
      >
        <p className={'text-16 break-words leading-none'}>{topic.topic}</p>
      </div>
      <Image
        id={image._id}
        width={200}
        alt={`Topic: ${topic.topic}`}
        sizes={'200px'}
        className={'h-full w-max group-hover/topic:invisible'}
      />
    </span>
  );
};
