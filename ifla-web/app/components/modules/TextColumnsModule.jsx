import { Layout } from '../parts/Layout';
import {PortableText} from '../parts/PortableText';

export const TextColumnsModule = ({content}) => {
  return (
    <Layout intent={"columns"} style={{columnFill: 'auto'}}>
      <PortableText text={content.text} intent={'column'} />
    </Layout>
  );
};
