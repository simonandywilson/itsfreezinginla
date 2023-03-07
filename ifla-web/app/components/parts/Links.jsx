import {cx, cva} from 'class-variance-authority';
import {Link as RemixLink} from '@remix-run/react';
import {Text} from './Text';

export const TextLink = ({intent, children, to, className, as}) => {
  return (
    <RemixLink to={to} className={cx('link', className)}>
      <Text intent={intent} as={as}>
        {children}
      </Text>
    </RemixLink>
  );
};

const buttonStyle = cva(
  'cursor-pointer w-max focus:outline-none focus:border-none antialiased whitespace-nowrap flex-grow-0 leading-none inline-block',
  {
    variants: {
      intent: {
        'text-sm': ['button-sm'],
        'text-base': ['button-base'],
        'text-lg': ['button-lg'],
        'text-xl': ['button-xl'],
        'text-2xl': ['button-2xl'],
      },
      colour: {
        default: [
          'bg-black',
          'text-white',
          'hover:bg-accent',
          'focus-visible:bg-accent',
        ],
        mono: [
          'bg-black',
          'text-white',
          'hover:bg-white',
          'hover:text-black',
          'focus-visible:bg-white',
          'focus-visible:text-black',
        ],
      },
    },
    defaultVariants: {
      intent: 'text-base',
      colour: 'default',
    },
  },
);

export const BlockLink = ({children, to}) => {
  return (
    <RemixLink to={to} className={'focus:outline-none focus:border-none'}>
        {children}
    </RemixLink>
  );
};

export const ButtonLink = ({intent, children, to, className, colour}) => {
  return (
    <RemixLink to={to} className={buttonStyle({intent, colour, className})}>
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </RemixLink>
  );
};

export const ButtonLinkExternal = ({
  intent,
  children,
  to,
  className,
  colour,
  target,
}) => {
  return (
    <a
      href={to}
      className={buttonStyle({intent, colour, className})}
      target={target}
    >
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </a>
  );
};
