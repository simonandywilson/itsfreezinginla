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

export const ShopModule = () => {
  const {allProducts, cart} = useRouteData(`root`);
  return (
    <Layout intent={'space'}>
      <div className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          {allProducts.nodes.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className={'flex items-center flex-col'}>
          <div className={'relative'}>
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
          <Suspense fallback={<Badge intent={'small'}>0</Badge>}>
            <Await resolve={cart}>
              {(cart) => (
                <Badge intent={'big'}>{cart?.totalQuantity || 0}</Badge>
              )}
            </Await>
          </Suspense>
          <Link to={'/cart'}>View Basket</Link>
        </div>
      </div>
    </Layout>
  );
};

const Product = ({product}) => {
  return (
    <div className={'grid grid-cols-3'}>
      <div className={'h-max'}>
        <img
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          className="w-full h-full object-cover"
        />
        <Text tag={'h4'}>{product.title}</Text>
        <div className={'mt-8 flex flex-col gap-4'}>
          {product.variants.nodes.map((variant) => (
            <ProductVariant
              key={variant.id}
              variant={variant}
              product={product}
            />
          ))}
        </div>
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
      <div className={'flex gap-2'}>
        <Text tag={'p'}>{selectedOptions[0].value}</Text>
        <Money withoutTrailingZeros data={price} />
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
