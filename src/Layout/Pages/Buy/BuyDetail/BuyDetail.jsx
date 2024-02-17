import React, { useContext, useEffect, useState } from 'react';
import './BuyDetail.css'

import { useLocation, useParams } from 'react-router-dom';

import locationColorImage from '../../../../assets/icons/home/map.svg'
import { FaBath, FaBed, FaCheckCircle, FaShare } from 'react-icons/fa';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

import GoogleMapReact from 'google-map-react';
import noImage from '../../../../assets/Image/NoImage.jpg'
import BuySlider from './BuySlider/BuySlider';
import BuyDescription from './BuyDescription/BuyDescription';
import BuyMap from './BuyMap/BuyMap';
import chekImage from '../../../../assets/icons/property/check.svg'

import BuyDetailsHomeData from './BuyDetailsHomeData/BuyDetailsHomeData';
import BuyDetailsLandData from './BuyDetailsLandData/BuyDetailsLandData';
import ContactButtons from './ContactButtons/ContactButtons';
import BuyCard from '../BuyCard/BuyCard';
import { AuthContext } from '../../../../Providers/AuthProvider';

const BuyDetail = () => {
    const {baseUrl}=useContext(AuthContext)
    const {id}=useParams()
    console.log("Comming id: ",id);
    const currentLocation = useLocation(); // Get the location object
    const { state } = currentLocation; // Access the state object
    //  console.log("State: ",state);
     let { lat, lon } = state || {};

    //  console.log("lat: ",lat," lon: ",lon);



    const [allData,setAllData]=useState("")
    useEffect(()=>{
        fetch(`${baseUrl}/api/pro/post?pid=${id}`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[id])

    console.log("All Data: ",allData);

   

    const {pid,uid,amenities,area,balcony,bath,bed,category,description,dining,drawing,emi,facing,floor_plan,floornumber,geolat,geolon,image1,image2,image3,
        image4,image5,image6,image7,image8,image9,image10,image11,image12,kitchen,land_type,location,locationfull,measurement,name,ownertype,payment,price,
        procondition,road_size,sellfrom,shortaddress,size,status,time,top_ads,total_floor,total_unit,phone,wapp,yt_video}=allData

        

      


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

        //  console.log("Kochu Time: ",time);
        //  console.log("Kochu Different: ",difference);


          ////Buy More Post Start
        const rentMorePostInfo={
            postid:pid,
            category: category,
            page:1,
            geolat,
            geolon
        }
        const [moreBuyPost,setMoreBuyPost]=useState([])
        useEffect(()=>{
            if(geolat && geolon){
            fetch(`${baseUrl}/api/pro/more/post`,{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(rentMorePostInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    setMoreBuyPost(data)
                })
            }
        },[geolat,geolon])
        console.log("More Buy: ",moreBuyPost);
        ////Buy More Post End





        ////Sell From start
        let sellfrom_=new Date(sellfrom);
        const options = {
            day: 'numeric',
            month: 'long', // "long" specifies full month name
            year: 'numeric'
          };
         sellfrom_ = sellfrom_.toLocaleDateString('en-US', options);
          ////Sell From start
        



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

        //  console.log("All Image: ",imagesForSlider);
        //  console.log("Type of Images: ",typeof(imagesForSlider));
        //  console.log("Length of Image: ",imagesForSlider.length);

        ///Set Image for Slider End




        //Amenities Start
        //Amenities End




    ///Youtube Video start
    
    const opts = {
        height: '250',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };


  

    const [ytId,setYtId]=useState("")
    useEffect(() => {
        if (yt_video) {
        //   console.log("Youtube Video Link: ", yt_video);
          setYtId(getYouTubeID(yt_video));
         
        }
      }, [yt_video]);
    //   console.log("YT ID: ",ytId);

    ///Youtube Video End


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


   


 


    ///////Important feature start
    let bedBathImportant=[]
    let roadSizeSotangso=[]
    ///Bed Bath Start
    if(bed){
        bedBathImportant.push(bed)
    }
    if(bath){
        bedBathImportant.push(bath)
    }
    if(kitchen){
        bedBathImportant.push(kitchen)
    }
    if(dining){
        bedBathImportant.push(dining)
    }
    if(drawing){
        bedBathImportant.push(drawing)
    }
    if(balcony){
        bedBathImportant.push(balcony)
    }
    if(size){
        bedBathImportant.push(size)
    }
    if(facing){
        bedBathImportant.push(facing)
    }
    if(total_floor){
        bedBathImportant.push(total_floor)
    }
    if(floornumber){
        bedBathImportant.push(floornumber)
    }
    if(total_unit){
        bedBathImportant.push(total_unit)
    }
    if(emi){
        bedBathImportant.push(emi)
    }
//    console.log("BedBath Important: ",bedBathImportant);
    ///Bed Bath end


    ///Road Size start
    if(measurement){
        roadSizeSotangso.push(measurement)
    }
    if(road_size){
        roadSizeSotangso.push(road_size)
    }
    ///Road Size end

    // console.log("roadSizeSotangso Important: ",roadSizeSotangso);

    ///////Important feature end



    //Loading Start
    if (!allData) {
        if(!defaultProps){
            return <span className="loading loading-spinner text-error"></span>;
        }
       
    }
    //Loading End
   

    return (
        <div>
            <h1>dddd</h1>
            Buy Detail: {id}

            <div className='flex gap-4 w-full h-[500px] '>
                <div className='w-[60%] h-full'>
                      {/* <img className='w-full h-[450px]'  src={`data:image/png;base64,${image1}`} alt="" /> */}
                     <BuySlider imagesForSlider={imagesForSlider}></BuySlider>
                </div>
                <div className='w-[40%] h-full flex flex-col bg-green-600 '>
                   
                   {
                    floor_plan &&
                    <div className='relative h-[50%] bg-red-500 z-10'>
                        {
                        floor_plan?
                        <>
                            <h1 className='absolute middle font-bold text-xl text-black bg-white p-2 rounded-md opacity-30'>Floor Plan</h1>
                            <img className='w-full h-full phaseImage z-20'  src={`data:image/png;base64,${floor_plan}`} alt="" />
                        </>:
                        <> 
                            <img className='w-full h-full phaseImage z-20' src={noImage} alt="" />
                        </>
                        }
                    </div>
                   }

                    <div className={` ${floor_plan?'h-[50%]':'h-full'} `}>
                      <BuyMap geolat={geolat} geolon={geolon} ></BuyMap>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center my-4'>
                 <div className='text-xl font-bold'>
                    {price? <span className='font-bold '>Take : <span className=''>{price}</span> </span> :'Price On Call'}
                </div>

                <div className='flex gap-4 items-center'>
                    <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
                    <FaShare/>
                </div>
            </div>

           {/* <TkAndShare phone={phone} wapp={wapp} price={price}></TkAndShare> */}



            <div className='w-full h-[1px] bg-black my-4'></div>

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


            {/* my-4 border-2 p-5 rounded-md grid grid-cols-6 gap-6 place-items-center */}
           <div className='flex  gap-20'>
                <div className='w-[50%]'>
                {
                     (category === 'House' || category === 'Flat') ? (
                    <div className='box'>
                        {
                            bedBathImportant.map((b,idx)=> <BuyDetailsHomeData key={idx} b={b} num={idx}></BuyDetailsHomeData> )
                        }
                      
                    </div>
                    ):(
                      <div className='box2'>
                        {
                            roadSizeSotangso.map((b,idx)=> <BuyDetailsLandData key={idx} b={b} num={idx} area={area}></BuyDetailsLandData> )
                        }
                      
                      </div>
                    )
                    
                }
                </div>

                <div className='w-[50%]  p-5 flex flex-col gap-4'>
                     <div>
                        <h1 className='text-xl font-bold mb-5'>Amenities: </h1>
                        <div className='grid grid-cols-2'>
                            {
                            amenities.map((a,idx) => <div key={idx} className='flex items-center gap-2'>
                                <p><FaCheckCircle className=' text-green-600' /></p>
                                <p>{a}</p>
                                </div> )
                            }

                        </div>
                     </div>
                     <div className={land_type.length<1?'hidden':''}>
                        <h1 className='font-bold'>Land Type:</h1>
                        <div className='flex gap-4 my-4'>
                            {
                                land_type.map((lt,idx)=> <p key={idx} className='border-2 border-blue-500 p-2 rounded-md'>{lt}</p> )
                            }
                        </div>
                     </div>
                </div>
           </div>
          

           


            <div className='flex gap-10 my-10  justify-end '>
                <div className='w-[30%]'>
                     <h1 className='text-xl font-bold'>Details: </h1>
                     {
                        name && 
                        <div className='w-[350px] grid grid-cols-2'>
                            <p>Name</p>
                            <p>{name}</p>
                        </div>
                     }
                   
                    <div className='w-[350px] grid grid-cols-2'>
                        <p>Type</p>
                        <p>{category}</p>
                    </div>
                    {
                        procondition &&
                        <div className='w-[350px] grid grid-cols-2'>
                            <p>condition</p>
                            <p>{procondition}</p>
                        </div>
                    }
                   
                    {
                        sellfrom_ &&
                        <div className='w-[350px] grid grid-cols-2'>
                            <p>Available from</p>
                            <p>{sellfrom_}</p>
                        </div>
                    }
                    

                    {
                        shortaddress &&
                        <div className='w-[350px] grid grid-cols-2'>
                            <p>Short Address</p>
                            <p>{shortaddress}</p>
                        </div>
                    }

                    {
                        ownertype &&
                        <div className='w-[350px] grid grid-cols-2'>
                            <p>Position By</p>
                            <p>{ownertype}</p>
                         </div>
                    }
                   

                </div>

                <div className='w-[70%] flex justify-end '>
                     {
                        ytId &&
                        <YouTube videoId={ytId} opts={opts}  />
                     }
              </div>
            </div>


            <div>
                <BuyDescription description={description}></BuyDescription>
            </div>

            <div>
              <h1 className='text-2xl font-bold'>More Post</h1>
              <div className='grid  grid-cols-4 gap-5'>
                  {
                    moreBuyPost &&
                    moreBuyPost.map((buy,idx)=> <BuyCard key={idx} buy={buy}></BuyCard> )
                  }
              </div>
            </div>
           
        </div>

        
    );

    
};

export default BuyDetail;

