import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const TotalUnit = () => {

    const {setTotalUnit,totalUnit,errorTotalUnit}=useContext(AuthContext)

    const handleTotalUnit=(event)=>{
        setTotalUnit(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                    <input type="number" onChange={handleTotalUnit} className={`input input-bordered  w-full text-white ${errorTotalUnit?'errorBorder':''} `} 
                    name="" id="" max={50} min={1} value={totalUnit?totalUnit:""} placeholder='Total Unit'  />
            </div>
        </div>
    );
};

export default TotalUnit;