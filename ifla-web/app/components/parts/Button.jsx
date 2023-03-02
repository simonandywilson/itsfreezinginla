import {cva} from 'class-variance-authority';

const button = cva('', {
  variants: {
    intent: {
      small: ['p-4'],
      medium: ['p-2'],
      large: ['px-4 py-2'],
    },
    colour: {
      light: ['bg-white', 'text-black'],
      dark: ['bg-black', 'text-white'],
    },
  },
  defaultVariants: {
    intent: 'medium',
    colour: 'light',
  },
});

export const Button = ({  type, intent, colour, className, children }) => {
  return (
    <button type={type || 'button'} className={button({intent, colour, className})}>
      {children}
    </button>
  );
};
