import React from 'react';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Topic} from '../parts/Topic';
import {ButtonLink} from '../parts/LinksButton';
import clsx from 'clsx';

export const ArticleBlockBanner = ({article, link, truncate}) => {
  const {headline, intro, colour, author, topic} = article;
  return (
    <Layout
      as={'article'}
      intent={'banner'}
      colour={colour || 'var(--accent-colour)'}
    >
      <Layout
        intent={'grid'}
        as={'div'}
        className={clsx('gap-4 h-min', 'lg:gap-8 lg:flex-1')}
      >
        <div>
          <h2 className={clsx('break-words', 'text-32 md:text-56 lg:text-68')}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </h2>
        </div>
        <div
          className={clsx(
            'h-min col-span-1 columns-1 gap-8',
            'xl:col-span-2 xl:columns-2 ',
          )}
        >
          <div
            className={clsx({
              ' line-clamp xl:no-line-clamp':
                truncate,
            })}
          >
            {intro && <PortableText text={intro} intent={'intro'} />}
          </div>
          {link && (
            <ButtonLink
              colour={'mono'}
              to={link}
              className={'button-24 md:button-32 mt-[1em] break-before-avoid'}
            >
              Keep reading
            </ButtonLink>
          )}
        </div>
      </Layout>
      <div className={'flex justify-between'}>
        {author.name && (
          <address className={'text-18 md:text-24 not-italic'}>
            By {author.name}
          </address>
        )}
      </div>
    </Layout>
  );
};
