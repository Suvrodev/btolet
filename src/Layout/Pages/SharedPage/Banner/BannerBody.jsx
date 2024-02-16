import React from 'react';

const BannerBody = ({b}) => {
    // console.log("BannerBody(b): ",b);
    return (
        <div className='bg-yellow-500 w-full h-full'>
           <img className='w-full h-full '  src={`data:image/png;base64,${b}`} alt="" />
        </div>
    );
};

export default BannerBody;