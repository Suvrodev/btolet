import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Maintenence = () => {

    const {setMaintenance,maintenance}=useContext(AuthContext)

    const handleMaintenance=(event)=>{
        setMaintenance(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                <input onChange={handleMaintenance} type="number" className='input input-bordered text-white w-full' name="" id="" max={50} min={1} value={maintenance?maintenance:""} placeholder='300' />
            </div>
        </div>
    );
};

export default Maintenence;