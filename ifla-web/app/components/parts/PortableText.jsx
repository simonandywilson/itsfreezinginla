import {PortableText as SanityPortableText} from '@portabletext/react';

const components = {
  //   types: {
  //     image: SanityImage,
  //   },
};

const PortableText = ({ text }) => {
    return (
      <div className={'[&>*:not(:last-child)]:mb-[1em]'}>
        <SanityPortableText value={text} components={components} />
      </div>
    );
};

export default PortableText;
