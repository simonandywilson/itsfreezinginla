import {Fragment, Suspense} from 'react';
import {useRouteData} from 'remix-utils';
import {Popover, Transition} from '@headlessui/react';
import GlobalMenuItemDesktop from './GlobalMenuItemDesktop';
import GlobalMenuItemMobile from './GlobalMenuItemMobile';
import GlobalTitle from './GlobalTitle';
import {Await} from '@remix-run/react';
import Link from '~/components/parts/Link';
import {BasketIcon} from '../icons/Icons';

const GlobalHeader = () => {
  const {menu} = useRouteData(`root`);
  return (
    <Popover
      className="fixed h-24 w-screen bg-white z-50 text-3xl md:text-2xl"
      as={'header'}
    >
      <div className="relative w-full p-4 flex items-center justify-between">
        <GlobalTitle />
        <div className={'flex items-center gap-16'}>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Popover.Button
              className={
                ' focus-visible:underline focus:border-none focus:outline-none'
              }
            >
              {({open}) => <span>{open ? 'Close Menu' : 'Menu'}</span>}
            </Popover.Button>
          </div>
          {/* Desktop Menu Items */}
          {menu.map((section) => {
            return (
              <GlobalMenuItemDesktop
                key={section._id}
                title={section.name}
                children={section.children}
              />
            );
          })}
          <CartButton />
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition as={Fragment}>
        <Popover.Panel
          focus
          className="absolute inset-0 top-20 h-[calc(100vh-5rem)] bg-white p-4 md:hidden"
        >
          {menu.map((section) => {
            return (
              <GlobalMenuItemMobile
                key={section._id}
                title={section.name}
                children={section.children}
              />
            );
          })}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default GlobalHeader;

const CartButton = () => {
  const {cart} = useRouteData(`root`);
  return (
    <Link to={'/cart'} aria-label="Go to cart">
      <div className={'h-14'}>
        <BasketIcon />
        <Suspense fallback={<CartButtonBadge count={0} />}>
          <Await resolve={cart}>
            {(cart) => <CartButtonBadge count={cart?.totalQuantity || 0} />}
          </Await>
        </Suspense>
      </div>
    </Link>
  );
};

const CartButtonBadge = ({count}) => {
  return (
    <div
      className={
        'absolute w-6 h-6 bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 aspect-square bg-black text-white text-sm rounded-full flex justify-center items-center'
      }
    >
      <span className={'leading-none'}>{count || 0}</span>
    </div>
  );
};
