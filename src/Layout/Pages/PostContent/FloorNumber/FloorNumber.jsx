import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const FloorNumber = () => {

    const {setFloorNumber,floorNumber,errorFloorNumber}=useContext(AuthContext)

    const handleFloorNumber=(event)=>{
        setFloorNumber(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                <input onChange={handleFloorNumber} type="number" className={`input input-bordered text-white w-full ${errorFloorNumber?'errorBorder':''}`}
                 name="" id="" max={50} min={1} value={floorNumber?floorNumber:""} placeholder='Floor Number' />
            </div>
        </div>
    );
};

export default FloorNumber;