import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Description = () => {
    const {setDescription}=useContext(AuthContext)

    const handleDescription=(event)=>{
        setDescription(event.target.value);
      }

    return (
        <div className=''>
            <textarea onChange={handleDescription} className="input input-bordered resize-none w-full h-[150px] p-5 rounded-md text-white" placeholder="Description"></textarea>

        </div>
    );
};

export default Description;