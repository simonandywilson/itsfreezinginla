import {cva} from 'class-variance-authority';
import {Text} from './Text';
import {motion} from 'framer-motion';
import {useRouteData} from 'remix-utils';
import {useRandomColour} from '~/hooks/useRandomColour';
import {useRef} from 'react';

const buttonStyle = cva(
  'w-max focus:outline-none focus:border-none antialiased whitespace-nowrap flex-grow-0 leading-none inline-block',
  {
    variants: {
      colour: {
        default: ['bg-black', 'text-white'],
        transparent: ['bg-transparent', 'text-black'],
        light: ['bg-white', 'text-black'],
        mono: [
          'bg-black',
          'text-white',
          'hover:bg-white',
          'hover:text-black',
          'focus-visible:bg-white',
          'focus-visible:text-black',
        ],
      },
      status: {
        disabled: [
          'bg-zinc-400',
          'text-white',
          'hover:bg-zinc-400',
          'focus-visible:bg-zinc-400',
        ],
      },
    },
    defaultVariants: {
      colour: 'default',
    },
  },
);

export const Button = ({
  type,
  colour,
  status,
  className,
  children,
  ...props
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <motion.button
      type={type || 'button'}
      className={buttonStyle({colour, status, className})}
      transition={{duration: 0}}
      initial={
        colour === 'transparent'
          ? {
              color: '#000000',
            }
          : {
              background: colour === 'light' ? '#ffffff' : '#000000',
            }
      }
      whileHover={
        colour === 'transparent'
          ? {
              color: randomColour.current,
            }
          : {
              background: randomColour.current,
            }
      }
      whileFocus={
        colour === 'transparent'
          ? {
              color: randomColour.current,
            }
          : {
              background: randomColour.current,
            }
      }
      {...props}
    >
      {children}
    </motion.button>
  );
};
