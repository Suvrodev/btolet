import React, { useState } from 'react';
import OneImagePage from '../../ShareImagePage/OneImagePage/OneImagePage';
import MultiImagePage from '../../ShareImagePage/MultiImagePAge/MultiImagePage';
import PropertyName from '../../../BuyRentCommonPost/PropertyName/PropertyName';
import Facilities from '../../../BuyRentCommonPost/Facilities/Facilities';
import PropertyTypes from '../../../BuyRentCommonPost/PropertyTypes/PropertyTypes';
import BedRooms from '../../../BuyRentCommonPost/BedRoom/BedRooms';
import BathRoom from '../../../BuyRentCommonPost/Bathroom/BathRoom';
import Dining from '../../../BuyRentCommonPost/Dining/Dining';
import Kitchen from '../../../BuyRentCommonPost/BuyRentCommonPage/Kitchen/Kitchen';
import Fatching from '../../../BuyRentCommonPost/Fatching/Fatching';
import Date from '../../../BuyRentCommonPost/Date/Date';
import TotalFloor from '../../../BuyRentCommonPost/TotalFloor/TotalFloor';
import FloorNumber from '../../../BuyRentCommonPost/FloorNumber/FloorNumber';
import TotalSize from '../../../BuyRentCommonPost/BuyRentCommonPage/TotalSize/TotalSize';
import TotalUnit from '../../../BuyRentCommonPost/TotalUnit/TotalUnit';
import Price from '../../../BuyRentCommonPost/Price/Price';
import EMI from '../../../BuyRentCommonPost/EMI/EMI';
import YoutubeVideo from '../../../BuyRentCommonPost/YoutubeVideo/YoutubeVideo';
import Drawing from '../../../BuyRentCommonPost/Drawing/Drawing';
import Balcony from '../../../BuyRentCommonPost/Balcony/Balcony';

const HomeFlat = () => {

   

    ///Price Start
    const [priceBox,setPriceBox]=useState(false)
    const prices=["Price","Price On Call"]
    const [selectedPrice, setSelectedPrice] = useState(null);
    const handlePriceChange = (index) => {
        setSelectedPrice(prices[index]);
        console.log("Selected Price: ", prices[index]);
        if(prices[index]==="Price"){
            setPriceBox(true)
        }else{
            setPriceBox(false)
        }
    };
    ///Price End

    ///EMI Start
  
    ///EMI End


    return (
        <div className='my-6'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-full '>
                      <h1>Property Name</h1>
                     <PropertyName></PropertyName>
                </div>
                <div className='w-full md:w-full'>
                   <h1>Property Type</h1>
                    <PropertyTypes></PropertyTypes>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[50%]'>
                    <h1>Bedroom</h1>
                     <BedRooms></BedRooms>
                </div>
                <div className='w-full md:w-[50%]'>
                     <h1>Bathroom</h1>
                    <BathRoom></BathRoom>
                </div>
            </div>


             {/* Drawing Dining Start */}
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[50%]'>
                   <h1>Drawing</h1>
                    <Drawing></Drawing>
                </div>
                <div className='w-full md:w-[50%]'>
                     <h1>Dining</h1>
                    <Dining></Dining>
                </div>
            </div>
             {/* Drawing Dining End */}

          


            {/* Balcony Kitchen Start */}
            <div className='flex flex-col md:flex-row gap-10'>
               <div className='w-full md:w-[50%]'>
                <h1>Balcony</h1>
                 <Balcony></Balcony>
               </div>
               <div className='w-full md:w-[50%]'>
                <h1>Kitchen</h1>
                 <Kitchen></Kitchen>
               </div>
            </div>
            {/* Balcony Kitchen Start */}


             {/* Faching Date Start */}
             <div className='flex flex-col md:flex-row gap-10'>
                 <div className='w-full md:w-[50%]'>
                     <h1>Faching</h1>
                     <Fatching></Fatching>
                 </div>
                
                <div className='w-full md:w-[50%]'>
                    <h1 className=''>Rent From</h1>
                    <Date></Date>
                </div>
            </div>
            {/* Dining Kitchen Start */}


             {/*Total floor Floor Number Start */}
             <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[50%]'>
                    <h1>Total Floor</h1>
                   <TotalFloor></TotalFloor>
                </div>
              
               <div className='w-full md:w-[50%]'>
                  <h1>Floor Number:</h1>
                  <FloorNumber></FloorNumber>
               </div>
            </div>
            {/*Total floor Floor Number Start */}

            {/*Total Size Total Unit Start */}
            <div className='flex flex-col md:flex-row gap-10'>
    
                <div className='w-full md:w-[50%]'>
                    <h1>Floor Size</h1>
                    <TotalSize></TotalSize>
                </div>
           

                <div className='w-full md:w-[50%]'>
                    <h1>Total Unit</h1>
                    <TotalUnit></TotalUnit>
                </div>
    

        </div>
        {/*Total Size Total Unit Start */}

        {/* Price Mood start */}
        <div className='flex flex-col md:flex-row gap-10'>
             <div className='w-full md:w-[50%]'>
                   <Price></Price>
             </div>

             <div className='w-full md:w-[50%]'>
                 <h1>EMI</h1>
                  <EMI></EMI>
             </div>
        </div>
       
        
       

          {/* Facilitiest Start */}
          <Facilities></Facilities>
          {/* Facilitiest End */}


           {/* Youtube Video start */}
           <YoutubeVideo></YoutubeVideo>
         

          {/* Youtube Video end */}


          {/* One Image Upload Start */}
          <h1 className='my-4'>Select Floor Plan</h1>
          <OneImagePage></OneImagePage>
          {/* One Image Upload End */}

          {/* Multi Image Upload Start */}
          <h1 className='my-4'>Select Floor Plan</h1>
          <MultiImagePage></MultiImagePage>
          {/* Multi Image Upload End */}


        </div>
    );
};

export default HomeFlat;