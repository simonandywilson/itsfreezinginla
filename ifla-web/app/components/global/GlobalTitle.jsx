import {useRouteData} from 'remix-utils';
import {TextLink} from '../parts/Links';

export const GlobalTitle = () => {
  const {settings} = useRouteData(`root`);
  return (
    <TextLink as={'h1'} to={'/'} intent={'text-lg'}>
      <span className={'sr-only md:not-sr-only'}>{settings.title}</span>
      <span aria-hidden className={'md:hidden'}>
        {settings.shortTitle}
      </span>
    </TextLink>
  );
};
