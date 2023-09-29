import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Box } from '@chakra-ui/react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay,Navigation, Pagination} from 'swiper/modules';

import SwiperCore from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Autoplay, Navigation, Pagination]);

interface ImageSlide {
    backdrop_path: string;
}

const SlideData = () => {
    const [imageFilm, setImageFilm] = useState<{ image: string }[]>([]);

    useEffect(() => {
        const getImageFilm = async () => {

            const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?language=vi&api_key=${apiKey}`);
            const posters = res.data.results.slice(0,3);
            console.log(posters) 
            const imageFilmData = posters.map((poster: ImageSlide) => ({ image: poster.backdrop_path }));
            setImageFilm(imageFilmData);
        };

        getImageFilm();
    }, []);

    return (
        <>
            <Swiper 
                 modules={[Autoplay, Navigation, Pagination]}
                 slidesPerView={1}
                 navigation
                 autoplay={{ delay: 5000,disableOnInteraction: false }}
                 loop={true}
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                 effect="cube" // Đặt hiệu ứng chuyển đổi slide thành cube
                 cubeEffect={{
                   shadow: true, // Hiển thị bóng trong quá trình chuyển đổi slide kiểu cube
                   slideShadows: true, // Hiển thị bóng cho từng slide
                   shadowOffset: 20, // Đặt độ lệch của bóng
                   shadowScale: 0.94, // Đặt tỷ lệ thu nhỏ của bóng
                 }}
            >
             {imageFilm.map((slide, index) => (
                <SwiperSlide key={index} >
                    <Box >
                        <Image src={`https://image.tmdb.org/t/p/original/${slide.image}`} objectFit='cover' alt={`image-${index}`} key={index} w='100%' h='495px'/>
                    </Box>
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SlideData
