import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';

//////Material Icon
import { CameraAltOutlined, DirectionsBikeOutlined, Elevator, ElevatorOutlined, ExitToAppOutlined, FireExtinguisherOutlined, FireTruckSharp, GasMeter, GasMeterOutlined, GrassOutlined, LiveTvOutlined, LocalDrinkOutlined, LocalFireDepartmentOutlined, Phone, PhotoCamera, Pool, PowerSettingsNew, PowerSettingsNewRounded, SecurityOutlined, TurnSharpRight, VerifiedUserOutlined, Water, Wifi } from "@mui/icons-material";


const Facilities = ({fromFilter}) => {

    const {selectedFacilities,setSelectedFacilities}=useContext(AuthContext)


    
    const facilities=["Parking","GAS","Free Alarm","CCTV","Lift",
        "Power Backup","Security Guard","Wifi","Giser","Garden","Drinking Water"]
    






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
        <LocalFireDepartmentOutlined/>,
        <FireExtinguisherOutlined/>, 
        <PhotoCamera />,
        <ElevatorOutlined/>,
        <PowerSettingsNew />,
        <SecurityOutlined />,
        <Wifi />,
        <GasMeterOutlined/>,
        <GrassOutlined />,
        <LocalDrinkOutlined/>,
    ];

    return (
        <div >
            <div className='flex flex-wrap  w-8/12 gap-1'>
                {facilities.map((facility, index) => (
                <div key={index} className="flex items-center  p-2 rounded-md">
                    <button
                    onClick={() => handleButtonClick(facility)}
                    className={`flex items-center btn btn-outline btn-sm ${
                        selectedFacilities.includes(facility)
                        ? "border-blue-600 text-blue-600 border-2"
                        : ""
                    } `}
                    >
                    {facilitiesIcons[index]}
                    <span className="ml-2">{facility}</span>
                    </button>
            </div>
            ))}
        </div>

        

           
        </div>
    );
};

export default Facilities;