import {PortableText as SanityPortableText} from '@portabletext/react';
import {Text} from './Text';
import {cva} from 'class-variance-authority';
import {CollapsibleModule} from '../modules/CollapsibleModule';
import {ImageModule} from '../modules/ImageModule';
import {ImageGridModule} from '../modules/ImageGridModule';
import {CarouselModule} from '../modules/CarouselModule';

const portableText = cva(
  '[&>*:not(:last-child):not(p):not(blockquote):not(section)]:mb-[1em]',
  {
    variants: {
      intent: {
        body: ['[&>p:not(:first-of-type)]:indent-5 [&>*:not(section)]:prose '],
        column: ['[&>p:not(:first-of-type)]:mb-[1em]'],
        footer: ['[&>p:not(:last-child)]:mb-[1em]'],
      },
    },
    defaultVariants: {
      intent: 'body',
    },
  },
);

const components = (intent) => {
  return {
    block: {
      normal: ({children}) => {
        switch (intent) {
          case 'column':
            return (
              <Text tag={'p'} intent={'bl-body-lg'}>
                {children}
              </Text>
            );
          case 'footer':
            return (
              <Text tag={'p'} intent={'bl-body-alt'}>
                {children}
              </Text>
            );
          default:
            return (
              <Text tag={'p'} intent={'bl-body'}>
                {children}
              </Text>
            );
        }
      },
      h3: ({children}) => (
        <Text
          tag={'h3'}
          intent={'bl-heading-2xl'}
          className={'break-before-avoid'}
        >
          {children}
        </Text>
      ),
      h5: ({children}) => (
        <Text tag={'h4'} intent={'bl-heading-lg'}>
          {children}
        </Text>
      ),
      h6: ({children}) => (
        <Text tag={'h5'} intent={'bl-heading-sm'} className={'!mb-0'}>
          {children}
        </Text>
      ),
      blockquote: ({children, value}) => (
        <Text
          tag={'blockquote'}
          intent={'bl-quote'}
          colour={value.colour}
          className={'my-20 px-8'}
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
    },
    marks: {
      externalLinkObject: ({value, children}) => {
        switch (value.type) {
          case 'website':
            return (
              <a
                href={value?.link}
                target="_blank"
                rel="noopener noreferrer"
                className={'link'}
              >
                {children}
              </a>
            );
          case 'telephone':
            return (
              <a href={`tel:${value?.link}`} className={'link'}>
                {children}
              </a>
            );
          case 'email':
            return (
              <a href={`mailto:${value?.link}`} className={'link'}>
                {children}
              </a>
            );
          default:
            return null;
        }
      },
    },
  };
};

export const PortableText = ({text, intent, className}) => {
  return (
    <div className={portableText({intent, className})}>
      <SanityPortableText value={text} components={components(intent)} />
    </div>
  );
};
