import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {Link} from '@remix-run/react';

const MenuDesktop = ({title, children}) => {
  return (
    <Popover.Group as="nav" className="hidden md:flex">
      <Popover className="relative">
        <Popover.Button
          className={
            'focus:outline-none focus-visible:underline hover:underline'
          }
        >
          {title}
        </Popover.Button>
        <Transition as={Fragment}>
          <Popover.Panel className={'absolute'}>
            <ul className="relative bg-white w-max">
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
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};

export default MenuDesktop;
