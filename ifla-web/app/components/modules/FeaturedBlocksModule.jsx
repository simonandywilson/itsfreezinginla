import {Layout} from '../parts/Layout';
import {BlockLink, ButtonLink} from '../parts/LinksButton';
import clsx from 'clsx';
import {ArticleBlock} from '../article/ArticleBlock';
import {AudiobookBlock} from '../audiobook/AudiobookBlock';

export const FeaturedBlocksModule = ({ content, link }) => {
  
  return (
    <Layout intent={'grid'} as={'ul'}>
      {content.map((block) => {
        switch (block._type) {
          case 'article':
            return (
              <li key={block._id} className={'w-full'}>
                <BlockLink to={block.slug}>
                  <ArticleBlock article={block} />
                </BlockLink>
              </li>
            );
          case 'audiobook':
            return (
              <li key={block._id} className={'w-full'}>
                <BlockLink to={block.slug}>
                  <AudiobookBlock audiobook={block} />
                </BlockLink>
              </li>
            );
          default: return null
        }
      })}
      <li
        className={clsx(
          'w-full hidden items-center justify-center aspect-square',
          'md:flex xl:hidden 3xl:flex',
        )}
      >
        <ButtonLink
          to={link.link}
          className={'button-24 md:button-32 break-before-avoid'}
        >
          {link.title}
        </ButtonLink>
      </li>
    </Layout>
  );
};
