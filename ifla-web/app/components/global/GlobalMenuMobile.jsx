import {useLocation, useTransition} from '@remix-run/react';
import {useEffect, useRef, useState} from 'react';
import {TextLink} from '../parts/Links';

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

const MenuItem = ({ children, title }) => {
  const {pathname} = useLocation();
  return (
    <ul>
      <li>
        <TextLink
          to={children[0].slug}
          className={'text-32'}
          focused={
            children.length === 0 && pathname.slice(1) === children[0].slug
              ? true
              : false
          }
        >
          {title}
        </TextLink>
        <ul className={'ml-8'}>
          {children.length > 1 &&
            children.map((page) => (
              <li key={page._id}>
                <TextLink
                  to={page.slug}
                  className={'text-32'}
                  focused={pathname.slice(1) === page.slug ? true : false}
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
