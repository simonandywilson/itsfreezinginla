import {cva} from 'class-variance-authority';

const button = cva(
  'hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none antialiased whitespace-nowrap',
  {
    variants: {
      intent: {
        link: [
          'hover:bg-transparent focus-visible:bg-transparent hover:text-accent focus-visible:text-accent',
        ],
        sm: [''],
        base: ['py-2 px-3'],
        lg: ['p-3'],
        xl: ['px-4 py-2'],
      },
      colour: {
        light: ['bg-white', 'text-black'],
        dark: ['bg-black', 'text-white'],
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
      intent: 'base',
      colour: 'light',
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
  aria
}) => {
  return (
    <button
      type={type || 'button'}
      className={button({intent, colour, status, className})}
      disabled={disabled}
      value={value}
      aria-label={aria}
    >
      {children}
    </button>
  );
};
