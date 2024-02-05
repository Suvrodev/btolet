import React, { useState } from 'react';

const BathRoom = () => {

     // Bathroom Start
     const bathrooms=["1","2","3","4","5","6","7+"]
     const [selectedBathroom,setSelectedBathroom]=useState(null)
     const handleBathroom=(index)=>{
         setSelectedBathroom(bathrooms[index])
         console.log("Bathroom: ",bathrooms[index]);
     }
     // Bathroom End

    return (
        <div>
             <h1>Bathroom*</h1>
             <div className='flex gap-5 my-5'>
                    {bathrooms.map((bathroom, index) => (
                            <button
                                key={index}
                                onClick={() => handleBathroom(index)}
                                className={`btn    ${selectedBathroom===bathroom?'btn-primary':'btn-outline btn-info'}`}
                                >
                            {bathroom}
                            </button>
                        ))}
                </div>
        </div>
    );
};

export default BathRoom;