import React from 'react';
import {Topic} from '../parts/Topic';
import {Text} from '../parts/Text';
import {cx} from 'class-variance-authority';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Layout} from '../parts/Layout';

export const ArticleBlockBanner = ({article}) => {
  const {headline, intro, colour, author, media, topic} = article;
  return (
    <Layout
      tag={'article'}
      intent={'banner'}
      colour={colour || '#e3e8ef'}
    >
      <div
        className={cx(
          'grid grid-rows-2 grid-cols-1 gap-4',
          'lg:grid-cols-3 lg:grid-rows-1',
        )}
      >
        <div>
          <Text tag={'h2'} intent={'bl-heading-3xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </Text>
        </div>
        <div className={cx('columns-1 col-span-2 gap-4', 'md:columns-2')}>
          <Text tag={'h3'} intent={'bl-heading-xl'}>
            {intro ? <PortableTextPlain text={intro} /> : 'Intro text'}
          </Text>
        </div>
      </div>
      <div className={'flex justify-between'}>
        {author.name && (
          <Text
            tag={'address'}
            intent={'bl-heading-base'}
            className={'not-italic'}
          >
            By {author.name}
          </Text>
        )}
        {media && media.length > 0 && (
          <Text tag={'p'} intent={'bl-heading-base'}>
            ({media.join(', ')})
          </Text>
        )}
      </div>
    </Layout>
  );
};
