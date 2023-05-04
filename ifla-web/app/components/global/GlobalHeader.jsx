import {Popover} from '@headlessui/react';
import {GlobalMenuMobile} from './GlobalMenuMobile';
import {useLocation, useRouteLoaderData} from '@remix-run/react';
import {GlobalSubmenu} from './GlobalSubmenu';
import {GlobalMenuDesktop} from './GlobalMenuDesktop';

export const GlobalHeader = () => {
  const {menu = []} = useRouteLoaderData(`root`);
  const { pathname } = useLocation();
  
  const submenuVisible =
    menu.submenuActiveOnAll.includes(pathname) ||
    menu.submenuActiveOnAll.includes(pathname.slice(1));

  return (
    <Popover className={'fixed h-header w-screen bg-white z-50'} as={'header'}>
      {({close}) => (
        <>
          <GlobalMenuDesktop close={close} menu={menu.menuItems} />
          <Popover.Panel
            focus
            className={
              'absolute inset-0 top-header h-screen bg-white p-4 md:hidden'
            }
          >
            {({close}) => <GlobalMenuMobile menu={menu.menuItems} close={close} />}
          </Popover.Panel>
          {submenuVisible && (
            <GlobalSubmenu menu={menu.menuItems} />
          )}
        </>
      )}
    </Popover>
  );
};
