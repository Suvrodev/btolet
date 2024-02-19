import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const ShortAddress = () => {

    const {setShortAddress,shortAddress}=useContext(AuthContext)

    const handleShortAddress=(event)=>{
        setShortAddress(event.target.value);
      }

    return (
        <div>
            <div className="w-full">
                <input onChange={handleShortAddress} type="text" className='input input-bordered  w-full text-white' name="" id="" value={shortAddress?shortAddress:""}  placeholder='Uttara Sector 16, Road-3, Dhaka' />
            </div>
          </div>
    );
};

export default ShortAddress;