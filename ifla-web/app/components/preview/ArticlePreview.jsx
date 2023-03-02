import React from 'react'
import { Article } from '../article/Article';
import { ExitPreview } from './ExitPreview';


export const ArticlePreview = ({usePreview}) => {
  const article = usePreview(null, query);
  return (
    <>
      <Article article={article} />
      <ExitPreview />
    </>
  );
};


