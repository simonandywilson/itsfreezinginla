import React from 'react';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Text} from '../parts/Text';
import {Topic} from '../parts/Topic';

export const ArticleBlock = ({article}) => {
  const {headline, intro, colour, author, category, quiltImage, image, topic} =
    article;

  return (
    <Layout
      as={'article'}
      intent={'block'}
      className={
        'relative w-full h-full aspect-square flex flex-col justify-between gap-6'
      }
      colour={colour || 'var(--accent-colour)'}
    >
      <div
        className={
          'absolute w-full h-full inset-0 overflow-hidden hidden group-hover:block group-focus:hidden'
        }
        style={{background: colour ? colour : '#dfdfdf'}}
      >
        {!quiltImage && (
          <div className={'h-full p-4 flex justify-between flex-col'}>
            <PortableText text={intro} intent={'preview'} />
            <p className={'ml-auto'}>Keep reading {'>'}</p>
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
        <span className={'hidden md:block'}>
          <Text as={'h2'} intent={'text-xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </Text>
        </span>
        <span className={'block md:hidden'}>
          <Text as={'h2'} intent={'text-2xl'}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </Text>
        </span>
      </div>
      <div
        className={
          'flex justify-between items-end gap-4 filter group-focus-visible:invert'
        }
      >
        {author.name && (
          <Text as={'address'} intent={'text-base'} className={'not-italic'}>
            By {author.name}
          </Text>
        )}
        {category && category.length > 0 && (
          <div>
            <span>(</span>
            {category.map((cat, index) => {
              return (
                <Text as={'span'} intent={'text-sm'} key={cat._id}>
                  {cat.category}
                  {category.length > 0 && index + 1 !== category.length && (
                    <span>,&nbsp;</span>
                  )}
                </Text>
              );
            })}
            <span>)</span>
          </div>
        )}
      </div>
    </Layout>
  );
};
