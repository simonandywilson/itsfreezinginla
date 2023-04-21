import {Await, useRouteLoaderData} from '@remix-run/react';
import {Money} from '@shopify/hydrogen';
import {cx} from 'class-variance-authority';
import React from 'react';
import {AddToCart} from '../parts/AddToCart';
import {CartPreview} from '../parts/CartPreview';
import {Layout} from '../parts/Layout';
import {Submenu} from '../parts/Submenu';
import clsx from 'clsx';
import {CartUpdateQuantity} from '../parts/CartUpdateQuantity';
import {Button} from '../parts/Button';

export const ShopModule = () => {
  const {shopifyAllCollections, cart} = useRouteLoaderData(`root`);
  return (
    <>
      <Submenu className={'sticky top-header-submenu z-40'}>
        <p className={'mr-8'}>Filter:</p>
        <p>All products</p>
      </Submenu>
      <Layout intent={'shop'}>
        <div
          className={cx(
            'grid grid-cols-1 gap-32 mb-16',
            'sm:grid-cols-2',
            'md:grid-cols-3 md:gap-16',
          )}
        >
          <div className={cx('col-span-1', 'sm:col-span-2')}>
            <div
              className={cx(
                'grid grid-cols-1 gap-x-16 gap-y-24',
                'sm:grid-cols-2',
                'md:grid-cols-2',
                'lg:gap-x-24',
                'xl:grid-cols-3 xl:gap-x-24',
                '3xl:grid-cols-4',
              )}
            >
              {shopifyAllCollections.nodes.map((collection) =>
                collection.products.nodes.map((product) => (
                  <Product key={product.id} product={product} cart={cart} />
                )),
              )}
            </div>
          </div>
          <div className={'sticky top-36 h-max hidden md:block'}>
            <CartPreview />
          </div>
        </div>
      </Layout>
    </>
  );
};

const Product = ({product, cart}) => {
  return (
    <div className={cx('w-full h-max mx-auto', 'sm:mx-0', 'sm:max-w-[18rem]')}>
      <div className={'max-w-sm mx-auto'}>
        <img
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          className={'w-full h-full object-contain sm:object-left'}
        />
      </div>
      <h4 className={cx('text-24 my-8')}>{product.title}</h4>
      <div className={'flex flex-col gap-1'}>
        {product.variants.nodes.map((variant) => (
          <ProductVariant
            key={variant.id}
            variant={variant}
            product={product}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

const ProductVariant = ({variant, product, cart}) => {
  const {
    id,
    title,
    price,
    availableForSale,
    currentlyNotInStock,
    selectedOptions,
  } = variant;

  return (
    <div
      className={clsx(
        'flex justify-end gap-8 flex-row leading-none items-center text-zinc-500',
        'sm:justify-between',
      )}
    >
      <div className={'flex flex-col justify-between flex-1'}>
        <p className={'text-18 leading-snug'}>{selectedOptions[0].value}</p>
        <Money
          withoutTrailingZeros
          data={price}
          className={'text-18 leading-snug'}
        />
      </div>
      <div className={'min-w-[7.2rem]'}>
        <Await resolve={cart}>
          {(cart) => (
            <AddEditRemove variant={variant} product={product} cart={cart} />
          )}
        </Await>
      </div>
    </div>
  );
};

const AddEditRemove = ({variant, product, cart}) => {
  const {id, title, price, availableForSale, currentlyNotInStock} = variant;

  const productAnalytics = {
    productGid: product.id,
    variantGid: id,
    name: product.title,
    variantName: title,
    brand: product.vendor,
    price: price.amount,
    quantity: 1,
  };

  const cartLineWithVariant = cart.lines.edges.filter(
    (line) => line.node.merchandise.id === id,
  );

  const quantity = cartLineWithVariant[0]?.node?.quantity || 0;
  const cartLineId = cartLineWithVariant[0]?.node?.id || null;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return cartLineWithVariant.length > 0 ? (
    <div className={'text-black flex h-[42px]'}>
      <div className={"text-18 border-2 border-black leading-non py-2 px-3 leading-tight whitespace-nowrap"}>Added: {cartLineWithVariant[0].node.quantity}</div>
      <div className={'flex flex-col ml-2 '}>
        <CartUpdateQuantity lines={[{id: cartLineId, quantity: nextQuantity}]}>
          <Button
            type={'submit'}
            colour={'transparent'}
            className={'text-24'}
            value={nextQuantity}
            aria-label="Increase quantity"
          >
            +
          </Button>
        </CartUpdateQuantity>
        <CartUpdateQuantity lines={[{id: cartLineId, quantity: prevQuantity}]}>
          <Button
            type={'submit'}
            colour={'transparent'}
            className={'text-24'}
            value={prevQuantity}
            aria-label="Decrease quantity"
          >
            –
          </Button>
        </CartUpdateQuantity>
      </div>
    </div>
  ) : (
    <AddToCart
      lines={[
        {
          quantity: 1,
          merchandiseId: id,
        },
      ]}
      analytics={{
        products: [productAnalytics],
        totalValue: parseFloat(productAnalytics.price),
      }}
      soldOut={!availableForSale || currentlyNotInStock}
    />
  );
};
