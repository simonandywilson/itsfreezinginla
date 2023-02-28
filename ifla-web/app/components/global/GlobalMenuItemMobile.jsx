import {Link} from '@remix-run/react';
import React from 'react';

const MenuItemMobile = ({title, children}) => {
  return (
    <ul>
      <li>
        {title}
        <ul className={'ml-4'}>
          {children.map((child) => (
            <li key={child._id}>
              <Link
                to={child.slug}
                className={
                  'focus:outline-none focus-visible:underline hover:underline'
                }
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MenuItemMobile;
