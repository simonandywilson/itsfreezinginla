import clsx from 'clsx';
import {useClock} from '../../hooks/useClock';
import {useMeasure} from 'react-use';

export const ClockWidget = () => {
  const [ref, {width}] = useMeasure();
  const clock = useClock();
  const clockHHMM = `${clock.hours.toString().padStart(2, '0')}:${clock.minutes
    .toString()
    .padStart(2, '0')}${clock.hours > 12 ? 'am' : 'pm'}`;

  return (
    <figure
      className={'w-full break-inside-avoid-column mb-[1em]'}
      ref={ref}
      aria-label={'Current time'}
    >
      <div
        className={
          'relative w-full aspect-square rounded-full border-1 border-black'
        }
        style={{
          '--hours': `${clock.hours}`,
          '--minutes': `${clock.minutes}`,
          '--seconds': `${clock.seconds}`,
        }}
        aria-hidden={true}
      >
        <Hand type={'seconds'} width={'w-full'} />
        <Hand type={'minutes'} width={'w-3/4'} />
        <Hand type={'hours'} width={'w-1/2'} />
        <div className={'absolute w-full h-full '}>
          <Numbers width={width} />
        </div>
      </div>
      <figcaption className={'text-center mt-8'}>{clockHHMM}</figcaption>
    </figure>
  );
};

const Hand = ({type, width}) => {
  return (
    <div className={'absolute inset-0 flex items-center justify-center p-16'}>
      <div
        className={clsx('aspect-square rounded-full', width)}
        style={{
          transform: ` rotate(calc(360deg / ${
            type === 'hours' ? 12 : 60
          } * var(--${type})))`,
        }}
      >
        <div
          className={
            'absolute top-0 left-1/2 flex items justify-center bg-black h-1/2 w-[1px]'
          }
        ></div>
      </div>
    </div>
  );
};

const Numbers = ({width}) => {
  const points = 12;
  const radius = width / 2 - 40;
  return (
    <div className={'relative w-full h-full z-10 rounded-full -rotate-[60deg]'}>
      {Array(points)
        .fill()
        .map((v, index) => {
          const x = radius * Math.cos((2 * Math.PI * index) / points);
          const y = radius * Math.sin((2 * Math.PI * index) / points);
        
          return (
            <span
              key={index}
              className={
                'absolute left-[calc(50%-16px)] top-[calc(50%-16px)] leading-[32px] text-32 '
              }
              style={{transform: `translate(${x}px, ${y}px) rotate(60deg)`}}
            >
              {index + 1}
            </span>
          );
        })}
    </div>
  );
};
