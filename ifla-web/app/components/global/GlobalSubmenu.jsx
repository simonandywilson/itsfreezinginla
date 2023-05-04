import {useLocation} from '@remix-run/react';
import {TextLink} from '../parts/Links';
import {Submenu} from '../parts/Submenu';

export const GlobalSubmenu = ({menu}) => {
  const {pathname} = useLocation();
  return (
    <Submenu className={'border-b-1 border-black'}>
      <h2 className={'text-16 mr-4 leading-none sm:text-18 sm:mr-8'}>
        Section:
      </h2>
      <div className={'overflow-x-scroll mr-4 scrollbar-hide'}>
        {menu.map((section) => {
          const active =
            section.submenuActiveOn.includes(pathname.slice(1)) ||
            section.submenuActiveOn.includes(pathname);
          return (
            active && (
              <div key={section._id || section._key} className={'gap-8 flex'}>
                {section.children.map((page) => {
                  return (
                    <TextLink
                      key={page._id || page._key}
                      className={'text-16 flex-shrink-0 sm:text-18'}
                      focused={pathname.slice(1) === page.slug ? true : false}
                      to={page.slug}
                    >
                      {page.title}
                    </TextLink>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
    </Submenu>
  );
};
