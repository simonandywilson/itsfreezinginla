import React from 'react';
import {Layout} from '../parts/Layout';
import clsx from 'clsx';
import {Topic} from '../parts/Topic';

export const AudiobookBanner = ({audiobook}) => {
  const {topic, headline, author, illustrator} = audiobook;
  return (
    <Layout as={'article'} intent={'banner'}>
      <Layout
        intent={'grid'}
        as={'div'}
        className={clsx('gap-4 h-min items-center', 'lg:gap-8 lg:flex-1')}
      >
        {/* <div>
          <h2 className={clsx('break-words', 'text-32 md:text-56 lg:text-68')}>
            {topic && <Topic topic={topic} />}
            {headline ? headline : 'Untitled article'}
          </h2>
        </div> */}
        <div
          className={clsx(
            'h-min w-full col-span-1 columns-1 gap-8 justify-self-center',
            'xl:col-start-2',
            '3xl:col-span-2 3xl:col-start-2 3xl:max-w-[40vw]',
          )}
        >
          <div className={'aspect-square'}>
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033139458&color=%23ded3c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
      </Layout>
      {/* <div>
        <address className={'text-18 md:text-24 not-italic'}>
          Written by {author?.name}
          <br />
          Illustrated by {illustrator?.name}
        </address>
      </div> */}
    </Layout>
  );
};
