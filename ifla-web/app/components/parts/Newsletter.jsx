import {Form, useActionData, useTransition} from '@remix-run/react';
import {useEffect, useRef} from 'react';
import {Button} from '~/components/parts/ButtonNew';

export const Newsletter = ({title, titleIntent, buttonColour, onSuccess}) => {
  const actionData = useActionData();
  const transition = useTransition();
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const state = actionData?.res?.statusText
    ? 'success'
    : transition.submission
    ? 'submitting'
    : actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';

  useEffect(() => {
    if (state === 'error') {
      inputRef.current?.focus();
    }
    if (state === 'success') {
        formRef.current?.reset();
        localStorage.setItem('newsletter', true);
    }
  }, [state]);

  useEffect(() => {
    if (!onSuccess) {
      return;
    }
    if (state === 'success') {
      const timer = setTimeout(() => {
        onSuccess();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [onSuccess, state]);

  return (
    <Form method="post" aria-hidden={state === 'success'} ref={formRef} className={"text-18 xl:text-24"}>
      <h2 className={'mb-[1em]'} intent={titleIntent}>
        {title}
      </h2>
      <fieldset>
        <label className={"text-16 lg:text-18"}>
          email
        </label>
        <div className={'flex max-w-sm'}>
          <input
            aria-label="Email address"
            ref={inputRef}
            type="email"
            name="email"
            placeholder=""
            className={
              'flex-1 text-inherit bg-inherit rounded-none border-inherit border-b-2 py-2 placeholder-white mr-4 focus:outline-none'
            }
          />
          <Button
            type={'submit'}
            className={'button-18 md:button-24'}
            colour={"light"}
            aria-label={'Submit email'}
          >
            {state === 'idle' && 'Go on'}
            {state === 'submitting' && 'Subscribing...'}
            {state === 'success' && 'Subscribed!'}
            {state === 'error' && 'Error :('}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};
