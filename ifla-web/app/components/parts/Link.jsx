import {Link as RemixLink} from '@remix-run/react';
import {cva} from 'class-variance-authority';
import {Text} from './Text';

const link = cva('w-max', {
  variants: {
    intent: {
      block: ['focus:outline-none focus:border-none'],
      'text-2xl': ['px-4 py-2'],
      'text-xl': ['px-4 py-2'],
      'text-lg': ['p-3'],
      'text-base': ['p-2'],
      'text-sm': ['p-1'],
    },
    type: {
      link: [
        'hover:text-accent focus-visible:text-accent focus:outline-none focus:border-none',
      ],
      button: [
        'inline-block hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
      ],
    },
    colour: {
      light: ['text-white'],
      dark: ['text-black'],
      mono: [
        'text-white bg-black hover:text-black hover:bg-white focus-visible:text-black focus-visible:bg-white',
      ],
    },
  },
  // compoundVariants: [
  //   {
  //     intent: [
  //       'button-sm',
  //       'button-base',
  //       'button-lg',
  //       'button-xl',
  //       'button-2xl',
  //     ],
  //     colour: 'dark',
  //     className: 'text-white bg-black',
  //   },
  // ],
  defaultVariants: {
    intent: 'text-base',
    type: 'link',
    colour: 'dark',
  },
});

export const Link = ({children, to, intent, colour, className}) => {
  return (
    <RemixLink to={to} className={link({intent, colour, className})}>
      <Text intent={intent}>{children}</Text>
    </RemixLink>
  );
};
