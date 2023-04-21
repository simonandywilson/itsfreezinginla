import {useFetcher} from '@remix-run/react';
import React from 'react';

export const CartUpdateQuantity = ({lines, children}) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={'UPDATE_CART'} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      {children}
    </fetcher.Form>
  );
};
