import {Link} from '@remix-run/react';
import React from 'react';
import {useRouteData} from 'remix-utils';
import PortableText from '../parts/PortableText';
import GlobalNewsletter from './GlobalNewsletter';

const GlobalFooter = () => {
  const {footer} = useRouteData(`root`);
  return (
    <footer className="bg-black p-4 mt-auto text-white flex justify-between gap-4">
      <div className={'flex-1 flex flex-col'}>
        {footer.footerLinks.map((link) => {
          return (
            <Link to={link.slug} key={link._id}>
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={'flex-1'}>
        <PortableText text={footer.footerText} />
      </div>
      <div className={'flex-1'}><GlobalNewsletter/></div>
    </footer>
  );
};

export default GlobalFooter;
