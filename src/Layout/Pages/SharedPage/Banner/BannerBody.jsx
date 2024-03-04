import React from 'react';

const BannerBody = ({b}) => {
    // console.log("BannerBody(b): ",b);
    return (
        <div className=' w-full h-full rounded-lg '>
           <img className='w-full h-full rounded-lg '  src={`data:image/png;base64,${b}`} alt="" />
        </div>
    );
};

export default BannerBody;