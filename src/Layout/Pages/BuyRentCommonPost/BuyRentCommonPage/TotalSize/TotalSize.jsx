import React from 'react';

const TotalSize = () => {
    return (
        <div>
             <h1 className='my-2'>Total Size</h1>
            <div className="w-full">
                <input type="text" className='input input-bordered  w-[80%] text-white' name="" id="" max={50} min={1} placeholder='Total Size' />
            </div>
        </div>
    );
};

export default TotalSize;