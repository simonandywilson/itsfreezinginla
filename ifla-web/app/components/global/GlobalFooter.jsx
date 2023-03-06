import {Link} from '~/components/parts/Link';
import {useRouteData} from 'remix-utils';
import {PortableText} from '../parts/PortableText';
import {GlobalNewsletter} from './GlobalNewsletter';
import {Text} from '../parts/Text';
import {cx} from 'class-variance-authority';
import {Layout} from '../parts/Layout';

export const GlobalFooter = () => {
  const {footer} = useRouteData(`root`);
  return (
    <Layout
      tag={'footer'}
      intent={'footer'}
      className={cx(
        'bg-black text-white flex justify-between flex-col gap-8',
        'md:flex-row md:gap-0',
      )}
    >
      <div className={cx('w-1/3 order-first flex flex-col', 'lg:px-4')}>
        <Text className={'text-white mb-[1em]'}>Pages</Text>
        {footer.footerLinks.map((link) => {
          return (
            <Link
              to={link.slug}
              key={link._id}
              colour={'light'}
              className={'w-max'}
            >
              <Text>{link.title}</Text>
            </Link>
          );
        })}
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
