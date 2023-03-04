import {Link as RemixLink} from '@remix-run/react';
import {cva} from 'class-variance-authority';

const link = cva('', {
  variants: {
    intent: {
      link: ['focus-visible:underline focus:border-none focus:outline-none'],
      'button-sm': [
        'p-1 inline-block hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
      'button-base': [
        'p-2 inline-block  hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
      'button-lg': [
        'p-3 inline-block  hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
      'button-xl': [
        'px-4 py-2 inline-block hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
      'button-2xl': [
        'px-4 py-2 inline-block hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
    },
    colour: {
      light: ['text-white'],
      dark: ['text-black'],
    },
  },
  compoundVariants: [
    {
      intent: ['button-sm', 'button-base', 'button-lg', 'button-xl', 'button-2xl'],
      colour: 'dark',
      className: 'text-white bg-black',
    },
  ],
  defaultVariants: {
    intent: 'link',
    colour: 'dark',
  },
});

export const Link = ({children, to, intent, colour, className}) => {
  return (
    <RemixLink to={to} className={link({intent, colour, className})}>
      {children}
    </RemixLink>
  );
};
