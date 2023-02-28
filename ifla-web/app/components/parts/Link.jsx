import {Link as RemixLink} from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';

const Link = ({children, to, className}) => {
  return (
    <RemixLink
      to={to}
      className={clsx(
        'focus-visible:underline focus:border-none focus:outline-none',
        className,
      )}
    >
      {children}
    </RemixLink>
  );
};

export default Link;
