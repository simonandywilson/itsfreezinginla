import Link from '~/components/parts/Link';
import {useRouteData} from 'remix-utils';
import PortableText from '../parts/PortableText';
import GlobalNewsletter from './GlobalNewsletter';

const GlobalFooter = () => {
  const {footer} = useRouteData(`root`);
  return (
    <footer className="bg-black p-4 mt-auto text-white flex justify-between gap-4 flex-col sm:flex-row">
      <div className={'flex-1 flex flex-col min-w-[10rem]'}>
        {footer.footerLinks.map((link) => {
          return (
            <Link to={link.slug} key={link._id}>
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={'flex gap-4 justify-between flex-col md:flex-row'}>
        <div className={'flex-1 order-last md:order-first'}>
          <PortableText text={footer.footerText} />
        </div>
        <div className={'flex-1 order-first md:order-last'}>
          <GlobalNewsletter />
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
