import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {useRouteData} from 'remix-utils';
import CartLoader from '../components/loaders/CartLoader';
import {Layout} from '../components/parts/Layout';

export const handle = {
  seo: {
    title: 'Cart',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

// export async function loader({context}) {
//   const [homepage] = await Promise.all([getHomepageData(context)]);

//   return json({
//     homepage,
//   });
// }

export default function CartPage() {
  const {cart} = useRouteData(`root`);
  return (
    <div>
      <Suspense fallback={<CartLoader />}>
        <Await resolve={cart}>{(cart) => <Cart cart={cart} />}</Await>
      </Suspense>
    </div>
  );
}

const Cart = ({cart}) => {
  const cartHasItems = Boolean(cart?.lines?.edges?.length || 0);

  return <>{cartHasItems ? <CartDetails /> : <EmptyCart />}</>;
};

const CartDetails = () => {
  return (
    <Layout intent={'page'}>
      <h2>Basket contents</h2>
    </Layout>
  );
};

const EmptyCart = () => {
  return (
    <Layout intent={'centre'}>
      <h2 className={'text-2xl'}>Cart is Empty</h2>
    </Layout>
  );
};

// async function getHomepageData({sanityClient}) {
//   const query = groq`*[_type == "home"][0] {
// 		"heroBanner": heroBanner,
// 		"featuredBanner": featuredBanner,
// 		"featured": featured[0...3] -> {
// 			_id,
// 			headline,
// 			"slug": slug.fullUrl,
// 			intro,
// 			"colour":colour->colourLight,
// 			author-> {name},
// 			media[],
// 			image {
//           		alt,
//             	asset->
//           	}
// 		}}`;
//   const homepage = await sanityClient.fetch(query);
//   return homepage;
// }
