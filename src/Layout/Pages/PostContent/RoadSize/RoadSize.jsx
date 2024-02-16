import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const RoadSize = () => {
    const {setRoadSize,errorRoadSize}=useContext(AuthContext)

    const handleRoadSize=(event)=>{
        setRoadSize(event.target.value)
    }
    return (
        <div className=''>
            <div className="w-full">
                <input type="number" onChange={handleRoadSize} className={`input input-bordered  w-full text-white ${errorRoadSize?'errorBorder':''}`} name="" id="" max={50} min={1} placeholder='20 Feet' />
            </div>
         </div>
    );
};

export default RoadSize;