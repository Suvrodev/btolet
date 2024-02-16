import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const GarageType = () => {

    const {selectedgarageType,setSelectedgarageType}=useContext(AuthContext)


    const garageTypes=["Garage","Car","Bike"]
    // const [selectedgarageType, setSelectedgarageType] = useState('Garage');

    const handleGarageTypeChange = (event) => {
        setSelectedgarageType(event.target.value);
        console.log("Garage Type: ",event.target.value);
    };
    return (
        <div>
            <div className="w-full text-white">
                <select 
                    value={selectedgarageType} 
                    onChange={handleGarageTypeChange}
                    className=" w-full  input input-bordered"
                >
                    <option value="" disabled>Select</option>
                    {garageTypes.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
    </div>
    );
};

export default GarageType;