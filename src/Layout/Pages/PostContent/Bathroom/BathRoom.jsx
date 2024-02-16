import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck } from 'react-icons/fa';

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
                                className={`btn btn-outline    ${selectedBathroom===bathroom?'border-blue-500':''}`}
                                >
                            {/* {bathroom} */}
                            <span className='flex items-center gap-2 text-black'> {selectedBathroom===bathroom?<FaCheck  className='text-blue-600' />:'' }  {bathroom} </span>
                            </button>
                        ))}
                </div>
        </div>
    );
};

export default BathRoom;