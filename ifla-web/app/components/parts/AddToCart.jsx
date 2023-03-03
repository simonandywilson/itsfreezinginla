import {useFetcher} from '@remix-run/react';
import React from 'react';
import {Button} from './Button';
import {Text} from './Text';

export const AddToCart = ({lines, analytics}) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/cart">
      <input type="hidden" name="cartAction" value={'ADD_TO_CART'} />
      {/* <input type="hidden" name="countryCode" value={selectedLocale.country} /> */}
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />
      <Button type={'submit'} colour={'mid'} intent={'base'}>
        <Text intent={'button-base'}>Add to Cart</Text>
      </Button>
    </fetcher.Form>
  );
};
