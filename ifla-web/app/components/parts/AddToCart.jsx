import {useFetcher} from '@remix-run/react';
import React from 'react';

export const AddToCart = ({lines, analytics}) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/cart">
      <input type="hidden" name="cartAction" value={'ADD_TO_CART'} />
      {/* <input type="hidden" name="countryCode" value={selectedLocale.country} /> */}
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />
      <button type="submit">Add to Cart</button>
    </fetcher.Form>
  );
};
