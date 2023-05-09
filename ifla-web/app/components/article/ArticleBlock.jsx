import clsx from 'clsx';
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
          <img
            src={image.url}
            alt={image.alt || ''}
            className={'h-full w-full rendering-pixelated object-cover'}
          />
        )}
      </div>

      <div className={'filter group-focus-visible:invert group-hover:hidden'}>
        <span>
          <h2 className={'text-32 md:text-40'}>
            {topic && <Topic topic={topic} className={'h-[1.7em]'} />}
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
          <address className={'text-18 not-italic'}>By {author.name}</address>
        )}
        {category && category.length > 0 && (
          <div>
            <span>(</span>
            {category.map((cat, index) => {
              return (
                <span className={'text-18'} key={cat._id}>
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
