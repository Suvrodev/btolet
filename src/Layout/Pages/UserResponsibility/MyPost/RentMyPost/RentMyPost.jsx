import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import axios from 'axios';
import RentCard from '../../../Home/Rent/RentCard/RentCard';

const RentMyPost = () => {

    const {uId,successfullMessage,baseUrl}=useContext(AuthContext)

    const [refress,setRefress]=useState(true)
    const handleRefresh=()=>{
        setRefress(!refress)
    }

    const [myPost,setMyPost]=useState([])  
    useEffect(()=>{
       if(uId){
            axios.get(`${baseUrl}/api/tolet/user/mypost?uid=${uId}&page=1`)
            .then(res=>{
                setMyPost(res.data);
            })
       }
    },[uId,refress])

    return (
        <div>
           <h1>My Post(RENT)</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {
                myPost.map((rent,idx)=> <RentCard key={idx} r={rent} myPostRent={'myPostRent'} handleRefresh={handleRefresh} ></RentCard>)
              }
           </div>
        </div>
    );
};

export default RentMyPost;