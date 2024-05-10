// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

import {Pagination} from 'swiper/modules';

export default function Slider() {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <div className="socials-popup">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="50"
                     viewBox="0 0 48 48">
                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993"
                                    y2="40.615" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#2aa4f4"></stop>
                        <stop offset="1" stop-color="#007ad9"></stop>
                    </linearGradient>
                    <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                    <path fill="#fff"
                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                </svg>
                <span className="border"></span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="50"
                     viewBox="0 0 48 48">
                    <path fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
            </div>
            <SwiperSlide>
                <span className="slider-text">your <strong>best<br/> gaming experience</strong></span>
                <img src='https://picsum.photos/4096' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <span className="slider-text">your <strong>best<br/> gaming experience</strong></span>
                <img src='https://picsum.photos/4096' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <span className="slider-text">your <strong>best<br/> gaming experience</strong></span>
                <img src='https://picsum.photos/4096' alt=""/>
            </SwiperSlide>
        </Swiper>
    );
}