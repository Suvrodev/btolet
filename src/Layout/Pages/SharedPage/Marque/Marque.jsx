import React, { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Marque = () => {
    const {baseUrl}=useContext(AuthContext)
    const [marqueText,setMarqueText]=useState("")
    useEffect(()=>{
        fetch(`${baseUrl}/api/notes`)
        .then(res=>res.json())
        .then(data=>setMarqueText(data.text))
    },[])

    // console.log("Marque: ",marqueText);

    return (
        <div className='bg-[#E3E3E3] p-2 rounded-md m-5'>
             <Marquee speed={100} className="text-black font-bold">
                {marqueText}
            </Marquee>
        </div>
    );
};

export default Marque;