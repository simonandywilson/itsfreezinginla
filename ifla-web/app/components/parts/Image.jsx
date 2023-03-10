import {SanityImage, createBuilder} from 'sanity-image';

const builder = createBuilder({
  dataset: 'production',
  projectId: 'yt08sdph',
});

export const Image = (props) => {
  return <SanityImage builder={builder} {...props} />;
};
