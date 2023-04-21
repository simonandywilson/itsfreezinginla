import {Dialog} from '@headlessui/react';
import {Form, useSearchParams, useSubmit} from '@remix-run/react';
import {Fragment, useRef, useState} from 'react';
import {ArticleBlock} from '../article/ArticleBlock';
import {Button} from '../parts/Button';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {TextLink} from '../parts/Links';
import {BlockLink} from '../parts/LinksButton';

import clsx from 'clsx';
import {Search} from '../parts/Search';
import {Submenu} from '../parts/Submenu';

export const ArticlesModule = ({articles, topics}) => {
  const [text, setText] = useState(false);

  return (
    <>
      <Submenu
        className={
          'justify-between sticky top-header-submenu z-40 gap-8 xl:gap-0 xl:grid xl:grid-cols-3 3xl:grid-cols-4'
        }
      >
        <FilterDialog topics={topics} />
        <Button
          colour={'transparent'}
          intent={'text-sm'}
          onClick={() => setText((prevState) => !prevState)}
          className={'flex-1 flex items-center gap-2'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={'h-5 inline-block fill-none'}
          >
            <rect
              x=".9"
              y=".82"
              width="18.28"
              height="18.34"
              className={'stroke-black stroke-2'}
            />
            <path
              d="m11.4,5.21v1.29h-3.14v8.52h-1.61V6.5h-3.14v-1.29h7.89Z"
              className={'fill-black'}
            />
            <path
              d="m16.35,13.83v1.19h-1.37c-1.13,0-1.75-.59-1.75-1.6v-4.43h-1.3v-1.11h1.3v-1.96h1.46v1.96h1.53v1.11h-1.53v4.22c0,.42.18.62.59.62h1.08Z"
              className={'fill-black'}
            />
          </svg>{' '}
          <span>
            Text View
            <span className={'hidden sm:inline'}>: {text ? 'On' : 'Off'}</span>
          </span>
        </Button>
        <Search />
      </Submenu>
      <Layout intent={'grid'} as={'ul'}>
        {!text &&
          Object.keys(articles)
            .slice(0)
            .reverse()
            .map((keyName, i) =>
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
        <Layout intent={'columns'} className={'!gap-16'}>
          <div
            className={
              'grid grid-cols-[130px,1fr] [&>h3:not(:first-of-type)]:mt-[24px] [&>h3]:mb-[24px]'
            }
          >
            {Object.keys(articles)
              .reverse()
              .map((keyName, i) => (
                <Fragment key={keyName + i}>
                  <h3 className={'text-40'}>{keyName}</h3>
                  {articles[keyName].map((article) => {
                    return (
                      <div
                        key={article._id}
                        className={'col-span-2 grid grid-cols-[130px,1fr]'}
                      >
                        <p
                          className={'text-16'}
                        >{`[${article.topic.topic}]`}</p>
                        <TextLink
                          to={article.slug}
                          className={'text-18 !w-auto leading-normal'}
                        >
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
    </>
  );
};

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
      <div
        className={clsx(
          'w-auto flex-1 flex gap-2 justify-between z-40',
          'sm:w-52 md:w-72 sm:flex-shrink-0',
        )}
      >
        <Button
          colour={'transparent'}
          className={'text-18 flex gap-2 items-center'}
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 20"
            fill="none"
            className={'h-5 inline-block stroke-2 stroke-black'}
          >
            <polygon
              points="2.3 .86 23.5 .86 14.92 12.22 14.92 19.16 11.03 19.16 11.03 12.22 2.3 .86"
              vectorEffect="non-scaling-stroke"
  
            />
          </svg>{' '}
          <span>Topic Filter</span>
        </Button>
        {isOpen && (
          <div className={'flex gap-2'}>
            <Button
              colour={'transparent'}
              className={'text-18'}
              onClick={() => setIsOpen(false)}
            >
              X
            </Button>
          </div>
        )}
      </div>

      <Dialog
        as="div"
        open={isOpen}
        className={'relative z-10'}
        onClose={closeModal}
      >
        <div
          className={'fixed inset-0 bg-white sm:bg-white/30'}
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-y-auto pt-header-submenu">
          <div className="flex max-h-full pb-4 pl-4 pt-submenu">
            <Dialog.Panel
              className={clsx(
                'w-full transform overflow-hidden bg-white border-8 border-white flex flex-col',
                'sm:w-72',
              )}
              aria-label="Topic filter"
            >
              <Button
                className={'button-18 ml-auto'}
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
    <li
      className={clsx({
        'opacity-50':
          !defaultQuery.includes(topic.topic) && defaultQuery.length > 0,
      })}
    >
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
        className={'group h-16 cursor-pointer py-1 flex gap-4 items-center'}
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
        <div className={'ml-auto flex gap-2 mr-2'}>
          <span>{`(${topic.count})`}</span>
          <span
            className={clsx('opacity-0', {
              'group-hover:opacity-100': defaultQuery.includes(topic.topic),
            })}
          >
            X
          </span>
        </div>
      </label>
    </li>
  );
};
