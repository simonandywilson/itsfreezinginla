import {PortableText as SanityPortableText} from '@portabletext/react';
import {Text} from './Text';

const components = {
  block: {
    normal: ({children}) => (
      <Text tag={'p'} intent={'body'}>
        {children}
      </Text>
    ),
    h2: ({children}) => <Text tag={'h3'}>{children}</Text>,
    h5: ({children}) => <Text tag={'h4'}>{children}</Text>,
    blockquote: ({children, value}) => (
      <Text tag={'blockquote'} intent={'blockquote'} colour={value.colour}>
        {children}
      </Text>
    ),
  },
};

export const PortableText = ({text}) => {
  return (
    <div
      className={
        '[&>*:not(:last-child):not(p)]:mb-[1em] [&>p:not(:first-of-type)]:indent-5'
      }
    >
      <SanityPortableText value={text} components={components} />
    </div>
  );
};
