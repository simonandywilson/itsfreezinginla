import {cva} from 'class-variance-authority';

const text = cva('break-words font-sans', {
  variants: {
    intent: {
      'ui-xs': ['ui-xs'],
      'ui-sm': ['ui-sm'],
      'ui-base': ['ui-base'],
      'ui-lg': ['ui-lg'],
      'ui-xl': ['ui-xl'],
      'ui-2xl': ['ui-2xl'],
      'ui-3xl': ['ui-3xl'],
      'ui-4xl': ['ui-4xl'],
      'ui-5xl': ['ui-5xl'],
      'ui-6xl': ['ui-6xl'],
      'button-sm': ['ui-sm'],
      'button-base': ['ui-base'],
      'button-lg': ['ui-lg'],
      'button-xl': ['ui-xl'],
      'button-2xl': ['ui-2xl'],
      'bl-heading-sm': ['bl-heading-sm'],
      'bl-heading-base': ['bl-heading-base'],
      'bl-heading-lg': ['bl-heading-lg'],
      'bl-heading-xl': ['bl-heading-xl'],
      'bl-heading-2xl': ['bl-heading-2xl'],
      'bl-heading-3xl': ['bl-heading-3xl'],
      'bl-body': ['bl-body'],
      'bl-body-alt': ['bl-body-alt'],
      'bl-body-lg': ['bl-body-lg'],
      'bl-quote': ['bl-quote'],
    },
  },
  defaultVariants: {
    intent: 'ui-base',
  },
  compoundVariants: [
    {
      intent: ['bl-body'],
      className: 'font-serif',
    },
  ],
});

export const Text = ({tag, intent, className, children, colour}) => {
  const ElementTag = `${tag || 'p'}`;
  return (
    <ElementTag className={text({intent, className})} style={{color: colour}}>
      {children}
    </ElementTag>
  );
};
