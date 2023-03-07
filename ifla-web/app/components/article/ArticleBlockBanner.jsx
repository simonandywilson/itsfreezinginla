import {cx} from 'class-variance-authority';
import React from 'react';
import {Layout} from '../parts/Layout';
import {ButtonLink} from '../parts/Links';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Text} from '../parts/Text';
import {Topic} from '../parts/Topic';

export const ArticleBlockBanner = ({article, link}) => {
  const {headline, intro, colour, author, category, topic} = article;
  return (
    <Layout
      as={'article'}
      intent={'banner'}
      colour={colour || 'var(--accent-colour)'}
    >
      <Layout
        intent={'grid'}
        as={'div'}
        className={cx('gap-4 flex-1', 'md:gap-8')}
      >
        <div>
          <Text as={'h2'} intent={'text-2xl'}>
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
          <Text as={'h3'} intent={'text-xl'}>
            {intro ? <PortableTextPlain text={intro} /> : 'Intro text'}
          </Text>
          {link && (
            <ButtonLink
              intent={'text-lg'}
              colour={'mono'}
              to={link}
              className={'mt-[1em]'}
            >
              Read on
            </ButtonLink>
          )}
        </div>
      </Layout>
      <div className={'flex justify-between'}>
        {author.name && (
          <Text
            as={'address'}
            intent={'text-sm'}
            className={'not-italic'}
          >
            By {author.name}
          </Text>
        )}
        {/* {category && category.length > 0 && (
          <div className={'flex'}>
            <span>(</span>
            {category.map((cat, index) => {
              return (
                <div key={cat._id}>
                  <Text as={'p'} intent={'bl-heading-base'}>
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
        )} */}
      </div>
    </Layout>
  );
};
