import {cva} from 'class-variance-authority';

const layout = cva('layout', {
  variants: {
    intent: {
      page: [''],
      footer: ['p-4 lg:p-0 lg:py-4'],
      banner: [
        'w-full aspect-video p-6 flex flex-col justify-between gap-4 max-h-[calc(100vh-12rem)]',
      ],
      cart: ['p-4'],
      space: ['px-4 py-0 sm:p-8'],
      module: ['px-4 my-8'],
      'module-full': ['my-8'],
      'module-inline': ['prose my-8 break-inside-avoid-column'],
      text: ['py-8'],
      grid: ['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'],
      article: ['flex flex-col'],
      centre: [
        'flex',
        'justify-center',
        'items-center',
        'h-[calc(100vh-6rem)]',
        'pb-24',
      ],
      columns: ['md:columns-2 lg:columns-3 px-4'],
    },
  },
  defaultVariants: {
    intent: 'page',
  },
});

export const Layout = ({tag, className, intent, children, colour}) => {
  const ElementTag = `${tag || 'section'}`;
  return (
    <ElementTag
      className={layout({intent, className})}
      style={{background: colour}}
    >
      {children}
    </ElementTag>
  );
};
