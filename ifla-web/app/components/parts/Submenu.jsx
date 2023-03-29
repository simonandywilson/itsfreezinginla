import React from 'react'
import {cx} from 'class-variance-authority';

export const Submenu = ({ children, className}) => {
  return (
    <nav
      className={cx(
        'sticky top-header w-full  h-submenu bg-white px-4 z-40', className
      )}
    >
      <div className={"-translate-y-1 flex gap-4"}>
        {children}
      </div>
    </nav>
  );
}
