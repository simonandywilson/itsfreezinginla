import React from 'react';
import SanityImage from '../parts/SanityImage';
import Topic from '../parts/Topic';

const ArticleBlock = ({article}) => {
  const {headline, colour, author, media, image} = article;
  return (
    <div
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
        <h3 className={'text-5xl'}>
          <Topic />
          {headline ? headline : 'Untitled article'}
        </h3>
      </div>
      <div className={'flex justify-between'}>
        {author.name && <h5>By {author.name}</h5>}
        {media.length > 0 && <h6>({media.join(', ')})</h6>}
      </div>
    </div>
  );
};

export default ArticleBlock;
