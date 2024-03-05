import React, { useEffect, useState } from "react";

import "./Check.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";




const Checki = ({chukuImage}) => {

  //   const [isHovered, setIsHovered] = useState(false);
  //   const [position, setPosition] = useState({ x: 0, y: 0 });

  //   const handleMouseMove = (e) => {
  //   const imageWrapper = e.currentTarget.getBoundingClientRect();

  //   const x = ((e.clientX - imageWrapper.left) / imageWrapper.width) * 100;
  //   const y = ((e.clientY - imageWrapper.top) / imageWrapper.height) * 100;

  //   setPosition({ x, y });
  // };
    
  return (
        <div>
            <div
              className="imageWrapper"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              <div className={`viewport ${isHovered ? 'zoomed' : ''}`} style={{ backgroundImage: `url(${Image})`, backgroundPosition: `${position.x}% ${position.y}%` }}></div>
           
            </div>


        </div>

  );
};

export default Checki;
