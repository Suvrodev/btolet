import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import "./Skeleton.css";

import girl from "../../../../../assets/Image/1.jpg";

const Skeletonn = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const onZoom = (e) => {
    setIsZoomed(true);
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.currentTarget.querySelector("img").style.transformOrigin = `${x}% ${y}%`;
  };

  const offZoom = (e) => {
    setIsZoomed(false);
    e.currentTarget.querySelector(
      "img"
    ).style.transformOrigin = `center center`;
  };

  return (
    <div>
      <div className="sklLoading w-[500px] h-[500px] mx-auto flex items-center justify-center">
        <h1>Suvrodeb Skeliton</h1>
      </div>

      <div>
        <h1>Image</h1>
        <div>
          <style>
            {`
                #container {
                    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
                    height: 400px;
                    width: 500px;
                    overflow: hidden;
                }

                img {
                    width: 100%;
                    height: 100%;
                    transform: ${isZoomed ? "scale(2.5)" : "scale(1)"};
                }
                `}
          </style>
          <h1>Chek Image</h1>
          <div
            id="container"
            onMouseMove={onZoom}
            onMouseOver={onZoom}
            onMouseLeave={offZoom}
          >
            <img src={girl} alt="Image Alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeletonn;
