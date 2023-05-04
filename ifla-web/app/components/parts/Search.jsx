import {Form, useSearchParams} from '@remix-run/react';
import clsx from 'clsx';
import React, {useRef, useState} from 'react';
import {Button} from './Button';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const defaultQuery = searchParams.get('search-query');
  const formRef = useRef(null);
  return (
    <>
      <button
        aria-label={'Search articles'}
        className={clsx(
          'h-full mr-2 antialiased flex-1 flex gap-1 items-center',
          'sm:hidden',
        )}
        onClick={() => setVisible((prevState) => !prevState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 20"
          className={'h-5 inline-block stroke-2 stroke-black fill-none'}
          vectorEffect="non-scaling-stroke"
        >
          <circle cx="8.58" cy="8.37" r="7.46" />
          <line x1="14.15" y1="13.97" x2="19.26" y2="19.09" />
        </svg>
        <span>Search</span>
      </button>
      <Form
        className={clsx(
          'absolute pr-4 w-full h-full z-50 bg-white',
          {'hidden sm:block ': !visible},
          'sm:relative sm:block sm:pr-0',
          'md:w-[50vw]',
          'xl:w-auto',
        )}
        ref={formRef}
      >
        <div className={'h-full flex items-center'}>
          <label
            htmlFor={'search-query'}
            className={'leading-none mr-4 antialiased flex gap-1 items-center'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 20"
              className={'h-5 inline-block stroke-2 stroke-black fill-none'}
              vectorEffect="non-scaling-stroke"
            >
              <circle cx="8.58" cy="8.37" r="7.46" />
              <line x1="14.15" y1="13.97" x2="19.26" y2="19.09" />
            </svg>
            <span>Search</span>
          </label>
          <input
            type={'search-query'}
            name={'search-query'}
            id={'search-query'}
            className={clsx(
              'w-full h-8 appearance-none  text-inherit placeholder-inherit border-b-1 px-2 border-black',
              ' focus:outline-none',
            )}
            defaultValue={defaultQuery}
          />
          <Button className={'ml-2 px-2 h-8'} type={'submit'}>
            Go
          </Button>
          <Button
            colour={'transparent'}
            className={clsx('h-full px-3', {'sm:opacity-0': !defaultQuery})}
            onClick={() => {
              setSearchParams({});
              formRef.current?.reset();
              setVisible(false);
            }}
          >
            <span className={'sm:hidden'}>Close</span>
            <span className={'hidden sm:inline-block'}>Reset</span>
          </Button>
        </div>
      </Form>
    </>
  );
};
