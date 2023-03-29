import clsx from 'clsx';
import React from 'react';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Topic} from '../parts/Topic';

export const ArticleBlock = ({article}) => {
  const {headline, intro, colour, author, category, quiltImage, image, topic} =
    article;

  return (
    <Layout
      as={'article'}
      intent={'block'}
      className={clsx(
        'relative w-full h-full aspect-[2.5/2] flex flex-col justify-between gap-6',
        'md:aspect-square',
      )}
      colour={colour || 'var(--accent-colour)'}
    >
      <div
        className={
          'absolute w-full h-full inset-0 overflow-hidden hidden group-hover:block group-focus:hidden'
        }
        style={{background: colour ? colour : '#dfdfdf'}}
      >
        {!quiltImage && (
          <div className={'h-full p-6 flex justify-between flex-col'}>
            <PortableText text={intro} intent={'preview'} />
            <p className={'text-16 ml-auto'}>Keep reading {'>'}</p>
          </div>
        )}
        {image && quiltImage && (
          <Image
            id={image._id}
            width={500}
            mode="cover"
            hotspot={image.hotspot}
            crop={image.crop}
            alt={image.alt || ''}
            preview={image.preview}
            className={'h-full rendering-pixelated object-cover'}
            sizes="33vw"
          />
        )}
      </div>

      <div className={'filter group-focus-visible:invert'}>
        <span>
          <h2 className={'text-32 md:text-40'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </h2>
        </span>
      </div>
      <div
        className={
          'flex justify-between items-end gap-4 filter group-focus-visible:invert'
        }
      >
        {author.name && (
          <address className={'text-18 not-italic'}>
            By {author.name}
          </address>
        )}
        {category && category.length > 0 && (
          <div>
            <span>(</span>
            {category.map((cat, index) => {
              return (
                <span className={"text-18"} key={cat._id}>
                  {cat.category}
                  {category.length > 0 && index + 1 !== category.length && (
                    <span>,&nbsp;</span>
                  )}
                </span>
              );
            })}
            <span>)</span>
          </div>
        )}
      </div>
    </Layout>
  );
};
