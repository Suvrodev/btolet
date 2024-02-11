import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import axios from 'axios';
import RentCard from '../../../Home/Rent/RentCard/RentCard';

const RentSavedPost = () => {
    const {uId,successfullMessage}=useContext(AuthContext)

    const savedInfoRent={
        "uid": uId,
        "page": 1
      }
     
    const [savedPost,setSavedPost]=useState([])  
    useEffect(()=>{
        axios.post(`http://154.26.135.41:3800/api/tolet/save/post/get`,savedInfoRent)
        .then(res=>{
            setSavedPost(res.data);
        })
    },[uId])
    return (
        <div>
           <h1>My Saved Post</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {
                savedPost.map((rent,idx)=> <RentCard key={idx} r={rent} savedRent={'savedRent'} ></RentCard>)
              }
           </div>
        </div>
    );
};

export default RentSavedPost;