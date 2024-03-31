import "./Banner.css";
import React, { useContext, useEffect, useState } from "react";

import BannerBody from "./BannerBody";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

///Swipper Start
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AuthContext } from "../../../../Providers/AuthProvider";
import BannerSwipperComponent from "./BannerSwipperComponent/BannerSwipperComponent";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { green } from "@mui/material/colors";
///Swipper End

//Pure Carousol

const Banner = () => {
  const { baseUrl } = useContext(AuthContext);
  const [bannerImages, setBannerImages] = useState([]);
  let showImages = [];
  useEffect(() => {
    fetch(`${baseUrl}/banner`)
      .then((res) => res.json())
      .then((data) => setBannerImages(data));
  }, []);
  // console.log("Banenr: ",bannerImages);

  let i = 0;
  for (i = 0; i <= bannerImages.length; i++) {
    showImages.push(bannerImages[i]?.image);
  }

  ////Fucking Galib
  showImages.pop();
  ///Fucking Galib

  // showImages = [];

  // console.log("Show Images: ", showImages, " Length: ", showImages.length);
  /**
   * Own Banner
   */

  return (
    <div className={`Banner  ${showImages.length == 0 ? "sklLoading" : ""} `}>
      <BannerSwipperComponent
        images={showImages}
        rnd={true}
        className=""
      ></BannerSwipperComponent>
    </div>
  );
};

export default Banner;
