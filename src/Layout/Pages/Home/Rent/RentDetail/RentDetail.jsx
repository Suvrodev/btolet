import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuySlider from '../../../Buy/BuyDetail/BuySlider/BuySlider';
import BuyMap from '../../../Buy/BuyDetail/BuyMap/BuyMap';

import locationColorImage from '../../../../../assets/icons/home/map.svg'
import RentDetailsNumber from './RentDetailsNumber/RentDetailsNumber';
import BuyDescription from '../../../Buy/BuyDetail/BuyDescription/BuyDescription';
import ContactButtons from '../../../Buy/BuyDetail/ContactButtons/ContactButtons';
import RentCard from '../RentCard/RentCard';
import { FaBath, FaBed, FaCarAlt, FaChartArea, FaHouseDamage, FaMotorcycle } from 'react-icons/fa';
import { AuthContext } from '../../../../../Providers/AuthProvider';


const RentDetail = () => {

    const {baseUrl}=useContext(AuthContext)
    const {id}=useParams()
    // console.log("Comming id:",id);


    const [allData,setAllData]=useState("")
    useEffect(()=>{
        fetch(`${baseUrl}/api/tolet/post?post_id=${id}`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[id])

     console.log("Basa: ",allData);
   
     const {uid,post_id,balcony,bath,bed,category,click,description,dining,drawing,facing,fasalitis,floornumber,garagetype,geolat,geolon,image1,image2,image3,image4,image5,image6,image7,
        image8,image9,image10,image11,image12,kitchen,location,locationfull,mentenance,payment,phone,propertyname,rent,rentfrom,roomsize,shortaddress,time,top_ads,wapp}=allData


      //Time Start
      const [difference, setDifference] = useState('');
      useEffect(() => {
          const calculateDifference = () => {
          const currentTime = new Date();
          const postedTime = new Date(time);
          const differenceInMilliseconds = currentTime - postedTime;
          const seconds = Math.floor(differenceInMilliseconds / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);
    
          if (days > 0) {
            setDifference(`${days} day${days !== 1 ? 's' : ''} ago`);
          } else if (hours > 0) {
            setDifference(`${hours} hour${hours !== 1 ? 's' : ''} ago`);
          } else if (minutes > 0) {
            setDifference(`${minutes} minute${minutes !== 1 ? 's' : ''} ago`);
          } else {
            setDifference(`Just now`);
          }
        };
    
        calculateDifference();
    
        // Refresh difference every minute
        const interval = setInterval(calculateDifference, 60000);
    
        return () => clearInterval(interval);
      }, [time]);
       ////Time End

    //    console.log("Kochu Time: ",time);
    //    console.log("Kochu Different: ",difference);  
    
    

     ////More Post Rent Start
     const rentMorePostInfo={
      postid:post_id,
      category: category,
      page:1,
      geolat,
      geolon
    }
    const [moreRentPost,setMoreRentPost]=useState([])
    useEffect(()=>{
      if(geolat && geolon){
        fetch(`${baseUrl}/api/tolet/more/post`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(rentMorePostInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            setMoreRentPost(data)
          })
      }
    },[geolat,geolon])
    console.log("More rent: ",moreRentPost);
    ////More Post Rent End





      ///Set Image for Slider Start
      let imagesForSlider=[];
      if(image1){
         imagesForSlider.push(image1)
      }
     if(image2){
         imagesForSlider.push(image2)
      }
     if(image3){
         imagesForSlider.push(image3)
      }
     if(image4){
         imagesForSlider.push(image4)
      }
      if(image5){
         imagesForSlider.push(image5)
      }
      if(image6){
         imagesForSlider.push(image6)
      }
      if(image7){
         imagesForSlider.push(image7)
      }
      if(image8){
         imagesForSlider.push(image8)
      }
      if(image9){
         imagesForSlider.push(image9)
      }
      if(image10){
         imagesForSlider.push(image10)
      }
      if(image11){
         imagesForSlider.push(image11)
      }
      if(image12){
         imagesForSlider.push(image12)
      }

    //   console.log("All Image: ",imagesForSlider);
    //   console.log("Type of Images: ",typeof(imagesForSlider));
     //  console.log("Length of Image: ",imagesForSlider.length);

     ///Set Image for Slider End


      ///Map Start
    
    let defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 11
    };

    if(geolat){
        defaultProps = {
            center: {
              lat: parseFloat(geolat),
              lng: parseFloat(geolon)
            },
            zoom: 11
        };
    }
    else{
        return <span className="loading loading-spinner text-error"></span>;
    }

    ///Map End


     ////Sell From start
     let rentFrom_=new Date(rentfrom);
     const options = {
         day: 'numeric',
         month: 'long', // "long" specifies full month name
         year: 'numeric'
       };
       rentFrom_ = rentFrom_.toLocaleDateString('en-US', options);
       ////Sell From start



      ///////Important feature start
      let allDetails=[]

      if(propertyname){
        allDetails.push({
            itemName:'Property Name',
            itemNumber: propertyname
            
         })
      }
    
      if(category){
         allDetails.push({
            itemName:'Property Type',
            itemNumber: category
            
         })
      }
      if(dining){
        allDetails.push({
            itemName:'Dining',
            itemNumber: dining
            
         })
      }

      if(drawing){
        allDetails.push({
            itemName:'Drawing',
            itemNumber: drawing
            
         })
      }

      if(kitchen){
        allDetails.push({
            itemName:'Kitchen',
            itemNumber: kitchen
            
         })
      }
      if(balcony){
        allDetails.push({
            itemName:'Balcony',
            itemNumber: balcony
            
         })
      }
      if(floornumber){
        allDetails.push({
            itemName:'Floor',
            itemNumber: floornumber
            
         })
      }
      if(facing){
        allDetails.push({
            itemName:'Facing',
            itemNumber: facing
            
         })
      }

      if(rentfrom){
        allDetails.push({
            itemName:'Rent From',
            itemNumber: rentFrom_
            
         })
      }

      if(fasalitis){
        allDetails.push({
            itemName:'Facilities',
            itemNumber: fasalitis
            
         })
      }

      if(mentenance){
        allDetails.push({
            itemName:'Maintenance',
            itemNumber: mentenance
            
         })
      }
      if(shortaddress){
        allDetails.push({
            itemName:'Short Address',
            itemNumber: shortaddress
            
         })
      }
     
  //    console.log(" Important: ",bedBathImportant);
      ///Bed Bath end

      // console.log("Fasalities Type: ",typeof(fasalitis));



      //////Kelma Start
      let iconDiv;
      if(category.includes('Only Garage')){
          // console.log("Post id: ",post_id," Only Garage: yes");
          if(garagetype=="Bike"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] bg-orange-400'> <FaMotorcycle /> Bike Garage</div>
            console.log("Garage Type: ",garagetype);
          }
          if(garagetype=="Car"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] bg-orange-400'> <FaCarAlt /> Car Garage </div>
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
      //////Kelma End


     
      


    if (!allData) {
        if(!defaultProps){
            return <span className="loading loading-spinner text-error"></span>;
        }
       
    }

   
    return (
        <div>
            Rent Detail: {id}
            <h1 className='text-2xl font-bold text-center mb-4'>Rent Page</h1>
            <div className='flex gap-4 w-full h-[500px] '>
                    <div className='w-[60%] h-full'>
                        {/* <img className='w-full h-[450px]'  src={`data:image/png;base64,${image1}`} alt="" /> */}
                        <BuySlider imagesForSlider={imagesForSlider}></BuySlider>
                    </div>
                <div className='w-[40%] h-full flex flex-col bg-green-600 '>
                    <div className='h-full'>
                        <BuyMap geolat={geolat} geolon={geolon} ></BuyMap>
                    </div>
                </div>
            </div>
            {/* <TkAndShare price={price}></TkAndShare> */}

            <div className='my-4 flex justify-between'>
                <div className='text-2xl font-bold'>৳ {rent}</div>

             


                <div>
                    <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
                </div>
            </div>

            <div className='w-full h-[1px] bg-black my-4'></div>

            <div>
                 {/* Celma start */}
                 {iconDiv}
                {/* Celma End */}

            </div>

            <div className='flex justify-between items-center'>
                <div className='my-4 flex items-center gap-10'>
                    <div className='w-[50px] h-[50px] border-2 rounded-full p-2 border-blue-500 '>
                        <img className='' src={locationColorImage} alt="" />
                    </div>
                    <p className='text-xl font-bold'>{location}</p>
                </div>
                <div className='font-bold text-xl'>
                    {difference}
                </div>
            </div>



            <section>
            <h1 className='text-xl'>Details</h1>
            <div className='border-2 border-yellow-500 w-[600px] p-5 rounded-md'>
               {
                 allDetails.map((ad,idx)=> <RentDetailsNumber key={idx}  ad={ad} ></RentDetailsNumber> )
               }
            </div>
            </section>

            <div>
                <BuyDescription description={description}></BuyDescription>
            </div>


            <div>
              <h1 className='text-2xl font-bold'>More Post</h1>
              <div className='grid  grid-cols-4 gap-5'>
                  {
                    moreRentPost &&
                    moreRentPost.map((r,idx)=> <RentCard key={idx} r={r}></RentCard> )
                  }
              </div>
            </div>
           


        </div>
    );
};

export default RentDetail;