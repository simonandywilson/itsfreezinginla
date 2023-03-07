import {useTransition} from '@remix-run/react';
import {useEffect, useState, useRef} from 'react';
import {GlobalMenuItemMobile} from './GlobalMenuItemMobile';

export const GlobalMenuMobile = ({menu, close}) => {
  const transition = useTransition();
  const [state, setState] = useState('idle');
  const lastState = usePrevious(state);

  useEffect(() => {
    setState(transition.state);
  }, [transition]);

  useEffect(() => {
    if (!lastState) {
      return;
    }
    if (lastState === 'loading') {
      close();
    }
  }, [lastState, state]);

  return menu.map((section) => {
    return (
      <GlobalMenuItemMobile
        key={section._id || section._key}
        title={section.name}
        children={section.children}
      />
    );
  });
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
