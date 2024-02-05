import React from 'react';

const RoadSize = () => {
    return (
        <div className=''>
            <h1 className='mb-4'>Road Size</h1>
            <div className="w-full">
                <input type="text" className='input input-bordered  w-[80%]' name="" id="" max={50} min={1} placeholder='20 Feet' />
            </div>
         </div>
    );
};

export default RoadSize;