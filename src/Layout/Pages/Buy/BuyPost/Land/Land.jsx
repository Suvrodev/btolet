import React from 'react';
import LPType from '../../../PostContent/LPType/LPType';
import Area from '../../../PostContent/Area/Area';
import Measurement from '../../../PostContent/Measurement/Measurement';
import RoadSize from '../../../PostContent/RoadSize/RoadSize';
import Price from '../../../PostContent/Price/Price';
import YoutubeVideo from '../../../PostContent/YoutubeVideo/YoutubeVideo';
import Amenities from '../../../PostContent/Amenities/Amenities';


const Land = () => {
    
    return (
        <div className='my-6  grid grid-cols-1 gap-4'>
           <div>
              <h1>Type</h1>
              <LPType></LPType>
           </div>
           <div className='flex flex-col md:flex-row gap-10'>
             <div className='w-[50%]'>
                 <h1>Area</h1>
                  <Area></Area>
             </div>
             <div className='w-[50%]'>
                  <h1>Measurement*</h1>
                  <Measurement></Measurement>
             </div>
           </div>

           <div className='flex flex-col md:flex-row gap-10 '>
             <div className='w-[50%]'>
               <h1>Road size*</h1>
                 <RoadSize></RoadSize>
             </div>
             <div className='w-[50%]'>
                  <Price></Price>
             </div>
           </div>

           <div className='flex flex-col md:flex-row gap-10'>
             <div className='w-[50%]'>
                <h1>Youtube Video</h1>
                 <YoutubeVideo></YoutubeVideo>
             </div>
             <div className='w-[50%]'>
                  <h1>Amenities</h1>
                 <Amenities small={true}></Amenities>
             </div>
           </div>
        </div>
    );
};

export default Land;