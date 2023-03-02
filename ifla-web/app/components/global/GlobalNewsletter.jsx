import {Form, useActionData, useTransition} from '@remix-run/react';
import {useEffect, useRef} from 'react';
import {Button} from '~/components/parts/Button';

const GlobalNewsletter = () => {
  const actionData = useActionData();
  const transition = useTransition();
  const state = actionData?.res?.statusText
    ? 'success'
    : transition.submission
    ? 'submitting'
    : actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';

  const inputRef = useRef(null);
  const successRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (state === 'error') {
      inputRef.current?.focus();
    }

    if (state === 'idle' && mounted.current) {
      inputRef.current?.select();
    }

    if (state === 'success') {
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [state]);

  return (
    <main>
      <Form replace method="post" aria-hidden={state === 'success'}>
        <h2 className={'mb-[1em]'}>Sign up to our newsletter</h2>
        <fieldset>
          <label>email:</label>
          <div>
            <input
              aria-label="Email address"
              aria-describedby="error-message"
              ref={inputRef}
              type="email"
              name="email"
              placeholder=""
              className={
                'text-white bg-black rounded-none border-b-2 py-2 border-dashed placeholder-white mr-2 focus:border-solid focus:outline-none'
              }
            />
            <Button type={'submit'} intent={'medium'} colour={'light'}>
              {state === 'idle' && 'Go on'}
              {state === 'submitting' && 'Subscribing...'}
              {state === 'success' && 'Subscribed!'}
              {state === 'error' && 'Error :('}
            </Button>
          </div>
        </fieldset>
      </Form>
    </main>
  );
};

export default GlobalNewsletter;
