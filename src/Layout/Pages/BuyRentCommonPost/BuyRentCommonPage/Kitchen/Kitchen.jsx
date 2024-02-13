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
            <div className="w-full text-white">
                <select 
                    value={selectedKitchen} 
                    onChange={handleKitchenChange}
                    className=" w-full p-2 input input-bordered"
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