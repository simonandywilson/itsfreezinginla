import {cva} from 'class-variance-authority';

const text = cva('break-words font-sans', {
  variants: {
    intent: {
      'text-2xl': ['text-2xl'],
      'text-xl': ['text-xl'],
      'text-lg': ['text-lg'],
      'text-base': ['text-base'],
      'text-base-serif': ['text-base font-serif leading-[130%]'],
      'text-sm': ['text-sm'],
    },
  },
  defaultVariants: {
    intent: 'text-base',
  },
  // compoundVariants: [
  //   {
  //     intent: ['bl-body'],
  //     className: 'font-serif',
  //   },
  // ],
});

export const Text = ({as, intent, className, children, colour}) => {
  const ElementTag = `${as || 'p'}`;
  return (
    <ElementTag className={text({intent, className})} style={{color: colour}}>
      {children}
    </ElementTag>
  );
};
