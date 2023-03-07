import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {Text} from '../parts/Text';
import {useNavigate} from '@remix-run/react';
import {TextLink} from '../parts/Links';

export const GlobalMenuItemDesktop = ({title, children}) => {
  const navigate = useNavigate();

  return (
    <Popover.Group as="nav" className="hidden md:flex">
      <Popover
        className="relative"
        onMouseEnter={(event) => {
          togglePopover(event, index);
        }}
      >
        <Popover.Button
          className={
            'hover:text-accent focus-visible:text-accent focus:outline-none focus:border-none antialiased'
          }
          onClick={() => navigate(children[0].slug)}
        >
          <Text intent={'text-base'} className={'font-normal'}>
            {title}
          </Text>
        </Popover.Button>
        {children.length > 1 && (
          <Transition as={Fragment}>
            <Popover.Panel className={'absolute'}>
              <ul className="relative bg-white w-max -left-2 border-8 border-white flex flex-col gap-2">
                {children.map((child) => (
                  <li key={child._id}>
                    <TextLink intent={'text-base'} to={child.slug} className={"leading-none"}>
                      {child.title}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
        )}
      </Popover>
    </Popover.Group>
  );
};
