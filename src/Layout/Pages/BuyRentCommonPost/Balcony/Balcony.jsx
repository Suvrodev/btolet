import React, { useState } from 'react';

const Balcony = () => {
     const balconies=["1","2","3","4","5","6","7+"]
    const [selectedBalcony, setSelectedBalcony] = useState('');

    const handleBalconyChange = (event) => {
        setSelectedBalcony(event.target.value);
        console.log("Balcony: ",event.target.value);
    };

    return (
             <div className=''>
                    <h1 className='my-2'>Balcony</h1>
                    <div className="w-full text-white">
                        <select 
                            value={selectedBalcony} 
                            onChange={handleBalconyChange}
                            className=" w-[80%] p-2 border rounded shadow-sm"
                        >
                            <option value="" disabled>Select</option>
                            {balconies.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>
            </div>
    );
};

export default Balcony;