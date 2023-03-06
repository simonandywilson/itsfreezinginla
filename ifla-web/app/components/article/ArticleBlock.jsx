import React from 'react';
import SanityImage from '../parts/SanityImage';
import {Topic} from '../parts/Topic';
import {Text} from '../parts/Text';

export const ArticleBlock = ({article}) => {
  const {headline, colour, author, category, image, topic} = article;
  return (
    <article
      className={
        'relative w-full h-full aspect-square p-6 flex flex-col justify-between gap-6 '
      }
      style={{background: colour ? colour : 'var(--accent-colour)'}}
    >
      {image?.asset && (
        <div
          className={
            'absolute w-full h-full inset-0 overflow-hidden hidden group-hover:block group-focus:hidden'
          }
          style={{background: colour ? colour : '#dfdfdf'}}
        >
          <SanityImage
            value={image.asset}
            className={
              'h-full mix-blend-overlay rendering-pixelated object-cover'
            }
          />
        </div>
      )}
      <div className={'filter group-focus-visible:invert'}>
        <Text tag={'h2'} intent={'bl-heading-2xl'}>
          {topic && <Topic topic={topic} />}
          {headline ? headline : 'Untitled article'}
        </Text>
      </div>
      <div className={'flex justify-between filter group-focus-visible:invert'}>
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
    </article>
  );
};
