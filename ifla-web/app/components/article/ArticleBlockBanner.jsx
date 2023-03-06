import React from 'react';
import {Topic} from '../parts/Topic';
import {Text} from '../parts/Text';
import {cx} from 'class-variance-authority';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Layout} from '../parts/Layout';

export const ArticleBlockBanner = ({article}) => {
  const {headline, intro, colour, author, media, topic} = article;
  return (
    <Layout tag={'article'} intent={'banner'} colour={colour || '#e3e8ef'}>
      <Layout intent={'grid'} tag={'div'} className={'max-w-7xl gap-4'}>
        <div>
          <Text tag={'h2'} intent={'bl-heading-3xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </Text>
        </div>
        <div
          className={cx(
            'col-span-1 columns-1 gap-4',
            'lg:col-span-2 lg:columns-2 ',
          )}
        >
          <Text tag={'h3'} intent={'bl-heading-xl'}>
            {intro ? <PortableTextPlain text={intro} /> : 'Intro text'}
          </Text>
        </div>
      </Layout>
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
