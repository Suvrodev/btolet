import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

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

const Amenities = ({ small, big, forSort }) => {
  const { selectedAmenities, setSelectedAmenities } = useContext(AuthContext);

  let amenities = [];

  if (big) {
    amenities = [
      "Parking",
      "CCTV",
      "GAS",
      "Giser",
      "Elevator",
      "Fire Alarm",
      "Wasa Connection",
      "Fire Exit",
      "Security Guard",
      "Garden",
      "Power Backup",
      "Waste Disposal",
      "Earthquack Resistant",
      "Swiming Pool",
      "Telephone",
      "Water Supply",
      "Internet",
      "Cable TV",
    ];
  }
  if (small) {
    amenities = ["Electricity", "Drain"];
  }
  if (forSort) {
    amenities = [
      "Parking",
      "CCTV",
      "GAS",
      "Giser",
      "Elevator",
      "Fire Alarm",
      "Wasa Connection",
      "Fire Exit",
      "Security Guard",
      "Garden",
      "Power Backup",
      "Waste Disposal",
      "Earthquack Resistant",
      "Swiming Pool",
      "Telephone",
      "Water Supply",
      "Internet",
      "Cable TV",
      "Electricity",
      "Drain",
    ];
  }

  const handleButtonClick = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(
        selectedAmenities.filter((item) => item !== amenity)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  ////Icon
  const amenitiesIcons = [
    <DirectionsBikeOutlined />,
    <PhotoCamera />,
    <LocalFireDepartmentOutlined />,
    <GasMeterOutlined />,
    <ElevatorOutlined />,
    <FireExtinguisherOutlined />,
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
    <TurnSharpRight />,
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10  w-full md:w-[550px]">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center  p-2 rounded-md">
            <button
              onClick={() => handleButtonClick(amenity)}
              className={`h-[40px] w-[130px] md:w-[150px]   flex items-center justify-center border-2 rounded-[15px] bg-white text-[12px] md:text-[16px] text-[#2E2D36] gap-2 br   ${
                selectedAmenities.includes(amenity)
                  ? "border-2 text-blue-600 border-blue-600"
                  : ""
              }`}
            >
              <span className="opacity-70">
                {" "}
                {small ? amenitiesIcons[index + 18] : amenitiesIcons[index]}
              </span>

              {amenity}
            </button>
          </div>
        ))}
        {/* <div className="mt-4 md:col-span-4 bg-red-400">
                    Selected Amenities: {selectedAmenities.join(', ')}
                </div> */}
      </div>
    </div>
  );
};

export default Amenities;
