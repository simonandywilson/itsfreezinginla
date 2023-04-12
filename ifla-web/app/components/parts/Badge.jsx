import {cva} from 'class-variance-authority';

const layout = cva(
  'absolute aspect-square bg-black text-white rounded-full flex justify-center items-center select-none z-10',
  {
    variants: {
      intent: {
        small: ['w-5 h-5 text-[14px]'],
        big: ['w-12 h-12 text-24'],
      },
      location: {
        top: ['top-0 right-0 -translate-x-1/2 translate-y-full'],
        bottom: ['bottom-0 right-0 translate-y-1/2'],
        middle: ['mt-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'],
      },
    },
    defaultVariants: {
      intent: 'small',
      location: 'middle',
    },
  },
);

export const Badge = ({intent, location, children}) => {
  return (
    <div className={layout({intent, location})} aria-hidden={true}>
      <span className={'leading-none'}>{children}</span>
    </div>
  );
};
