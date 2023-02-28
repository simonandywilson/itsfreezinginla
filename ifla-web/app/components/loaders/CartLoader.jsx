import React from 'react';
import Spinner from '../parts/Spinner';

const CartLoader = () => {
  return (
    <div className={'w-full h-[calc(100vh-6rem)] flex justify-center items-center'}>
      <div className={"flex items-center justify-center gap-1"}>
        <h2 className={"mb-[1px] text-2xl"}>Loading Cart</h2>
        <Spinner />
      </div>
    </div>
  );
};

export default CartLoader;
