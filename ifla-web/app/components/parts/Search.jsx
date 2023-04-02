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
          'h-full py-1 aspect-square mr-2 antialiased',
          'sm:hidden',
        )}
        onClick={() => setVisible((prevState) => !prevState)}
      >
        <svg
          width="23"
          height="25"
          viewBox="0 0 23 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={'w-full h-full'}
        >
          <path
            d="M18.7239 10.1747C18.7239 15.049 14.7592 19.0057 9.86195 19.0057C4.96466 19.0057 1 15.049 1 10.1747C1 5.30048 4.96466 1.34375 9.86195 1.34375C14.7592 1.34375 18.7239 5.30048 18.7239 10.1747Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M21.9995 23.3439L15.3943 16.7587"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </button>
      <Form
        className={clsx(
          'absolute pr-4 w-full h-full bg-white z-10',
          {'hidden sm:block ': !visible},
          'sm:relative sm:block sm:w-auto sm:pr-0',
        )}
        ref={formRef}
      >
        <div className={'h-full flex items-center'}>
          <label
            htmlFor={'search-query'}
            className={'leading-none mr-4 antialiased'}
          >
            Search
          </label>
          <input
            type={'search-query'}
            name={'search-query'}
            id={'search-query'}
            className={clsx(
              'w-full h-full appearance-none  text-inherit placeholder-inherit border-b-1 px-2 border-black',
              ' focus:outline-none',
            )}
            defaultValue={defaultQuery}
          />
          <Button className={'h-full px-3'} type={'submit'}>
            Go
          </Button>
          <Button
            colour={'transparent'}
            className={'h-full px-3'}
            onClick={() => {
              setSearchParams({});
              formRef.current?.reset();
              setVisible(false);
            }}
          >
            X
          </Button>
        </div>
      </Form>
    </>
  );
};
