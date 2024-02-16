import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const PropertyName = () => {
    const {setPropertyName}=useContext(AuthContext)

    const handlePropertyName=(event)=>{
        setPropertyName(event.target.value);
      }

    return (
        <div>
          <input onChange={handlePropertyName} className='input input-bordered w-full text-white' type="text" placeholder='Write your Property Name' />
        </div>
    );
};

export default PropertyName;