import {GlobalTitle} from './GlobalTitle';
import {Basket} from '../parts/Basket';
import {Fragment, useRef} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {Text} from '../parts/Text';
import {useNavigate} from '@remix-run/react';
import {TextLink} from '../parts/Links';
import {motion} from 'framer-motion';
import {useRandomColour} from '~/hooks/useRandomColour';
import {useRouteData} from 'remix-utils';
const MotionButton = motion(Popover.Button);

export const GlobalMenuDesktop = ({ menu }) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <div className="relative w-full p-4 flex items-center justify-between bg-white">
      <GlobalTitle />
      <div className={'flex items-center gap-16'}>
        {/* Desktop Menu Items */}
        {menu.map((section) => {
          return (
            <Popover.Group
              as="nav"
              className="hidden md:flex"
              key={section._id || section._key}
            >
              <Popover className="relative">
                {({close}) => (
                  <MenuItem
                    title={section.name}
                    children={section.children}
                    close={close}
                  />
                )}
              </Popover>
            </Popover.Group>
          );
        })}
        <Basket />
        {/* Mobile Menu Button */}
        <div className={"flex-shrink-0 md:hidden w-20 text-right"}>
          <MotionButton
            className={'focus:outline-none focus:border-none antialiased focus-visible:underline '}
            transition={{duration: 0}}
            initial={{color: '#000000'}}
            whileHover={{
              color: randomColour.current,
            }}
            whileFocus={{
              color: randomColour.current,
            }}
          >
            {({open}) => <Text intent={'text-lg'} >{open ? 'X' : 'Menu'}</Text>}
          </MotionButton>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({title, children, close}) => {
  const navigate = useNavigate();
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));

  return (
    <>
      <MotionButton
        className={'focus:outline-none focus:border-none antialiased focus-visible:underline'}
        onClick={() => navigate(children[0].slug)}
        transition={{duration: 0}}
        initial={{color: '#000000'}}
        whileHover={{
          color: randomColour.current,
        }}
        whileFocus={{
          color: randomColour.current,
        }}
      >
        <Text intent={'text-base'} className={'font-normal'}>
          {title}
        </Text>
      </MotionButton>
      {children.length > 1 && (
        <Transition as={Fragment}>
          <Popover.Panel className={'absolute'} onMouseLeave={() => close()}>
            <ul className="relative bg-white w-max -left-2 border-8 border-white flex flex-col gap-2">
              {children.map((child) => (
                <li key={child._id}>
                  <TextLink
                    intent={'text-base'}
                    to={child.slug}
                    className={'leading-none'}
                    onClick={() => close()}
                  >
                    {child.title}
                  </TextLink>
                </li>
              ))}
            </ul>
          </Popover.Panel>
        </Transition>
      )}
    </>
  );
};
