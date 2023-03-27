import {Form, useSearchParams} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import React, { useRef } from 'react';
import {Button} from './Button';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultQuery = searchParams.get('search-query');
  const formRef = useRef(null);
  return (
    <div>
      <Form className={'w-full flex gap-2 '} ref={formRef}>
        <label htmlFor={'search-query'}>Search</label>
        <input
          type={'search-query'}
          name={'search-query'}
          id={'search-query'}
          className={cx(
            'w-full appearance-none bg-transparent text-inherit placeholder-inherit border-b-1 border-black -translate-y-[2px]',
            ' focus:outline-none',
          )}
          defaultValue={defaultQuery}
        />
        <Button intent={'text-sm'} type={'submit'}>
          Go
        </Button>
        <Button
          intent={'text-sm'}
          colour={'transparent'}
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
