import React, {useRef} from 'react';
import {PortableText} from './PortableText';
import {Button} from './Button';

export const Footnote = ({content, colour}) => {
  const dialogRef = useRef(null);
  return (
    <div className={'relative inline font-sans'} style={{color: colour}}>
      <button
        onClick={() => dialogRef.current.show()}
        aria-label={'Open footnote'}
      >
        [1]
      </button>
      <dialog
        open={false}
        className={
          'absolute border-1 border-black bg-white mx-4 w-36 max-w-xs indent-0 flex p-2'
        }
        ref={dialogRef}
      >
        <PortableText text={content.footnote} intent={'footnote'} />
        <Button
          onClick={() => dialogRef.current.close()}
          intent={'text-sm'}
          aria-label={'Close footnote'}
          className={'h-max leading-none'}
          colour={'transparent'}
        >
          X
        </Button>
      </dialog>
    </div>
  );
};
