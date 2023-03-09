import {useTransition} from '@remix-run/react';
import { useEffect, useState, useRef } from 'react';
import {useLocation} from '@remix-run/react';
import {cx} from 'class-variance-authority';
import {TextLink} from '../parts/Links';
import {Text} from '../parts/Text';

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
      <MenuItem
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

const MenuItem = ({title, children}) => {
  const {pathname} = useLocation();
  return (
    <ul>
      <li>
        <Text intent={'text-lg'}>{title}</Text>
        <ul className={'ml-4'}>
          {children.map((page) => (
            <li key={page._id}>
              <TextLink
                to={page.slug}
                intent={'text-lg'}
                className={cx(
                  pathname.slice(1) === page.slug ? 'text-accent' : '',
                )}
              >
                {page.title}
              </TextLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};