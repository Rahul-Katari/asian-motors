// const { default: Swiper } = require("swiper");
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import { useEffect, useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import TestimonialCard from './TestimonialCard';
// import { Button } from 'bootstrap';
const TestimonialsSlider = ({ testimonials }) => {
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
                slidesPerView={3}
                loop={true}
                // navigation={true}
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                className='pb-5'
            >

                {testimonials?.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <TestimonialCard key={index} testimonial={testimonial} />
                        </SwiperSlide>
                    );
                })}
                {testimonials?.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <TestimonialCard key={index} testimonial={testimonial} />
                        </SwiperSlide>
                    );
                })}
                {testimonials?.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <TestimonialCard key={index} testimonial={testimonial} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className='position-relative'>
                <button className='slick-prev slick-arrow' ref={prevRef}><FaChevronLeft /></button>
                <button className='slick-next slick-arrow' ref={nextRef}><FaChevronRight /></button>
            </div>
        </>
    );
}
export default TestimonialsSlider;