import {Link} from '~/components/parts/Link';
import {useRouteData} from 'remix-utils';
import {Text} from '../parts/Text';

export const GlobalTitle = () => {
 const {settings} = useRouteData(`root`);
 return (
   <Text tag={'h1'} intent={'ui-3xl'}>
     <Link to="/">
       <span className={'sr-only md:not-sr-only'}>{settings.title}</span>
       <span aria-hidden className={'md:hidden'}>
         {settings.shortTitle}
       </span>
     </Link>
   </Text>
 );
}
