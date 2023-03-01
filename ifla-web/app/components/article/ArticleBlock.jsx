import React from 'react';
import SanityImage from '../parts/SanityImage';
import Topic from '../parts/Topic';

const ArticleBlock = ({article}) => {
  const {headline, colour, author, media, image, topic} = article;
  return (
    <article
      className={
        'group relative w-full aspect-square p-6 flex flex-col justify-between gap-6'
      }
      style={{background: colour ? colour : '#e3e8ef'}}
    >
      {image?.asset && (
        <div
          className={
            'absolute w-full h-full inset-0 overflow-hidden hidden group-hover:block group-focus:hidden'
          }
          style={{background: colour ? colour : '#dfdfdf'}}
        >
          <SanityImage value={image.asset} className={'mix-blend-overlay'} />
        </div>
      )}
      <div>
        <h2 className={'text-5xl'}>
          {topic && <Topic topic={topic} />}
          {headline ? headline : 'Untitled article'}
        </h2>
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

export default ArticleBlock;
