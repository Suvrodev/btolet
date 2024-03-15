import React, { useContext, useEffect, useState } from 'react';
import './BuyDetail.css'

import { useLocation, useParams } from 'react-router-dom';

import locationColorImage from '../../../../assets/icons/home/map.svg'
import { FaBath, FaBed, FaCheck, FaCheckCircle, FaShare } from 'react-icons/fa';
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
import { AccessTimeOutlined, ConstructionOutlined, DomainOutlined, HomeOutlined, PermIdentityOutlined, ShareLocationOutlined } from '@mui/icons-material';
import { FiShare2 } from 'react-icons/fi';
import calculateTimeAgo from '../../../../Function/TimeAgo';
import BannerSwipperComponent from '../../SharedPage/Banner/BannerSwipperComponent/BannerSwipperComponent';
import ImageZoom from '../../UserResponsibility/Check/ImageZoom/ImageZoom';
import convertDate from '../../../../Function/DateConvert';

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
        fetch(`${baseUrl}/pro/post?pid=${id}`)
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[id])

    console.log("All Data: ",allData);

   

    const {pid,uid,amenities,area,balcony,bath,bed,category,description,dining,drawing,emi,facing,floor_plan,floornumber,geolat,geolon,image1,image2,image3,
        image4,image5,image6,image7,image8,image9,image10,image11,image12,kitchen,land_type,location,locationfull,measurement,name,ownertype,payment,price,
        procondition,road_size,sellfrom,shortaddress,size,status,time,top_ads,total_floor,total_unit,phone,wapp,yt_video}=allData

        
       // Convert the rent to Bangladeshi Taka style start
       const formattedRent = price?.toLocaleString('en-US');
        // Convert the rent to Bangladeshi Taka style end


        //Time Start
        const [timeAgo, setTimeAgo] = useState('');
        useEffect(()=>{
          setTimeAgo(calculateTimeAgo(time))
        },[time])
  
         ////Time End



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
            fetch(`${baseUrl}/pro/more/post`,{
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
        // console.log("More Buy: ",moreBuyPost);
        ////Buy More Post End





        ////Sell From start
        let sellfrom_=new Date(sellfrom);
        const options = {
            day: 'numeric',
            month: 'long', // "long" specifies full month name
            year: 'numeric'
          };
         sellfrom_ = sellfrom_.toLocaleDateString('en-US', options);



          //////Self From 
        const [myDate,setMyDate]=useState("")
        useEffect(()=>{
            if(sellfrom_){
                setMyDate(convertDate(sellfrom_))
            }
        },[sellfrom_])
          ////Sell From end
        



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



    ///Youtube Video start
    
    const opts = {
        height: '200',
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
    if(emi){
        roadSizeSotangso.push(emi)
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
        <div className='mt-10 m-5 md:m-0'>
           
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
                        
                        <div className= 'hidden md:flex w-full md:w-[40%] h-full  flex-col bg-green-600 '>
                        {
                            floor_plan &&
                            <div className='relative h-[50%] bg-red-500 z-10 phaseImageParent'>
                                {
                                floor_plan?
                                <>
                                    <h1 className='absolute middle font-bold text-xl text-black bg-white p-2 rounded-md opacity-30'>Floor Plan</h1>
                                    <ImageZoom comeImage={floor_plan}></ImageZoom>
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

                <div className='my-4 flex justify-between rounded-md'>
                    <div className='text-3xl robot font-bold text-black opacity-80'>
                        {price? <span className='font-bold '>Take : <span className=''>{formattedRent}</span> </span> :'Price On Call'}
                    </div>

                    <div className='hidden md:flex gap-4 items-center'>
                        <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
                        <FiShare2/>
                    </div>
                </div>

                  {/* <TkAndShare phone={phone} wapp={wapp} price={price}></TkAndShare> */}



                <div className='w-full h-[1px] bg-black opacity-20 my-4'></div>

                <div className='flex justify-between items-center prText'>
                        <div className='my-4 flex items-center gap-4'>
                            <div className='w-[50px] h-[50px] border-2 rounded-full p-2 border-blue-500 '>
                                <img className='' src={locationColorImage} alt="" />
                            </div>
                            <p className='text-xl font-bold'>{location}</p>
                        </div>
                        <div className='font-bold text-xl'>
                            {timeAgo}
                        </div>
                </div>


                {/* Land Type for Mobile Device start */}

                <div className='md:hidden'>
                    <div className='flex flex-wrap gap-1 my-4 w-full'>
                        {
                            land_type.map((lt,idx)=> <p key={idx} className='customBorder border-blue-500 p-2 rounded-md font-normal'> <span className='flex items-center gap-1 prText'> <FaCheck/> {lt}</span> </p> )
                        }
                    </div>
                </div>

                 {/* Land Type for Mobile Device end */}
            


                 {/* my-4 border-2 p-5 rounded-md grid grid-cols-6 gap-6 place-items-center */}
                <div className='flex  gap-20'>
                    <div className='w-full md:w-[50%]'>
                    {
                            (category === 'House' || category === 'Flat') ? (
                        <div className=' border-2  grid grid-cols-4 md:grid-cols-6 p-5 '>
                            {
                                bedBathImportant.map((b,idx)=> <BuyDetailsHomeData key={idx} b={b} num={idx}></BuyDetailsHomeData> )
                            }
                            
                        </div>
                        ):(
                            <div className='border-2  grid grid-cols-3 '>
                            {
                                roadSizeSotangso.map((b,idx)=> <BuyDetailsLandData key={idx} b={b} num={idx} area={area}></BuyDetailsLandData> )
                            }
                            
                            </div>
                        )
                        
                    }
                    </div>

                    <div className='hidden md:flex w-[50%]  p-5  flex-col gap-4'>
                            <div className='prText'>
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
                            <div className={land_type.length<1?'hidden':'prText'}>
                            <h1 className='font-bold'>Land Type:</h1>
                            <div className='flex gap-4 my-4'>
                                {
                                    land_type.map((lt,idx)=> <p key={idx} className='border-2 border-blue-500 p-2 rounded-md'> <span className='flex items-center gap-2'> <FaCheck/> {lt}</span> </p> )
                                }
                            </div>
                            </div>
                    </div>
                </div>
          

           


                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-40 my-10   prText '>
                    <div className='w-full md:w-[30%] peText'>
                        <h1 className='text-xl font-bold my-4'>Details: </h1>
                        {
                            name && 
                            <div className='w-[350px] grid grid-cols-2 mb-3'>
                                <div className='flex items-start gap-1'>
                                    <HomeOutlined/>
                                    <p>Name</p>
                                </div>
                                
                                <p>{name}</p>
                            </div>
                        }
                    
                        <div className='w-[350px] grid grid-cols-2 mb-3 '>
                            <div className='flex items-start gap-1'>
                                <DomainOutlined/>
                                <p>Type</p>
                            </div>
                            <p>{category}</p>
                        </div>
                        {
                            procondition &&
                            <div className='w-[350px] grid grid-cols-2 mb-3'>
                                <div className='flex items-start gap-1'>
                                    <ConstructionOutlined/>
                                    <p>condition</p>
                                </div>
                                <p>{procondition}</p>
                            </div>
                        }
                    
                        {
                            sellfrom_ &&
                            <div className='w-[350px] grid grid-cols-2 mb-3'>
                            <div className='flex items-start gap-1'>
                                <AccessTimeOutlined/>
                                <p>Available from</p>
                            </div>
                                <p>{myDate}</p>
                            </div>
                        }
                        

                        {
                            shortaddress &&
                            <div className='w-[350px] grid grid-cols-2'>
                                <div className='flex items-start gap-1'>
                                    <ShareLocationOutlined/>
                                <p>Short Address</p>
                                </div>
                                <p>{shortaddress}</p>
                            </div>
                        }

                        {
                            ownertype &&
                            <div className='w-[350px] grid grid-cols-2'>
                                <div className='flex items-center gap-1'>
                                <PermIdentityOutlined/>
                                <p>Posted By</p>
                                </div>
                                <p>{ownertype}</p>
                            </div>
                        }
                    

                    </div>

                    <div className='w-full md:w-[70%] flex justify-center '>
                        {
                            ytId &&(
                                <div className='hidden md:block'>
                                    <h1 className='text-xl font-bold my-4'>Youtube Video</h1>
                                    <div className='flex items-center justify-center bg-green-500'>
                                       <YouTube videoId={ytId} opts={opts} />
                                    </div>
                                </div>
                            )
                        }
                        {
                            ytId &&(
                                <div className='md:hidden'>
                                    <h1 className='text-xl font-bold my-4'>Youtube Video</h1>
                                    <div className='flex items-center justify-center bg-green-500'>
                                       <YouTube videoId={ytId} className='w-full rounded-xl'  />
                                    </div>
                                </div>
                            )
                        }
                     </div>
                </div>


                {/* Floor Plan for Mobile Device start */}
                <div className='md:hidden'>
                    <div>
                        <div className="collapse border-2 border-blue-500 w-full collapse-arrow">
                            <input type="checkbox" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Floor Plan
                                </div>
                                
                                <div className="collapse-content"> 
                                    <img  src={`data:image/jpeg;base64,${floor_plan}`} className='rounded-xl' alt="" />
                                </div>
                        </div>
                    </div>
                </div>
                {/* Floor Plan for Mobile Device end */}


                
                {/* Amienities for Mobile device start */}
                <div className='md:hidden'>
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
                {/* Amienities for Mobile device end*/}

                <div>
                    <BuyDescription description={description} post_id={id}></BuyDescription>
                </div>

                  {/* Map For Mobile start */}
                <div className='md:hidden h-[250px] w-full px-2 rounded-xl '>
                    <h1 className='prText'>In Map: </h1>
                    <BuyMap geolat={geolat} geolon={geolon} className='rounded-xl' ></BuyMap>
                </div>
                {/* Map For Mobile end */}


            </div>
                {/* Left Div End */}








                {/* More Post */}

                {/* More post for desktop screent start */}
                <div className='w-full px-4 detailParentRightdiv hidden md:block'>
                    <div className='grid  grid-cols-1 gap-5'>
                        {
                            moreBuyPost &&
                            moreBuyPost.map((buy,idx)=> <BuyCard key={idx} buy={buy}   forBuy={'forBuy'}></BuyCard> )
                        }
                    </div>
                </div>
                {/* More Post for desktop screen end */}

                {/* For Mobile Device start */}
                <div className='w-full detailParentRightdiv overflow-x-auto md:hidden'>
                    <div className='flex flex-nowrap md:overflow-x-auto'>
                        {moreBuyPost &&
                        moreBuyPost.map((buy, idx) => (
                            <div key={idx} className='w-10/12 md:w-screen  flex-none md:flex-grow-0 md:flex-shrink-0'>
                                <BuyCard buy={buy}   forBuy={'forBuy'} />
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

export default BuyDetail;

