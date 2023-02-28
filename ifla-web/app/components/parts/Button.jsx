import clsx from 'clsx';
import React from 'react';

const Button = ({type, className, children}) => {
  return (
    <button
      type={type || 'submit'}
      className={clsx(
        'bg-white text-black p-2 focus-visible:bg-zinc-300 focus:outline-none hover:bg-zinc-300',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
