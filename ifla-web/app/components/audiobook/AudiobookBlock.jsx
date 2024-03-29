import {Layout} from '../parts/Layout';
import clsx from 'clsx';
import {Image} from '../parts/Image';
import { PortableText } from '../parts/PortableText';

export const AudiobookBlock = ({audiobook}) => {
  const {image, intro, background} = audiobook;
  return (
    <Layout
      as={'div'}
      intent={'block'}
      className={clsx(
        'relative w-full aspect-square flex flex-col justify-between gap-6 border-r-1 border-b-1 border-black',
      )}
      colour={background}
    >
      <div
        className={
          'absolute inset-0 h-full w-full p-4 aspect-square flex justify-between flex-col z-10 invisible group-hover:visible group-focus:visible'
        }
        style={{background: background}}
      >
        <PortableText text={intro} intent={'preview'} />
        <p className={'text-16 ml-auto'}>Listen {'>'}</p>
      </div>
      <div
        className={
          'absolute w-full h-full inset-0 group-hover:invisible group-focus:invisible'
        }
      >
        {image && (
          <Image
            id={image._id}
            width={1000}
            mode={"contain"}
            hotspot={image.hotspot}
            crop={image.crop}
            alt={image.alt || ''}
            preview={image.preview}
            className={'w-full h-full object-contain'}
            sizes={"50vw"}
          />
        )}
      </div>
    </Layout>
  );
};
