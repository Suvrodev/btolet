import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BannerSwipperComponent from "../Banner/BannerSwipperComponent/BannerSwipperComponent";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";

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
    <div className="w-full h-[100vh] bg-purple-500 relative ">
      {images && (
        <BannerSwipperComponent
          images={images}
          imageNumber={imageNumber}
        ></BannerSwipperComponent>
      )}

      <button
        onClick={handleGoBack}
        className="w-[50px] h-[50px] absolute left-6 md:left-10 top-20 md:top-10  bg-white rounded-full flex items-center justify-center"
      >
        <KeyboardBackspaceOutlined />
      </button>
      {/* <div className=" mt-[72px] md:mt-0 w-full h-full  overflow-hidden bg-yellow-300 ">
        {images?.map((image, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: "0",
              left: `${index * 100}%`,
              width: "100%",
              height: "100%",
              transition: "transform 0.5s ease",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt={`Image ${index}`}
              style={{ width: "100%", height: "100%" }}
              className={` h-full  `}
            />
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-xl">
          {images.map((_, index) => (
            <p
              key={index}
              className={`w-[10px] h-[10px] bg-white rounded-full transition-width duration-500 ease-in-out ${
                currentIndex === index ? "w-[35px]" : "w-[10px]"
              } `}
            ></p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default FullImage;
