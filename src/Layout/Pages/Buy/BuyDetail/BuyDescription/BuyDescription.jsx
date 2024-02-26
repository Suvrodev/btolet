import { DensityMediumOutlined } from '@mui/icons-material';
import React from 'react';

const BuyDescription = ({description}) => {
    return (
        <div className='my-4'>
            <h1 className='text-2xl flex items-center gap-2 '> <DensityMediumOutlined/> Description</h1>
                <p className='bg-[#E6E8FF] p-5 rounded-md text-2xl font-bold'>
                    {description?description:"No Description"}
                </p>
        </div>
    );
};

export default BuyDescription;