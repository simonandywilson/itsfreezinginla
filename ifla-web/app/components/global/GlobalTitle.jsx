import {useRouteLoaderData} from '@remix-run/react';
import clsx from 'clsx';
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import {TextLink} from '../parts/Links';

export const GlobalTitle = () => {
  const {settings} = useRouteLoaderData(`root`);
  const [long, setLong] = useState(false);

  const sentence = {
    hidden: {opacity: 1},
    visible: {opacity: 1, transition: {delay: 0, staggerChildren: 0.05}},
  };

  const letter = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.0001}},
  };

  return (
    <div className={'relative flex-1 overflow-x-hidden'}>
      <TextLink
        as={'h1'}
        to={'/'}
        intent={'text-lg'}
        className={'group inline-block'}
        onMouseEnter={() => setLong(true)}
        onMouseLeave={() => setLong(false)}
        onFocus={() => setLong(true)}
        onBlur={() => setLong(false)}
      >
        <AnimatePresence>
          {long && (
            <motion.div
              variants={sentence}
              initial={'hidden'}
              animate={'visible'}
              aria-hidden="true"
              className={
                'absolute text-32 font-sans-alt whitespace-nowrap hidden xl:inline-block'
              }
            >
              {settings?.longTitle &&
                settings.longTitle.split('').map((char, index) => {
                  return (
                    <motion.span variants={letter} key={`${char}+${index}`}>
                      {char}
                    </motion.span>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={clsx('text-32 font-sans-alt inline-block ', {
            'xl:opacity-0': long,
          })}
        >
          <span className={'sr-only md:not-sr-only'}>{settings.title}</span>
          <span aria-hidden className={'md:hidden'}>
            {settings.shortTitle}
          </span>
        </div>
      </TextLink>
    </div>
  );
};
