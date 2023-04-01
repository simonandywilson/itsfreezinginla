import {Await, useRouteLoaderData} from '@remix-run/react';
import { IconLink} from './LinksNew';
import {Badge} from './Badge';
import {BasketIcon} from '../icons/Icons';

export const Basket = () => {
  const {cart} = useRouteLoaderData(`root`);
  return (
    <IconLink to={'/cart'} aria-label="Go to cart">
      <div className={'relative w-full h-full'}>
        <BasketIcon />
          <Await resolve={cart}>
            {(cart) => (
              <Badge intent={'small'}>{cart?.totalQuantity || 0}</Badge>
            )}
          </Await>
      </div>
    </IconLink>
  );
};
