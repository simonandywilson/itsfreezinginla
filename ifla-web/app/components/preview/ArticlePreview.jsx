import {definePreview} from '@sanity/preview-kit';
import React from 'react';
import {Article} from '../article/Article';
import {ExitPreview} from './ExitPreview';

export const ArticlePreview = ({query, params}) => {
  const usePreview = definePreview({
    projectId: 'yt08sdph',
    dataset: 'production',
  });
  const article = usePreview(
    null,
    query,
    params
  );
  return (
    <>
      <Article article={article} />
      {/* <ExitPreview /> */}
    </>
  );
};
