import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import { ClockWidget } from '../widgets/ClockWidget';

export const TextColumnsModule = ({content}) => {
  return (
    <Layout intent={'columns'}>
      <ClockWidget />
      <PortableText text={content.text} intent={'column'} />
    </Layout>
  );
};
