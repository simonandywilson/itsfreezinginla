import {Money} from '@shopify/hydrogen';
import React, {Suspense} from 'react';
import {useRouteData} from 'remix-utils';
import {AddToCart} from '../parts/AddToCart';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';
import {Link} from '../parts/Link';
import {Badge} from '../parts/Badge';
import {BasketIconThin} from '../icons/Icons';
import {Await} from '@remix-run/react';
import { cx } from 'class-variance-authority';
import { CartPreview } from '../parts/CartPreview';


export const ShopModule = () => {
  const {allProducts, cart} = useRouteData(`root`);
  return (
    <Layout intent={'space'}>
      <div
        className={cx('grid grid-cols-1 gap-8', 'lg:grid-cols-3', 'md:gap-16')}
      >
        <div className={cx('col-span-1', 'sm:col-span-2')}>
          <div
            className={cx(
              'grid grid-cols-1 gap-8',
              'sm:grid-cols-2',
              'md:grid-cols-3 md:gap-16',
            )}
          >
            {allProducts.nodes.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
       <CartPreview />
      </div>
    </Layout>
  );
};

const Product = ({product}) => {
  return (
    <div className={'h-max'}>
      <img
        src={product.featuredImage.url}
        alt={product.featuredImage.altText}
        className="w-full h-full object-cover"
      />
      <Text tag={'h4'} intent={"ui-base"} className={"my-8"}>{product.title}</Text>
      <div className={'flex flex-col gap-4'}>
        {product.variants.nodes.map((variant) => (
          <ProductVariant
            key={variant.id}
            variant={variant}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

const ProductVariant = ({variant, product}) => {
  const {id, selectedOptions, title, price} = variant;

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
    <div className={'flex justify-between gap-2'}>
      <div >
        <Text tag={'p'} intent={"ui-base"}>{selectedOptions[0].value}</Text>
        <Money withoutTrailingZeros data={price} className={"ui-base"} />
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
      />
    </div>
  );
};