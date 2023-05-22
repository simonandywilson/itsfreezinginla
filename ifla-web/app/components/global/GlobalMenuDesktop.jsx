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
const timeoutDuration = 20;

export const GlobalMenuDesktop = ({menu}) => {
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(useRandomColour(colours.dark));

  return (
    <div
      className={
        'h-full min-w-0 relative w-full p-4 flex items-center justify-between bg-white gap-4'
      }
    >
      <GlobalTitle />
      <div
        className={clsx('gap-8 flex-shrink-0 flex items-center', 'lg:gap-16')}
      >
        {/* Desktop Menu Items */}
        {menu.map((section) => {
          return (
            <Popover.Group
              as={"nav"}
              className={"hidden md:flex"}
              key={section._id || section._key}
            >
              <MenuItem title={section.name} children={section.children} />
            </Popover.Group>
          );
        })}
        <nav className={'h-8 md:h-10'}>
            <Basket />
          
        </nav>
        {/* Mobile Menu Button */}
        <div className={'flex-shrink-0 md:hidden w-[4rem]'}>
          <MotionButton
            className={
              'w-full focus:outline-none focus:border-none antialiased'
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

const MenuItem = ({title, children}) => {
  const triggerRef = useRef();
  const timeOutRef = useRef();

  const handleEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };
  const navigate = useNavigate();
  const singleton = children.length < 2;
  const {colours} = useRouteLoaderData(`root`);
  const randomColour = useRef(useRandomColour(colours.dark));

  return (
    <Popover className={'relative'}>
      {({open, close}) => (
        <div
          onMouseEnter={() => !singleton && handleEnter(open)}
          onMouseLeave={() => !singleton && handleLeave(open)}
        >
          <MotionButton
            className={
              'relative focus:outline-none focus:border-none antialiased px-2 py-1 z-50 overflow-hidden'
            }
            onClick={() => singleton && navigate(children[0].slug)}
            transition={{duration: 0}}
            initial={{color: '#000000'}}
            whileHover={{
              color: randomColour.current,
            }}
            whileFocus={{
              color: randomColour.current,
            }}
            ref={triggerRef}
          >
            <p className={'font-normal text-24'}>{title}</p>
            {open && (
              <div
                className={clsx(
                  'absolute inset-0 border-1 border-black',
                  {
                    'border-b-white': !singleton,
                  },
                )}
              ></div>
            )}
          </MotionButton>
          {!singleton && (
            <Popover.Panel className={'absolute z-40 left-2 '}>
              <div
                className={
                  'absolute w-full h-full top-0 -left-2 border-1 border-black bg-white -translate-y-0.5'
                }
              ></div>
              <ul className="relative  w-max -left-2 border-8 border-transparent flex flex-col gap-2">
                {children.map((child) => (
                  <li key={child._id}>
                    <TextLink
                      to={child.slug}
                      className={
                        'leading-none text-24 hover:no-underline focus:no-underline'
                      }
                      onClick={() => close()}
                    >
                      {child.title}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          )}
        </div>
      )}
    </Popover>
  );
};
