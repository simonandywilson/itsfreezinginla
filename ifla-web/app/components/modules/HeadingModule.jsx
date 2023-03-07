import React from 'react';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';

export const HeadingModule = ({content}) => {
  return (
    <Layout intent={'module'}>
      <Text as={'h3'} intent={'bl-heading-2xl'}>
        {content.heading}
      </Text>
    </Layout>
  );
};
