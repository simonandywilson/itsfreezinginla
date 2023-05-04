import React from 'react';
import {cx} from 'class-variance-authority';

export const Submenu = ({children, className}) => {
  return (
    <nav
      className={cx(
        'w-full h-submenu bg-white pl-4 z-40 flex gap-4 text-16 items-center sm:text-18',
        className,
      )}
    >
      {children}
    </nav>
  );
};
