import {Layout} from '../parts/Layout';
import {PortableText} from '../parts/PortableText';
import {Text} from '../parts/Text';

export const CollapsibleModule = ({content}) => {
  const {name, heading, text} = content;
  return (
    <Layout>
      {name && (
        <Text as={'h5'} intent={'bl-heading-sm'} className={'!mb-0'}>
          {name}
        </Text>
      )}
      <details>
        <summary className={'flex gap-2'}>
          <Text as={'p'} intent={'bl-body-lg'} className={'select-none'}>
            {heading || 'Collapsible'}
          </Text>
        </summary>
        <Text as={'p'} intent={'bl-body-alt'} className={'mt-4'}>
          <PortableText text={text} />
        </Text>
      </details>
    </Layout>
  );
};
