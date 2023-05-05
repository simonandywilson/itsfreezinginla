import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Topic} from '../parts/Topic';
import {ButtonLink} from '../parts/LinksButton';
import clsx from 'clsx';

export const ArticleBannerModule = ({content, homepage}) => {
  const {headline, intro, colour, author, topic, slug} = content;
  return (
    <Layout
      as={'article'}
      intent={'banner'}
      colour={colour || 'var(--accent-colour)'}
      className={'!h-[700px]'}
    >
      <Layout
        intent={'grid'}
        as={'div'}
        className={clsx('h-min', 'lg:flex-1 lg:h-full')}
      >
        <div className={'mb-[1em] pr-4'}>
          <h2 className={clsx('break-words text-32 md:text-56 lg:text-68')}>
            {topic && (
              <Topic topic={topic} className={'h-[1.7em] md:h-[0.8em]'} />
            )}
            {headline ? headline : 'Untitled article'}
          </h2>
        </div>
        <div
          className={clsx(
            'h-min col-span-1 columns-1 gap-8 col-fill-auto',
            'xl:col-span-2 xl:columns-2 xl:h-full xl:min-h-0 ',
          )}
        >
          <div className={'line-clamp xl:no-line-clamp'}>
            {intro && <PortableText text={intro} intent={'intro'} />}
          </div>
          {homepage && slug && (
            <ButtonLink
              colour={'mono'}
              to={slug}
              className={
                'hidden button-24 md:block  md:button-32 mt-[1em] break-before-avoid'
              }
            >
              Keep reading
            </ButtonLink>
          )}
        </div>
      </Layout>
      <div className={'flex justify-between items-end lg:absolute bottom-4'}>
        {author.name && (
          <address className={'h-max text-18 md:text-24 not-italic'}>
            By {author.name}
          </address>
        )}
        {homepage && slug && (
          <ButtonLink
            colour={'mono'}
            to={slug}
            className={
              'button-24 md:button-32 mt-[1em] break-after-avoid break-before-avoid md:hidden'
            }
          >
            Keep reading
          </ButtonLink>
        )}
      </div>
    </Layout>
  );
};
