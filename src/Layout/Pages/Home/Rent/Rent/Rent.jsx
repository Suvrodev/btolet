import React, { useEffect, useState } from 'react';
import Marque from '../../../SharedPage/Marque/Marque';
import Banner from '../../../SharedPage/Banner/Banner';
import RentCard from '../RentCard/RentCard';

const Rent = () => {

    
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
    console.log(lattitude);6
    console.log(longitude);


    const [rents,setRents]=useState([])
    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/tolet/postlist?page=1&geolat=${lattitude}&geolon=${longitude}`)
        .then(res=>res.json())
        .then(data=>setRents(data))
    },[])

    // console.log("Rent Data: ",rents);

   
    return (
        <div className='my-4'>
          <h1 className='my-4 text-center text-4xl font-bold'>Rent </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                  rents.map((rent,idx)=> <RentCard key={idx} r={rent} ></RentCard> )
                }
            </div>
        </div>
    );
};

export default Rent;