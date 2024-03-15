import React, { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../../Providers/AuthProvider';
import axios from 'axios';

// const { createProxyMiddleware } = require('http-proxy-middleware');

const Marque = () => {

    const {baseUrl}=useContext(AuthContext)
    const [marqueText,setMarqueText]=useState("")

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com';
    // const apiUrl=`${baseUrl}/api/notes`
    // const apiUrl='http://154.26.135.41:3800/api/notes'
    const apiUrl=`${baseUrl}/notes`
    // const apiUrl2=`https://api.btolet.com/api/notes`

    // console.log("apiUrl-1: ",apiUrl1);
    // console.log("apiUrl-2: ",apiUrl2);

    
    useEffect(()=>{
        axios.get(apiUrl)
        .then(res=>setMarqueText(res.data.text))
        .catch(error=>console.log("Error: ",error))
    },[])

    // console.log("Marque: ",marqueText);

    return (
        <div className='bg-[#e9e8e8] p-2 rounded-md my-4 mx-4 md:mx-0'>
             <Marquee speed={100} className="text-black text-lg ">
                {marqueText}
            </Marquee>
        </div>
    );
};

export default Marque;