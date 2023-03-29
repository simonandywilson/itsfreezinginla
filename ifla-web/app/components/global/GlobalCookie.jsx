import {Text} from '../parts/Text';
import {Button} from '../parts/Button';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {cx} from 'class-variance-authority';
import {TextLink} from '../parts/Links';
import {useRouteData} from 'remix-utils';
import {useFetcher} from '@remix-run/react';

export const GlobalCookie = () => {
  const {track} = useRouteData(`root`);
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
            <Text intent={'text-xl'}>Accept cookies?</Text>
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
              >
                Alright
              </Button>
              <Button
                name={'decline-cookies'}
                value={'false'}
                type={'submit'}
                aria-label={'Decline cookies'}
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
