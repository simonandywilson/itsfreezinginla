import React from 'react';

const points = 5;
const radius = 10;

const Spinner = () => {
  return (
      <div className={'relative w-8 h-8 animate-spin'}>
        {Array(points)
          .fill()
          .map((v, index) => {
            const x = radius * Math.cos((2 * Math.PI * index) / points);
            const y = radius * Math.sin((2 * Math.PI * index) / points);
            return (
              <span
                key={index}
                className={
                  'absolute w-1 h-1 rounded-full bg-black left-[calc(50%-2px)] top-[calc(50%-2px)]'
                }
                style={{transform: `translate(${x}px, ${y}px)`}}
              />
            );
          })}
      </div>
  );
};

export default Spinner;
