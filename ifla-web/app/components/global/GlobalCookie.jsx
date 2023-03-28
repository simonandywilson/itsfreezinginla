import {Newsletter} from '../parts/Newsletter';
import {Text} from '../parts/Text';
import {Button} from '../parts/Button';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { cx } from 'class-variance-authority';
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent';

export const GlobalCookie = () => {
  const [visible, setVisible] = useState(false);

  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    const value = getCookieConsentValue();
    let timer = setTimeout(() => {
      if (value === undefined) {
        setCookie(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [setCookie]);

    const optOut = () => {
      document.cookie = `ga-disable-${process.env.GATSBY_GOOGLE_TRACKING_ID}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/`;
      window[`ga-disable-${process.env.GATSBY_GOOGLE_TRACKING_ID}`] = true;
      window.disableStr = 1;
    };

  return (
    // <AnimatePresence>
    //   {visible && (
    <motion.div
      className={cx(
        'max-w-[calc(100vw-2)] fixed bottom-0 right-0 m-4 z-50 bg-white p-4 border-black border-1',
        'md:m-8',
      )}
      // initial={{x: '120%'}}
      // animate={{x: 0}}
      // exit={{x: '120%'}}
      // transition={{duration: 1, type: 'tween'}}
    >
      <CookieConsent
        disableStyles={true}
        // containerClasses={style.consent}
        // buttonClasses={style.accept}
        buttonText={<Button colour={''}>Alright</Button>}
        // declineButtonClasses={style.decline}
        declineButtonText={<Button colour={''}>No</Button>}
        enableDeclineButton
        hideOnAccept={false}
        onAccept={() => setCookie(false)}
        onDecline={() => {
          setCookie(false);
          optOut();
        }}
        flipButtons={true}
        debug={false}
      ></CookieConsent>
    </motion.div>
    //   )}
    // </AnimatePresence>
  );
};
