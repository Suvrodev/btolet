import React, { useState } from 'react';

const Fatching = () => {
    const Fachings=["East","North","North-East","North-West","South","South-East","South-West","West"]
    const [selectedFaching,setSelectedFaching]=useState('');
    const handleFachingChange = (event) => {
        setSelectedFaching(event.target.value);
        console.log("Faching: ",event.target.value);
    };

    return (
        <div>
            <div className="w-full text-white">
                <select 
                    value={selectedFaching} 
                    onChange={handleFachingChange}
                    className=" w-full p-2 input input-bordered"
                >
                    <option value="" disabled>Select</option>
                    {Fachings.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Fatching;