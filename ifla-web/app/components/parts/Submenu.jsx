import React from 'react'
import {useLocation} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import {TextLink} from './Links';
import { Text } from './Text';

export const Submenu = ({title, children}) => {
  return (
    <div
      className={cx(
        'border-b-[1px] border-black h-6 bg-white px-4 gap-8 hidden',
        'md:flex',
      )}
    >
      <Text intent={'text-sm'} className={'leading-none -translate-y-1'}>
       {title}
      </Text>
      <div className={'flex -translate-y-1'}>
        {children}
      </div>
    </div>
  );
}
