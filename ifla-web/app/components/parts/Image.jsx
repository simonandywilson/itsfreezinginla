import {SanityImage, createBuilder} from 'sanity-image';

const builder = createBuilder({
  dataset: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'staging' : 'production',
  projectId: 'yt08sdph',
});

export const Image = (props) => {
  return <SanityImage builder={builder} {...props} />;
};
