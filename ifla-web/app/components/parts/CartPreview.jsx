import {Await, useRouteLoaderData} from '@remix-run/react';
import { cx } from 'class-variance-authority';
import React, {Suspense} from 'react';
import {BasketIconThin} from '../icons/Icons';
import {Badge} from './Badge';
import {CartPreviewItem} from './CartPreviewItem';
import {ButtonLink} from './LinksButton';

export const CartPreview = ({text, link, className}) => {
  const {cart} = useRouteLoaderData(`root`);
  return (
    <div className={cx('w-full h-max max-w-sm mx-auto', className)}>
      <div className={'w-full relative'}>
        <Suspense
          fallback={
            <Badge intent={'big'} location={'top'}>
              0
            </Badge>
          }
        >
          <Await resolve={cart}>
            {(cart) => (
              <Badge intent={'big'} location={'top'}>
                {cart?.totalQuantity || 0}
              </Badge>
            )}
          </Await>
        </Suspense>
        <BasketIconThin />
        <div className={'absolute w-full h-full inset-0 -z-10 flex items-end'}>
          <div className={'relative w-full h-[79%]'}>
            <Suspense fallback={null}>
              <Await resolve={cart}>
                {(cart) =>
                  cart?.lines?.edges &&
                  cart.lines.edges.map(({node}) => {
                    return [...Array(node.quantity)].map((e, i) => (
                      <CartPreviewItem key={node.id + i} item={node} />
                    ));
                  })
                }
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <div className={'flex justify-center mt-8'}>
        <ButtonLink to={link || '/cart'} className={'button-32'}>
          {text || 'View Basket'}
        </ButtonLink>
      </div>
    </div>
  );
};
