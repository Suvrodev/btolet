import React, { useContext, useEffect, useState } from 'react';
import Marque from '../../../SharedPage/Marque/Marque';
import Banner from '../../../SharedPage/Banner/Banner';
import RentCard from '../RentCard/RentCard';
import { Link } from 'react-router-dom';
import Filter from '../../Filter/Filter';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const Rent = () => {

    
   const {lattitude,longitude,baseUrl}=useContext(AuthContext)
 
    console.log("Lattitude: ",lattitude);
    console.log("Longitude: ",longitude);


  

    ////rents Data start
    const [page,setPage]=useState(1)
    const [rents,setRents]=useState([])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetch(`${baseUrl}/api/web/tolet/postlist?page=${page}&geolat=${lattitude}&geolon=${longitude}`)
        .then(res=>res.json())
        .then(data=>{
            // const newData=[...rents,...data]
            // setRents(newData)
            setRents(data)
          }
        )
    },[page])

    console.log("Rent Data: ",rents);


    ////rents Data end


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

    console.log("Area(Rent): ",area);

    const {address,display_name}=area
    // console.log("Address: ",address);
    // console.log("Display Name: ",display_name);


    if(address?.suburb && address?.city){
        place=address?.suburb  + ","+ address?.city
    }
    else if(address?.name && address?.city){
         place=address?.name  + "," + address?.city
    }
    else if(address?.stateDistrict  && address?.name){
         place=address?.name + ","+  address?.city
    }else{
        place=display_name
    }
    

    let location_1,location_2;
    if(place){
      location_1=place.split(',')[0]
      location_2=place.split(',')[1]
    }
    console.log("Display Name(Rent): ",area?.display_name);
    console.log("Place(Rent): ",place);
    console.log("Location-1(Rent): ",location_1);
    console.log("Location-2(Rent): ",location_2);
   

    ///Post Count
    const [postCount,setPostCount]=useState("")
    useEffect(()=>{
      if(location_1 && location_2){
        fetch(`${baseUrl}/api/tolet/postcount/area?location1=${location_1}&location2=${location_2}`)
        .then(res=>res.json())
        .then(data=>{
           if(data?.postCount){
              setPostCount(data?.postCount)
           }
        })
      }
    },[location_1,location_2])
    console.log("Post Count: ",postCount);
    console.log("Location-1 + Location-2 : ",location_1+location_2);
    ///Area End

    

   
    return (
        <div className='my-4'>

          <div>
           {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl bg-white">
                {/* <Filter></Filter> */}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          <h1 className='my-4 text-center text-4xl font-bold'>Rent </h1>
        
          <div className='flex justify-between items-center my-4'>
            <button className='btn btn-primary' onClick={()=>document.getElementById('my_modal_4').showModal()}>Filter</button>
            <div>
                {
                  // postCount &&
                  <p>
                    {postCount} ads in {location_1}, {location_2}
                  </p>
                }
            </div>
            <Link to={'/rentpost'}> <button className='btn btn-success'>Post</button> </Link>
          </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                  // rents.map((rent,idx)=> <RentCard key={idx} r={rent} forRent={'forRent'} ></RentCard> )
                }
            </div>
        </div>
    );
};

export default Rent;