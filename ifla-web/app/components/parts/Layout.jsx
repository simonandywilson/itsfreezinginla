import React from 'react';
import {cva} from 'class-variance-authority';

const layout = cva('layout', {
  variants: {
    intent: {
      page: ['p-4'],
      centre: ['flex', 'justify-center', 'items-center', 'h-[calc(100vh-6rem)]'],
    },
    // size: {
    //   small: ['text-sm', 'py-1', 'px-2'],
    //   medium: ['text-base', 'py-2', 'px-4'],
    // },
  },
  //   compoundVariants: [{intent: 'primary', size: 'medium', class: 'uppercase'}],
  defaultVariants: {
    intent: 'page',
  },
});




export const Layout = ({className, intent, children, ...props}) => (
  <div className={layout({intent, className})} {...props}>
    {children}
  </div>
);
