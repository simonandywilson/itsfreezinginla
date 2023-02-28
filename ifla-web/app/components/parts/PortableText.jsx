import {PortableText as SanityPortableText} from '@portabletext/react';

const components = {
  //   types: {
  //     image: SanityImage,
  //   },
};

const PortableText = ({text}) => {
  return <SanityPortableText value={text} components={components} />;
};

export default PortableText;
