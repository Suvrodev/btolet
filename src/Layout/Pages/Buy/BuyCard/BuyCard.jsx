import React from 'react';
import { FaBeer, FaLayerGroup, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaShare, FaWhatsapp } from "react-icons/fa";


import locationImage from '../../../../assets/downloadedIcon/location.svg'
import shareImage from '../../../../assets/downloadedIcon/share.svg'

const BuyCard = ({buy}) => {
    console.log(buy);
    const {image,image1,wapp,price,bath,bed,area,phone,size,location,measurement}=buy
    return (
        <div className='flex flex-col relative border  rounded-md'>
            <div className='absolute top-10 right-10'>
               <p className='w-[30px] h-[30px] bg-black flex items-center justify-center rounded-full'>
                   <FaShare/>
               </p>
            </div >

           

            <div className='relative'>
              <img className='w-full h-[250px] rounded-md'  src={`data:image/png;base64,${image1}`} alt="" />

                <div className='absolute bottom-2 right-10'>
                    <p className='p-2 bg-black flex items-center justify-center gap-2 rounded-full'>
                        <span>{measurement}</span> <FaLayerGroup/>
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

            <div className='h-[5px] w-full bg-white'> </div>

            <div className='py-5 px-2 flex gap-2'>
                <div className='flex gap-2 items-center'>
                   <img className='w-[40px] h-[40px] rounded-full ' src={image} alt="" />
                    <p>10 hours ago</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button className='w-[35px] h-[35px] bg-orange-700 rounded-xl flex items-center justify-center text-white font-bold'> <FaPhoneAlt /> </button>
                    <button className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white font-bold'> <FaMailBulk /> </button>
                    <button className='w-[35px] h-[35px] bg-green-500 rounded-xl flex items-center justify-center text-white text-xl'> <FaWhatsapp /> </button>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;