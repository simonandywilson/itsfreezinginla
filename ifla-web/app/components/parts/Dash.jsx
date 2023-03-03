import {cx} from 'class-variance-authority';
import React from 'react';

export const Dash = ({className}) => {
  return (
    <div
      className={cx('w-full border-b-2 border-dotted border-black select-none', className)}
      aria-hidden="true"
    ></div>
  );
};
