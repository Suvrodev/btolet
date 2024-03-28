import React, { useState } from "react";
import "./ImageZoom.css";

import Image from "../../../../../assets/Image/Suvrodev.jpg";

const ImageZoom = ({ comeImage }) => {
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
      <div>
        <style>
          {`
            #container {
                box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
                height: 400px;
                width: 500px;
                overflow: hidden;
            }

            .fp {
                width: 100%;
                height: 100%;
                transform: ${isZoomed ? "scale(2.5)" : "scale(1)"};
            }
            `}
        </style>
        <div
          id="container"
          onMouseMove={onZoom}
          onMouseOver={onZoom}
          onMouseLeave={offZoom}
        >
          <img
            className="fp"
            src={`data:image/jpeg;base64,${comeImage}`}
            alt="Image Alt"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
