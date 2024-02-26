import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';



//////Material Icon
import { CameraAltOutlined, DirectionsBikeOutlined, Elevator, ElevatorOutlined, ExitToAppOutlined, FireExtinguisherOutlined, FireTruckSharp, GasMeter, GasMeterOutlined, GrassOutlined, LiveTvOutlined, LocalFireDepartmentOutlined, Phone, PhotoCamera, Pool, PowerSettingsNew, PowerSettingsNewRounded, SecurityOutlined, TurnSharpRight, VerifiedUserOutlined, Water, Wifi } from "@mui/icons-material";


const Amenities = ({small,big,forSort}) => {

    const {selectedAmenities,setSelectedAmenities}=useContext(AuthContext)

    let amenities=[];

    if(big){
        amenities=["Parking","CCTV","GAS","Giser","Elevator","Fire Alarm","Wasa Connection","Fire Exit","Security Guard","Garden",
        "Power Backup","Waste Disposal","Earthquack Resistant","Swiming Pool","Telephone","Water Supply","Internet","Cable TV"]
    }
    if(small){
        amenities=["Electricity","Drain"]
    }
    if(forSort){
        amenities=["Parking","CCTV","GAS","Giser","Elevator","Fire Alarm","Wasa Connection","Fire Exit","Security Guard","Garden",
        "Power Backup","Waste Disposal","Earthquack Resistant","Swiming Pool","Telephone","Water Supply","Internet","Cable TV","Electricity","Drain"]
    }
    

    const handleButtonClick = (amenity) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
        } else {
            setSelectedAmenities([...selectedAmenities, amenity]);
        }
    };



    ////Icon
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
        // <div>
        //      <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        //         {amenities.map((amenity, index) => (
        //             <div key={index} className="flex items-center border p-5 rounded-md">
        //             <input
        //                 type="checkbox"
        //                 id={amenity}
        //                 checked={selectedAmenities.includes(amenity)}
        //                 onChange={() => handleCheckboxChange(amenity)}
        //                 className="checkbox checkbox-accent mr-5"
        //             />
        //             <label htmlFor={amenity} className="text-sm">{amenity}</label>
        //             </div>
        //         ))}
        //         <div className="mt-4 md:col-span-4">
        //             Selected Amenities: {selectedAmenities.join(', ')}
        //         </div>
        //     </div>
        //  </div>



        <div>
            <div className="flex flex-wrap  w-8/12 gap-1">
                {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center  p-2 rounded-md">
                        <button
                            onClick={() => handleButtonClick(amenity)}
                            className={`btn btn-outline btn-sm  ${selectedAmenities.includes(amenity) ? 'border-2 text-blue-600 border-blue-600' : ''}`}
                        >
                            {
                                small?
                                amenitiesIcons[index+18]:
                                amenitiesIcons[index]
                            }
                           
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