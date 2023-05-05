import {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Image} from '../parts/Image';
import {Layout} from '../parts/Layout';
import {TextColumnsModule} from './TextColumnsModule';
import {PortableText} from '../parts/PortableText';

export const CarouselModule = ({content}) => {
  const [text, setText] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const ref = useRef(null);

  return (
    <Layout intent={'hero'} className={'relative !p-0'}>
      {text && (
        <button
          className={
            'absolute z-20 w-full h-full inset-0 text-black appearance-none text-left inline-flex items-start'
          }
          style={{background: content.background}}
          onClick={() => setText(false)}
        >
          <Layout intent={'carousel'}>
            <PortableText text={content.text} intent={'carousel'} />
          </Layout>
        </button>
      )}
      <div
        className={'group relative w-full h-full bg-slate-200 '}
        ref={ref}
        onClick={(e) => {
          const x = e.clientX - ref.current.getBoundingClientRect().left;
          if (x > window.innerHeight / 2) {
            swiperInstance.slideNext();
          } else {
            swiperInstance.slidePrev();
          }
        }}
      >
        <button
          className={'absolute text-40 text-white right-0 m-4 z-10'}
          onClick={() => setText(true)}
        >
          text
        </button>
        {!text && (
          <div
            className={
              'absolute w-full h-full hidden z-50 pointer-events-none group-hover:flex justify-between items-center p-8 text-white text-6xl'
            }
          >
            <div className={'w-1/4 text-68'}>{'<'}</div>
            <div className={'w-1/4 text-right text-68'}>{'>'}</div>
          </div>
        )}
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className={'w-full h-full'}
          loop={true}
          speed={0}
        >
          {content.slide.map((slide) => {
            return (
              <SwiperSlide key={slide._key}>
                <Image
                  id={slide._id}
                  width={2000}
                  mode="cover"
                  hotspot={slide.hotspot}
                  crop={slide.crop}
                  alt={slide.alt || ''}
                  preview={slide.preview}
                  sizes={'100vw'}
                  className={'w-full h-full object-cover'}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Layout>
  );
};
