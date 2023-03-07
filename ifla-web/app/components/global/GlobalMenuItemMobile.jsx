import {useLocation} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import {TextLink} from '../parts/Links';
import {Text} from '../parts/Text';

export const GlobalMenuItemMobile = ({title, children}) => {
  const {pathname} = useLocation();
  return (
    <ul>
      <li>
        <Text intent={'text-lg'}>{title}</Text>
        <ul className={'ml-4'}>
          {children.map((page) => (
            <li key={page._id}>
              <TextLink
                to={page.slug}
                intent={'text-lg'}
                className={cx(
                  pathname.slice(1) === page.slug ? 'text-accent' : '',
                )}
              >
                {page.title}
              </TextLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
