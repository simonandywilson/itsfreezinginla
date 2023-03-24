import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from 'react-router';
import {ArticleBlock} from '../../components/article/ArticleBlock';
import {Image} from '../../components/parts/Image';
import {Layout} from '../../components/parts/Layout';
import {BlockLink} from '../../components/parts/Links';
import {PortableText} from '../../components/parts/PortableText';
import {allArticlesDataQuery} from '../../lib/queries';

export const handle = {
  seo: {
    title: 'Articles',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [articles] = await Promise.all([getAllArticlesData(context)]);
  return defer({
    articles,
  });
}

export default function Articles() {
  const {articles} = useLoaderData();
  return (
    <Layout intent={'page'}>
      <Layout intent={'grid'} as={'ul'}>
        {articles.map((article) => {
          return (
            <li key={article._id} className={'w-full'}>
              <BlockLink to={article.slug}>
                <ArticleBlock article={article} />
              </BlockLink>
            </li>
          );
        })}
      </Layout>
    </Layout>
  );
}

async function getAllArticlesData({sanityClient}) {
  const articles = await sanityClient.fetch(allArticlesDataQuery);
  return articles;
}
