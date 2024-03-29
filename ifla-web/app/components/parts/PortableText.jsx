import {PortableText as SanityPortableText} from '@portabletext/react';
import {cva, cx} from 'class-variance-authority';
import {CarouselModule} from '../modules/CarouselModule';
import {CollapsibleModule} from '../modules/CollapsibleModule';
import {ImageGridModule} from '../modules/ImageGridModule';
import {ImageModule} from '../modules/ImageModule';
import {WidgetModule} from '../modules/WidgetModule';
import {Footnote} from './Footnote';
import {LinkExternal} from './Links';

const portableText = cva('', {
  variants: {
    intent: {
      // body: ['[&>p:not(:first-of-type)]:indent-7 [&>*:not(section)]:prose '],
      body: [
        '[&>p+p]:indent-7 [&>*:not(section)]:prose [&>*:not(section)]:max-w-[45rem]',
      ],
      articleIntro: [
        '[&>p+p]:indent-7 [&>*:not(section)]:prose [&>*:not(section)]:max-w-[45rem]',
      ],
      column: [
        '[&>p:not(:first-of-type)]:mb-[1em] [&>figure:not(:first-of-type)]:mt-[1em]',
      ],
      footer: ['[&>p:not(:last-child)]:mb-[1em]'],
      preview: ['[&>p:not(:last-child)]:mb-[1em]'],
      intro: ['[&>*:not(:last-child)]:mb-[1em]'],
    },
  },
  defaultVariants: {
    intent: 'body',
  },
});

const components = (intent, colour, footnoteIndexes, mono) => {
  return {
    block: {
      normal: ({children}) => {
        switch (intent) {
          case 'column':
            return <p className={'text-18'}>{children}</p>;
          case 'carousel':
            return <p className={'text-24 lg:text-40'}>{children}</p>;
          case 'footer':
            return <p className={'text-18 '}>{children}</p>;
          case 'intro':
            return <h3 className={'text-18 md:text-24 xl:text-40 inline'}>{children}</h3>;
          case 'preview':
            return (
              <p className={'text-16 line-clamp-short md:no-line-clamp'}>
                {children}
              </p>
            );
          case 'footnote':
            return <p className={'text-16'}>{children}</p>;
          case 'footnoteList':
            return <p className={'text-16'}>{children}</p>;
          default:
            return (
              <p className={'font-serif text-18 md:text-24'}>{children}</p>
            );
        }
      },
      h3: ({children}) => (
        <h3 className={'break-after-avoid break-inside-avoid text-32 md:text-68 mb-[24px] lg:max-w-sm'}>{children}</h3>
      ),
      h5: ({children}) => <h4 className={"text-24 my-8"}>{children}</h4>,
      h6: ({children}) => (
        <h5 className={'!mb-0 break-after-avoid text-18'}>{children}</h5>
      ),
      large: ({children}) => <p className={'text-32'}>{children}</p>,
      blockquote: ({children, value}) => (
        <blockquote
          className={cx('!max-w-[23rem] text-32 leading-[40px] my-20 px-4', 'md:px-8')}
          style={{color: value.colour}}
        >
          {children}
        </blockquote>
      ),
    },
    types: {
      collapsibleModule: ({value}) => (
        <CollapsibleModule content={value} inline />
      ),
      imageModule: ({value}) => <ImageModule content={value} inline />,
      carouselModule: ({value}) => <CarouselModule content={value} />,
      imageGridModule: ({value}) => <ImageGridModule content={value} inline />,
      footnote: ({value}) => (
        <Footnote
          content={value}
          colour={colour}
          footnoteIndexes={footnoteIndexes}
        />
      ),
      widgetModule: ({value}) => <WidgetModule content={value} />,
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
                mono={value.colourful === false || mono ? true : false }
              >
                {children}
              </LinkExternal>
            );
          case 'telephone':
            return (
              <LinkExternal
                href={`tel:${value?.link}`}
                className={'link '}
                mono={value.colourful === false || mono ? true : false}
              >
                {children}
              </LinkExternal>
            );
          case 'email':
            return (
              <LinkExternal
                href={`mailto:${value?.link}`}
                className={'link '}
                mono={value.colourful === false || mono ? true : false}
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

export const PortableText = ({
  text,
  intent,
  className,
  colour,
  footnoteIndexes,
  mono
}) => {
  return (
    <div className={portableText({intent, className})}>
      <SanityPortableText
        value={text}
        components={components(intent, colour, footnoteIndexes, mono)}
      />
    </div>
  );
};
