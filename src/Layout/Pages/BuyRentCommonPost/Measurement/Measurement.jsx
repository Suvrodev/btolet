import React from 'react';

const Measurement = () => {
    return (
        <div className=''>
             <h1 className='my-2'>Measurement</h1>
            <div className="w-full">
                <input type="text" className='input input-bordered  w-[80%]' name="" id="" max={50} min={1} placeholder='4.95' />
            </div>
        </div>
    );
};

export default Measurement;