
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
import { Link } from 'react-router-dom';

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
            className="swiper w-auto h-[400px] lg:h-[750px] bg-black sm:bg-cover"
            id="slider2"
        >
            <div className="swiper-wrapper">
                {items.map((item) => {
                    return (
                        <SwiperSlide key={item.name} className=''>
                            <img src={item.image} className="bg-center w-full object-cover" alt="itemImage" />
                            <div className="flex flex-col justify-between items-center text-center w-[inherit] absolute z-[999] text-white top-1/3 ltr:left-12 rtl:right-12 mt-8 lg:px-0 px-4">
                                <h1 className="lg:text-8xl text-4xl font-bold mb-4">{item.name}</h1>
                                <p className="sm:mt-0 sm:text-md mt-1 w-1/2 text-xl sm:block lg:block hidden font-medium">
                                    {item.slug}
                                </p>
                                <Link to={`/shop/`} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 uppercase mt-4 bg-white text-black border-2 border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white text-sm">
                                    Discover more
                                </Link>
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