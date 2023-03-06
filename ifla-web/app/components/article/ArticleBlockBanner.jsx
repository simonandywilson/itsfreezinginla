import React from 'react';
import {Topic} from '../parts/Topic';
import {Text} from '../parts/Text';
import {cx} from 'class-variance-authority';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Layout} from '../parts/Layout';
import {Link} from '../parts/Link';

export const ArticleBlockBanner = ({article, link}) => {
  const {headline, intro, colour, author, category, topic} = article;
  return (
    <Layout tag={'article'} intent={'banner'} colour={colour || '#e3e8ef'}>
      <Layout
        intent={'grid'}
        tag={'div'}
        className={cx('gap-4 flex-1', 'md:gap-8')}
      >
        <div>
          <Text tag={'h2'} intent={'bl-heading-3xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </Text>
        </div>
        <div
          className={cx(
            'col-span-1 columns-1 gap-8 col-fill-auto',
            'lg:col-span-2 lg:columns-2 ',
          )}
        >
          <Text tag={'h3'} intent={'bl-heading-xl'}>
            {intro ? <PortableTextPlain text={intro} /> : 'Intro text'}
          </Text>
          {link && (
            <Link
              className={'mt-[1em]'}
              intent={'button-xl'}
              colour={'mono'}
              to={link}
            >
              <Text tag={'p'} intent={'ui-3xl'}>
                Read on
              </Text>
            </Link>
          )}
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
        {category && category.length > 0 && (
          <div className={'flex'}>
            <span>(</span>
            {category.map((cat, index) => {
              return (
                <div key={cat._id}>
                  <Text tag={'p'} intent={'bl-heading-base'}>
                    {cat.category}
                    {category.length > 0 && index + 1 !== category.length && (
                      <span>,&nbsp;</span>
                    )}
                  </Text>
                </div>
              );
            })}
            <span>)</span>
          </div>
        )}
      </div>
    </Layout>
  );
};
