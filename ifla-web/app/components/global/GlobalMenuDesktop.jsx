import {Popover} from '@headlessui/react';
import {useNavigate, useRouteLoaderData} from '@remix-run/react';
import clsx from 'clsx';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import {useRandomColour} from '~/hooks/useRandomColour';
import {Basket} from '../parts/Basket';
import {TextLink} from '../parts/Links';
import {GlobalTitle} from './GlobalTitle';
const MotionButton = motion(Popover.Button);

export const GlobalMenuDesktop = ({menu}) => {
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <div
      className={
        'h-full min-w-0 relative w-full p-4 flex items-center justify-between bg-white gap-4'
      }
    >
      <GlobalTitle />
      <div className={clsx('flex-shrink-0 flex items-center gap-16')}>
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
        <nav className={'h-10'}>
          <Basket />
        </nav>
        {/* Mobile Menu Button */}
        <div className={'flex-shrink-0 md:hidden w-[4rem]'}>
          <MotionButton
            className={
              'w-full focus:outline-none focus:border-none antialiased focus-visible:underline '
            }
            transition={{duration: 0}}
            initial={{color: '#000000'}}
            whileHover={{
              color: randomColour.current,
            }}
            whileFocus={{
              color: randomColour.current,
            }}
          >
            {({open}) => (
              <>
                {open && (
                  <span className={'w-full block text-24 text-center'}>X</span>
                )}
                {!open && (
                  <span className={'w-full block text-24 text-right'}>
                    Menu
                  </span>
                )}
              </>
            )}
          </MotionButton>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({title, children, close}) => {
  const navigate = useNavigate();
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(useRandomColour(colours));

  return (
    <>
      <MotionButton
        className={
          'focus:outline-none focus:border-none antialiased focus-visible:underline'
        }
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
        <p className={'font-normal text-24'}>{title}</p>
      </MotionButton>
      {children.length > 1 && (
        <Popover.Panel className={'absolute z-50'} onMouseLeave={() => close()}>
          <ul className="relative bg-white w-max -left-2 border-8 border-white flex flex-col gap-2">
            {children.map((child) => (
              <li key={child._id}>
                <TextLink
                  to={child.slug}
                  className={'leading-none text-24'}
                  onClick={() => close()}
                >
                  {child.title}
                </TextLink>
              </li>
            ))}
          </ul>
        </Popover.Panel>
      )}
    </>
  );
};
