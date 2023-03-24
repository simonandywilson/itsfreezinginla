import {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {TextColumnsModule} from './TextColumnsModule';

export const CarouselModule = ({content}) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const ref = useRef(null);
  return (
    <Layout intent={'module-full'}>
      <div
        className={'group relative w-full aspect-video bg-slate-200'}
        onClick={(e) => {
          const x = e.clientX - ref.current.getBoundingClientRect().left;
          if (x > window.innerHeight / 2) {
            swiperInstance.slideNext();
          } else {
            swiperInstance.slidePrev();
          }
        }}
        ref={ref}
      >
        <div
          className={
            'absolute w-full h-full hidden z-50 pointer-events-none group-hover:flex justify-between items-center p-8 text-white text-6xl'
          }
        >
          <div className={'w-1/4'}>{'<'}</div>
          <div className={'w-1/4 text-right'}>{'>'}</div>
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className={'w-full h-full'}
          loop={true}
        >
          {content.slide.map((slide) => {
            return (
              <SwiperSlide key={slide._key}>
                {slide._type === 'imageObject' && (
                  <Image
                    id={slide._id}
                    width={2000}
                    mode="cover"
                    hotspot={slide.hotspot}
                    crop={slide.crop}
                    alt={slide.alt || ''}
                    preview={slide.preview}
                    sizes={'100vw'}
                    className={'h-full object-cover'}
                  />
                )}
                {slide._type === 'textObject' && (
                  <div className={'p-4'}>
                    <TextColumnsModule content={slide.text} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Layout>
  );
};
