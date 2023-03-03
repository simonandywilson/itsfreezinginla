import React from 'react';
import {Topic} from '../parts/Topic';
import {cx} from 'class-variance-authority';
import {PortableTextPlain} from '../parts/PortableTextPlain';

export const ArticleBlockBanner = ({article}) => {
  const {headline, intro, colour, author, media, topic} = article;
  return (
    <article
      className={'w-full aspect-video p-6 flex flex-col justify-between gap-4'}
      style={{background: colour ? colour : '#e3e8ef'}}
    >
      <div
        className={cx(
          'grid grid-rows-2 grid-cols-1 gap-4',
          'lg:grid-cols-3 lg:grid-rows-1',
        )}
      >
        <div>
          <h2 className={'text-6xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </h2>
        </div>
        <h3
          className={cx('text-3xl columns-1 col-span-2 gap-4 ', 'md:columns-2')}
        >
          {intro ? <PortableTextPlain text={intro} /> : 'Intro text'}
        </h3>
      </div>
      <div className={'flex justify-between'}>
        {author.name && (
          <address className={'not-italic'}>By {author.name}</address>
        )}
        {media.length > 0 && <p>({media.join(', ')})</p>}
      </div>
    </article>
  );
};
