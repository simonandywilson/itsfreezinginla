import { useLocation} from '@remix-run/react';
import { cx } from 'class-variance-authority';
import {Link} from '../parts/Link';
import {Text} from '../parts/Text';

export const GlobalSubmenu = ({menu}) => {
  const {pathname} = useLocation();
  return (
    <div className={cx('border-b-[1px] border-black bg-white px-4 gap-8 hidden', 'md:flex')}>
      <Text className={'-translate-y-1'}>Section:</Text>
      <div className={'flex -translate-y-1'}>
        {menu.map((section) => {
          const children = section.children.map((child) => child.slug);
          return children.includes(pathname.slice(1)) ? (
            <div
              key={section._id || section._key}
              className={'absolute gap-4 flex'}
            >
              {section.children.map((page) => {
                return (
                  <Link key={page._id || page._key} to={page.slug}>
                    <Text
                      className={
                        pathname.slice(1) === page.slug ? 'text-accent' : ''
                      }
                    >
                      {page.title}
                    </Text>
                  </Link>
                );
              })}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
