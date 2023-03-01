import React from 'react';
import SanityImage from './SanityImage';

const Topic = ({topic}) => {
  return (
    <span className={'float inline-block h-[1em] mr-4'}>
      <SanityImage
        value={topic.image}
        alt={`Topic: ${topic.topic}`}
        className={'h-full'}
      />
    </span>
  );
};

export default Topic;
