import React from 'react';

const Amenities = () => {
    return (
        <div>
            <h1 className='my-5'>Amenities</h1>
                <div className='flex gap-4'>
                <label className="cursor-pointer label  w-[150px] text-left border rounded-md py-2 px-5 flex gap-1 ">
                    <input type="checkbox"  className="checkbox checkbox-accent" />
                    <span className="label-text">Electricity</span>
                </label>
                <label className="cursor-pointer label w-[150px] text-left border rounded-md py-2 px-5 flex gap-1 ">
                    <input type="checkbox"  className="checkbox checkbox-accent" />
                    <span className="label-text">Drain</span>
                </label>
            </div>
         </div>
    );
};

export default Amenities;