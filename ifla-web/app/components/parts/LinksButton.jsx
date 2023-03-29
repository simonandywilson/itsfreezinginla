import {cva} from 'class-variance-authority';
import {Link} from '@remix-run/react';
import {useRandomColour} from '../../hooks/useRandomColour';
import {useRouteData} from 'remix-utils';
import {motion} from 'framer-motion';
import {useRef} from 'react';

const MotionLink = motion(Link);

const buttonLinkStyle = cva(
  'cursor-pointer w-max focus:outline-none focus:border-none antialiased whitespace-nowrap flex-grow-0 leading-none inline-block',
  {
    variants: {
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
      colour: 'default',
    },
  },
);

export const BlockLink = ({children, to}) => {
  return (
    <Link to={to} className={'group focus:outline-none focus:border-none'}>
      {children}
    </Link>
  );
};

export const ButtonLink = ({children, to, className, colour, ...props}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));

  return (
    <MotionLink
      to={to}
      className={buttonLinkStyle({colour, className})}
      transition={{duration: 0}}
      initial={{background: '#000000'}}
      whileHover={{
        background: randomColour.current,
      }}
      whileFocus={{
        background: randomColour.current,
      }}
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export const ButtonLinkExternal = ({
  children,
  to,
  className,
  colour,
  ...props
}) => {
  const {colours} = useRouteData(`root`);
  const randomColour = useRef(useRandomColour(colours));
  return (
    <motion.a
      href={to}
      className={buttonLinkStyle({colour, className})}
      transition={{duration: 0}}
      initial={{background: '#000000'}}
      whileHover={{
        background: randomColour.current,
      }}
      whileFocus={{
        background: randomColour.current,
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
};
