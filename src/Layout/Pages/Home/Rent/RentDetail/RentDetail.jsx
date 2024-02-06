import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RentDetail = () => {

    const {id}=useParams()
    console.log("Comming id:",id);

    const [rent,setRent]=useState(null)
    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/tolet/post?post_id=${id}`)
        .then(res=>res.json())
        .then(data=>setRent(data))
    },[])

    console.log("Basa",rent);
    return (
        <div>
            Rent Detail: {id}
        </div>
    );
};

export default RentDetail;