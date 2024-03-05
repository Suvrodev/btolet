import React, { useContext, useEffect, useRef, useState } from 'react';
import BuyCard from '../BuyCard/BuyCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Filter from '../../Sort/Filter/Filter';
import { FilterDataContext } from '../../../../Providers/FilterDataProvider';
import { FaSliders } from 'react-icons/fa6';
import BuyFilter from '../../Sort/BuyFilter/BuyFilter';
import axios from 'axios';
import { FiChevronDown, FiSliders } from 'react-icons/fi';
import Marque from '../../SharedPage/Marque/Marque';
import Banner from '../../SharedPage/Banner/Banner';

const Buy = () => {

    const {lattitude,longitude,baseUrl,doubleLocation,location_1,location_2,selectedAmenities  }=useContext(AuthContext)
    const {byFilter,setByFilter,selectedBathrooms,selectedBedrooms,minPrice,maxPrice,selectedCategoriesBuySort}=useContext(FilterDataContext)

  
    // console.log("Lattitude: ",lattitude);
    // console.log("Longitude: ",longitude);

    const filterBody={
      geolat:lattitude,
      geolon:longitude,
      rentmin:minPrice,
      rentmax: maxPrice,
      page:1,
      category:selectedCategoriesBuySort,
      fasalitis:selectedAmenities,
      bed:selectedBedrooms,
      bath:selectedBathrooms
    }
    console.log("Filter Body(Pro): ",filterBody); 
 
      ///Buy Data start
      const [page,setPage]=useState(1)
      const [buys,setBuys]=useState([])
      const [loading, setLoading] = useState(false);

      useEffect(()=>{
        if(!byFilter){
            fetch(`${baseUrl}/api/pro/postlist?page=1&geolat=${lattitude}&geolon=${longitude}`)
            .then(res=>res.json())
            .then(data=>setBuys(data))
        }else{
          axios.post(`${baseUrl}/api/pro/sort/postlist`,filterBody)
          .then(res=>{
            setBuys(res.data)
            console.log("Property Sort Data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++: ",res.data);
            // console.log("------------------------------------------------------------------------------Buy Filter(else)(2)",byFilter);
          })
        }
      },[page,byFilter,doubleLocation,minPrice,maxPrice,selectedCategoriesBuySort,selectedBedrooms,selectedBathrooms,selectedAmenities])
  
      // console.log("Buy Data: ",buys);


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
        <div>


          {/* Marque + Banner start */}
          <Marque></Marque>
            <div className='h-[360px] flex gap-2 items-center justify-start '>
                <div className='w-[60%] h-[360px]'>
                    <Banner></Banner>
                </div>
                 <div className='w-[40%]    '>
                   <div className='bg-green-500 h-[360px] rounded-lg  flex items-center justify-center '>
                       <h1> Google Ads</h1>
                   </div>
                 </div>
            </div>

          {/* Marque + Banner end */}

           {/* Modal start */}
           <div>
           {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="filterModal_2" className="modal-middle md:modal  ">
              <div className="modal-box w-11/12 max-w-full bg-white">
                <BuyFilter></BuyFilter>
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


          <div className='flex justify-between items-center my-4'>
            <button className='btn btn-outline' onClick={()=>document.getElementById('filterModal_2').showModal()}><FiSliders />Filter <FiChevronDown /></button>

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

          <div>
            {
              buys.length>0?
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {
                buys.map((buy,idx)=><BuyCard
                key={idx}
                buy={buy}
                forBuy={'forBuy'}
                ></BuyCard>)
              }
          </div>:
          <p>Nothig to Show</p>
            }
          </div>
         
        </div>
    );
};

export default Buy;