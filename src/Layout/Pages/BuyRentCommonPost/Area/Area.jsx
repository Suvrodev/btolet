import React, { useState } from 'react';

const Area = () => {

    const areas=["শতাংশ","কাঠা","বিঘা","বর্গফুট"]
    const [selectedAreas, setSelectedAreas] = useState('');

    const handleAreaChange = (event) => {
        setSelectedAreas(event.target.value);
        console.log("Area: ",event.target.value);
    };

    return (
        <div>
            <h1 className='my-2'>Area*</h1>
            <div className="w-full">
                <select 
                    value={selectedAreas} 
                    onChange={handleAreaChange}
                    className=" w-[80%] p-2 border rounded shadow-sm"
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