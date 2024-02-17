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

    // console.log(showImages[4]);

    const MoveEvent=()=>{}

    return (
        <div className='Banner'>

            <Swiper
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
                
                </Swiper>

                 {/* <img src={`data:image/png;base64,${showImages[0]}`} alt="Base64 Image" /> */}

            {/* <Carousel className='w-11/12 mx-auto bg-yellow-600'>
                <div className='imagesize'>
                    <img className=''  src={`data:image/png;base64,${showImages[0]}`} alt="Base64 Image" /> 
                </div>
                <div>
                     <img  className='' src={`data:image/png;base64,${showImages[1]}`} alt="Base64 Image" /> 
                </div>
                <div>
                  <img  className='' src={`data:image/png;base64,${showImages[2]}`} alt="Base64 Image" /> 
                </div>
                <div>
                  <img className='' src={`data:image/png;base64,${showImages[3]}`} alt="Base64 Image" /> 
                </div>
             </Carousel> */}

        {/* <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={4}
        >
        <Slider>
            <Slide index={0}>
                 <img className='imagesize'  src={`data:image/png;base64,${showImages[0]}`} alt="Base64 Image" />
            </Slide>
              <Slide index={1}>
                  <img className='imagesize'  src={`data:image/png;base64,${showImages[1]}`} alt="Base64 Image" />
              </Slide>
              <Slide index={2}>
                  <img className='imagesize'  src={`data:image/png;base64,${showImages[2]}`} alt="Base64 Image" />
                </Slide>
              <Slide index={3}>
                  <img className='imagesize'  src={`data:image/png;base64,${showImages[3]}`} alt="Base64 Image" />
                </Slide>
        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>

      </CarouselProvider> */}

      
            

        </div>
    );
};

export default Banner;