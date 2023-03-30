import {Await} from '@remix-run/react';
import {Money} from '@shopify/hydrogen';
import {cx} from 'class-variance-authority';
import React from 'react';
import {useRouteData} from 'remix-utils';
import {AddToCart} from '../parts/AddToCart';
import {CartPreview} from '../parts/CartPreview';
import {Layout} from '../parts/Layout';

export const ShopModule = () => {
  const {allProducts, allCollections, cart} = useRouteData(`root`);
  return (
    <Layout intent={'cart'}>
      <div
        className={cx(
          'grid grid-cols-1 gap-8',
          'sm:grid-cols-2',
          'md:grid-cols-3 md:gap-16',
        )}
      >
        <div className={cx('col-span-1', 'sm:col-span-2')}>
          <div
            className={cx(
              'grid grid-cols-1 gap-8',
              'sm:grid-cols-2 sm:gap-8',
              'md:grid-cols-2 md:gap-16',
              'lg:grid-cols-3 lg:gap-8',
            )}
          >
            {allCollections.nodes.map((collection) =>
              collection.products.nodes.map((product) => (
                <Product key={product.id} product={product} cart={cart} />
              )),
            )}

            {/* {allProducts.nodes.map((product) => (
             
            ))} */}
          </div>
        </div>
        <div className={'sticky top-36 h-max hidden md:block'}>
          <CartPreview />
        </div>
      </div>
    </Layout>
  );
};

const Product = ({product, cart}) => {
  return (
    <div className={cx('h-max max-w-[15rem] mx-auto', 'sm:mx-0')}>
      <img
        src={product.featuredImage.url}
        alt={product.featuredImage.altText}
        className="w-full h-full object-cover"
      />
      <h4 as={'h4'} className={cx('text-32 my-4', 'sm:my-8')}>
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

  const productAnalytics = {
    productGid: product.id,
    variantGid: id,
    name: product.title,
    variantName: title,
    brand: product.vendor,
    price: price.amount,
    quantity: 1,
  };

  return (
    <div className={cx('flex justify-between gap-2 flex-row')}>
      <div>
        <p as={'p'} className={'text-18'}>
          {selectedOptions[0].value}
        </p>
        <Money withoutTrailingZeros data={price} className={'text-sm'} />
      </div>
      <Await resolve={cart}>
        {(cart) => (
          <AddEditRemove variant={variant} product={product} cart={cart} />
        )}
      </Await>
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
