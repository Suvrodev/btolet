import React, { useContext, useEffect, useState } from 'react';
import { FaBath, FaBed, FaBeer, FaChartArea, FaHeart, FaLayerGroup, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaRegHeart, FaShare, FaTrash, FaWhatsapp } from "react-icons/fa";


import locationImage from '../../../../assets/downloadedIcon/location.svg'
import shareImage from '../../../../assets/downloadedIcon/share.svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import calculateTimeAgo from '../../../../Function/TimeAgo';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FiLayers, FiMapPin, FiShare2 } from 'react-icons/fi';

import  SmsIcon from '../../../../assets/icons/home/sms_white.svg'
import whatsappIcon from '../../../../assets/icons/home/wapp.svg'
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

import bedIcon from '../../../../assets/icons/tolet/bed.svg'
import bathIcon from '../../../../assets/icons/tolet/bath.svg'
import areaIcon from '../../../../assets/icons/tolet/size.svg'
import kitchenIcon from '../../../../assets/icons/tolet/kitchen.svg'


const BuyCard = ({buy,forBuy,savedBuy,handleRefresh,myPostBuy}) => {

   const {uId,successfullMessage,baseUrl,currentUser,unSuccessFullMessage}=useContext(AuthContext)
    // console.log("Buy Card: ",buy);
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

        if(currentUser){
          fetch(`${baseUrl}/api/pro/save/post`,{
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
            setSave(!save)
        }else{
          unSuccessFullMessage("At First Log in")
        }
       
      }
     

      const handleUnSave=()=>{
        console.log("Red Chilo UnSave korbo");
        if(uId){
          fetch(`${baseUrl}/api/pro/save/post`,{
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
               
              axios.delete(`${baseUrl}/api/pro/user/mypost/delete?uid=${uId}&post_id=${pid}`)
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



      // console.log("savedBuy: ",savedBuy);
      // console.log('forBuy',forBuy);
      // console.log("myPostBuy",myPostBuy);



     


    return (
        <div className='flex flex-col relative border  rounded-md h-[550px] m-2 md:m-0'>
          

           
            {/* Image Box Start */}
            <div className='relative'>
              <img onClick={()=>{goinDetail(pid,geolat,geolon)}} className='w-full h-[250px] rounded-md'  src={`data:image/png;base64,${image1}`} alt="" />


              {/* For Saved Start */}
              {
                savedBuy &&
                <div className='absolute top-5 right-[60px] '>
                 <p className='w-[30px] h-[30px] BlkOpct  flex items-center justify-center rounded-full'>
                    <Favorite   onClick={handleUnSave} className='text-white'/>:
                </p>
              </div >
              }
             {/* For Saved End */}

               {/* Save UnSave  Start */}
               {  forBuy &&
                  <div className='absolute top-5 right-[60px] '>
                  <p className='w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full'>
                      {
                        save==true ?
                        <Favorite   onClick={handleUnSave} className='text-white'/>:
                        <FavoriteBorderOutlined  onClick={handleSave} className='text-white'/> 
                      
                      }
                      
                  </p>
                </div >
                }
              {/* Save UnSave  End */}


               {/* For Delete Start */}
               {  myPostBuy &&
                  <div className='absolute top-5 right-[60px] '>
                  <p className='w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full'>
                      
                        <FaTrash  onClick={handleDelte} className='text-red-700 '/> 
                  </p>
                </div >
                }
              {/* For Delete End */}


              <div className='absolute top-5 right-5 '>
               <p className='w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full'>
                  <FiShare2 onClick={handleshare} className='text-white'/>
               </p>
             </div >

                <div className='absolute bottom-2 right-10'>
                    <p className='py-[2px] px-4 BlkOpct flex items-center justify-center gap-2 rounded-full '>
                        <span className='text-white'>{total_image}</span> <FiLayers  className='text-white'/>
                    </p>
                </div>
            </div>
            {/* Image Box End */}

       
            <div className='py-5 px-4  h-[120px] '>
               <p className='roboto  text-xl text-black prText'>{category}</p>
                 {price!=0? <p className='text-4xl font-bold text-black opacity-80'> ৳ {formattePrice} </p>: <span className='text-xl font-bold text-black opacity-80'>Price on Call</span>}
                <p className='flex gap-2 items-center my-2 prText'>
                    <FiMapPin />
                    <span>{location}</span>
                </p>
            </div>

            <div className='h-50px] text-black opacity-60 '>
              {
                category=='Flat' || category=='House'?
                <div>
                    <div className='p-5 flex gap-3'>
                        <div className='flex items-center  gap-2 roboto'>
                             <div className='flex items-center gap-2'><img className='w-[35px] opacity-40' src={bedIcon} alt="" /> {bed}</div>
                        </div>
                        <div className='flex items-center  gap-2'>
                          <div className='flex items-center gap-2 '> <img className='w-[30px] opacity-40 mb-[2px]' src={bathIcon} alt="" /> {bath}</div>
                        </div>
                        <div className='flex items-center  gap-2'>
                        {
                            size ?
                            <div className='flex items-center gap-2'><img className='w-[30px] opacity-40' src={areaIcon} alt="" /> {size} ft<sup>2</sup></div>:
                            <div className='flex items-center gap-2'><img className='w-[30px] opacity-40' src={kitchenIcon} alt="" /> {kitchen} </div>
                        }
                        </div>
                    </div>
                </div>:
                <div className='flex gap-2 p-4 text-[22px]'>
                  <p>{measurement}</p>
                  <p className=''>{area}</p>
                </div>
              }
            </div>
          

            <div className='h-[1px] w-full customBorder'> </div>

            <div className='py-5 px-2 flex gap-2 justify-around'>
                <div className='flex gap-2 items-center text-black opacity-60'>
                   <img className='w-[40px] h-[40px] rounded-full ' src={image} alt="" />
                    <p>{timeAgo} </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => window.location.href = 'tel:' + phone} className='w-[35px] h-[35px] bg-orange-700 rounded-xl flex items-center justify-center text-white font-bold'> <FaPhoneAlt /> </button>
                    <button onClick={() => window.location.href = 'sms:' + phone} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white font-bold'> <img className='w-[20px]' src={SmsIcon} alt="" /> </button>
                    <button onClick={() => window.open('https://api.whatsapp.com/send?phone=' + '8801518748081&text=Hi%20User', '_blank')} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white text-xl'><img className='w-[30px]' src={whatsappIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;