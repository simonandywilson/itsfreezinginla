import {useRouteData} from 'remix-utils';
import {Popover} from '@headlessui/react';
import {GlobalMenuMobile} from './GlobalMenuMobile';
import {useLocation} from '@remix-run/react';
import {GlobalSubmenu} from './GlobalSubmenu';
import {GlobalMenuDesktop} from './GlobalMenuDesktop';

export const GlobalHeader = () => {
  const {menu} = useRouteData(`root`);
  const {pathname} = useLocation();
  const submenuActiveOn = menu
    .map((section) => section.children)
    .flat()
    .map((page) => page.slug);

  return (
    <Popover className={'fixed h-header w-screen bg-white z-50'} as={'header'}>
      {({close}) => (
        <>
          <GlobalMenuDesktop close={close} menu={menu} />
          <Popover.Panel
            focus
            className={
              'absolute inset-0 top-20 h-[calc(100vh-5rem)] bg-white p-4 md:hidden'
            }
          >
            {({close}) => <GlobalMenuMobile menu={menu} close={close} />}
          </Popover.Panel>
          {submenuActiveOn.includes(pathname.slice(1)) && (
            <GlobalSubmenu menu={menu} />
          )}
        </>
      )}
    </Popover>
  );
};
