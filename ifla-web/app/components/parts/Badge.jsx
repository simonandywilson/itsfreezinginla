import React from 'react';
import {cva} from 'class-variance-authority';

const layout = cva(
  'absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 aspect-square bg-black text-white rounded-full flex justify-center items-center select-none',
  {
    variants: {
      intent: {
        small: ['w-6 h-6 text-sm'],
        big: ['w-12 h-12 text-xl'],
      },
    },
    defaultVariants: {
      intent: 'small',
    },
  },
);

export const Badge = ({intent, children}) => {
  return (
    <div className={layout({intent})} aria-hidden={true}>
      <span className={'leading-none'}>{children}</span>
    </div>
  );
};
