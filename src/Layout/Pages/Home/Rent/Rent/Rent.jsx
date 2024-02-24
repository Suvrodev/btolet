import React, { useContext, useEffect, useRef, useState } from 'react';
import Marque from '../../../SharedPage/Marque/Marque';
import Banner from '../../../SharedPage/Banner/Banner';
import RentCard from '../RentCard/RentCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import Filter from '../../../Sort/Filter/Filter';
import { FaSliders } from "react-icons/fa6";


import './RentModal.css'
import { FilterDataContext } from '../../../../../Providers/FilterDataProvider';
import axios from 'axios';

const Rent = () => {
 

    
   const {lattitude,longitude,baseUrl,location_1,location_2,selectedFacilities,doubleLocation}=useContext(AuthContext)
   const {byFilter,setByFilter,selectedBathrooms,selectedBedrooms,minPrice,maxPrice,selectedRentCategory}=useContext(FilterDataContext)

 
    // console.log("Lattitude: ",lattitude);
    // console.log("Longitude: ",longitude);
   

    const filterBody={
      geolat:lattitude,
      geolon:longitude,
      rentmin:minPrice,
      rentmax: maxPrice,
      page:1,
      category:selectedRentCategory,
      fasalitis:selectedFacilities,
      bed:selectedBedrooms,
      bath:selectedBathrooms
    }

    console.log("Filter Body: ",filterBody);


  

    ////rents Data start
    const [page,setPage]=useState(1)
    const [rents,setRents]=useState([])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      if(!byFilter){
          fetch(`${baseUrl}/api/web/tolet/postlist?page=${page}&geolat=${lattitude}&geolon=${longitude}`)
          .then(res=>res.json())
          .then(data=>{
              // const newData=[...rents,...data]
              // setRents(newData)
              setRents(data)
              // console.log("-----------------------------------------------------------------------byFilter(if)(1)",byFilter);
            }
          )
      }else{
        axios.post(`${baseUrl}/api/tolet/sort/postlist`,filterBody)
        .then(res=>{
          setRents(res.data)
          console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++: ",res.data);
          // console.log("------------------------------------------------------------------------------Buy Filter(else)(2)",byFilter);
        })
       
      }
    },[page,byFilter,doubleLocation,minPrice,maxPrice,selectedRentCategory,selectedBedrooms,selectedBathrooms,selectedFacilities])

    // console.log("Rent Data: ",rents);


    ////rents Data end


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
    // console.log("Location-1 + Location-2 : ",location_1+location_2);
    ///Area End




    ////Close Popup
    //Show Properties button a click korle X button a o click hobe autometically
    const closeButtonRef=useRef("")
    // console.log("---------------------------------------------------------------------------By Filter(3)): ",byFilter);
    if(byFilter){
      closeButtonRef?.current.click();
      // console.log("---------------------------------------------------------------------By Fielter(4):",byFilter);
    }
    setByFilter(false)

    

   
    return (
        <div className='my-4'>


          {/* Modal start */}
          <div>
           {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="filterModal_1" className="modal-middle md:modal  ">
              <div className="modal-box w-11/12 max-w-full bg-white">
                <Filter></Filter>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2" ref={closeButtonRef}>✕</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* Modal end */}

          <h1 className='my-4 text-center text-4xl font-bold'>Rent </h1>
        
          <div className='flex justify-between items-center my-4'>
            <button className='btn btn-outline' onClick={()=>document.getElementById('filterModal_1').showModal()}><FaSliders />Filter</button>
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

            <div>
              {
                rents.length>0?
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                  {
                    rents.map((rent,idx)=> <RentCard key={idx} r={rent} forRent={'forRent'} ></RentCard> )
                  }
                </div>:
                <p>Nothing to Show</p>
              }
            </div>
           
        </div>
    );
};

export default Rent;