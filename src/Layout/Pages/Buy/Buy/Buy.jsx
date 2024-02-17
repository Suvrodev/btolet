import React, { useContext, useEffect, useState } from 'react';
import BuyCard from '../BuyCard/BuyCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Buy = () => {

    const {lattitude,longitude,baseUrl,setDuelLocation,duelLocation }=useContext(AuthContext)
  
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


    ////Area Start
    let place=""
    const [area,setArea]=useState('')
    useEffect(()=>{
      if(lattitude && longitude){
          fetch(`http://154.26.130.64/nominatim/reverse.php?lat=${parseFloat(lattitude)}&lon=${parseFloat(longitude)}&format=jsonv2&accept-language=bn`)
          .then(res=>res.json())
          .then(data=>{
          setArea(data)
      })
      }
    },[lattitude,longitude])

    console.log("Area(Buy): ",area);

    const {address,display_name}=area
    // console.log("Address: ",address);
    // console.log("Display Name: ",display_name);


    if(address?.suburb && address?.city){
        console.log("Execute-1");
        place=address?.suburb  + ","+ address?.city
    }
    else if(address?.name && address?.city){
          console.log("Execute-2");
         place=address?.name  + "," + address?.city
    }
    else if(address?.stateDistrict  && address?.name){
          console.log("Execute-3");
         place=address?.name + ","+  address?.city
    }else{
        place=display_name
    }
    

    let location_1,location_2;
    if(place){
      location_1=place.split(',')[0]
      location_2=place.split(',')[1]
    }
    setDuelLocation(location_1+','+location_2)
    console.log("Display Name(Buy): ",area?.display_name);
    console.log("Place(Buy): ",place);
    console.log("Location-1(Buy): ",location_1);
    console.log("Location-2(Buy): ",location_2);
    console.log("Location-1+Location-2(Buy)",duelLocation);
   


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