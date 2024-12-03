// const { default: Swiper } = require("swiper");
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import { useEffect, useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { assetUrl } from '@/services/constants';
// import { Button } from 'bootstrap';
const CarImagesSlider = ({ imgs}) => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);
    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                }}
                onSlideChange={() => console.log('slide change')}
            >

                <div className="inner-column inventry-slider-two">
                    {imgs?.map((img) => {
                        return (
                            <SwiperSlide key={img?.id}>
                                <div className="image-box">
                                    <figure className="image">
                                        {/* <a href={assetUrl + img.directus_files_id.id} data-fancybox="gallery"> */}
                                            <img src={assetUrl + img.directus_files_id.id} alt="" />
                                        {/* </a> */}
                                    </figure>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
            <div className=''>
                <button className='slick-prev slick-arrow' ref={prevRef}><FaChevronLeft /></button>
                <button className='slick-next slick-arrow' ref={nextRef}><FaChevronRight /></button>
            </div>
        </>
    );
}
export default CarImagesSlider;