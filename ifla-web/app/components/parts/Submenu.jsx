import React from 'react'
import {cx} from 'class-variance-authority';
import { Text } from './Text';

export const Submenu = ({title, children}) => {
  return (
    <div
      className={cx(
        'sticky top-header w-full border-b-[1px] border-black h-submenu bg-white px-4 z-40',
      )}
    >
      <div className={"flex gap-8 -translate-y-1"}>
        {title && <Text intent={'text-sm'}>{title}</Text>}
        <div className={'flex gap-4'}>{children}</div>
      </div>
    </div>
  );
}
