import './Banner.css'
import React, { useContext, useEffect, useState } from 'react';

import BannerBody from './BannerBody';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';








///Swipper Start
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AuthContext } from '../../../../Providers/AuthProvider';
import BannerSwipperComponent from './BannerSwipperComponent/BannerSwipperComponent';
///Swipper End


//Pure Carousol



const Banner = () => {
    const {baseUrl}=useContext(AuthContext)
    const [bannerImages,setBannerImages]=useState([])
    let showImages=[];
    useEffect(()=>{
         fetch(`${baseUrl}/api/banner`)
        // fetch('http://154.26.135.41:3800/api/banner')
        .then(res=>res.json())
        .then(data=>setBannerImages(data))
    },[])
  

    let i=0;
    for(i=0;i<=bannerImages.length;i++){
       showImages.push(bannerImages[i]?.image)
    }


    ////Fucking Galib
    showImages.pop()
    ///Fucking Galib

    /**
     * Own Banner
     */
   
    
    return (
        <div className='Banner'>

            {/* <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="yesSwiper"
                >
                    
                {
                    showImages.map((b,idx)=> <SwiperSlide key={idx}>
                    <BannerBody b={b}>

                    </BannerBody>
                    </SwiperSlide> ) 
                }
                
                </Swiper> */}

                 {/* <img src={`data:image/png;base64,${showImages[0]}`} alt="Base64 Image" /> */}


                 <BannerSwipperComponent images={showImages}></BannerSwipperComponent>

        </div>
    );
};

export default Banner;