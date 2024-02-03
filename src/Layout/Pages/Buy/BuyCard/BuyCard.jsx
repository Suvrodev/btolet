import React, { useEffect, useState } from 'react';
import { FaBath, FaBed, FaBeer, FaChartArea, FaLayerGroup, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaShare, FaWhatsapp } from "react-icons/fa";


import locationImage from '../../../../assets/downloadedIcon/location.svg'
import shareImage from '../../../../assets/downloadedIcon/share.svg'

const BuyCard = ({buy}) => {
    console.log(buy);
    const {image,image1,wapp,price,bath,bed,area,phone,size,location,measurement,time,total_image}=buy

    const [timeAgo, setTimeAgo] = useState('');
    useEffect(() => {
        const calculateTimeAgo = () => {
          const currentTime = new Date();
          const pastTime = new Date(time);
          const timeDifference = currentTime - pastTime;
          
          const seconds = Math.floor(timeDifference / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);
          
          if (days > 0) {
            setTimeAgo(`${days} day${days === 1 ? '' : 's'} ago`);
          } else if (hours > 0) {
            setTimeAgo(`${hours} hour${hours === 1 ? '' : 's'} ago`);
          } else if (minutes > 0) {
            setTimeAgo(`${minutes} minute${minutes === 1 ? '' : 's'} ago`);
          } else {
            setTimeAgo(`${seconds} second${seconds === 1 ? '' : 's'} ago`);
          }
        };
    
        const interval = setInterval(calculateTimeAgo, 1000);
    
        return () => clearInterval(interval);
      }, [time]);

      const handleshare=async()=>{
        try {
            await navigator.share({ url: "https://www.google.com/" });
            console.log('Shared successfully');
          } catch (error) {
            console.error('Error sharing:', error);
          }
      }

    return (
        <div className='flex flex-col relative border  rounded-md'>
          

           

            <div className='relative'>
              <img className='w-full h-[250px] rounded-md'  src={`data:image/png;base64,${image1}`} alt="" />

              <div className='absolute top-5 right-5 '>
               <p className='w-[30px] h-[30px] bg-black opacity-50 flex items-center justify-center rounded-full'>
                  <FaShare onClick={handleshare}/>
               </p>
            </div >

                <div className='absolute bottom-2 right-10'>
                    <p className='p-2 bg-black flex items-center justify-center gap-2 rounded-full opacity-50'>
                        <span>{total_image}</span> <FaLayerGroup/>
                    </p>
                </div>
            </div>
       
            <div className='py-5 px-4'>
                <p className='text-4xl font-bold text-white'> ৳ {price} </p>
                <p className='flex gap-2 items-center my-2'>
                    <FaMapMarkerAlt />
                    <p>{location}</p>
                </p>
            </div>
            <div className='p-5 flex gap-3'>
                <div className='flex items-center  gap-2'>
                    <FaBed/> {bed}
                </div>
                <div className='flex items-center  gap-2'>
                    <FaBath/> {bed}
                </div>
                <div className='flex items-center  gap-2'>
                      <FaChartArea /> {size}
                </div>

            </div>

            <div className='h-[5px] w-full bg-white'> </div>

            <div className='py-5 px-2 flex gap-2'>
                <div className='flex gap-2 items-center'>
                   <img className='w-[40px] h-[40px] rounded-full ' src={image} alt="" />
                    <p>{timeAgo} </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => window.location.href = 'tel:' + phone} className='w-[35px] h-[35px] bg-orange-700 rounded-xl flex items-center justify-center text-white font-bold'> <FaPhoneAlt /> </button>
                    <button onClick={() => window.location.href = 'sms:' + phone} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white font-bold'> <FaMailBulk /> </button>
                    <button onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=' + phone} className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white text-xl'> <FaWhatsapp /> </button>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;