import {cx, cva} from 'class-variance-authority';
import {Link} from '@remix-run/react';
import {Text} from './Text';
import {useRandomColour} from '../../hooks/useRandomColour';
import {useRouteData} from 'remix-utils';
import {motion} from 'framer-motion';
import {useRef} from 'react';

const MotionLink = motion(Link);

const linkStyle = cva(
  'w-max leading-none focus:outline-none focus:border-none focus-visible:underline',
  {
    variants: {
      intent: {
        'text-sm': ['button-sm'],
        'text-base': ['button-base'],
        'text-lg': ['button-lg'],
        'text-xl': ['button-xl'],
        'text-2xl': ['button-2xl'],
      },
      colour: {
        default: ['bg-black', 'text-white'],
        mono: [
          'bg-black',
          'text-white',
          'hover:bg-white',
          'hover:text-black',
          'focus-visible:bg-white',
          'focus-visible:text-black',
        ],
      },
    },
    defaultVariants: {
      intent: 'text-base',
      colour: 'default',
    },
  },
);

export const TextLink = ({
  intent,
  children,
  to,
  className,
  classNameChild,
  as,
  focused,
  ...props
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  const ElementTag = `${as || 'span'}`;
  return (
    <MotionLink
      to={to}
      className={linkStyle(className)}
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
      <ElementTag className={classNameChild}>{children}</ElementTag>
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
