import {cx} from 'class-variance-authority';
import clsx from 'clsx';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {ButtonLink, ButtonLinkExternal} from '../parts/LinksButton';

const buttonClassNames = 'button-24 md:button-32';

export const HeroModule = ({content}) => {
  const {heading, background, image, imageFormat, links} = content;

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
            'h-full w-full z-10 flex flex-col justify-between gap-8 min-h-0',
            'md:w-1/2 md:justify-start lg:w-full',
          )}
        >
          {heading && (
            <h2
              className={cx(
                'text-40 md:text-56 lg:text-68 hyphens-none',
                'w-full z-10 ',
                'lg:w-1/3',
              )}
            >
              {heading}
            </h2>
          )}
          {image && (
            <div
              className={clsx(
                'relative w-full min-h-0 h-auto inset-0 ml-auto flex justify-center items-center flex-initial',
                'md:absolute md:h-full',
                {
                  'md:w-1/2 xl:w-full': imageFormat === 'contain',
                },
              )}
            >
              <Image
                id={image._id}
                width={2000}
                mode={imageFormat}
                hotspot={image.hotspot}
                crop={image.crop}
                alt={image.alt || ''}
                preview={image.preview}
                sizes={'100vw'}
                className={clsx(
                  'h-full w-full',
                  {
                    'p-4 object-contain max-w-[75vw] sm:max-w-[50vw] md:p-8 md:max-w-[45vw] lg:max-w-[35vw] xl:max-w-[30vw]':
                      imageFormat === 'contain',
                  },
                  {
                    'p-0 aspect-[4/3] object-cover md:aspect-auto md:p-0':
                      imageFormat === 'cover',
                  },
                )}
              />
            </div>
          )}
          <div
            className={
              'flex flex-row gap-4 items-end justify-end z-10 flex-wrap md:items-start md:flex-col md:justify-start'
            }
          >
            {links &&
              links.map((link) => {
                switch (link?._type) {
                  case 'externalLinkObject':
                    return (
                      <ExternalLink
                        link={link}
                        key={link._key}
                        colour={!link.colourful && 'mono'}
                      >
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
                        colour={!link.colourful && 'mono'}
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
                        colour={!link.colourful && 'mono'}
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
