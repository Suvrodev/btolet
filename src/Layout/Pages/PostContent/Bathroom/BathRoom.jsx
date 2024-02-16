import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const BathRoom = () => {


    const {selectedBathroom,setSelectedBathroom}=useContext(AuthContext)

     // Bathroom Start
     const bathrooms=["1","2","3","4","5","6","7+"]
    //  const [selectedBathroom,setSelectedBathroom]=useState("1")
     const handleBathroom=(index)=>{
         setSelectedBathroom(bathrooms[index])
         console.log("Bathroom: ",bathrooms[index]);
     }
     // Bathroom End

    return (
        <div>
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