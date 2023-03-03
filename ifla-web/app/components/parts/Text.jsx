import {cva} from 'class-variance-authority';

const text = cva('text', {
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
      'button-xl': ['ui-2xl'],
      'bl-body': ['font-serif text-base leading-snug'],
      'bl-quote': ['text-6xl'],
    },
  },
  defaultVariants: {
    intent: 'ui-base',
  },
});

export const Text = ({tag, intent, className, children, colour}) => {
  const ElementTag = `${tag || 'p'}`;
  return (
    <ElementTag
      className={text({intent, className})}
      style={{color: colour}}
    >
      {children}
    </ElementTag>
  );
};
