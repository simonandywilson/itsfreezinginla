import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from 'react-router';
import {ArticleBlock} from '../../components/article/ArticleBlock';
import {Image} from '../../components/parts/Image';
import {Layout} from '../../components/parts/Layout';
import {BlockLink, TextLink} from '../../components/parts/Links';
import {Submenu} from '../../components/parts/Submenu';
import {
  allArticlesDataQuery,
  allTopicsDataQuery,
  allArticlesDataQueryFiltered,
} from '../../lib/queries';
import {Search} from '../../components/parts/Search';
import {Dialog} from '@headlessui/react';
import {Form, Link, useSearchParams, useSubmit} from '@remix-run/react';
import {Fragment, useRef, useState} from 'react';
import {Button} from '../../components/parts/Button';
import {Text} from '../../components/parts/Text';

export const handle = {
  seo: {
    title: 'Articles',
  },
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context, request}) {
  const [articles, topics] = await Promise.all([
    getAllArticlesData(context, request),
    getAllTopicsData(context),
  ]);
  return defer({
    articles,
    topics,
  });
}

export default function Articles() {
  const {articles, topics} = useLoaderData();
  const [text, setText] = useState(false);

  return (
    <Layout intent={'home'}>
      <Submenu>
        <FilterDialog topics={topics} />
        <Button
          colour={'transparent'}
          intent={'text-sm'}
          onClick={() => setText((prevState) => !prevState)}
        >
          {text ? 'Block' : 'Text'} View
        </Button>
        <Search />
      </Submenu>
      <Layout intent={'grid'} as={'ul'}>
        {!text &&
          Object.keys(articles).map((keyName, i) =>
            articles[keyName].map((article) => {
              return (
                <li key={article._id} className={'w-full'}>
                  <BlockLink to={article.slug}>
                    <ArticleBlock article={article} />
                  </BlockLink>
                </li>
              );
            }),
          )}
      </Layout>
      {text && (
        <Layout intent={'columns'}>
          <div className={'grid grid-cols-2'}>
            {Object.keys(articles).map((keyName, i) => (
              <Fragment key={keyName + i}>
                <Text
                  as={'h3'}
                  className={'col-start-2 mb-[1em]'}
                  intent={'text-2xl'}
                >
                  {keyName}
                </Text>
                {articles[keyName].map((article) => {
                  return (
                    <div
                      key={article._id}
                      className={'col-span-2 grid grid-cols-2 '}
                    >
                      <Text
                        intent={'text-sm'}
                      >{`[${article.topic.topic}]`}</Text>
                      <TextLink to={article.slug} className={'w-auto'}>
                        {article.headline}
                      </TextLink>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </Layout>
      )}
    </Layout>
  );
}

const FilterDialog = ({topics}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultQuery = searchParams.getAll('topic-query');
  const submit = useSubmit();
  const formRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    if (formRef) {
      submit(formRef.current, {replace: true});
    }
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={'w-60 flex gap-2 justify-between'}>
        <Button
          colour={'transparent'}
          intent={'text-sm'}
          onClick={() => setIsOpen(true)}
        >
          Topic Filter
        </Button>
        {isOpen && (
          <Button
            colour={'transparent'}
            intent={'text-sm'}
            onClick={() => setIsOpen(false)}
          >
            X
          </Button>
        )}
      </div>

      <Dialog
        as="div"
        open={isOpen}
        className={'relative z-10'}
        onClose={closeModal}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto pt-header-submenu">
          <div className="flex max-h-full pb-4 pl-4">
            <Dialog.Panel
              className="w-60 transform overflow-hidden bg-white border-8 border-white flex flex-col"
              aria-label="Topic filter"
            >
              <Button
                intent={'text-sm'}
                className={'ml-auto'}
                onClick={() => {
                  setSearchParams({});
                  formRef.current?.reset();
                }}
              >
                Reset
              </Button>
              <div className={'overflow-scroll'}>
                <Form ref={formRef} id="topic-query" onChange={handleChange}>
                  <ul className={'flex flex-col gap-2 '}>
                    {topics.map((topic) => (
                      <Topic
                        key={topic._id}
                        topic={topic}
                        defaultQuery={defaultQuery}
                      />
                    ))}
                  </ul>
                </Form>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const Topic = ({topic, defaultQuery}) => {
  return (
    <li>
      <input
        type="checkbox"
        id={topic._id}
        value={topic.topic}
        name={'topic-query'}
        className={'hidden peer'}
        defaultChecked={defaultQuery.includes(topic.topic)}
      />
      <label
        htmlFor={topic._id}
        className={
          'h-12 cursor-pointer py-1 flex gap-4 items-center peer-checked:underline hover:text-red-500'
        }
      >
        <span className={'flex-shrink-0 inline-block h-full'}>
          <Image
            id={topic.image._id}
            width={200}
            alt={`Topic: ${topic.topic}`}
            sizes={'200px'}
            className={'h-full w-full group-hover/topic:invisible'}
            aria-hidden={true}
          />
        </span>
        <span> {topic.topic}</span>
      </label>
    </li>
  );
};

async function getAllArticlesData({sanityClient}, request) {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search).get('search-query');
  const topic = new URLSearchParams(url.search).getAll('topic-query');

  const rawArticles = await sanityClient.fetch(
    topic === undefined || topic.length == 0
      ? allArticlesDataQuery
      : allArticlesDataQueryFiltered,
    {
      search: `${search || ''}*`,
      topic: topic,
    },
  );

  const articles = {};
  rawArticles.forEach((d) => {
    const date = new Date(d.date);
    const year = date.getFullYear();
    if (!articles[year]) {
      articles[year] = [];
    }
    articles[year].push(d);
  });

  return articles;
}

async function getAllTopicsData({sanityClient}) {
  const topics = await sanityClient.fetch(allTopicsDataQuery);
  return topics;
}
