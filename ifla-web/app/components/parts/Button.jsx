import {cva} from 'class-variance-authority';
import { Text } from './Text';

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
        transparent: [
          'bg-white',
          'text-black',
          'hover:text-accent',
          'focus-visible:text-accent',
        ],
        light: [
          'bg-white',
          'text-black',
          'hover:bg-accent',
          'focus-visible:bg-accent',
        ],
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
}) => {
  return (
    <button
      type={type || 'button'}
      className={buttonStyle({intent, colour, status, className})}
      disabled={disabled}
      value={value}
      aria-label={aria}
    >
      <Text intent={intent} className={'inline-block leading-none'}>
        {children}
      </Text>
    </button>
  );
};
