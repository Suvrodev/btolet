import React, { useContext, useEffect, useState } from 'react';
import { FaBath, FaBed, FaCarAlt, FaChartArea, FaGoogle, FaHeart, FaHouseDamage, FaLayerGroup, FaMailBulk, FaMapMarker, FaMapMarkerAlt, FaMotorcycle, FaPhoneAlt, FaRegHeart, FaShare, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import GarageType from '../RentPost/GarageType/GarageType';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import calculateTimeAgo from '../../../../../Function/TimeAgo';

const RentCard = ({r,savedRent,forRent,myPostRent}) => {
     const {uId,successfullMessage}=useContext(AuthContext)
    console.log("Rent: ",r);
    const {post_id,image,image1,wapp,rent,bath,bed,area,phone,roomsize,location,measurement,time,total_image,category,garagetype}=r

    const naviagte=useNavigate()

    const [timeAgo, setTimeAgo] = useState('');
    // useEffect(() => {
    //     const calculateTimeAgo = () => {
    //       const currentTime = new Date();
    //       const pastTime = new Date(time);
    //       const timeDifference = currentTime - pastTime;
          
    //       const seconds = Math.floor(timeDifference / 1000);
    //       const minutes = Math.floor(seconds / 60);
    //       const hours = Math.floor(minutes / 60);
    //       const days = Math.floor(hours / 24);
          
    //       if (days > 0) {
    //         setTimeAgo(`${days} day${days === 1 ? '' : 's'} ago`);
    //       } else if (hours > 0) {
    //         setTimeAgo(`${hours} hour${hours === 1 ? '' : 's'} ago`);
    //       } else if (minutes > 0) {
    //         setTimeAgo(`${minutes} minute${minutes === 1 ? '' : 's'} ago`);
    //       } else {
    //         setTimeAgo(`${seconds} second${seconds === 1 ? '' : 's'} ago`);
    //       }
    //     };
    
    //     const interval = setInterval(calculateTimeAgo, 1000);
    
    //     return () => clearInterval(interval);
    //   }, [time]);
    useEffect(()=>{
      setTimeAgo(calculateTimeAgo(time))
    },[time])



      ////Category String start
      let categoryString = category.join(', ');
      if (categoryString.length > 35) {
        // Truncate the string to 19 characters and add '...'
        categoryString = categoryString.substring(0, 35) + '...';
      }

      ///Category String end


      
       // Convert the rent to Bangladeshi Taka style start
       const formattedRent = rent.toLocaleString('en-US');
        // Convert the rent to Bangladeshi Taka style end


      const handleshare=async()=>{
        try {
            await navigator.share({ url: "https://www.google.com/" });
            console.log('Shared successfully');
          } catch (error) {
            console.error('Error sharing:', error);
          }
      }


      const goinDetail=(post_id)=>{
        naviagte(`/rentdetail/${post_id}`)
      }


      ///////Check Catgory start
      let iconDiv;
      if(category.includes('Only Garage')){
          // console.log("Post id: ",post_id," Only Garage: yes");
          if(garagetype=="Bike"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] bg-orange-400'> <FaMotorcycle /> Bike </div>
            console.log("Garage Type: ",garagetype);
          }
          if(garagetype=="Car"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] bg-orange-400'> <FaCarAlt /> Car </div>
            console.log("Garage Type: ",garagetype);
          }
          if(garagetype=="Garage"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] bg-orange-400'> <FaHouseDamage />Garage  </div>
            console.log("Garage Type: ",garagetype);
          }
      }else{
          console.log("Post id: ",post_id," Only Garage: No");
          if(category.includes('Office') || category.includes('Shop')){
             iconDiv=<div className='p-5 h-[45px]  bg-orange-400'>  </div>
          }else{
             iconDiv=<div className='flex gap-5 items-center p-5 h-[45px]  bg-orange-400'>
               <div className='flex items-center gap-2'><FaBath/> {bath}</div>
               <div className='flex items-center gap-2'><FaBed/> {bed}</div>
               <div className='flex items-center gap-2'><FaChartArea/> {roomsize} ft<sup>2</sup></div>
             </div>
          }
      }
      ////Check Category end



      ////Save And Unsave and Delete Start
      const saveInfo={
        "uid": uId,
        "pid":post_id,
        "status":true
      }

      const unSaveInfo={
          "uid": uId,
          "pid":post_id,
          "status":false
      }


      const [save,setSave]=useState(false)
      const handleSave=()=>{
        console.log("Blue chilo Save korbo");

        if(uId){
          fetch(`http://154.26.135.41:3800/api/tolet/save/post`,{
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
          fetch(`http://154.26.135.41:3800/api/tolet/save/post`,{
            method: 'POST',
              headers: {
                  'content-type':'application/json'
              },
              body: JSON.stringify(unSaveInfo)
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

      const handleDelte=()=>{
        
      }
      ////Save And Unsave and Delete end

      console.log("savedRent: ",savedRent);
      console.log('forRent',forRent);
      console.log("myPostRent",myPostRent);

    return (
        <div className='flex flex-col relative border  rounded-md h-[550px]' >

            {/* Image Box Start */}
            <div className='relative bg-yellow-400'>
              <img onClick={()=>goinDetail(post_id)} className='w-full h-[250px] rounded-md'  src={`data:image/png;base64,${image1}` } alt="" />

            {/* Save UnSave Delete Start */}
              {
                savedRent &&
                <div className='absolute top-5 right-[60px] '>
                 <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                    <FaHeart   onClick={handleUnSave} className='text-red-800 opacity-100'/>:
                </p>
              </div >
              }
             {/* Save UnSave Delete End */}

               {/* Save UnSave Delete Start */}
               {  forRent &&
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
              {/* Save UnSave Delete End */}


               {/* Save UnSave Delete Start */}
               {  myPostRent &&
                  <div className='absolute top-5 right-[60px] '>
                  <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                      
                        <FaTrash  onClick={handleDelte} className='text-red-700 '/> 
                  </p>
                </div >
                }
              {/* Save UnSave Delete End */}

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
       
            <div className='py-5 px-4 bg-red-500 h-[250px]'>
               <p className='roboto font-bold text-2xl'>{categoryString}</p>
                {   {rent}? <p className='text-4xl font-bold text-black'> ৳ {formattedRent} </p>: <span className='text-xl font-bold'>Price on Call</span>}
                <p className='flex gap-2 items-center my-2'>
                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </p>
            </div>

            <div className=' h-[45px] bg-purple-600'>
              {/* {
                garagetype ?
                <div className='p-5'>
                  GarageType: {garagetype}
                  {
                    garagetype===''
                  }
                </div>:
                <div className='p-5 flex gap-3'>
                  <div className='flex items-center  gap-2 roboto'>
                      <FaBed/> {bed}
                  </div>
                  <div className='flex items-center  gap-2'>
                      <FaBath/> {bed}
                  </div>
                  <div className='flex items-center  gap-2'>
                        <FaChartArea /> {roomsize}
                  </div>
                </div>
              } */}
              {iconDiv}
            </div>
          
           

            <div className='h-[1px] w-full bg-black'> </div>

            <div className='py-5 px-2 flex gap-2 justify-around'>
                <div className='flex gap-2 items-center'>
                   <img className='w-[40px] h-[40px] rounded-full ' src={image} alt="" />
                    <p>{timeAgo} </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => window.location.href = 'tel:' + phone} className='w-[35px] h-[35px] bg-orange-700 rounded-xl flex items-center justify-center text-white font-bold'> <FaPhoneAlt /> </button>
                    <button onClick={() => window.location.href = 'sms:' + phone} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white font-bold'> <FaMailBulk /> </button>
                    <button onClick={() => window.open('https://api.whatsapp.com/send?phone=' + phone, '_blank')} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white text-xl'><FaWhatsapp /></button>
                </div>
            </div>
        </div>
    );
};

export default RentCard;