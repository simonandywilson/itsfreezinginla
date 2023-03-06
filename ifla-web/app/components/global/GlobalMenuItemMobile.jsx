import {Link} from '~/components/parts/Link';
import { Text } from '../parts/Text';

export const GlobalMenuItemMobile = ({title, children}) => {
  return (
    <ul>
      <li>
        <Text intent={'ui-3xl'} className={'font-normal'}>
          {title}
        </Text>
        <ul className={'ml-4'}>
          {children.map((child) => (
            <li key={child._id}>
              <Link to={child.slug}>
                <Text intent={'ui-3xl'} className={'font-normal'}>
                  {child.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
