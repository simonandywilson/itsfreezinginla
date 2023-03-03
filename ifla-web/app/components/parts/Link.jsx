import {Link as RemixLink} from '@remix-run/react';
import {cva} from 'class-variance-authority';

const link = cva('', {
  variants: {
    intent: {
      link: ['focus-visible:underline focus:border-none focus:outline-none'],
      button: [
        'inline-block p-2 hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
    },
    colour: {
      light: ['text-white'],
      dark: ['text-black'],
    },
  },
  compoundVariants: [
    {
      intent: 'button',
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
