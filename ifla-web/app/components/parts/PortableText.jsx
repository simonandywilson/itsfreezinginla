import {PortableText as SanityPortableText} from '@portabletext/react';
import {Text} from './Text';
import {cva} from 'class-variance-authority';
import { CollapsibleModule } from '../modules/CollapsibleModule';

const portableText = cva('[&>*:not(:last-child):not(p)]:mb-[1em]', {
  variants: {
    intent: {
      body: ['[&>p:not(:first-of-type)]:indent-5'],
      column: ['[&>p:not(:first-of-type)]:mb-[1em]'],
      footer: ['[&>p:not(:last-child)]:mb-[1em]'],
    },
  },
  defaultVariants: {
    intent: 'body',
  },
});

const components = (intent) => {
  return {
    block: {
      normal: ({children}) =>
        intent === 'column' ? (
          <Text tag={'p'} intent={'bl-body-lg'}>
            {children}
          </Text>
        ) : (
          <Text tag={'p'} intent={'bl-body'}>
            {children}
          </Text>
        ),
      // h2: ({children}) => <Text tag={'h3'}>{children}</Text>,
      h3: ({children}) => (
        <Text
          tag={'h3'}
          intent={'bl-heading-2xl'}
          className={'break-before-column'}
        >
          {children}
        </Text>
      ),
      h5: ({children}) => (
        <Text tag={'h4'} intent={'bl-heading-lg'}>
          {children}
        </Text>
      ),
      h6: ({children}) => (
        <Text tag={'h5'} intent={'bl-heading-sm'} className={"!mb-0"}>
          {children}
        </Text>
      ),
      blockquote: ({children, value}) => (
        <Text
          tag={'blockquote'}
          intent={'bl-quote'}
          colour={value.colour}
          className={'my-16 px-8'}
        >
          {children}
        </Text>
      ),
    },
    types: {
      collapsibleModule: ({value}) => <CollapsibleModule content={value} />,
    },
  };
};

export const PortableText = ({text, intent, className}) => {
  return (
    <div className={portableText({intent, className})}>
      <SanityPortableText value={text} components={components(intent)} />
    </div>
  );
};
