import {cva} from 'class-variance-authority';

const layout = cva('layout', {
  variants: {
    intent: {
      page: [''],
      footer: ['p-4 lg:p-0 lg:py-4'],
      banner: [
        'w-full aspect-video p-6 flex flex-col justify-between gap-4 max-h-[calc(100vh-8rem)]',
      ],
      cart: ['p-4'],
      space: ['px-4 py-0 sm:p-8'],
      module: ['px-4 py-4'],
      prose: ['max-w-prose mx-auto px-4'],
      grid: ['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'],
      article: ['flex flex-col'],
      full: [''],
      centre: [
        'flex',
        'justify-center',
        'items-center',
        'h-[calc(100vh-6rem)]',
        'pb-24',
      ],
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
