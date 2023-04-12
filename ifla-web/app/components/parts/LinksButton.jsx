import {cva} from 'class-variance-authority';
import {Link, useRouteLoaderData} from '@remix-run/react';
import {useRandomColour} from '../../hooks/useRandomColour';
import {motion} from 'framer-motion';
import {useRef} from 'react';

const MotionLink = motion(Link);

const buttonLinkStyle = cva(
  'cursor-pointer w-max focus:outline-none focus:border-none antialiased whitespace-nowrap flex-grow-0 leading-none inline-block',
  {
    variants: {
      colour: {
        default: ['bg-black', 'text-white'],
        transparent: ['bg-white', 'text-black'],
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
      colour: 'default',
    },
  },
);

export const BlockLink = ({children, to}) => {
  return (
    <Link to={to} className={'group focus:outline-none focus:border-none'}>
      {children}
    </Link>
  );
};

export const ButtonLink = ({
  children,
  to,
  className,
  colour,
  invert,
  ...props
}) => {
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(
    useRandomColour(invert ? colours.light : colours.dark),
  );
  const backgroundInitial = colour === 'transparent' ? '#ffffff' : '#000000';
  const background =
    colour === 'mono' || colour === 'transparent'
      ? 'white'
      : randomColour.current;

  return (
    <MotionLink
      to={to}
      className={buttonLinkStyle({colour, className})}
      transition={{duration: 0}}
      initial={{background: backgroundInitial}}
      whileHover={{
        background: background,
      }}
      whileFocus={{
        background: background,
      }}
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export const ButtonLinkExternal = ({
  children,
  to,
  className,
  colour,
  invert,
  ...props
}) => {
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(
    useRandomColour(invert ? colours.light : colours.dark),
  );
  const background = colour === 'mono' ? 'white' : randomColour.current;
  return (
    <motion.a
      href={to}
      className={buttonLinkStyle({colour, className})}
      transition={{duration: 0}}
      initial={{background: '#000000'}}
      whileHover={{
        background: background,
      }}
      whileFocus={{
        background: background,
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
};
