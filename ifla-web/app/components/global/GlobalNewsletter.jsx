import {Newsletter} from '../parts/Newsletter';
import {Text} from '../parts/Text';
import {Button} from '../parts/Button';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {cx} from 'class-variance-authority';

export const GlobalNewsletter = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cx(
            'max-w-[calc(100vw-2)] fixed bottom-0 right-0 m-4 z-50 bg-white p-4',
            'md:m-8',
          )}
          initial={{x: '120%'}}
          animate={{x: 0}}
          exit={{x: '120%'}}
          transition={{duration: 1, type: 'tween'}}
        >
          <div className={cx('flex gap-36 justify-between', 'md:gap-48')}>
            <Text as={'h2'} intent={'text-lg'}>
              Newsletter
            </Text>
            <Button
              intent={'text-lg'}
              colour={'transparent'}
              className={'!p-0'}
              onClick={() => setVisible(false)}
              aria-label={'Close newsletter popup'}
            >
              X
            </Button>
          </div>
          <Newsletter buttonColour={'default'} onSuccess={() => setVisible(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
