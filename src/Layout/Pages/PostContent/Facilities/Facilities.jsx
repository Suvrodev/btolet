import React, { useContext, useState } from "react";
import "./Facilities.css";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

//////Material Icon
import {
  CameraAltOutlined,
  DirectionsBikeOutlined,
  Elevator,
  ElevatorOutlined,
  ExitToAppOutlined,
  FireExtinguisherOutlined,
  FireTruckSharp,
  GasMeter,
  GasMeterOutlined,
  GrassOutlined,
  LiveTvOutlined,
  LocalDrinkOutlined,
  LocalFireDepartmentOutlined,
  Phone,
  PhotoCamera,
  Pool,
  PowerSettingsNew,
  PowerSettingsNewRounded,
  SecurityOutlined,
  TurnSharpRight,
  VerifiedUserOutlined,
  Water,
  Wifi,
} from "@mui/icons-material";

const Facilities = ({ fromFilter }) => {
  const { selectedFacilities, setSelectedFacilities } = useContext(AuthContext);

  const facilities = [
    "Parking",
    "GAS",
    "Free Alarm",
    "CCTV",
    "Lift",
    "Power Backup",
    "Security Guard",
    "Wifi",
    "Giser",
    "Garden",
    "Drinking Water",
  ];

  //  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleButtonClick = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(
        selectedFacilities.filter((item) => item !== facility)
      );
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  // console.log("Selected Facilities: ", selectedFacilities);

  ////Icon
  const facilitiesIcons = [
    <DirectionsBikeOutlined />,
    <LocalFireDepartmentOutlined />,
    <FireExtinguisherOutlined />,
    <PhotoCamera />,
    <ElevatorOutlined />,
    <PowerSettingsNew />,
    <SecurityOutlined />,
    <Wifi />,
    <GasMeterOutlined />,
    <GrassOutlined />,
    <LocalDrinkOutlined />,
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10  w-full md:w-[550px] ">
        {facilities.map((facility, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(facility)}
            className={`h-[40px] w-[130px] md:w-[150px]   flex items-center justify-center border-2 rounded-[15px] bg-white text-[12px] md:text-[16px] text-[#2E2D36] gap-2 br  ${
              selectedFacilities.includes(facility)
                ? "border-blue-600 text-blue-600 border-2"
                : ""
            } `}
          >
            {facilitiesIcons[index]}
            <span className="ml-0">{facility}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
