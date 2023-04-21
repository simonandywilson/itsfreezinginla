import {Await, useRouteLoaderData} from '@remix-run/react';
import {BasketIcon, BasketIconMobile} from '../icons/Icons';
import {Badge} from './Badge';
import {IconLink} from './Links';

export const Basket = () => {
  const {cart} = useRouteLoaderData(`root`);
  return (
    <IconLink to={'/cart'} aria-label={"Go to cart"}>
      <div className={'relative w-full h-full'}>
        <span className={'hidden md:inline'}>
          <BasketIcon />
        </span>
        <span className={'inline md:hidden'}>
          <BasketIconMobile />
        </span>
        <Await resolve={cart}>
          {(cart) =>
            cart?.totalQuantity && (
              <Badge intent={'small'}>{cart?.totalQuantity}</Badge>
            )
          }
        </Await>
      </div>
    </IconLink>
  );
};
