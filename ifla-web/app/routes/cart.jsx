import {Await, useFetcher} from '@remix-run/react';
import {Money} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {useRouteData} from 'remix-utils';
import invariant from 'tiny-invariant';
import CartLoader from '../components/loaders/CartLoader';
import {Layout} from '../components/parts/Layout';
import {Text} from '../components/parts/Text';
import {Button} from '~/components/parts/Button';
import {CartPreview} from '../components/parts/CartPreview';
import {cx} from 'class-variance-authority';
import {Dash} from '../components/parts/Dash';

export const handle = {
  seo: {
    title: 'Cart',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function action({request, context}) {
  const {session, storefront} = context;
  const headers = new Headers();

  const [formData, storedCartId, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('cartId'),
    session.get('customerAccessToken'),
  ]);

  let cartId = storedCartId;

  const cartAction = formData.get('cartAction');
  invariant(cartAction, 'No cartAction defined');

  const countryCode = formData.get('countryCode')
    ? formData.get('countryCode')
    : null;

  let status = 200;
  let result;

  switch (cartAction) {
    case 'ADD_TO_CART':
      const lines = formData.get('lines')
        ? JSON.parse(String(formData.get('lines')))
        : [];
      invariant(lines.length, 'No lines to add');

      /**
       * If no previous cart exists, create one with the lines.
       */
      if (!cartId) {
        result = await cartCreate({
          input: countryCode ? {lines, buyerIdentity: {countryCode}} : {lines},
          storefront,
        });
      } else {
        result = await cartAdd({
          cartId,
          lines,
          storefront,
        });
      }

      cartId = result.cart.id;

      break;
    case 'REMOVE_FROM_CART':
      const lineIds = formData.get('linesIds')
        ? JSON.parse(String(formData.get('linesIds')))
        : [];
      invariant(lineIds.length, 'No lines to remove');

      result = await cartRemove({
        cartId,
        lineIds,
        storefront,
      });

      cartId = result.cart.id;

      break;
    case 'UPDATE_CART':
      const updateLines = formData.get('lines')
        ? JSON.parse(String(formData.get('lines')))
        : [];
      invariant(updateLines.length, 'No lines to update');

      result = await cartUpdate({
        cartId,
        lines: updateLines,
        storefront,
      });

      cartId = result.cart.id;

      break;
    case 'UPDATE_DISCOUNT':
      invariant(cartId, 'Missing cartId');

      const formDiscountCode = formData.get('discountCode');
      const discountCodes = [formDiscountCode] || [''];

      result = await cartDiscountCodesUpdate({
        cartId,
        discountCodes,
        storefront,
      });

      cartId = result.cart.id;

      break;
    case 'UPDATE_BUYER_IDENTITY':
      const buyerIdentity = formData.get('buyerIdentity')
        ? JSON.parse(String(formData.get('buyerIdentity')))
        : {};

      result = cartId
        ? await cartUpdateBuyerIdentity({
            cartId,
            buyerIdentity: {
              ...buyerIdentity,
              customerAccessToken,
            },
            storefront,
          })
        : await cartCreate({
            input: {
              buyerIdentity: {
                ...buyerIdentity,
                customerAccessToken,
              },
            },
            storefront,
          });

      cartId = result.cart.id;

      break;
    default:
      invariant(false, `${cartAction} cart action is not defined`);
  }

  /**
   * The Cart ID may change after each mutation. We need to update it each time in the session.
   */
  session.set('cartId', cartId);
  headers.set('Set-Cookie', await session.commit());

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string' && isLocalPath(redirectTo)) {
    status = 303;
    headers.set('Location', redirectTo);
  }

  const {cart, errors} = result;
  return json(
    {
      cart,
      errors,
      analytics: {
        cartId,
      },
    },
    {status, headers},
  );
}

export default function CartPage() {
  const { cart, shop } = useRouteData(`root`);
  return (
    <div>
      <Suspense fallback={<CartLoader />}>
        <Await resolve={cart}>{(cart) => <Cart cart={cart} shop={shop} />}</Await>
      </Suspense>
    </div>
  );
}

const Cart = ({cart, shop}) => {
  const cartHasItems = Boolean(cart?.lines?.edges?.length || 0);
  return (
    <>
      {cartHasItems ? <CartDetails cart={cart} shop={shop} /> : <EmptyCart />}
    </>
  );
};

const CartDetails = ({ cart, shop }) => {
  const {lines, cost, checkoutUrl} = cart;
  return (
    <Layout intent={'cart'}>
      <Text tag={'h2'} intent={'ui-3xl'}>
        Basket contents
      </Text>
      <div
        className={cx(
          'mt-8 grid grid-cols-1 gap-8',
          'md:grid-cols-3 md:gap-16',
        )}
      >
        <div
          className={cx(
            'order-last col-span-2 flex flex-col',
            'md:order-first',
          )}
        >
          {lines.edges.map(({node}) => (
            <CartLine key={node.id} line={node} />
          ))}
          <CartTotal cost={cost} />
          <a href={checkoutUrl} target="_self" className={'ml-auto mr-20 mt-8'}>
            <Button tag={'div'} intent={'xl'} colour={'dark'}>
              <Text intent={'button-2xl'}>Checkout</Text>
            </Button>
          </a>
        </div>
        <CartPreview text={'Back to shop'} link={shop.shop.slug.fullUrl} />
      </div>
    </Layout>
  );
};

const EmptyCart = () => {
  return (
    <Layout intent={'centre'}>
      <Text tag={'h2'} intent={'ui-2xl'}>
        Basket is empty
      </Text>
    </Layout>
  );
};

const CartLineWrapper = ({children}) => {
  return (
    <div className={'w-full h-max grid grid-cols-[1fr_64px] gap-2'}>
      {children}
    </div>
  );
};

const CartLine = ({line}) => {
  const {id, merchandise} = line;
  return (
    <CartLineWrapper>
        <div
          className={'flex gap-2 items-baseline justify-self-stretch'}
        >
          <Text tag={'h4'} intent={'ui-xl'}>
            {merchandise.product.title}
          </Text>
          <Text tag={'h5'} intent={'ui-xl'} className={'text-center'}>
            {merchandise.title}
          </Text>
          <Dash className={'flex-1'} />
          <Money
            withoutTrailingZeros
            data={merchandise.price}
            className={'text-right ui-xl'}
          />
        </div>
        <div className={'justify-self-end w-16 text-right'}>
          <CartRemove id={id} />
        </div>
    </CartLineWrapper>
  );
};

const CartRemove = ({id}) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={'REMOVE_FROM_CART'} />
      <input type="hidden" name="linesIds" value={JSON.stringify(id)} />
      <Button type={'submit'} colour={'light'} intent={'link'}>
        <Text intent={'button-xl'}>remove</Text>
      </Button>
    </fetcher.Form>
  );
};

const CartTotal = ({cost}) => {
  return (
    <CartLineWrapper>
      <div className={'flex gap-2 items-baseline justify-self-stretch mt-8'}>
        <Text tag={'h4'} intent={'ui-xl'}>
          Total
        </Text>
        <Dash className={'flex-1'} />
        <Money
          withoutTrailingZeros
          data={cost.totalAmount}
          className={'text-right ui-xl'}
        />
      </div>
    </CartLineWrapper>
  );
};

const USER_ERROR_FRAGMENT = `#graphql
  fragment ErrorFragment on CartUserError {
    message
    field
    code
  }
`;

const LINES_CART_FRAGMENT = `#graphql
  fragment CartLinesFragment on Cart {
    id
    totalQuantity
  }
`;

const CREATE_CART_MUTATION = `#graphql
  mutation ($input: CartInput!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;

export async function cartCreate({input, storefront}) {
  const {cartCreate} = await storefront.mutate(CREATE_CART_MUTATION, {
    variables: {input},
  });

  invariant(cartCreate, 'No data returned from cartCreate mutation');

  return cartCreate;
}

const ADD_LINES_MUTATION = `#graphql
  mutation ($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;

export async function cartAdd({cartId, lines, storefront}) {
  const {cartLinesAdd} = await storefront.mutate(ADD_LINES_MUTATION, {
    variables: {cartId, lines},
  });

  invariant(cartLinesAdd, 'No data returned from cartLinesAdd mutation');

  return cartLinesAdd;
}

const REMOVE_LINE_ITEMS_MUTATION = `#graphql
  mutation ($cartId: ID!, $lineIds: [ID!]!, $language: LanguageCode, $country: CountryCode)
  @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        totalQuantity
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ...on ProductVariant {
                  id
                }
              }
            }
          }
        }
      }
      errors: userErrors {
        message
        field
        code
      }
    }
  }
`;

export async function cartRemove({cartId, lineIds, storefront}) {
  const {cartLinesRemove} = await storefront.mutate(
    REMOVE_LINE_ITEMS_MUTATION,
    {
      variables: {
        cartId,
        lineIds,
      },
    },
  );

  invariant(cartLinesRemove, 'No data returned from remove lines mutation');
  return cartLinesRemove;
}

const LINES_UPDATE_MUTATION = `#graphql
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
  mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!, $language: LanguageCode, $country: CountryCode)
  @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
`;

export async function cartUpdate({cartId, lines, storefront}) {
  const {cartLinesUpdate} = await storefront.mutate(LINES_UPDATE_MUTATION, {
    variables: {cartId, lines},
  });

  invariant(
    cartLinesUpdate,
    'No data returned from update lines items mutation',
  );
  return cartLinesUpdate;
}

const UPDATE_CART_BUYER_COUNTRY = `#graphql
 mutation(
   $cartId: ID!
   $buyerIdentity: CartBuyerIdentityInput!
   $country: CountryCode = ZZ
   $language: LanguageCode
 ) @inContext(country: $country, language: $language) {
   cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
     cart {
       id
       buyerIdentity {
         email
         phone
         countryCode
       }
     }
     errors: userErrors {
       message
       field
       code
     }
   }
 }
`;

export async function cartUpdateBuyerIdentity({
  cartId,
  buyerIdentity,
  storefront,
}) {
  const {cartBuyerIdentityUpdate} = await storefront.mutate(
    UPDATE_CART_BUYER_COUNTRY,
    {
      variables: {
        cartId,
        buyerIdentity,
      },
    },
  );

  invariant(
    cartBuyerIdentityUpdate,
    'No data returned from cart buyer identity update mutation',
  );

  return cartBuyerIdentityUpdate;
}

const DISCOUNT_CODES_UPDATE = `#graphql
  mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $country: CountryCode = ZZ)
    @inContext(country: $country) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        id
        discountCodes {
          code
        }
      }
      errors: userErrors {
        field
        message
      }
    }
  }
`;

export async function cartDiscountCodesUpdate({
  cartId,
  discountCodes,
  storefront,
}) {
  const {cartDiscountCodesUpdate} = await storefront.mutate(
    DISCOUNT_CODES_UPDATE,
    {
      variables: {
        cartId,
        discountCodes,
      },
    },
  );

  invariant(
    cartDiscountCodesUpdate,
    'No data returned from the cartDiscountCodesUpdate mutation',
  );

  return cartDiscountCodesUpdate;
}
