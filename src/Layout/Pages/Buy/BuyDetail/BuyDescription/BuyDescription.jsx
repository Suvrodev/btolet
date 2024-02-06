import React from 'react';

const BuyDescription = ({description}) => {
    return (
        <div>
            <h1 className='text-2xl '>Description</h1>
                <p className='bg-gray-500 p-5 rounded-md text-2xl font-bold'>
                    {description?description:"No Description"}
                </p>
        </div>
    );
};

export default BuyDescription;