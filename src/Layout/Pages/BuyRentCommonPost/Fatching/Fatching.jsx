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
                <h1 className='my-2'>Faching</h1>
            <div className="w-full text-white">
                <select 
                    value={selectedFaching} 
                    onChange={handleFachingChange}
                    className=" w-[80%] p-2 border rounded shadow-sm"
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