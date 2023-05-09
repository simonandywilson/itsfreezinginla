import {TextLink} from '~/components/parts/Links';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Newsletter} from '../parts/Newsletter';
import {useRouteLoaderData} from '@remix-run/react';
import clsx from 'clsx';

export const GlobalFooter = () => {
  const {footer} = useRouteLoaderData(`root`);
  return (
    <Layout as={'footer'} intent={'footer'}>
      <div
        className={clsx(
          'w-1/2 order-first flex flex-col text-white text-18',
          'xl:w-1/3 xl:px-8 ',
        )}
      >
        <p className={'mb-[1em]'}>Online</p>
        <div className={'flex flex-col gap-2'}>
          {footer.footerLinks.map((link) => {
            return (
              link.slug && (
                <TextLink to={link.slug} key={link._id || link._key}>
                  {link.title}
                </TextLink>
              )
            );
          })}
        </div>
      </div>
      <div
        className={clsx('flex-1 flex gap-16 flex-col', 'xl:flex-row xl:gap-0')}
      >
        <div
          className={clsx(
            'max-w-prose flex-1 order-last',
            'xl:order-first xl:pr-8 xl:w-1/2',
          )}
        >
          <PortableText text={footer.footerText} intent={'footer'} mono />
        </div>
        <div className={clsx('flex-1 order-first', 'xl:order-last xl:pr-8')}>
          <Newsletter title={'Sign up to our newsletter'} />
        </div>
      </div>
    </Layout>
  );
};
