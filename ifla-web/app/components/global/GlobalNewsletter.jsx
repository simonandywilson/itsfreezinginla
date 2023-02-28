import {Form, Link, useTransition, useActionData} from '@remix-run/react';
import {useEffect, useRef} from 'react';

const GlobalNewsletter = () => {
  const actionData = useActionData();
  const transition = useTransition();
  const state = transition.submission
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
        <h2>Sign up to our newsletter</h2>
        <fieldset>
          <input
            aria-label="Email address"
            aria-describedby="error-message"
            ref={inputRef}
            type="email"
            name="email"
            placeholder="email:"
            className={
              'text-white bg-black rounded-none border-b-2 p-y-2 border-dashed placeholder-white focus:border-solid focus:outline-none'
            }
          />
          <button type="submit" className={'bg-white text-black p-2'}>
            {state === 'submitting' ? 'Subscribing...' : 'Go on'}
          </button>
        </fieldset>

        <p id="error-message">
          {state === 'error' ? actionData.message : <>&nbsp;</>}
        </p>
      </Form>

      <div aria-hidden={state !== 'success'}>
        <h2 ref={successRef} tabIndex={-1}>
          You're subscribed!
        </h2>
      </div>
    </main>
  );
};

export default GlobalNewsletter;
