import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BuySlider.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const BuySlider = ({imagesForSlider}) => {
    // console.log("All Images: ",imagesForSlider);
    return (
        <div className='h-full'>                     
           <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >

                    {
                        imagesForSlider.map((i, idx) => (
                            <div key={idx} className='w-full h-full rounded-md'>
                                <SwiperSlide key={idx+1}>
                                    <img className='w-full h-full rounded-md' src={`data:image/png;base64,${i}`} alt="" />
                                </SwiperSlide>
                            </div>
                        ))
                    }
            </Swiper>
        </div>
    );
};

export default BuySlider;