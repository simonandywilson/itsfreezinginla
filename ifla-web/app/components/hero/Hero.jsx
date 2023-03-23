import {cx} from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {ButtonLink, ButtonLinkExternal} from '../parts/Links';
import {Text} from '../parts/Text';

export const Hero = ({hero}) => {
  const { heading, background, image, imageFormat, links} = hero;
  return (
    <>
      <Layout
        as={'article'}
        intent={'hero'}
        colour={background || '#e3e8ef'}
        className={'relative'}
      >
        <div
          className={cx(
            'h-full z-10 flex flex-col justify-between',
            'md:justify-start',
          )}
        >
          {heading && (
            <Text
              as={'h2'}
              intent={'text-2xl'}
              className={cx('w-full z-10 mb-[0.5em]', 'md:w-1/2 lg:w-1/3')}
            >
              {heading}
            </Text>
          )}
          <div className={'flex flex-col gap-4'}>
            {links &&
              links.map((link) => {
                switch (link?._type) {
                  case 'externalLinkObject':
                    return (
                      <ExternalLink link={link} key={link._key}>
                        {link.title}
                      </ExternalLink>
                    );
                  case 'internalLinkObject':
                    return (
                      <ButtonLink
                        to={
                          link.type === 'page' ? `/${link.slug}` : link.slugFull
                        }
                        key={link._key}
                        intent={'text-lg'}
                        colour={'mono'}
                      >
                        {link.title}
                      </ButtonLink>
                    );
                  case 'checkoutObject':
                    return (
                      <ButtonLinkExternal
                        key={link._key}
                        to={`https://shop.itsfreezinginla.com/cart/${link.variantId}:1`}
                        target={'_self'}
                        intent={'text-lg'}
                        colour={'mono'}
                      >
                        {link.title}
                      </ButtonLinkExternal>
                    );
                  default:
                    return null;
                }
              })}
          </div>
        </div>
        {image && (
          <div
            className={
              'absolute w-full h-full inset-0 flex justify-center items-center'
            }
          >
            <Image
              asset={{
                _id: image._id,
              }}
              hotspot={image.hotspot}
              crop={image.crop}
              alt={image.alt}
              width={3000}
              options={{aspectRatio: true}}
              className={clsx(
                'h-full w-full',
                {
                  'p-8 object-contain max-w-[50vw] md:max-w-[30vw] ':
                    imageFormat === 'contain',
                },
                {
                  'object-cover': imageFormat === 'cover',
                },
              )}
            />
          </div>
        )}
      </Layout>
    </>
  );
};

const ExternalLink = ({link, children}) => {
  switch (link.type) {
    case 'website':
      return (
        <ButtonLinkExternal
          to={link?.link}
          target="_blank"
          rel="noopener noreferrer"
          className={'link'}
          intent={'text-lg'}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    case 'telephone':
      return (
        <ButtonLinkExternal
          to={`tel:${link?.link}`}
          className={'link'}
          intent={'text-lg'}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    case 'email':
      return (
        <ButtonLinkExternal
          to={`mailto:${link?.link}`}
          className={'link'}
          intent={'text-lg'}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    default:
      return null;
  }
};
