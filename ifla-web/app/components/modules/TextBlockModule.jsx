import React from 'react';
import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';

export const TextBlockModule = ({content, colour}) => {
  const {text, footnotes} = content;
  const footnotesFiltered = footnotes
    .filter((value) => JSON.stringify(value) !== '{}' && value != null)
    ;

  return (
    <Layout intent={'text'}>
      <PortableText
        text={text}
        colour={colour}
        footnoteIndexes={footnotesFiltered}
      />
      <div className={'prose mt-8 flex flex-col'}>
        {footnotesFiltered.map((value, index) => (
          <div
            key={value._key}
            className={'w-2/3 ml-auto flex gap-2'}
            style={{color: colour}}
          >
            <span>{index + 1}.</span>
            <PortableText
              text={value.footnote}
              colour={colour}
              intent={'footnoteList'}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};
