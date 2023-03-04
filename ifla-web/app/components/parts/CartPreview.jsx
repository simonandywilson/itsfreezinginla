import {Await} from '@remix-run/react';
import React, {Suspense} from 'react';
import {useRouteData} from 'remix-utils';
import {BasketIconThin} from '../icons/Icons';
import {Badge} from './Badge';
import {Link} from './Link';
import {Text} from './Text';

export const CartPreview = ({text, link}) => {
  const {cart} = useRouteData(`root`);
  return (
    <div className={'w-full h-max max-w-sm mx-auto'}>
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
        {/* <div className={'absolute h-full w-full'}>
              <Suspense fallback={null}>
                <Await resolve={cart}>
                  {(cart) =>
                    cart.lines.edges.map(({node}) => {
                      const rotation = Math.random() * 20 - 5;
                      return (
                        <img
                          role="presentation"
                          key={node.id}
                          src={node.merchandise.image.url}
							  className={'absolute h-20'}
							  style={{transform: `rotate(${rotation}deg)`}}
                        />
                      );
                    })
                  }
                </Await>
              </Suspense>
            </div> */}
      </div>
      <div className={'flex justify-center mt-8'}>
        <Link to={link || '/cart'} intent={'button-2xl'} colour={'dark'}>
          <Text intent={'button-2xl'}>{text || "View Basket"}</Text>
        </Link>
      </div>
    </div>
  );
};
