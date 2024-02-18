import React, { useContext, useState } from 'react';
import PropertyName from '../../../PostContent/PropertyName/PropertyName';
import PropertyTypes from '../../../PostContent/PropertyTypes/PropertyTypes';
import BedRooms from '../../../PostContent/BedRoom/BedRooms';
import BathRoom from '../../../PostContent/Bathroom/BathRoom';
import Drawing from '../../../PostContent/Drawing/Drawing';
import Dining from '../../../PostContent/Dining/Dining';
import Balcony from '../../../PostContent/Balcony/Balcony';
import Kitchen from '../../../PostContent/Kitchen/Kitchen';
import Fatching from '../../../PostContent/Fatching/Fatching';
import TotalFloor from '../../../PostContent/TotalFloor/TotalFloor';
import FloorNumber from '../../../PostContent/FloorNumber/FloorNumber';
import TotalSize from '../../../PostContent/TotalSize/TotalSize';
import TotalUnit from '../../../PostContent/TotalUnit/TotalUnit';
import Price from '../../../PostContent/Price/Price';
import EMI from '../../../PostContent/EMI/EMI';
import Facilities from '../../../PostContent/Facilities/Facilities';
import YoutubeVideo from '../../../PostContent/YoutubeVideo/YoutubeVideo';
import OneImagePage from '../../../PostContent/OneImagePage/OneImagePage';
import MultiImagePage from '../../../PostContent/MultiImagePAge/MultiImagePage';
import Date from '../../../PostContent/Date/Date';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import Amenities from '../../../PostContent/Amenities/Amenities';
import ShortAddress from '../../../PostContent/ShortAddress/ShortAddress';
import Description from '../../../PostContent/Description/Description';
import YourDetails from '../../../PostContent/Your Details/YourDetails';


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


  


    return (
        <div className='my-6  grid grid-cols-1 gap-4'>
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
                    <h1>Bedroom*</h1>
                     <BedRooms></BedRooms>
                </div>
                <div className='w-full md:w-[50%]'>
                     <h1>Bathroom*</h1>
                    <BathRoom></BathRoom>
                </div>
            </div>


             {/* Drawing Dining Start */}
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[50%]'>
                   <h1>Drawing*</h1>
                    <Drawing></Drawing>
                </div>
                <div className='w-full md:w-[50%]'>
                     <h1>Dining*</h1>
                    <Dining></Dining>
                </div>
            </div>
             {/* Drawing Dining End */}

          


            {/* Balcony Kitchen Start */}
            <div className='flex flex-col md:flex-row gap-10'>
               <div className='w-full md:w-[50%]'>
                <h1>Balcony*</h1>
                 <Balcony></Balcony>
               </div>
               <div className='w-full md:w-[50%]'>
                <h1>Kitchen*</h1>
                 <Kitchen></Kitchen>
               </div>
            </div>
            {/* Balcony Kitchen Start */}


             {/* Faching Date Start */}
             <div className='flex flex-col md:flex-row gap-10'>
                 <div className='w-full md:w-[50%]'>
                     <h1>Faching*</h1>
                     <Fatching></Fatching>
                 </div>
                
                <div className='w-full md:w-[50%]'>
                    <h1 className=''>Sell From</h1>
                    <Date></Date>
                </div>
            </div>
            {/* Dining Kitchen Start */}


             {/*Total floor Floor Number Start */}
             <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[50%]'>
                    <h1>Total Floor*</h1>
                   <TotalFloor></TotalFloor>
                </div>
              
               <div className='w-full md:w-[50%]'>
                  <h1>Floor Number*</h1>
                  <FloorNumber></FloorNumber>
               </div>
            </div>
            {/*Total floor Floor Number Start */}

            {/*Total Size Total Unit Start */}
            <div className='flex flex-col md:flex-row gap-10'>
    
                <div className='w-full md:w-[50%]'>
                    <h1>Total Size*</h1>
                    <TotalSize></TotalSize>
                </div>
           

                <div className='w-full md:w-[50%]'>
                    <h1>Total Unit*</h1>
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
       
        
        {/* Amenities Start */}
        <div>
            <h1>Amenities</h1>
            <Amenities big={true}></Amenities>
        </div>
        {/* Amenities End */}
         

        {/* Youtube Video start */}
        <div>
        <h1>Youtube Video</h1>
         <YoutubeVideo></YoutubeVideo>
        </div>
         {/* Youtube Video end */}
       
         
          {/* One Image Upload Start */}
         <div>
             <h1 className=''>Select Floor Plan</h1>
              <OneImagePage></OneImagePage>
         </div>
          {/* One Image Upload End */}

          {/* Multi Image Upload Start */}
          <div>
            <h1 className=''>Select Images*</h1>
            <MultiImagePage></MultiImagePage>
          </div>
          {/* Multi Image Upload End */}

          <div>
            <h1>Short Address: </h1>
            <ShortAddress></ShortAddress>
          </div>
          <div>
            <h1>Description:</h1>
            <Description></Description>
          </div>

          <div>
            <YourDetails ur={true}></YourDetails>
          </div>

        {/* <button className='btn btn-primary' onClick={handleSubmit}>Submit</button> */}
        </div>
    );
};

export default HomeFlat;