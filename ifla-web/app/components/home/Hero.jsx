import React from 'react';
import {Layout} from '../parts/Layout';
import {Text} from '../parts/Text';
import {Link} from '../parts/Link';
import { cx } from 'class-variance-authority';

const Hero = ({hero}) => {
	const { store, colour } = hero;
  return (
    <Layout tag={'article'} intent={'banner'} colour={colour || '#e3e8ef'}>
      <div className={'relative w-full h-full'}>
        <div className={cx('relative w-full h-full flex flex-col gap-4 z-10')}>
          <Text intent={'ui-6xl'}>{store.title}</Text>
          <Link
            intent={'button-2xl'}
            colour={'mono'}
            className={'flex-grow-0'}
            to={store.slug.shop.slug.fullUrl}
          >
            <Text intent={'ui-3xl'}>Buy</Text>
          </Link>
        </div>
        <div
          className={
            'absolute w-full h-full inset-0 flex justify-center items-center p-8'
          }
        >
          <img
            src={store.image}
            alt={store.title}
            className={'w-full h-full object-contain'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
