import React from 'react'
import { Content } from '../content/Content';
import { Layout } from '../parts/Layout';

export const Page = ({page, articles, topics}) => {
  return (
    <Layout intent={'page'}>
      {page?.content && page.content.map((content) => {
        return <Content key={content._id || content._key} content={content} articles={articles} topics={topics} />;
      })}
    </Layout>
  );
}
