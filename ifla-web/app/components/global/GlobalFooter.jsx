import {cx} from 'class-variance-authority';
import {useRouteData} from 'remix-utils';
import {TextLink} from '~/components/parts/Links';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Text} from '../parts/Text';
import {GlobalNewsletter} from './GlobalNewsletter';

export const GlobalFooter = () => {
  const {footer} = useRouteData(`root`);
  return (
    <Layout as={'footer'} intent={'footer'}>
      <div
        className={cx('w-1/2 order-first flex flex-col', 'lg:w-1/3', 'lg:px-8')}
      >
        <Text intent={'text-sm'} className={'text-white mb-[1em]'}>
          Pages
        </Text>
        <div className={'flex flex-col gap-2'}>
          {footer.footerLinks.map((link) => {
            return (
              <TextLink
                to={link.slug}
                key={link._id || link._key}
                intent={'text-sm'}
              >
                {link.title}
              </TextLink>
            );
          })}
        </div>
      </div>
      <div className={cx('flex-1 flex gap-8 flex-col', 'lg:flex-row lg:gap-0')}>
        <div
          className={cx(
            'max-w-prose flex-1 order-last',
            'lg:order-first lg:pr-4 lg:w-1/2',
          )}
        >
          <PortableText text={footer.footerText} intent={'footer'} />
        </div>
        <div className={cx('flex-1 order-first', 'lg:order-last lg:pr-4')}>
          <GlobalNewsletter />
        </div>
      </div>
    </Layout>
  );
};
