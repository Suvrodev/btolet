import React, { useState } from 'react';

const GarageType = () => {
    const garageTypes=["Garage","Car","Bike"]
    const [selectedgarageType, setSelectedgarageType] = useState('');

    const handleGarageTypeChange = (event) => {
        setSelectedgarageType(event.target.value);
        console.log("Garage Type: ",event.target.value);
    };
    return (
        <div>
            <h1 className='my-2'>Garage Type</h1>
            <div className="w-full text-white">
                <select 
                    value={selectedgarageType} 
                    onChange={handleGarageTypeChange}
                    className=" w-[80%] p-2 border rounded shadow-sm"
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