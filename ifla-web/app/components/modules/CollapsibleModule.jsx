import React from 'react';
import {Layout} from '../parts/Layout';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Text} from '../parts/Text';

export const CollapsibleModule = ({content}) => {
  return (
    <Layout intent={'module'}>
      {content.name && <Text tag={"h4"}>{content.name}</Text>}
      <details>
        <summary>
          <Text className={"select-none"}>{content.heading || 'Collapsible'}</Text>
        </summary>
        <PortableTextPlain text={content.text} />
      </details>
    </Layout>
  );
};
