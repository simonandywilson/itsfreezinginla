import {Newsletter} from '../parts/Newsletter';
import {Text} from '../parts/Text';
import {Button} from '../parts/Button';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {cx} from 'class-variance-authority';
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent';
import {TextLink} from '../parts/Links';

export const GlobalCookie = () => {
  const [visible, setVisible] = useState(false);
  const [consentValue, setConsentValue] = useState(
    getCookieConsentValue() || false,
  );

  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === 'true') {
      return;
    }
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Enable GA on consent
  useEffect(() => {
    if (consentValue) {
      if (!window.gtag) {
        console.warn(
          'window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet.',
        );
        return;
      }
      console.log("User consent granted for analytics.")
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  }, [consentValue]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cx(
            'max-w-[calc(100vw-2)] fixed bottom-0 right-0 m-4 z-50 bg-white p-4 border-black border-1 flex flex-col gap-4',
            'md:m-8',
          )}
          initial={{x: '120%'}}
          animate={{x: 0}}
          exit={{x: '120%'}}
          transition={{duration: 1, type: 'tween'}}
        >
          <Text intent={'text-xl'}>Accept cookies?</Text>
          <CookieConsent
            disableStyles={true}
            visible={'show'}
            containerClasses={'flex gap-2'}
            buttonWrapperClasses={'flex gap-2'}
            contentClasses={'flex items-center mr-2'}
            ButtonComponent={({children, ...props}) => (
              <Button colour={''} intent={'text-base'} {...props}>
                {children}
              </Button>
            )}
            buttonText={'Alright'}
            declineButtonText={'No'}
            enableDeclineButton
            hideOnAccept={false}
            onAccept={() => {
              setConsentValue(true);
              setVisible(false);
            }}
            onDecline={() => {
              setConsentValue(false);
              setVisible(false);
            }}
            flipButtons={true}
          >
            <TextLink to={''}>Read our cookie policy</TextLink>
          </CookieConsent>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
