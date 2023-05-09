import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';

export const TextColumnsModule = ({content, limitHeight}) => {
  return (
    <Layout intent={limitHeight ? 'columns' : 'columns-unlimited'}>
      <PortableText text={content.text} intent={'column'} />
    </Layout>
  );
};
