import {useLocation} from '@remix-run/react';
import {TextLink} from '../parts/Links';
import {Submenu} from '../parts/Submenu';
import { Text } from '../parts/Text';

export const GlobalSubmenu = ({menu}) => {
  const {pathname} = useLocation();
  return (
    <Submenu>
      <Text intent={'text-sm mr-8'}>Section:</Text>
      {menu.map((section) => {
        const children = section.children.map((child) => child.slug);
        return children.includes(pathname.slice(1)) ? (
          <div
            key={section._id || section._key}
            className={'gap-8 flex'}
          >
            {section.children.map((page) => {
              return (
                <TextLink
                  key={page._id || page._key}
                  intent={'text-sm'}
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
    </Submenu>
  );
};
