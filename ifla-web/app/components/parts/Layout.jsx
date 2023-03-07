import {cva} from 'class-variance-authority';

const layout = cva('', {
  variants: {
    intent: {
      home: ['pt-24'],
      page: ['pt-32'],
      footer: [
        'px-4 pt-4 pb-24 bg-black text-white flex justify-between flex-col gap-8',
        'sm:px-8 sm:pt-8',
        'md:flex-row md:gap-0',
        'lg:px-0',
      ],
      banner: [
        'w-full aspect-video p-8 flex flex-col justify-between gap-4 max-h-[calc(100vh-12rem)]',
      ],
      block: ['px-6 pb-6 pt-4'],
      cart: ['p-8'],
      module: ['px-4 my-8'],
      'module-full': ['my-8'],
      'module-inline': ['prose my-8 break-inside-avoid-column'],
      text: ['py-8 mx-4'],
      grid: ['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'],
      article: ['flex flex-col pt-24'],
      centre: [
        'flex',
        'justify-center',
        'items-center',
        'h-[calc(100vh-6rem)]',
        'pb-24',
      ],
      columns: ['w-full md:columns-2 xl:w-2/3 px-4 py-8 col-fill-auto'],
    },
  },
  defaultVariants: {
    intent: 'page',
  },
});

export const Layout = ({as, className, intent, children, colour}) => {
  const ElementTag = `${as || 'div'}`;
  return (
    <ElementTag
      className={layout({intent, className})}
      style={{background: colour}}
    >
      {children}
    </ElementTag>
  );
};
