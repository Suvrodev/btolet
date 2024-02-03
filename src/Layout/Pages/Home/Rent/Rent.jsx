import React, { useEffect, useState } from 'react';
import Marque from '../../SharedPage/Marque/Marque';
import Banner from '../../SharedPage/Banner/Banner';

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
    console.log(lattitude);
    console.log(longitude);


    const [rents,setRents]=useState([])
    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/tolet/postlist?page=1&geolat=${lattitude}&geolon=${longitude}`)
        .then(res=>res.json())
        .then(data=>setRents(data))
    },[])

    console.log("Rent Data: ",rents);

   
    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>

            <div>

            </div>
        </div>
    );
};

export default Rent;