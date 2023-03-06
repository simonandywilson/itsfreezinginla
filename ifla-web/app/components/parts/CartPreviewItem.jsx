import React, {useRef} from 'react';

export const CartPreviewItem = ({item}) => {
  const rotation = useRef(Math.floor(Math.random() * 50) - 25);
  const positionX = useRef(Math.floor(Math.random() * 75) + 1);
  const positionY = useRef(Math.floor(Math.random() * 50) + 1);
  return (
    <img
      role="presentation"
      src={item.merchandise.image.url}
      className={'absolute h-1/2'}
      style={{
        transform: `rotate(${rotation.current}deg)`,
        left: `${positionX.current}%`,
        top: `${positionY.current}%`,
      }}
    />
  );
};
