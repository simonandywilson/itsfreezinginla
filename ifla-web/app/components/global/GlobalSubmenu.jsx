import {useLocation} from '@remix-run/react';
import {TextLink} from '../parts/LinksNew';
import {Submenu} from '../parts/Submenu';

export const GlobalSubmenu = ({menu}) => {
  const {pathname} = useLocation();
  return (
    <Submenu className={'border-b-1 border-black'}>
      <h2 className={'text-18 mr-8 leading-none'}>Section:</h2>
      <div className={"overflow-x-scroll mr-4 scrollbar-hide"}>
        {menu.map((section) => {
          const children = section.children.map((child) => child.slug);
          return children.includes(pathname.slice(1)) ? (
            <div key={section._id || section._key} className={'gap-8 flex'}>
              {section.children.map((page) => {
                return (
                  <TextLink
                    key={page._id || page._key}
                    className={'text-18 flex-shrink-0'}
                    focused={pathname.slice(1) === page.slug ? true : false}
                    to={page.slug}
                  >
                    {page.title}
                  </TextLink>
                );
              })}
            </div>
          ) : null;
        })}
      </div>
    </Submenu>
  );
};
