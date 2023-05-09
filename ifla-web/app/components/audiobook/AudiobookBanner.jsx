import React from 'react';
import {Layout} from '../parts/Layout';
import clsx from 'clsx';

export const AudiobookBanner = ({audiobook}) => {
  const {soundcloudLink} = audiobook;

  const getTrackIdRegex = /\/tracks\/(\d+)/;
  const getTrackId = soundcloudLink.match(getTrackIdRegex);

  return (
    <Layout as={'article'} intent={'banner'}>
      <Layout
        intent={'grid'}
        as={'div'}
        className={clsx('gap-4 h-min items-center', 'lg:gap-8 lg:flex-1')}
      >
        <div
          className={clsx(
            'h-min w-full col-span-1 columns-1 gap-8 justify-self-center',
            'xl:col-start-2',
            '3xl:col-span-2 3xl:col-start-2 3xl:max-w-[40vw]',
          )}
        >
          <div className={'aspect-square'}>
            {getTrackId[1] && (
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${getTrackId[1]}&color=%23ded3c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
              ></iframe>
            )}
          </div>
        </div>
      </Layout>
    </Layout>
  );
};
