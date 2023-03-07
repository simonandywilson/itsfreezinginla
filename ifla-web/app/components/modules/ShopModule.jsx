import {Money} from '@shopify/hydrogen';
import React from 'react';
import {useRouteData} from 'remix-utils';
import {AddToCart} from '../parts/AddToCart';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';
import {cx} from 'class-variance-authority';
import {CartPreview} from '../parts/CartPreview';

export const ShopModule = () => {
  const {allProducts, cart} = useRouteData(`root`);
  return (
    <Layout intent={'cart'}>
      <div
        className={cx('grid grid-cols-1 gap-8', 'sm:grid-cols-3', 'md:gap-16')}
      >
        <div className={cx('col-span-1', 'sm:col-span-2')}>
          <div
            className={cx(
              'grid grid-cols-1 gap-16 px-0',
              'sm:grid-cols-2 sm:gap-8 sm:px-0',
              'md:grid-cols-2',
              'lg:grid-cols-3 lg:gap-16',
            )}
          >
            {allProducts.nodes.map((product) => (
              <Product key={product.id} product={product} cart={cart} />
            ))}
          </div>
        </div>
        <div className={'sticky top-28 h-max hidden sm:block'}>
          <CartPreview />
        </div>
      </div>
    </Layout>
  );
};

const Product = ({product, cart}) => {
  return (
    <div className={'h-max max-w-xs mx-auto'}>
      <img
        src={product.featuredImage.url}
        alt={product.featuredImage.altText}
        className="w-full h-full object-cover"
      />
      <Text tag={'h4'} intent={'ui-base'} className={cx('my-4', 'sm:my-8')}>
        {product.title}
      </Text>
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
    selectedOptions,
    title,
    price,
    availableForSale,
    currentlyNotInStock,
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
    <div className={cx('flex justify-between gap-2 flex-col', 'sm:flex-row')}>
      <div>
        <Text tag={'p'} intent={'ui-base'}>
          {selectedOptions[0].value}
        </Text>
        <Money withoutTrailingZeros data={price} className={'ui-base'} />
      </div>
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
    </div>
  );
};
