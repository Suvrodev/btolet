import React, { useEffect, useState } from 'react';
import './BuyDetail.css'

import { useLocation, useParams } from 'react-router-dom';

import locationColorImage from '../../../../assets/icons/home/map.svg'
import { FaBath, FaBed, FaShare } from 'react-icons/fa';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

import GoogleMapReact from 'google-map-react';
import noImage from '../../../../assets/Image/NoImage.jpg'
import BuySlider from './BuySlider/BuySlider';
import BuyDescription from './BuyDescription/BuyDescription';
import BuyMap from './BuyMap/BuyMap';

const BuyDetail = () => {
    const {id}=useParams()
    const currentLocation = useLocation(); // Get the location object
    const { state } = currentLocation; // Access the state object
    //  console.log("State: ",state);
     let { lat, lon } = state || {};

    //  console.log("lat: ",lat," lon: ",lon);



    const [allData,setAllData]=useState("")
    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/pro/post?pid=${id}`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[id])

    console.log(allData);

   

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


        let sellfrom_=new Date(sellfrom);
        const options = {
            day: 'numeric',
            month: 'long', // "long" specifies full month name
            year: 'numeric'
          };
         sellfrom_ = sellfrom_.toLocaleDateString('en-US', options);
         ////Time End



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

        ///Set Image for Slider Start




        //Amenities Start
        //Amenities End




    ///Youtube Video start
    
    const opts = {
        height: '390',
        width: '640',
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

    

   
    let mLat,mLon;
    // let a= 22.8182591
    // let b= 89.5519609
    console.log("geolat: ",  geolat);
    console.log("geolon: ", geolon);

     mLat=  parseFloat(geolat) 
     mLon=  parseFloat(geolon) 

    console.log("mLat: ",  mLat);
    console.log("mLon: ", mLon);


    console.log("Type of mLat: ",typeof(mLat));
    console.log("Type of mLon: ",typeof(mLon));

  
    
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
              lat: mLat,
              lng: mLon
            },
            zoom: 11
        };
    }
    else{
        return <span className="loading loading-spinner text-error"></span>;
    }

    ///Map End


    if (!allData) {
        if(!defaultProps){
            return <span className="loading loading-spinner text-error"></span>;
        }
       
    }
   

    return (
        <div>
            Buy Detail: {id}

            <div className='flex gap-4'>
                <div className='w-[60%]'>
                  {/* <img className='w-full h-[450px]'  src={`data:image/png;base64,${image1}`} alt="" /> */}
                  <BuySlider imagesForSlider={imagesForSlider}></BuySlider>
                </div>
                <div className='w-[40%] h-[450px] flex flex-col '>
                   
                    <div className='relative h-[50%] bg-red-500'>
                       {
                        floor_plan?
                         <>
                             <h1 className='absolute middle font-bold text-xl text-black bg-white p-2 rounded-md opacity-30'>Floor Plan</h1>
                             <img className='w-full h-full'  src={`data:image/png;base64,${floor_plan}`} alt="" />
                         </>:
                         <> 
                            <img className='w-full h-full' src={noImage} alt="" />
                         </>
                       }
                    </div>

                    <div className='h-[50%] bg-green-500'>
                        Map
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center my-4'>
                <div className='text-xl font-bold'>
                    {price? <span className='font-bold '>Take : <span className=''>{price}</span> </span> :'Price On Call'}
                </div>
                <div>
                  <FaShare/>
                </div>
            </div>



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
            <div className='box'>
            {/* flex flex-col gap-4 */}
                <div className='itemBox1'>
                     {/* w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center */}
                    <div className='iconDiv'>
                        <FaBed/>
                    </div>
                    {/* flex flex-col items-center justify-center w-[40px] h-[40px] */}
                    <div className='itemBox2'>
                        <p>Beds</p>
                        <p>{bed}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Bath</p>
                        <p>{bath}</p>
                    </div>
                </div>
                
                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Kitchen</p>
                        <p>{kitchen}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Dining</p>
                        <p>{dining}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Drawing</p>
                        <p>{drawing}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Balcony</p>
                        <p>{balcony}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Size</p>
                        <p>{size}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Facing</p>
                        <p>{facing}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Total Floor</p>
                        <p>{total_floor}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Floor No</p>
                        <p>{floornumber}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>Total Unit</p>
                        <p>{total_unit}</p>
                    </div>
                </div>

                <div className='itemBox1'>
                    <div className='iconDiv'>
                        <FaBath/>
                    </div>
                    <div className='itemBox2'>
                        <p>EMI</p>
                        <p>{emi}</p>
                    </div>
                </div>
            
            </div>



            <div className='flex gap-10'>
                <div className='w-[60%]'>
                    <div>

                        {
                           
                        }

                    </div>

                </div>

                <div className='w-[40%]'>
                    <div className='w-[350px] grid grid-cols-2'>
                        <p>Type</p>
                        <p>{category}</p>
                    </div>
                    <div className='w-[350px] grid grid-cols-2'>
                        <p>condition</p>
                        <p>{procondition}</p>
                    </div>
                    <div className='w-[350px] grid grid-cols-2'>
                        <p>Available from</p>
                        <p>{sellfrom_}</p>
                    </div>
                    <div className='w-[350px] grid grid-cols-2'>
                        <p>Position By</p>
                        <p>{ownertype}</p>
                    </div>
              </div>
            </div>


            <div className='my-4 flex gap-4'>
                <div className='w-[50%]'>
                     {
                        ytId &&
                        <YouTube videoId={ytId} opts={opts}  />
                     }
                </div>

                <div className=' w-[50%] h-[390px]'>

                    This is Map
    
               
                  

                     {/* <BuyMap lat={lat} lon={lon}></BuyMap> */}
                     {
                       lat ?
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        text="My Marker"
                        >
                        </GoogleMapReact>:
                        <span className="loading loading-spinner text-error"></span>

                     }
                
                   

                </div>
            </div>

            <div>
                <BuyDescription description={description}></BuyDescription>
            </div>
           
        </div>

        
    );

    
};

export default BuyDetail;

