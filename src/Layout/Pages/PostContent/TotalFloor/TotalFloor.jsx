import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const TotalFloor = () => {
    
    const {setTotalFloor,errorTotalFloor}=useContext(AuthContext)

    const handleTotalFloor=(event)=>{
        setTotalFloor(event.target.value);
      }
    return (
        <div>
            <div className="w-full">
                <input type="number" onChange={handleTotalFloor}  className={`input input-bordered  w-full text-white ${errorTotalFloor?'errorBorder':''}`} name="" id="" max={50} min={1} placeholder='Total Floor' />
            </div>
        </div>
    );
};

export default TotalFloor;