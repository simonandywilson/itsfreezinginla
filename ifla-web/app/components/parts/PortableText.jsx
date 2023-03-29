import {PortableText as SanityPortableText} from '@portabletext/react';
import {cva, cx} from 'class-variance-authority';
import {CarouselModule} from '../modules/CarouselModule';
import {CollapsibleModule} from '../modules/CollapsibleModule';
import {ImageGridModule} from '../modules/ImageGridModule';
import {ImageModule} from '../modules/ImageModule';
import {Footnote} from './Footnote';
import {LinkExternal} from './Links';
import {Text} from './Text';

const portableText = cva(
  '[&>*:not(:last-child):not(p):not(blockquote):not(section)]:mb-[1em]',
  {
    variants: {
      intent: {
        body: ['[&>p:not(:first-of-type)]:indent-5 [&>*:not(section)]:prose '],
        column: ['[&>p:not(:first-of-type)]:mb-[1em]'],
        footer: ['[&>p:not(:last-child)]:mb-[1em]'],
        preview: ['[&>p:not(:last-child)]:mb-[1em]'],
        intro: ['[&>*:not(:last-child)]:mb-[1em]'],
      },
    },
    defaultVariants: {
      intent: 'body',
    },
  },
);

const components = (intent, colour) => {
  return {
    block: {
      normal: ({children}) => {
        switch (intent) {
          case 'column':
            return (
              <Text as={'p'} intent={'text-base'}>
                {children}
              </Text>
            );
          case 'footer':
            return <p className={'text-18 xl:text-24'}>{children}</p>;
          case 'intro':
            return <h3 className={'text-24 md:text-40'}>{children}</h3>;
          case 'preview':
            return (
              <p className={'text-16 line-clamp-short md:no-line-clamp'}>
                {children}
              </p>
            );
          case 'footnote':
            return (
              <Text as={'p'} intent={'text-sm'}>
                {children}
              </Text>
            );
          default:
            return (
              <Text as={'p'} intent={'text-base-serif'}>
                {children}
              </Text>
            );
        }
      },
      large: ({children}) => (
        <Text as={'p'} intent={'text-lg'}>
          {children}
        </Text>
      ),
      h3: ({children}) => (
        <Text as={'h3'} intent={'text-xl'} className={'break-after-avoid'}>
          {children}
        </Text>
      ),
      h5: ({children}) => (
        <Text as={'h4'} intent={'text-lg'}>
          {children}
        </Text>
      ),
      h6: ({children}) => (
        <Text
          as={'h5'}
          intent={'text-sm'}
          className={'!mb-0 break-after-avoid'}
        >
          {children}
        </Text>
      ),
      blockquote: ({children, value}) => (
        <Text
          as={'blockquote'}
          intent={'text-xl'}
          colour={value.colour}
          className={cx('my-20 px-4', 'md:px-8')}
        >
          {children}
        </Text>
      ),
    },
    types: {
      collapsibleModule: ({value}) => (
        <CollapsibleModule content={value} inline />
      ),
      imageModule: ({value}) => <ImageModule content={value} inline />,
      carouselModule: ({value}) => <CarouselModule content={value} />,
      imageGridModule: ({value}) => <ImageGridModule content={value} inline />,
      footnote: ({value}) => <Footnote content={value} colour={colour} />,
    },
    marks: {
      externalLinkObject: ({value, children}) => {
        switch (value.type) {
          case 'website':
            return (
              <LinkExternal
                href={value?.link}
                target="_blank"
                rel="noopener noreferrer"
                className={'link '}
                mono={value.colourful === false}
              >
                {children}
              </LinkExternal>
            );
          case 'telephone':
            return (
              <LinkExternal
                href={`tel:${value?.link}`}
                className={'link '}
                mono={value.colourful === false}
              >
                {children}
              </LinkExternal>
            );
          case 'email':
            return (
              <LinkExternal
                href={`mailto:${value?.link}`}
                className={'link '}
                mono={value.colourful === false}
              >
                {children}
              </LinkExternal>
            );
          default:
            return null;
        }
      },
    },
  };
};

export const PortableText = ({text, intent, className, colour}) => {
  return (
    <div className={portableText({intent, className})}>
      <SanityPortableText
        value={text}
        components={components(intent, colour)}
      />
    </div>
  );
};
