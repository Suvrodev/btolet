import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const TotalSize = () => {

    const {setTotalSize,totalSize,errorTotalSize}=useContext(AuthContext)

    const handleTotalSize=(event)=>{
        setTotalSize(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                <input onChange={handleTotalSize} type="text" className={`input input-bordered  w-full text-white ${errorTotalSize?'errorBorder':''}`}
                 name="" id="" max={50} min={1} value={totalSize?totalSize:""} placeholder='Total Size'  />
            </div>
        </div>
    );
};

export default TotalSize;