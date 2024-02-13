import React, { useState } from 'react';
import anImage from '../../../../assets/Image/Suvrodev.jpg'

const YourDetails = () => {


    const y=true

     // Bathroom Start
     const youAres=["Owner","Agent","Developer"]
     const [selectedYouAres,setSelectedYouAres]=useState('')
     const handleYouAre=(index)=>{
          setSelectedYouAres(youAres[index])
          console.log("You Are: ",youAres[index]);
     }
     // Bathroom End

    return (
        <div>
            <p>Your Details</p>
            <p className='w-full h-[1px] bg-gray-400 my-2'></p>


            <div className='flex gap-5 items-center'>
                <div className='w-[50%] flex  items-center bg-red-500 gap-4'>
                    <div className='w-full md:w-[50%] flex items-center justify-end'>
                        <img className='w-[180px] h-[200px] rounded-full' src={anImage} alt="" />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col gap-4 justify-center bg-green-600'>
                        <h1>Name</h1>
                        <input type="text" name="" id="" className='input input-bordered' placeholder='Name' />
                    </div>
                </div>

                <div className='w-[50%] bg-green-600'>
                    <div>
                        {
                           y &&
                           <>
                            <h1>You Are</h1>
                            <div className='flex gap-5 my-5'>
                                {youAres.map((youAre, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleYouAre(index)}
                                            className={`btn    ${selectedYouAres===youAre?'btn-primary':'btn-outline btn-info'}`}
                                            >
                                        {youAre}
                                        </button>
                                    ))}
                            </div>
                           </> 
                        }
                    </div>
                    <h1>Phone</h1>
                    <input type="number" name="" className='input input-bordered text-white' id="" placeholder='Phone Number' />
                    <h1>Whatsapp</h1>
                    <input type="number" name="" className='input input-bordered text-white' id="" placeholder='Whatsapp Number' />
                </div>
            </div>
        </div>
    );
};

export default YourDetails;