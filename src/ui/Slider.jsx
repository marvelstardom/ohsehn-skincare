
// import Swiper core and required modules
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { shopList } from './shopList';
// import '../images/dang1.jpg'
// import { SwiperOptions } from 'swiper/types';

register();


export function Slider () {
    const swiperRef = useRef(null)

    const [items, setItems] = useState(shopList)

    useEffect(() => {
        setItems(items)
    }, [items])

    return (
        <div className=''>
            {/* <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swiper mb-5 w-auto h-[650px]"
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}
         <Swiper  modules={[Navigation, Autoplay, Pagination, A11y]}
            onInit={(core) => {
                swiperRef.current = core.el
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper w-auto h-[685px] bg-black"
            id="slider2"
        >
            <div className="swiper-wrapper">
                {items.map((item) => {
                    return (
                        <SwiperSlide key={item.name} className=''>
                            <img src={item.image} className="bg-bottom w-full object-cover" alt="itemImage" />
                            <div className="flex flex-col justify-between items-center text-center w-[inherit] absolute z-[999] text-white top-1/3 ltr:left-12 rtl:right-12">
                                <div className="sm:text-3xl lg:text-7xl text-lg font-bold">{item.name}</div>
                                <p className="sm:mt-10 mt-1 w-1/2 text-xl sm:block lg:block hidden font-medium">
                                    {item.slug}
                                </p>
                                <button type="button" className="uppercase mt-4 bg-white text-black border-2 border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                                    Learn more
                                </button>
                            </div>
                        </SwiperSlide>
                     ); 
                 })} 
             </div>
            {/* <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
                <svg>...</svg>
            </button>
            <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
                <svg>...</svg>
            </button> */}
        </Swiper>
        </div>
    )
}