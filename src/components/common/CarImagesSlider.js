'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { assetUrl } from '@/services/constants';

const CarImagesSlider = ({ imgs }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (imgs?.length > 0) {
            let loadedImages = 0;
            imgs.forEach((img) => {
                const image = new Image();
                image.src = assetUrl + img.directus_files_id.id;
                image.onload = () => {
                    loadedImages++;
                    if (loadedImages === imgs.length) {
                        setImagesLoaded(true);
                    }
                };
                image.onerror = () => {
                    loadedImages++;
                    if (loadedImages === imgs.length) {
                        setImagesLoaded(true);
                    }
                };
            });
        }
    }, [imgs]);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            // Reinitialize navigation after images are loaded
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance, imagesLoaded]);

    return (
        <>
            {imagesLoaded ? (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                    {imgs?.map((img) => (
                        <SwiperSlide key={img?.id}>
                            <div className="image-box">
                                <figure className="image">
                                    <img src={assetUrl + img.directus_files_id.id} alt="" />
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div>Loading...</div>
            )}
            <div>
                <button className="slick-prev slick-arrow" ref={prevRef}>
                    <FaChevronLeft />
                </button>
                <button className="slick-next slick-arrow" ref={nextRef}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
};

export default CarImagesSlider;
