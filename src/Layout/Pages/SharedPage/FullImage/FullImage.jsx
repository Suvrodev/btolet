import React, { useEffect, useRef, useState } from "react";
import "./FullImage.css";
import { useLocation, useNavigate } from "react-router-dom";
import BannerSwipperComponent from "../Banner/BannerSwipperComponent/BannerSwipperComponent";
import {
  ChevronLeftOutlined,
  KeyboardBackspaceOutlined,
} from "@mui/icons-material";
import waterMarkImage from "../../../../assets/Image/WaterMark.png";

const FullImage = () => {
  const location = useLocation();
  const images = location?.state?.fullImageData;
  const imageNumber = location?.state?.imageNumber;

  if (images) {
    // console.log("Images (Full Image) ", images[0]);
  }

  if (imageNumber) {
    console.log("Image Number: ", imageNumber);
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-[98vh] md:h-[100vh] bg-purple-500 relative ">
      {images && (
        <BannerSwipperComponent
          images={images}
          imageNumber={imageNumber}
        ></BannerSwipperComponent>
      )}

      <button
        onClick={handleGoBack}
        className=" absolute left-0 md:left-10 top-20 md:top-10  rounded-full flex items-center justify-center"
      >
        {/* <KeyboardBackspaceOutlined /> */}
        <ChevronLeftOutlined className="text-white goBack" />
      </button>
      <div className="absolute bottom-0 right-0 md:bottom-10 md:right-10 ">
        <img
          className="w-[120px] md:w-[150px] opacity-60"
          src={waterMarkImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default FullImage;
