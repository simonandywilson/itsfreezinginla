import {PortableText} from './PortableText';
import {Button} from './ButtonNew';
import {Popover} from '@headlessui/react';

export const Footnote = ({content, colour, footnoteIndexes, props}) => {
  return (
    <span className={'relative inline font-sans'} style={{color: colour}}>
      <Popover className={'relative inline'} as={'span'}>
        <Popover.Button className={'focus:outline-none'}>
          <span className={'text-18'}>
            [
            {footnoteIndexes.findIndex(
              (element) => element._key === content._key,
            ) + 1}
            ]
          </span>
        </Popover.Button>
        <Popover.Panel
          as={'span'}
          className={'absolute left-1/2 z-10 flex w-screen max-w-min'}
        >
          {({close}) => (
            <span
              className={
                'w-56 shrink bg-white p-2 border-black border-1 indent-0 mx-2 flex gap-2'
              }
            >
              <PortableText text={content.footnote} intent={'footnote'} />
              <Button
                aria-label={'Close footnote'}
                className={'text-18 h-max leading-none py-0'}
                colour={'transparent'}
                onClick={() => close()}
              >
                X
              </Button>
            </span>
          )}
        </Popover.Panel>
      </Popover>
    </span>
  );
};
