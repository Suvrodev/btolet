import React from 'react';
import LPType from '../../../BuyRentCommonPost/LPType/LPType';
import Area from '../../../BuyRentCommonPost/Area/Area';
import Measurement from '../../../BuyRentCommonPost/Measurement/Measurement';
import RoadSize from '../../../BuyRentCommonPost/RoadSize/RoadSize';
import Price from '../../../BuyRentCommonPost/Price/Price';
import YoutubeVideo from '../../../BuyRentCommonPost/YoutubeVideo/YoutubeVideo';
import Amenities from '../../../BuyRentCommonPost/Amenities/Amenities';

const Land = () => {
    
    return (
        <div>
           <LPType></LPType>
           <div className='flex items-center w-full my-4'>
             <div className='w-[50%]'>
                  <Area></Area>
             </div>
             <div className='w-[50%]'>
                  <Measurement></Measurement>
             </div>
           </div>

           <div className='flex w-full items-start my-4 '>
             <div className='w-[50%]'>
                 <RoadSize></RoadSize>
             </div>
             <div className='w-[50%]'>
                  <Price></Price>
             </div>
           </div>

           <div className='flex w-full items-center my-1 '>
             <div className='w-[50%]'>
                 <YoutubeVideo></YoutubeVideo>
             </div>
             <div className='w-[50%]'>
                 <Amenities></Amenities>
             </div>
           </div>
        </div>
    );
};

export default Land;