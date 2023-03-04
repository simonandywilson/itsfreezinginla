import React from 'react';
import {PortableText} from '../parts/PortableText';

export const TextColumnsModule = ({content}) => {
  return (
    <div className={'w-full columns-3 p-4'} style={{columnFill: 'auto'}}>
      <PortableText text={content.text} intent={'column'} />
    </div>
  );
};
