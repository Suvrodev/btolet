import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Area = () => {

    const {selectedAreas,setSelectedAreas}=useContext(AuthContext)
    const areas=["শতাংশ","কাঠা","বিঘা","বর্গফুট"]
    // const [selectedAreas, setSelectedAreas] = useState('শতাংশ');

    const handleAreaChange = (event) => {
        setSelectedAreas(event.target.value);
        console.log("Area: ",event.target.value);
    };

    return (
        <div>
            <div className="w-full text-white">
                <select 
                    value={selectedAreas} 
                    onChange={handleAreaChange}
                    className=" w-full  input input-bordered"
                >
                    <option value="" disabled>Select</option>
                    {areas.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Area;