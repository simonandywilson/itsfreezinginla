import {Layout} from '../parts/Layout';
import {BlockLink} from '../parts/LinksButton';
import {AudiobookBlock} from '../audiobook/AudiobookBlock';

export const AudiobooksModule = ({audiobooks}) => {
  return (
      <Layout intent={'grid'} as={'ul'}>
        {audiobooks &&
          audiobooks.map((audiobook) => {
            return (
              <li key={audiobook._id} className={'w-full'}>
                <BlockLink to={audiobook.slug}>
                  <AudiobookBlock audiobook={audiobook} />
                </BlockLink>
              </li>
            );
          })}
      </Layout>
  );
};
