import React from 'react';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';

export const HeadingModule = ({content}) => {
  return (
    <Layout intent={'page'}>
      <Text tag={"h3"} size={"4xl"}>{content.heading}</Text>
    </Layout>
  );
};
