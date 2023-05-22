// import {useRouteLoaderData} from '@remix-run/react';
// import {SanityImage} from 'sanity-image';

// export const Image = (props) => {
//   const {ENV} = useRouteLoaderData('root');
//   const projectId = ENV.SANITY_PUBLIC_PROJECT_ID;
//   const dataset = ENV.SANITY_PUBLIC_DATASET;
//   const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`;
//   return <SanityImage baseUrl={baseUrl} {...props} />;
// };

import {SanityImage} from 'sanity-image';

const projectId = 'yt08sdph';
// const dataset =
//   !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
//     ? 'staging'
//     : 'production';
const dataset = 'production';
const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`;

export const Image = (props) => {
  return <SanityImage baseUrl={baseUrl} {...props} />;
};
