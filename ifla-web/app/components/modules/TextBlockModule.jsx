import React from 'react';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';

export const TextBlockModule = ({content}) => {
    const { text } = content;
  return (
    <Layout intent={"prose"}>
      <PortableText text={text} />
    </Layout>
  );
};
