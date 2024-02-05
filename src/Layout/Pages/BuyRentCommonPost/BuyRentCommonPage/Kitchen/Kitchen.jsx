import React, { useState } from 'react';

const Kitchen = () => {

      ///Kitchen Start
      const kitchens=["1","2","3","4","5","6","7+"]
      const [selectedKitchen, setSelectedKitchen] = useState('');
  
      const handleKitchenChange = (event) => {
          setSelectedKitchen(event.target.value);
          console.log("Kitchen: ",event.target.value);
      };
      ///Kitchen End

    return (
        <div>
            <h1 className='my-2'>Kitchen</h1>
            <div className="w-full">
                <select 
                    value={selectedKitchen} 
                    onChange={handleKitchenChange}
                    className=" w-[80%] p-2 border rounded shadow-sm"
                >
                    <option value="" disabled>Select</option>
                    {kitchens.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Kitchen;