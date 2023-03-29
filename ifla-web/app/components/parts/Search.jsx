import {Form, useSearchParams} from '@remix-run/react';
import clsx from 'clsx';
import React, { useRef } from 'react';
import {Button} from './ButtonNew';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultQuery = searchParams.get('search-query');
  const formRef = useRef(null);
  return (
    <div>
      <Form className={'w-full h-full flex items-center'} ref={formRef}>
        <label htmlFor={'search-query'} className={'leading-none mr-4'}>
          Search
        </label>
        <input
          type={'search-query'}
          name={'search-query'}
          id={'search-query'}
          className={clsx(
            'w-full h-full appearance-none  text-inherit placeholder-inherit  bg-zinc-200 px-2',
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
          }}
        >
          X
        </Button>
      </Form>
    </div>
  );
};
