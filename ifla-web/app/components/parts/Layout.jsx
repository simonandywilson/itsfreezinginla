import {cva} from 'class-variance-authority';

const layout = cva('', {
  variants: {
    intent: {
      home: ['pt-header'],
      page: ['pt-header-submenu flex flex-col flex-1'],
      footer: [
        'px-4 pt-4 pb-24 bg-black text-white flex justify-between flex-col gap-16',
        'sm:px-8 sm:pt-8',
        'md:flex-row md:gap-0',
        'xl:px-0',
      ],
      hero: [
        'w-full aspect-[9/16] p-6 flex flex-col justify-between gap-4 max-h-[calc(100vh-16rem)]',
        'lg:p-8 md:aspect-video ',
      ],
      banner: [
        'w-full h-max p-6 flex flex-col justify-between gap-4',
        'lg:p-8 lg:min-h-[700px]',
      ],
      block: ['px-6 pb-6 pt-4'],
      shop: ['p-8'],
      cart: ['p-8 pt-header'],
      module: ['px-4 my-8'],
      'module-full': ['my-8'],
      'module-inline': ['prose my-8 break-inside-avoid-column'],
      text: ['py-8 mx-4'],
      grid: ['grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4'],
      article: ['flex flex-col pt-header'],
      centre: [
        'flex',
        'justify-center',
        'items-center',
        'h-[calc(100vh-6rem)]',
        'pb-24',
      ],
      columns: [
        'flex-1 w-full gap-8 md:columns-2 xl:w-2/3 px-4 py-8 col-fill-balance',
      ],
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
