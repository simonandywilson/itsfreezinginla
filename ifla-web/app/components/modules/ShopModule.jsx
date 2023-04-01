import {Await, useRouteLoaderData} from '@remix-run/react';
import {Money} from '@shopify/hydrogen';
import {cx} from 'class-variance-authority';
import React from 'react';
import {AddToCart} from '../parts/AddToCart';
import {CartPreview} from '../parts/CartPreview';
import {Layout} from '../parts/Layout';
import {Submenu} from '../parts/Submenu';
import clsx from 'clsx';

export const ShopModule = () => {
  const {shopifyAllCollections, cart} = useRouteLoaderData(`root`);
  return (
    <>
      <Submenu className={' sticky top-header-submenu z-40  '}>
        <p className={'mr-8'}>Filter:</p>
        <p>All products</p>
      </Submenu>
      <Layout intent={'shop'}>
        <div
          className={cx(
            'grid grid-cols-1 gap-16 mb-16',
            'sm:grid-cols-2',
            'md:grid-cols-3 md:gap-8',
          )}
        >
          <div className={cx('col-span-1', 'sm:col-span-2')}>
            <div
              className={cx(
                'grid grid-cols-1 gap-x-16 gap-y-24',
                'sm:grid-cols-2 ',
                'md:grid-cols-2 ',
                'xl:grid-cols-3 ',
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
      <div className={'aspect-square max-w-sm mx-auto'}>
        <img
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          className={'w-full h-full object-contain sm:object-left'}
        />
      </div>
      <h4 as={'h4'} className={cx('text-32 my-8 min-h-[4.5rem]')}>
        {product.title}
      </h4>
      <div className={'flex flex-col gap-4'}>
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
    <div className={clsx('flex justify-end gap-8 flex-row leading-none items-center', 'sm:justify-between')}>
      <div className={"flex gap-2 justify-between flex-1"}>
        <p as={'p'} className={'text-18'}>
          {selectedOptions[0].value}
        </p>
        <Money withoutTrailingZeros data={price} className={'text-18'} />
      </div>
      <div className={"min-w-[7rem]"} >
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

  // const {lines} = cart;
  // const variantInCart = lines.edges.some((e) => e.node.merchandise.id === id);

  return (
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
