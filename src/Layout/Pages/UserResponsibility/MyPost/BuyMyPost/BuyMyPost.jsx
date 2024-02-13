import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import axios from 'axios';
import BuyCard from '../../../Buy/BuyCard/BuyCard';

const BuyMyPost = () => {

    const {uId,successfullMessage}=useContext(AuthContext)


    const [refress,setRefress]=useState(true)
    const handleRefresh=()=>{
        setRefress(!refress)
    }
    
    const [myPost,setMyPost]=useState([])  
    useEffect(()=>{
       if(uId){
            axios.get(`http://154.26.135.41:3800/api/pro/user/mypost?uid=${uId}&page=1`)
            .then(res=>{
                setMyPost(res.data);
            })
       }
    },[uId,refress])

    return (
        <div>
             <h1>My Post(BUY)</h1>
             <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {
                myPost.map((buy,idx)=> <BuyCard key={idx} buy={buy} myPostBuy={'myPostBuy'} handleRefresh={handleRefresh} ></BuyCard>)
              }
           </div>
        </div>
    );
};

export default BuyMyPost;