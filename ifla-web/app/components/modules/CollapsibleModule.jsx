import {Layout} from '../parts/Layout';
import {PortableTextPlain} from '../parts/PortableTextPlain';
import {Text} from '../parts/Text';

export const CollapsibleModule = ({content}) => {
  const {name, heading, text} = content;
  return (
    <Layout>
      {name && (
        <Text tag={'h5'} intent={'bl-heading-sm'} className={'!mb-0'}>
          {name}
        </Text>
      )}
      <details>
        <summary className={'flex gap-2'}>
          <Text tag={'p'} intent={'bl-body-lg'} className={"select-none"}>
            {heading || 'Collapsible'}
          </Text>
        </summary>
        <Text tag={'p'} intent={'bl-body-alt'} className={"mt-4"}>
          <PortableTextPlain text={text} />
        </Text>
      </details>
    </Layout>
  );
};
