import React from 'react';

import {cva} from 'class-variance-authority';

const text = cva('', {
  variants: {
    size: {
      '9xl': ['text-9xl'],
      '8xl': ['text-8xl'],
      '7xl': ['text-7xl'],
      '6xl': ['text-6xl'],
      '5xl': ['text-5xl'],
      '4xl': ['text-4xl'],
      '3xl': ['text-3xl'],
      '2xl': ['text-2xl'],
      xl: ['text-xl'],
      lg: ['text-lg'],
      base: ['text-base'],
      sm: ['text-sm'],
      xs: ['text-xs'],
    },
    intent: {
      body: ['font-serif text-base leading-snug'],
      blockquote: ['text-6xl'],
    },
    leading: {},
    // size: {
    //   small: ['text-sm', 'py-1', 'px-2'],
    //   medium: ['text-base', 'py-2', 'px-4'],
    // },
  },
  //   compoundVariants: [{intent: 'primary', size: 'medium', class: 'uppercase'}],
  // defaultVariants: {
  //   size: 'base',
  // },
});

export const Text = ({tag, size, intent, className, children, colour}) => {
  const ElementTag = `${tag || 'p'}`;
  return (
    <ElementTag
      className={text({size, intent, className})}
      style={{color: colour || "#000000"}}
    >
      {children}
    </ElementTag>
  );
};
