import {cva} from 'class-variance-authority';
import {motion} from 'framer-motion';
import {useRandomColour} from '~/hooks/useRandomColour';
import {useRef} from 'react';
import {useRouteLoaderData} from 'react-router';

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
        outline: ['bg-transparent border-1 text-black'],
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
  invert,
  children,
  ...props
}) => {
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(
    useRandomColour(invert ? colours.light : colours.dark),
  );
  const alt = colour === 'transparent' || colour === 'outline' || status === 'disabled';
  return (
    <motion.button
      type={type || 'button'}
      className={buttonStyle({colour, status, className})}
      transition={{duration: 0}}
      initial={
        alt
          ? {
              color: 'inherit',
              borderColor: '#000000',
              fill: '#000000',
              stroke: '#000000',
            }
          : {
              background: colour === 'light' ? '#ffffff' : '#000000',
            }
      }
      whileHover={
        alt
          ? {
              color: randomColour.current,
              borderColor: randomColour.current,
              fill: randomColour.current,
              stroke: randomColour.current,
            }
          : {
              background: randomColour.current,
              fill: randomColour.current,
              stroke: randomColour.current,
            }
      }
      whileFocus={
        alt
          ? {
              color: randomColour.current,
              borderColor: randomColour.current,
              fill: randomColour.current,
              stroke: randomColour.current,
            }
          : {
              background: randomColour.current,
              fill: randomColour.current,
              stroke: randomColour.current,
            }
      }
      {...props}
    >
      {children}
    </motion.button>
  );
};
