import {cx} from 'class-variance-authority';
import {Image} from './Image';

export const Topic = ({topic, className}) => {
  const {image} = topic;
  return (
    <span
      className={cx(
        'group/topic relative float-left inline-block  top-2 mr-3 md:group-hover:hidden',
        ' md:mr-4',
        className,
      )}
    >
      <div
        className={
          'absolute w-full h-full inset-0 whitespace-wrap justify-center items-center hidden p-2 group-hover/topic:flex'
        }
      >
        <p className={'text-16 break-words leading-none'}>{topic.topic}</p>
      </div>
      <Image
        id={image._id}
        width={200}
        alt={`Topic: ${topic.topic}`}
        sizes={'200px'}
        className={'h-full w-max group-hover/topic:invisible'}
      />
    </span>
  );
};
