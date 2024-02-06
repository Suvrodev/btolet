import React from 'react';

const FloorNumber = () => {
    return (
        <div>
            <h1 className='my-2'>Floor Number</h1>
            <div className="w-full">
                <input type="number" className='input input-bordered text-white w-[80%]' name="" id="" max={50} min={1} placeholder='Floor Number' />
            </div>
        </div>
    );
};

export default FloorNumber;