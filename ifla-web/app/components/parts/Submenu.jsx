import React from 'react'
import {cx} from 'class-variance-authority';

export const Submenu = ({ children}) => {
  return (
    <div
      className={cx(
        'sticky top-header w-full border-b-[1px] border-black h-submenu bg-white px-4 z-40',
      )}
    >
      <div className={"-translate-y-1 flex gap-4"}>
        {children}
      </div>
    </div>
  );
}
