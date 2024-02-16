import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Measurement = () => {

    const {setMeasurement,errorMeasurement}=useContext(AuthContext)
    const handleMeasurement=(event)=>{
        setMeasurement(event.target.value)
    }
    return (
        <div className=''>
            <div className="w-full">
                <input onChange={handleMeasurement} type="text" className={`input input-bordered  w-full text-white ${errorMeasurement?'errorBorder':''}`} name="" id="" max={50} min={1} placeholder='4.95' />
            </div>
        </div>
    );
};

export default Measurement;