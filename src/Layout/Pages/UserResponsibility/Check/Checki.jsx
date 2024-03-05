import React, { useEffect, useState } from "react";

import "./Check.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";

/////Material Icon
import { CameraAltOutlined, DirectionsBikeOutlined, Elevator, ElevatorOutlined, ExitToAppOutlined, FireExtinguisherOutlined, FireTruckSharp, GasMeter, GasMeterOutlined, GrassOutlined, LiveTvOutlined, LocalFireDepartmentOutlined, Phone, PhotoCamera, Pool, PowerSettingsNew, PowerSettingsNewRounded, SecurityOutlined, TurnSharpRight, VerifiedUserOutlined, Water, Wifi } from "@mui/icons-material";
import ImageZoom from "./ImageZoom.jsx";
import ImageMagnifier from "./ImageMagnifier/ImageMagnifier.jsx";



const Checki = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const imageWrapper = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - imageWrapper.left) / imageWrapper.width) * 100;
    const y = ((e.clientY - imageWrapper.top) / imageWrapper.height) * 100;

    setPosition({ x, y });
  };
    
  return (
        <div>

            {/* <div>
                <h1>Amenitie Icon:</h1>
                <div className="flex gap-4">
                  {
                    amenitiesIcons.map((icon,idx)=>(
                      <div key={idx}> {icon} </div>
                    ))
                  }
                </div>
            </div> */}



          

          {/* <div className="App">
              <ImageZoom src={Image} alt="Your image" />
          </div> */}

      {/* <div className="">
        <ImageMagnifier smallImage={Image} largeImage={Image} />
      </div> */}

      <div>
        <ImageMagnifier
          smallImage={{ src: Image, width: 200, height: 200 }}
          largeImage={{ src: Image, width: 200, height: 200 }}
        />
     </div>



     {/* <div className="imageWrapper">
        <img className="innerImage" src={Image} alt="" />     
     </div> */}

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
