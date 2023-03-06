import React, {useRef} from 'react';

export const CartPreviewItem = ({item}) => {
  const rotation = useRef(Math.floor(Math.random() * 50) - 25);
  const positionX = useRef(Math.floor(Math.random() * 60) + 1);
  const positionY = useRef(Math.floor(Math.random() * 30) + 1);
  return (
    <img
      role="presentation"
      src={item.merchandise.image.url}
      className={'absolute h-3/4'}
      style={{
        transform: `rotate(${rotation.current}deg)`,
        left: `${positionX.current}%`,
        top: `${positionY.current}%`,
      }}
    />
  );
};
