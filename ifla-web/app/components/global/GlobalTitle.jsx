import {Link} from '~/components/parts/Link';
import {useRouteData} from 'remix-utils';

const GlobalTitle = () => {
  const {settings} = useRouteData(`root`);
  return (
    <h1 className={'text-3xl '}>
      <Link to="/">
        <span className={'sr-only md:not-sr-only'}>{settings.title}</span>
        <span aria-hidden className={'md:hidden'}>
          {settings.shortTitle}
        </span>
      </Link>
    </h1>
  );
};

export default GlobalTitle;
