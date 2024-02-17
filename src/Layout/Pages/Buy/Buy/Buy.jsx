import React, { useContext, useEffect, useState } from 'react';
import BuyCard from '../BuyCard/BuyCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Buy = () => {

    const {lattitude,longitude,baseUrl,doubleLocation,location_1,location_2 }=useContext(AuthContext)
  
    console.log("Lattitude: ",lattitude);
    console.log("Longitude: ",longitude);
      
 
      ///Buy Data start
      const [page,setPage]=useState(1)
      const [buys,setBuys]=useState([])
      const [loading, setLoading] = useState(false);

      useEffect(()=>{
          fetch(`${baseUrl}/api/pro/postlist?page=1&geolat=${lattitude}&geolon=${longitude}`)
          .then(res=>res.json())
          .then(data=>setBuys(data))
      },[])
  
      console.log("Buy Data: ",buys);


      ///Buy Data end


  
   


    ////Post Count
    const [postCount,setPostCount]=useState("")
    useEffect(()=>{
      if(location_1 && location_2){
        fetch(`${baseUrl}/api/pro/postcount/area?location1=${location_1}&location2=${location_2}`)
        .then(res=>res.json())
        .then(data=>{
           if(data?.postCount){
              setPostCount(data?.postCount)
           }
        })
      }
    },[location_1,location_2])
    ///Area End


    return (
        <div>
          <div className='flex justify-between items-center my-4'>
            <button className='btn btn-primary'>Filter</button>

            <div>
                {
                  // postCount &&
                  <p>
                    {postCount} ads in {location_1}, {location_2}
                  </p>
                }
            </div>

            <Link to={'/buypost'}> <button className='btn btn-success'>Post</button> </Link>
          </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
               {
                 buys.map((buy,idx)=><BuyCard
                 key={idx}
                 buy={buy}
                 forBuy={'forBuy'}
                 ></BuyCard>)
               }
           </div>
        </div>
    );
};

export default Buy;