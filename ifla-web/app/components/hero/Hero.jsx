import {cx} from 'class-variance-authority';
import React from 'react';
import {Layout} from '../parts/Layout';
import {ButtonLink} from '../parts/Links';
import {Text} from '../parts/Text';

const Hero = ({hero}) => {
  const {store, colour} = hero;
  return (
    <Layout as={'article'} intent={'banner'} colour={colour || '#e3e8ef'}>
      <div className={'relative w-full h-full'}>
        <div className={cx('relative w-full h-full flex flex-col gap-4 z-10 justify-between', 'md:justify-start')}>
          <Text as={'h2'} intent={'text-2xl'}>
            {store.title}
          </Text>
          <ButtonLink
            intent={'text-lg'}
            colour={'mono'}
            to={store.slug.shop.slug.fullUrl}
          >
            Buy
          </ButtonLink>
        </div>
        <div
          className={
            'absolute w-full h-full inset-0 flex justify-center items-center p-8'
          }
        >
          <img
            src={store.image}
            alt={store.title}
            className={'w-full h-full object-contain max-w-[20rem]'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
