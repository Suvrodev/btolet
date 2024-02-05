import React from 'react';

const LPType = () => {
    return (
        <div>
              <h1 className='my-5'>Facilities</h1>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                    <label className="cursor-pointer label  w-[200px] text-left border rounded-md py-2 px-5 flex gap-1 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Residential</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Commercial</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Agricultural</span>
                    </label>
                   
                </div>
        </div>
    );
};

export default LPType;