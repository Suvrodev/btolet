import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck } from 'react-icons/fa';

const Dining = () => {
   
    const {selectedDining,setSelectedDining}=useContext(AuthContext)

    const dinings=["1","2","3","4","5","6","7+"]
    // const [selectedDining,setSelectedDining]=useState("1")
    const handleDining=(index)=>{
        setSelectedDining(dinings[index])
        console.log("Dinings: ",dinings[index]);
    }

    return (
   
    <div>
        <div className='flex gap-5 my-5'>
                {dinings.map((dining, index) => (
                        <button
                            key={index}
                            onClick={() => handleDining(index)}
                            className={`btn btn-outline   ${selectedDining===dining?'border-blue-500':''}`}
                            >
                        {/* {dining} */}
                        <span className='flex items-center gap-2 text-black'> {selectedDining===dining?<FaCheck  className='text-blue-600' />:'' }  {dining} </span>
                        </button>
                    ))}
            </div>
    </div>
    );
};

export default Dining;