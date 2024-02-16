import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const BedRooms = () => {


    const {selectedBedRoom,setSelectedBedRoom}=useContext(AuthContext)

     // Bedroom Start
     const bedrooms=["1","2","3","4","5","6","7+"]
    //  const [selectedBedRoom,setSelectedBedRoom]=useState("1")
     const handleBedRoom=(index)=>{
         setSelectedBedRoom(bedrooms[index])
         console.log("Bedroom: ",bedrooms[index]);
         // console.log("Index: ",index);
     }
      // Bedroom End

    return (
        <div>
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