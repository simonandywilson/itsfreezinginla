import {Await} from '@remix-run/react';
import {useRouteData} from 'remix-utils';
import {BlockLink} from './Links';
import {Badge} from './Badge';
import {BasketIcon} from '../icons/Icons';

export const Basket = () => {
  const {cart} = useRouteData(`root`);
  return (
    <BlockLink to={'/cart'} aria-label="Go to cart">
      <div className={'h-14'}>
        <BasketIcon />
        <Await resolve={cart}>
          {(cart) => <Badge intent={'small'}>{cart?.totalQuantity || 0}</Badge>}
        </Await>
      </div>
    </BlockLink>
  );
};
