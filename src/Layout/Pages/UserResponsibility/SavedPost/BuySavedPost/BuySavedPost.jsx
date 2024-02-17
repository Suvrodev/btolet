import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import axios from 'axios';
import BuyCard from '../../../Buy/BuyCard/BuyCard';

const BuySavedPost = () => {

    const {uId,successfullMessage,baseUrl}=useContext(AuthContext)

    const [refress,setRefress]=useState(true)

    const handleRefresh=()=>{
        setRefress(!refress)
    }

    console.log("Refresh: ",refress);

    const savedInfoRent={
        "uid": uId,
        "page": 1
      }
     
    const [savedPost,setSavedPost]=useState([])  
    useEffect(()=>{
        axios.post(`${baseUrl}/api/pro/save/post/get`,savedInfoRent)
        .then(res=>{
            setSavedPost(res.data);
        })
    },[uId,refress])

    return (
        <div>
           <h1>My Saved Post (BUY)</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {
                savedPost.map((buy,idx)=> <BuyCard key={idx} buy={buy} savedBuy={'savedBuy'} handleRefresh={handleRefresh} ></BuyCard>)
              }
           </div>
        </div>
    );
};

export default BuySavedPost;