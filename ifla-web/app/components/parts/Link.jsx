import {Link as RemixLink} from '@remix-run/react';
import { cx } from 'class-variance-authority';

const Link = ({children, to, className}) => {
  return (
    <RemixLink
      to={to}
      className={cx(
        'focus-visible:underline focus:border-none focus:outline-none',
        className,
      )}
    >
      {children}
    </RemixLink>
  );
};

export default Link;
