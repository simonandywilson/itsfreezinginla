import React from 'react';
import { Text } from './Text';

export const Banner = ({children}) => {
  return (
    <div className={'w-full p-3 bg-white'}>
      <Text intent={'text-sm'}>{children}</Text>
    </div>
  );
};
