import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';

const Facilities = ({fromFilter}) => {

    const {selectedFacilities,setSelectedFacilities}=useContext(AuthContext)


    
    const facilities=["Parking","GAS","Free Alarm","CCTV","Fire Exit","Lift",
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

    return (
        <div >
            <div className='flex flex-wrap  w-8/12 gap-1'>
                {facilities.map((facility, index) => (
                <div key={index} className="flex items-center  p-2 rounded-md">
                    <button
                    onClick={() => handleButtonClick(facility)}
                    className={`flex items-center btn btn-outline btn-sm ${
                        selectedFacilities.includes(facility)
                        ? "border-blue-600 border-2"
                        : ""
                    } `}
                    >
                    {selectedFacilities.includes(facility) ? (
                        <FaCheckCircle className="text-blue-500" />
                    ) : (
                        <FaPlus />
                    )}
                    <span className="ml-2">{facility}</span>
                    </button>
            </div>
            ))}
        </div>

        

           
        </div>
    );
};

export default Facilities;