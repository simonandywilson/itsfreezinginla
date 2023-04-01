import {Button} from '../parts/ButtonNew';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {cx} from 'class-variance-authority';
import {TextLink} from '../parts/Links';
import {useFetcher, useRouteLoaderData} from '@remix-run/react';

export const GlobalCookie = () => {
  const {track} = useRouteLoaderData(`root`);
  const analyticsFetcher = useFetcher();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (track) {
      return;
    }
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cx(
            'max-w-[calc(100vw-2)] fixed bottom-0 right-0 m-4 z-50 bg-white p-4 border-black border-1 flex flex-col gap-4',
            'md:m-8',
          )}
          initial={{x: '110%'}}
          animate={{x: 0}}
          exit={{x: '110%'}}
          transition={{duration: 1, type: 'tween'}}
        >
          <analyticsFetcher.Form method="post" action="/enable-analytics">
            <h2 className={'text-24 mb-4'}>Accept cookies?</h2>
            <div className={'flex gap-2 items-center'}>
              <TextLink to={''} className={'h-max mr-2'}>
                Read our cookie policy
              </TextLink>
              <Button
                name={'accept-cookies'}
                value={'true'}
                type={'submit'}
                onClick={() =>
                  setTimeout(() => {
                    setVisible(false);
                  }, 150)
                }
                aria-label={'Accept cookies'}
                className={'button-18'}
              >
                Alright
              </Button>
              <Button
                name={'decline-cookies'}
                value={'false'}
                type={'submit'}
                aria-label={'Decline cookies'}
                className={'button-18'}
                colour={"outline"}
              >
                No
              </Button>
            </div>
          </analyticsFetcher.Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
