import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const TotalUnit = () => {

    const {setTotalUnit,errorTotalUnit}=useContext(AuthContext)

    const handleTotalUnit=(event)=>{
        setTotalUnit(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                    <input type="number" onChange={handleTotalUnit} className={`input input-bordered  w-full text-white ${errorTotalUnit?'errorBorder':''} `} name="" id="" max={50} min={1} placeholder='Total Unit' defaultValue={5} />
            </div>
        </div>
    );
};

export default TotalUnit;