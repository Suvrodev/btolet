import React, { useEffect, useState } from 'react';

const Map = () => {

    const [geolat, setGeolat] = useState(null);
    const [geolon, setGeolon] = useState(null);
    const [loading, setLoading] = useState(true);


    const [allData,setAllData]=useState("")
    useEffect(() => {
        fetch(`http://154.26.135.41:3800/api/pro/post?pid=103`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
      }, []);


      console.log(allData);
        //  const {pid,uid,amenities,area,balcony,bath,bed,category,description,dining,drawing,emi,facing,floor_plan,floornumber,geolat,geolon,image1,image2,image3,
        //         image4,image5,image6,image7,image8,image9,image10,image11,image12,kitchen,land_type,location,locationfull,measurement,name,ownertype,payment,price,
        //         procondition,road_size,sellfrom,shortaddress,size,status,time,top_ads,total_floor,total_unit,phone,wapp,yt_video}=allData


    return (
        <div>
            
        </div>
    );
};

export default Map;