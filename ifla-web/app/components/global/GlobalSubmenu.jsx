import {useLocation} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import {TextLink} from '../parts/Links';
import {Text} from '../parts/Text';

export const GlobalSubmenu = ({menu}) => {
  const {pathname} = useLocation();
  return (
    <div
      className={cx(
        'border-b-[1px] border-black h-6 bg-white px-4 gap-8 hidden',
        'md:flex',
      )}
    >
      <Text intent={'text-sm'} className={'leading-none -translate-y-1'}>
        Section:
      </Text>
      <div className={'flex -translate-y-1'}>
        {menu.map((section) => {
          const children = section.children.map((child) => child.slug);
          return children.includes(pathname.slice(1)) ? (
            <div
              key={section._id || section._key}
              className={'absolute gap-8 flex'}
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
      </div>
    </div>
  );
};
