import React, { useState } from 'react';

const BedRooms = () => {

     // Bedroom Start
     const bedrooms=["1","2","3","4","5","6","7+"]
     const [selectedBedRoom,setSelectedBedRoom]=useState(null)
     const handleBedRoom=(index)=>{
         setSelectedBedRoom(bedrooms[index])
         console.log("Bedroom: ",bedrooms[index]);
         // console.log("Index: ",index);
     }
      // Bedroom End

    return (
        <div>
             <h1>Bedroom*</h1>
            <div className='flex gap-5 my-5'>
                    {bedrooms.map((bedroom, index) => (
                            <button
                                key={index}
                                onClick={() => handleBedRoom(index)}
                                className={`btn    ${selectedBedRoom===bedroom?'btn-primary':'btn-outline btn-info'}`}
                                >
                            {bedroom}
                            </button>
                        ))}
                </div>
        </div>
    );
};

export default BedRooms;