import React, { useContext, useEffect, useState } from 'react';
import './RentDetail.css'

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
import { AccessTimeOutlined, BalanceOutlined, BalconyOutlined, Block, ChairOutlined, CottageOutlined, DiningOutlined, DomainOutlined, HomeOutlined, KitchenOutlined, MonetizationOnOutlined, PersonPinCircleOutlined, SearchOutlined, ShareLocationOutlined, ShowerOutlined, WindowOutlined } from '@mui/icons-material';

/////Image Icon start
import bedIcon from '../../../../../assets/icons/tolet/bed.svg'
import bathIcon from '../../../../../assets/icons/tolet/bath.svg'
import areaIcon from '../../../../../assets/icons/tolet/size.svg'
import garageIcon from '../../../../../assets/icons/tolet/garage.svg'
import bikeIcon from '../../../../../assets/icons/tolet/bike.svg'
import carIcon from '../../../../../assets/icons/tolet/car.svg'
import kitchenIcon from '../../../../../assets/icons/tolet/kitchen.svg'
import calculateTimeAgo from '../../../../../Function/TimeAgo';

import BannerSwipperComponent from '../../../SharedPage/Banner/BannerSwipperComponent/BannerSwipperComponent';

const RentDetail = () => {

    const {baseUrl}=useContext(AuthContext)
    const {id}=useParams()
    console.log("Comming id:",id);
   


    const [allData,setAllData]=useState("")
    useEffect(()=>{
        fetch(`${baseUrl}/tolet/post?post_id=${id}`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[id])

     console.log("Basa: ",allData);
   
     const {uid,post_id,balcony,bath,bed,category,click,description,dining,drawing,facing,fasalitis,floornumber,garagetype,geolat,geolon,image1,image2,image3,image4,image5,image6,image7,
        image8,image9,image10,image11,image12,kitchen,location,locationfull,mentenance,payment,phone,propertyname,rent,rentfrom,roomsize,shortaddress,time,top_ads,wapp}=allData



      // Convert the rent to Bangladeshi Taka style start
      const formattedRent = rent?.toLocaleString('en-US');
      // Convert the rent to Bangladeshi Taka style end

      //Time Start
      const [timeAgo, setTimeAgo] = useState('');
      useEffect(()=>{
        setTimeAgo(calculateTimeAgo(time))
      },[time])

       ////Time End

    

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
        fetch(`${baseUrl}/tolet/more/post`,{
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
    // console.log("More rent: ",moreRentPost);
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
            iconName: <HomeOutlined/>,
            itemName:'Property Name',
            itemNumber: propertyname
            
         })
      }
    
      if(category){
         allDetails.push({
            iconName: <DomainOutlined/>,
            itemName:'Property Type',
            itemNumber: category
            
         })
      }
      if(category.includes('Only Garage') || category.includes('Office') || category.includes('Shop')){
        if(bed){
          allDetails.push({
              iconName: <CottageOutlined/>,
              itemName:'Room',
              itemNumber: bed
              
          })
        }
      }
      if(category.includes('Only Garage') || category.includes('Office') || category.includes('Shop')){
        if(bath){
          allDetails.push({
             iconName: <ShowerOutlined/>,
             itemName:'Wash Room',
             itemNumber: bath
             
          })
        }
      }
     



      if(dining){
        allDetails.push({
            iconName: <DiningOutlined/>,
            itemName:'Dining',
            itemNumber: dining
            
         })
      }

      if(drawing){
        allDetails.push({
            iconName:<ChairOutlined/>,
            itemName:'Drawing',
            itemNumber: drawing
            
         })
      }

      if(kitchen){
        allDetails.push({
            iconName: <KitchenOutlined/>,
            itemName:'Kitchen',
            itemNumber: kitchen
            
         })
      }
      if(balcony){
        allDetails.push({
            iconName: <BalconyOutlined/>,
            itemName:'Balcony',
            itemNumber: balcony
            
         })
      }
      if(floornumber){
        allDetails.push({
            iconName: <PersonPinCircleOutlined/>,
            itemName:'Floor',
            itemNumber: floornumber
            
         })
      }
      if(facing){
        allDetails.push({
            iconName: <WindowOutlined/>,
            itemName:'Facing',
            itemNumber: facing
            
         })
      }
      if(roomsize){
        allDetails.push({
          iconName: <WindowOutlined/>,
          itemName:'Size',
          itemNumber: roomsize
          
       })
      }

      if(rentfrom){
        allDetails.push({
            iconName: <AccessTimeOutlined/>,
            itemName:'Rent From',
            itemNumber: rentFrom_
            
         })
      }

      if(fasalitis.length>0){
        allDetails.push({
            iconName: <SearchOutlined/>,
            itemName:'Facilities',
            itemNumber: fasalitis
            
         })
      }

      if(mentenance){
        allDetails.push({
            iconName: <MonetizationOnOutlined/>,
            itemName:'Maintenance',
            itemNumber: mentenance
            
         })
      }
      if(shortaddress){
        allDetails.push({
            iconName: <ShareLocationOutlined/>,
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
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] '> <img className='w-[30px]' src={bikeIcon} alt="" /> Bike Garage</div>
            console.log("Garage Type: ",garagetype);
          }
          if(garagetype=="Car"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] '> <img className='w-[30px]' src={carIcon} alt="" /> Car Garage </div>
            console.log("Garage Type: ",garagetype);
          }
          if(garagetype=="Garage"){
            iconDiv=<div className='flex items-center gap-2 p-5 h-[45px] '> <img className='w-[30px]' src={garageIcon} alt="" /> Garage  </div>
            console.log("Garage Type: ",garagetype);
          }
      }else{
          console.log("Post id: ",post_id," Only Garage: No");
          if(category.includes('Office')){
             iconDiv=<div className='p-5 h-[45px]  '> Office</div>
          }
          if(category.includes('Shop')){
            iconDiv=<div className='p-5 h-[45px] '> Shop  </div>
          }
          else{
             iconDiv=<div className='flex gap-5 items-center p-5 h-[45px]  text-[30px] my-4 '>
               <div className='flex items-center gap-2'><img className='w-[40px] opacity-40' src={bedIcon} alt="" /> {bath}</div>
               <div className='flex items-center gap-2'><img className='w-[40px] opacity-40  mb-[2px]' src={bathIcon} alt="" /> {bed}</div>
               {
                roomsize ?
                <div className='flex items-center gap-2'><img className='w-[40px] opacity-40' src={areaIcon} alt="" /> {roomsize} ft<sup>2</sup></div>:
                <div className='flex items-center gap-2'><img className='w-[40px] opacity-40' src={kitchenIcon} alt="" /> {kitchen} </div>
               }
               {/* <div className='flex items-center gap-2'><img className='w-[40px] opacity-40' src={areaIcon} alt="" /> {roomsize} ft<sup>2</sup></div> */}
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
        <div className='mt-10'>

          <div className='md:hidden'>
            <footer className="footer">
               <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
            </footer>
          </div>

          <div className='detailParent'>
          

            {/* Left Div start */}
             <div className='w-full detailParentLeftdiv'>
                <div className='flex flex-col md:flex-row gap-1 w-full h-[500px] '>
                        <div className='w-full md:w-[60%] h-full rounded-md p-2 md:p-0 '>
                            <BannerSwipperComponent images={imagesForSlider}></BannerSwipperComponent>
                        </div>
                      <div className='hidden md:flex w-[40%] h-full  flex-col bg-green-600 rounded-xl'>
                          <div className='h-full w-[80%] md:w-full mx-auto rounded-xl bg-yellow-300'>
                              <BuyMap geolat={geolat} geolon={geolon} className='rounded-xl' ></BuyMap>
                          </div>
                      </div>
                </div>

                 {/* <TkAndShare price={price}></TkAndShare> */}
                <div className='my-4 flex justify-between rounded-md '>
                    <div className='text-3xl robot font-bold text-black opacity-80'>৳ {formattedRent}</div>
                    <div className='hidden md:block'>
                        <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
                    </div>
                </div>
                 {/* <TkAndShare price={price}></TkAndShare> */}

                <div className='w-full h-[1px] bg-black opacity-20 my-4'></div>

                <div className='flex justify-between items-center'>
                   <div className='w-full md:w-[80%]'> {iconDiv}</div>
                    <span className='font-bold text-xl prText hidden md:block'>{timeAgo}</span> 
                </div>

                {/* Location and Time Ago start */}
                <div className='flex justify-between items-center  '>
                    <div className='my-4 flex items-center gap-4 '>
                        <div className='w-[50px] h-[50px] border-2 rounded-full p-2 border-blue-500 flex items-center justify-center '>
                            <img className='w-[50px] h-[50px]' src={locationColorImage} alt="" />
                        </div>
                        <p className='text-[18px] md:text-[26px] font-bold text-black opacity-70'>{location}</p>
                    </div>
                  
                    <span className='font-bold text-xl prText md:hidden '>{timeAgo}</span> 
                    
               </div>
              {/* Location and Time Ago end */}

              <div className='h-[30px] w-full bg-[#DEDEE0]'>
                
              </div>


            <section className='m-5 md:m-0'>
              <div className='flex justify-between prText'>
                <h1 className='text-xl my-4'>Details</h1>
                <p>id: {id} </p>
              </div>
              <div className='customBorder w-full md:w-[650px] p-5 rounded-md'>
                {
                  allDetails.map((ad,idx)=> <RentDetailsNumber key={idx}  ad={ad} ></RentDetailsNumber> )
                }
              </div>
          </section>

            
            <div className='h-[1px] w-full  my-[25px]  customBorder '></div>

            <div className='m-5 md:m-0'>
                <BuyDescription description={description} post_id={post_id} ></BuyDescription>
            </div>


            {/* Map For Mobile start */}
            <div className='md:hidden h-[250px] w-full px-2 rounded-xl '>
                <h1>In Map: </h1>
                <BuyMap geolat={geolat} geolon={geolon} className='rounded-xl' ></BuyMap>
            </div>
            {/* Map For Mobile end */}






  

             </div>
            {/* Left Div End */}


             {/* More Post */}

             {/* For Desktop Device start */}
             <div className='w-full  detailParentRightdiv  hidden md:block'>
                <div className='flex flex-no-wrap overflow-x-scroll md:flex-col '>
                    {moreRentPost &&
                      moreRentPost.map((r, idx) => (
                        <div key={idx} className='w-full md:w-auto md:flex-shrink-0 md:flex-grow '>
                          <RentCard r={r} forRent={'forRent'} />
                        </div>
                      ))}
                  </div>
            </div>
             {/* For Desktop Device end */}
            

            {/* For Mobile Device start */}
            <div className='w-full detailParentRightdiv overflow-x-auto md:hidden h-[500px] mb-20  '>
              <div className='flex flex-nowrap md:overflow-x-auto'>
                {moreRentPost &&
                  moreRentPost.map((r, idx) => (
                    <div key={idx} className='w-10/12 md:w-screen  flex-none md:flex-grow-0 md:flex-shrink-0'>
                      <RentCard r={r} forRent={'forRent'} />
                    </div>
                  ))}
              </div>
            </div>
            {/* For Mobile Device start */}



            {/* More Post End */}
          </div>
          

        </div>
    );
};

export default RentDetail;