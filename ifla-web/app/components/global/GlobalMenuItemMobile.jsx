import {useLocation} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import {Link} from '~/components/parts/Link';
import {Text} from '../parts/Text';

export const GlobalMenuItemMobile = ({title, children, close}) => {
  const {pathname} = useLocation();
  return (
    <ul>
      <li>
        <Text intent={'ui-3xl'} className={'font-normal'}>
          {title}
        </Text>
        <ul className={'ml-4'}>
          {children.map((page) => (
            <li key={page._id}>
              <Link to={page.slug} onClick={close} >
                <Text
                  intent={'ui-3xl'}
                  className={cx(
                    'font-normal',
                    pathname.slice(1) === page.slug ? 'text-accent' : '',
                  )}
                >
                  {page.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
