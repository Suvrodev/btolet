import React, { useEffect, useState } from "react";

import "./Check.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";

/////Material Icon
import { CameraAltOutlined, DirectionsBikeOutlined, Elevator, ElevatorOutlined, ExitToAppOutlined, FireExtinguisherOutlined, FireTruckSharp, GasMeter, GasMeterOutlined, GrassOutlined, LiveTvOutlined, LocalFireDepartmentOutlined, Phone, PhotoCamera, Pool, PowerSettingsNew, PowerSettingsNewRounded, SecurityOutlined, TurnSharpRight, VerifiedUserOutlined, Water, Wifi } from "@mui/icons-material";



const Checki = () => {

  const amenitiesIcons = [
    <DirectionsBikeOutlined />,
    <PhotoCamera />,
    <LocalFireDepartmentOutlined/>,
    <GasMeterOutlined />,
    <ElevatorOutlined />,
    <FireExtinguisherOutlined/>, 
    <GasMeterOutlined />,
    <ExitToAppOutlined />,
    <SecurityOutlined />,
    <GrassOutlined />,
    <PowerSettingsNewRounded />,
    <FireTruckSharp />,
    <VerifiedUserOutlined />,
    <Pool />,
    <Phone />,
    <Water />,
    <Wifi />,
    <LiveTvOutlined />,
    <PowerSettingsNew />,
    <TurnSharpRight />
];

   
  return (
        <div>

            <div>
                <h1>Amenitie Icon:</h1>
                <div className="flex gap-4">
                  {
                    amenitiesIcons.map((icon,idx)=>(
                      <div key={idx}> {icon} </div>
                    ))
                  }
                </div>
            </div>
      </div>

  );
};

export default Checki;
