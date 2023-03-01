import {Link} from '~/components/parts/Link';

const MenuItemMobile = ({title, children}) => {
  return (
    <ul>
      <li>
        {title}
        <ul className={'ml-4'}>
          {children.map((child) => (
            <li key={child._id}>
              <Link to={child.slug}>{child.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MenuItemMobile;
