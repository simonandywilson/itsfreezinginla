import React from 'react';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';

export const TextBlockModule = ({content, colour}) => {
    const { text } = content;
  return (
    <Layout intent={"text"}>
      <PortableText text={text} colour={colour} />
    </Layout>
  );
};
