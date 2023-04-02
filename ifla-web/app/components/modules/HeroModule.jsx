import {cx} from 'class-variance-authority';
import clsx from 'clsx';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import { ButtonLink, ButtonLinkExternal } from '../parts/LinksButton';

const buttonClassNames = 'button-24 md:button-32';

export const HeroModule = ({content}) => {
  const { heading, background, image, imageFormat, links } = content;

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
            <h2
              className={cx(
                'text-40 md:text-56 lg:text-68',
                'w-full z-10 mb-[0.5em] ',
                'md:w-1/2 lg:w-1/3',
              )}
            >
              {heading}
            </h2>
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
                        colour={'mono'}
                        className={buttonClassNames}
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
                        colour={'mono'}
                        className={buttonClassNames}
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
              id={image._id}
              width={500}
              mode="cover"
              hotspot={image.hotspot}
              crop={image.crop}
              alt={image.alt || ''}
              preview={image.preview}
              sizes={'100vw'}
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
          className={buttonClassNames}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    case 'telephone':
      return (
        <ButtonLinkExternal
          to={`tel:${link?.link}`}
          className={buttonClassNames}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    case 'email':
      return (
        <ButtonLinkExternal
          to={`mailto:${link?.link}`}
          className={buttonClassNames}
          colour={'mono'}
        >
          {children}
        </ButtonLinkExternal>
      );
    default:
      return null;
  }
};
