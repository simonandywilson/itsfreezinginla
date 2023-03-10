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
      intent: {
        'text-sm': ['button-sm'],
        'text-base': ['button-base'],
        'text-lg': ['button-lg'],
        'text-xl': ['button-xl'],
        'text-2xl': ['button-2xl'],
      },
      colour: {
        transparent: ['bg-white', 'text-black'],
        light: ['bg-white', 'text-black'],
        default: ['bg-black', 'text-white'],
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
      intent: 'text-base',
      colour: 'default',
    },
  },
);



export const Button = ({
  type,
  intent,
  colour,
  status,
  className,
  children,
  disabled,
  value,
  aria,
  onClick
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (colour === 'mono' || disabled) ? (
    <button
      type={type || 'button'}
      className={buttonStyle({intent, colour, status, className})}
      disabled={disabled}
      value={value}
      aria-label={aria}
      onClick={onClick}
    >
      <Text intent={intent} className={'inline-block leading-none'}>
        {children}
      </Text>
    </button>
  ) : (
    <motion.button
      type={type || 'button'}
      className={buttonStyle({intent, colour, status, className})}
      disabled={disabled}
      value={value}
      aria-label={aria}
      onClick={onClick}
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
    >
      <Text intent={intent} className={'inline-block leading-none'}>
        {children}
      </Text>
    </motion.button>
  );
};
