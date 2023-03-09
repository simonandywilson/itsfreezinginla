import {cx, cva} from 'class-variance-authority';
import {Link} from '@remix-run/react';
import {Text} from './Text';
import {useRandomColour} from '../../hooks/useRandomColour';
import {useRouteData} from 'remix-utils';
import {motion} from 'framer-motion';
import {useRef} from 'react';

const MotionLink = motion(Link);

export const TextLink = ({
  intent,
  children,
  to,
  className,
  as,
  focused,
  onClick,
}) => {
  const {colours} = useRouteData(`root`);
  const colour = useRef(useRandomColour(colours));
  return (
    <MotionLink
      to={to}
      className={cx('link', className)}
      initial={{color: 'inherit'}}
      animate={{
        color: focused ? colour.current : 'inherit',
      }}
      whileHover={{
        color: !focused && colour.current,
      }}
      whileFocus={{
        color: colour.current,
      }}
      onClick={onClick}
    >
      <Text intent={intent} as={as}>
        {children}
      </Text>
    </MotionLink>
  );
};

const buttonStyle = cva(
  'cursor-pointer w-max focus:outline-none focus:border-none antialiased whitespace-nowrap flex-grow-0 leading-none inline-block',
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

export const BlockLink = ({children, to}) => {
  return (
    <Link to={to} className={'focus:outline-none focus:border-none'}>
      {children}
    </Link>
  );
};

export const ButtonLink = ({intent, children, to, className, colour}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));

  return colour === 'mono' ? (
    <Link to={to} className={buttonStyle({intent, colour, className})}>
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </Link>
  ) : (
    <MotionLink
      to={to}
      className={buttonStyle({intent, colour, className})}
      transition={{duration: 0}}
      initial={{background: '#000000'}}
      whileHover={{
        background: randomColour.current,
      }}
      whileFocus={{
        background: randomColour.current,
      }}
    >
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </MotionLink>
  );
};

export const ButtonLinkExternal = ({
  intent,
  children,
  to,
  className,
  colour,
  target,
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return colour === 'mono' ? (
    <a
      href={to}
      className={buttonStyle({intent, colour, className})}
      target={target}
    >
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </a>
  ) : (
    <motion.a
      href={to}
      className={buttonStyle({intent, colour, className})}
      target={target}
      transition={{duration: 0}}
      initial={{background: '#000000'}}
      whileHover={{
        background: randomColour.current,
      }}
      whileFocus={{
        background: randomColour.current,
      }}
    >
      <Text intent={intent} className={'inline-block'}>
        {children}
      </Text>
    </motion.a>
  );
};

export const LinkExternal = ({href, target, rel, className, children}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
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
