import React from 'react';
import Spinner from '../parts/Spinner';
import {Text} from '../parts/Text';

const CartLoader = () => {
  return (
    <div
      className={'w-full h-[calc(100vh-8rem)] flex justify-center items-center'}
    >
      <div className={'flex items-center justify-center gap-1'}>
        <Text intent={'text-lg'} className={'mb-[1px]'}>
          Loading Cart
        </Text>
        <Spinner />
      </div>
    </div>
  );
};

export default CartLoader;
