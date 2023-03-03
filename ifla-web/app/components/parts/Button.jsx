import {cva} from 'class-variance-authority';

const button = cva(
  'hover:bg-accent focus-visible:bg-accent focus:outline-none focus:border-none',
  {
    variants: {
      intent: {
        link: [
          'hover:bg-transparent focus-visible:bg-transparent hover:text-accent focus-visible:text-accent',
        ],
        sm: [''],
        base: ['p-2'],
        lg: ['px-4 py-2'],
      },
      colour: {
        light: ['bg-white', 'text-black'],
        mid: ['bg-zinc-500', 'text-white'],
        dark: ['bg-black', 'text-white'],
      },
    },
    defaultVariants: {
      intent: 'base',
      colour: 'light',
    },
  },
);

export const Button = ({  type, intent, colour, className, children }) => {
  return (
    <button type={type || 'button'} className={button({intent, colour, className})}>
      {children}
    </button>
  );
};
