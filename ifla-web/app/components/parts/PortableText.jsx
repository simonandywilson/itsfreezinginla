import {PortableText as SanityPortableText} from '@portabletext/react';
import {Text} from './Text';

const components = {
  block: {
    normal: ({children}) => (
      <Text tag={'p'} intent={'bl-body'}>
        {children}
      </Text>
    ),
    // h2: ({children}) => <Text tag={'h3'}>{children}</Text>,
    h5: ({children}) => <Text tag={'h4'} intent={"bl-heading-lg"}>{children}</Text>,
    blockquote: ({children, value}) => (
      <Text tag={'blockquote'} intent={'bl-quote'} colour={value.colour} className={"my-16 px-8"}>
        {children}
      </Text>
    ),
  },
};

export const PortableText = ({text}) => {
  return (
    <div
      className={
        '[&>*:not(:last-child):not(p)]:mb-[1em] [&>p:not(:first-of-type)]:indent-5 my-8'
      }
    >
      <SanityPortableText value={text} components={components} />
    </div>
  );
};
