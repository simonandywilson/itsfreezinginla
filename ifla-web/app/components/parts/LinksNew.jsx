import {Link} from '@remix-run/react';
import {useRandomColour} from '../../hooks/useRandomColour';
import {useRouteData} from 'remix-utils';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import clsx from 'clsx';

const MotionLink = motion(Link);

export const TextLink = ({children, to, className, focused, ...props}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <MotionLink
      to={to}
      className={clsx(
        'w-max leading-none focus:outline-none focus:underline-none focus:border-none ',
        className,
      )}
      initial={{color: 'inherit'}}
      animate={{
        color: focused ? randomColour.current : 'inherit',
      }}
      whileHover={{
        color: !focused && randomColour.current,
      }}
      whileFocus={{
        color: randomColour.current,
      }}
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export const IconLink = ({children, to}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <MotionLink
      to={to}
      className={'focus:outline-none focus:border-none'}
      transition={{duration: 0}}
      initial={{stroke: '#000000'}}
      whileHover={{
        stroke: randomColour.current,
      }}
      whileFocus={{
        stroke: randomColour.current,
      }}
    >
      {children}
    </MotionLink>
  );
};

export const LinkExternal = ({
  href,
  target,
  rel,
  className,
  children,
  mono,
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return mono ? (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  ) : (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      transition={{duration: 0}}
      initial={{color: randomColour.current}}
      whileHover={{
        color: 'inherit',
      }}
      whileFocus={{
        color: 'inherit',
      }}
    >
      {children}
    </motion.a>
  );
};
