import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Renttk = () => {

    const {setRentTkValue,rentTkValue,errorRentTkValue}=useContext(AuthContext)

    const handleRentTkValue=(event)=>{
        setRentTkValue(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                <input onChange={handleRentTkValue} type="number" className={`input input-bordered text-white w-full ${errorRentTkValue?'errorBorder':''}`}
                 name="" id="" max={50} min={1} value={rentTkValue?rentTkValue:""} placeholder='Rent' />
            </div>
        </div>
    );
};

export default Renttk;