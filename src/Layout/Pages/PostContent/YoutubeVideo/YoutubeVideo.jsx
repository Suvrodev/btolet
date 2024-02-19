import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const YoutubeVideo = () => {
    const {setYtLink,ytLink}=useContext(AuthContext)

    const handleYtLink=(event)=>{
        setYtLink(event.target.value)
    }
    return (
        <div>
           <input type="url" onChange={handleYtLink} name="" className='input input-bordered w-[80%] text-white' id="" value={ytLink?ytLink:""} placeholder='https://www.youtube.com/watch?v=LCI2GSVDUzg' />
        </div>
    );
};

export default YoutubeVideo;