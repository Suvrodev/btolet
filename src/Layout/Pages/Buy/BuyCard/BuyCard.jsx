import React, { useContext, useEffect, useState } from 'react';
import { FaBath, FaBed, FaBeer, FaChartArea, FaHeart, FaLayerGroup, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaRegHeart, FaShare, FaTrash, FaWhatsapp } from "react-icons/fa";


import locationImage from '../../../../assets/downloadedIcon/location.svg'
import shareImage from '../../../../assets/downloadedIcon/share.svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import calculateTimeAgo from '../../../../Function/TimeAgo';
import axios from 'axios';
import Swal from 'sweetalert2';

const BuyCard = ({buy,forBuy,savedBuy,handleRefresh,myPostBuy}) => {

   const {uId,successfullMessage}=useContext(AuthContext)
    console.log(buy);
    const {pid,image,image1,wapp,price,bath,bed,area,phone,size,location,measurement,time,total_image,category,geolat,geolon}=buy

    const naviagte=useNavigate()

     const [timeAgo, setTimeAgo] = useState('');
    useEffect(()=>{
      setTimeAgo(calculateTimeAgo(time))
    },[time])

    // Convert the rent to Bangladeshi Taka style start
    const formattePrice = price.toLocaleString('en-US');
    // const formattePrice = "Ammount";
    // Convert the rent to Bangladeshi Taka style end



      const handleshare=async()=>{
        try {
            await navigator.share({ url: "https://www.google.com/" });
            console.log('Shared successfully');
          } catch (error) {
            console.error('Error sharing:', error);
          }
      }



    


      const goinDetail=(pid,lat,lon)=>{
       
          console.log("Lattitudde: ",lat);
          console.log("Longitude: ",lon);
          naviagte(`/buydetail/${pid}`,{ state: { lat, lon } })
      }



      const saveInfo={
        "uid": uId,
        "pid":pid,
        "status":true
      }

      const unSaveInfo={
          "uid": uId,
          "pid":pid,
          "status":false
      }


      const [save,setSave]=useState(false)
      const handleSave=()=>{
        console.log("Blue chilo Save korbo");

        if(uId){
          fetch(`http://154.26.135.41:3800/api/pro/save/post`,{
            method: 'POST',
              headers: {
                  'content-type':'application/json'
              },
              body: JSON.stringify(saveInfo)
            })
            .then(res=>res.json())
            .then(data=>{
               if(data){
                successfullMessage("Saved Successfully")
               }
            })
        }
        setSave(!save)
      }
     

      const handleUnSave=()=>{
        console.log("Red Chilo UnSave korbo");
        if(uId){
          fetch(`http://154.26.135.41:3800/api/pro/save/post`,{
            method: 'POST',
              headers: {
                  'content-type':'application/json'
              },
              body: JSON.stringify(unSaveInfo)
            })
            .then(res=>res.json())
            .then(data=>{
               if(data){
                successfullMessage("UnSaved Successfully")
                handleRefresh()
               }
            })
        }
          setSave(!save)
      }

      const handleDelte =()=>{
        if(uId){
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
               
              axios.delete(`http://154.26.135.41:3800/api/pro/user/mypost/delete?uid=${uId}&post_id=${pid}`)
              .then(res=>{
                console.log("Delete Res: ",res.data);
                if(res.data){
                  handleRefresh()
                  successfullMessage("Deleted Successfully")
                }
               
              }) 

            }
          });
          }
      }



      console.log("savedBuy: ",savedBuy);
      console.log('forBuy',forBuy);
      console.log("myPostBuy",myPostBuy);



     


    return (
        <div className='flex flex-col relative border  rounded-md h-[550px]'>
          

           
            {/* Image Box Start */}
            <div className='relative'>
              <img onClick={()=>{goinDetail(pid,geolat,geolon)}} className='w-full h-[250px] rounded-md'  src={`data:image/png;base64,${image1}`} alt="" />


              {/* For Saved Start */}
              {
                savedBuy &&
                <div className='absolute top-5 right-[60px] '>
                 <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                    <FaHeart   onClick={handleUnSave} className='text-red-800 opacity-100'/>:
                </p>
              </div >
              }
             {/* For Saved End */}

               {/* Save UnSave  Start */}
               {  forBuy &&
                  <div className='absolute top-5 right-[60px] '>
                  <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                      {
                        save==true ?
                        <FaHeart   onClick={handleUnSave} className='text-red-800 opacity-100'/>:
                        <FaRegHeart  onClick={handleSave} className='text-blue-600 '/> 
                      
                      }
                      
                  </p>
                </div >
                }
              {/* Save UnSave  End */}


               {/* For Delete Start */}
               {  myPostBuy &&
                  <div className='absolute top-5 right-[60px] '>
                  <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                      
                        <FaTrash  onClick={handleDelte} className='text-red-700 '/> 
                  </p>
                </div >
                }
              {/* For Delete End */}


              <div className='absolute top-5 right-5 '>
               <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                  <FaShare onClick={handleshare} className='text-white'/>
               </p>
             </div >

                <div className='absolute bottom-2 right-10'>
                    <p className='p-2 bg-black flex items-center justify-center gap-2 rounded-full opacity-50'>
                        <span className='text-white'>{total_image}</span> <FaLayerGroup className='text-white'/>
                    </p>
                </div>
            </div>
            {/* Image Box End */}

       
            <div className='py-5 px-4 bg-red-600 h-[250px]'>
               <p className='roboto font-bold text-xl'>{category}</p>
                 {price!=0? <p className='text-4xl font-bold text-black'> ৳ {formattePrice} </p>: <span className='text-xl font-bold text-black'>Price on Call</span>}
                <p className='flex gap-2 items-center my-2'>
                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </p>
            </div>

            <div className='h-50px] bg-yellow-300'>
              {
                category=='Flat' || category=='House'?
                <div>
                    <div className='p-5 flex gap-3'>
                        <div className='flex items-center  gap-2 roboto'>
                            <FaBed/> {bed}
                        </div>
                        <div className='flex items-center  gap-2'>
                            <FaBath/> {bed}
                        </div>
                        <div className='flex items-center  gap-2'>
                              <FaChartArea /> {size}
                        </div>
                    </div>
                </div>:
                <div className='flex gap-2 p-4'>
                  <p>{measurement}</p>
                  <p>{area}</p>
                </div>
              }
            </div>
          

            <div className='h-[1px] w-full bg-white'> </div>

            <div className='py-5 px-2 flex gap-2 justify-around'>
                <div className='flex gap-2 items-center'>
                   <img className='w-[40px] h-[40px] rounded-full ' src={image} alt="" />
                    <p>{timeAgo} </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => window.location.href = 'tel:' + phone} className='w-[35px] h-[35px] bg-orange-700 rounded-xl flex items-center justify-center text-white font-bold'> <FaPhoneAlt /> </button>
                    <button onClick={() => window.location.href = 'sms:' + phone} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white font-bold'> <FaMailBulk /> </button>
                    <button onClick={() => window.open('https://api.whatsapp.com/send?phone=' + '8801518748081&text=Hi%20User', '_blank')} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white text-xl'><FaWhatsapp /></button>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;