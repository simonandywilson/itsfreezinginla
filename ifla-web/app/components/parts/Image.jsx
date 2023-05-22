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
