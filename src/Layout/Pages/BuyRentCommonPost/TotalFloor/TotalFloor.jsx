import React from 'react';

const TotalFloor = () => {
    return (
        <div>
            <h1 className='my-2'>Total Floor</h1>
            <div className="w-full">
                <input type="number" className='input input-bordered  w-[80%]' name="" id="" max={50} min={1} placeholder='Total Floor' />
            </div>
        </div>
    );
};

export default TotalFloor;