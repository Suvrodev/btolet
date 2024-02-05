import React from 'react';
import anImage from '../../../../assets/Logo/logo.png'

const YourDetails = () => {
    return (
        <div>
            <p>Your Details</p>
            <p className='w-full h-[2px] bg-gray-400 my-2'></p>
            <div className='flex  items-center'>
                <div className='w-full md:w-[50%]'>
                    <img className='w-[450px]' src={anImage} alt="" />
                </div>
                <div className='w-full md:w-[50%]'>
                    <h1>Name</h1>
                    <input type="text" name="" id="" className='input input-bordered' placeholder='Name' />
                </div>
            </div>
        </div>
    );
};

export default YourDetails;