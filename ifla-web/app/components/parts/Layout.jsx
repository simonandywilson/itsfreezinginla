import React from 'react';
import {cva} from 'class-variance-authority';

const layout = cva('layout', {
  variants: {
    intent: {
      page: [''],
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

export const Layout = ({tag, className, intent, children}) => {
  const ElementTag = `${tag || 'section'}`;
  return (
    <ElementTag className={layout({intent, className})}>
      {children}
    </ElementTag>
  );
};
