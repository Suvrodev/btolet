import React, { useEffect, useState } from 'react';
import BuyCard from '../BuyCard/BuyCard';
import { Link } from 'react-router-dom';

const Buy = () => {

    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            },
            error => {
              console.error("Error getting geolocation:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }, []);
  
      let lattitude=coordinates.latitude
      let longitude=coordinates.longitude
    //   console.log(lattitude);
    //   console.log(longitude);


      const [buys,setBuys]=useState([])
      useEffect(()=>{
          fetch(`http://154.26.135.41:3800/api/pro/postlist?page=1&geolat=${lattitude}&geolon=${longitude}`)
          .then(res=>res.json())
          .then(data=>setBuys(data))
      },[])
  
    //   console.log("Buy Data: ",buys);


    return (
        <div>
          <div className='flex justify-between my-4'>
            <button className='btn btn-primary'>Filter</button>
            <Link to={'/buypost'}> <button className='btn btn-success'>Post</button> </Link>
          </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
               {
                 buys.map((buy,idx)=><BuyCard
                 key={idx}
                 buy={buy}
                 ></BuyCard>)
               }
           </div>
        </div>
    );
};

export default Buy;