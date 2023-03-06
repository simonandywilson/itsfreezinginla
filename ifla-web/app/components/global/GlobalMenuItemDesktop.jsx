import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {Link} from '~/components/parts/Link';
import {Text} from '../parts/Text';
import {useNavigate} from '@remix-run/react';

const MenuDesktop = ({ title, children }) => {
  let navigate = useNavigate();
  return (
    <Popover.Group as="nav" className="hidden md:flex">
      <Popover className="relative">
        {({open}) => (
          <>
            <Popover.Button
              className={
                'hover:text-accent focus-visible:text-accent focus:outline-none focus:border-none antialiased'
              }
              onClick={() => navigate(children[0].slug)}
              onMouseEnter={(e) => e.target.click()}
            >
              <Text intent={'ui-2xl'} className={'font-normal'}>
                {title}
              </Text>
            </Popover.Button>
            <Transition as={Fragment}>
              <Popover.Panel className={'absolute'}>
                <ul className="relative bg-white w-max -left-2 border-8 border-white flex flex-col gap-2">
                  {children.map((child) => (
                    <li key={child._id}>
                      <Text intent={'ui-2xl'} className={'leading-none'}>
                        <Link to={child.slug}>{child.title}</Link>
                      </Text>
                    </li>
                  ))}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

export default MenuDesktop;
