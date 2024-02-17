import React, { useContext, useState } from 'react';
import HomeFlat from '../HomeFlat/HomeFlat';
import Land from '../Land/Land';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { FaCheckCircle, FaCircle, FaGoogle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BuyPost = () => {
    
   const {selectedCategoriesBuy,setSelectedCategoriesBuy,displayName,duelLocation,setDuelLocation,baseUrl,uId}=useContext(AuthContext)

   

   console.log("duel Location:",duelLocation);
    
    const categories=["House","Flat","Land","Plot"]
    // const [selectedCategories, setSelectedCategories] = useState("House");

    const handleCategories = (index) => {
      setSelectedCategoriesBuy(categories[index]);
      // setCategory(categories[index])
    };

    // console.log("Category: ",selectedCategoriesBuy);

    let componentToRender = null;
    switch (selectedCategoriesBuy) {
        case 'House':
          componentToRender = <HomeFlat />;
          break;
        case 'Flat':
          componentToRender = <HomeFlat />;
          break;
        case 'Land':
          componentToRender = <Land />;
          break;
        case 'Plot':
          componentToRender = <Land />;
          break;
        default:
          componentToRender = null;
      }


     
    
      const {currentUser,propertyName,selectedTypeProperty,selectedBedRoom,selectedBathroom,selectedDrawing,selectedDining,selectedBalcony,
        selectedKitchen,selectedFaching,selectedDate,totalFloor,floorNumber,totalSize,totalUnit,price,selectedEmi,selectedAmenities,ytLink,
        imageSrc,images,name,phone,wapp,shortAddress,description,selectedYouAres,selectedLPTypeItems,selectedAreas,measurement,roadSize,address,
        selectPhoneCountryCode,selectWappCountryCode, priceMode,
        setErrorBalcony,setErrorKitchen,setErrorFaching,setErrorTotalFloor,setErrorFloorNumber,setErrorTotalSize,setErrorTotalUnit,setErrorPrice,setErrorMeasurement,setErrorRoadSize,
        setErrorImages,
        lattitude,longitude,
       }=useContext(AuthContext)


    // let namee,totalFloorr,pricee,descriptionn,phonee,wappp,measurementt,roadSizee,category,procondition,bed,bath,balcony,drawing,dining,kitchen,size,sellfrom,floornumber,
    // facing,totalUnitt,amenities,Pl,ytVideo,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,location,locationfull,
    // shortaddress,ownertype,geolat,geolon,landType,area,emi;
 
    

    const handleSubmit=()=>{
      const newName= name?name:currentUser?.name
      const newPhone=`${selectPhoneCountryCode}`+ `${phone?phone:currentUser?.phone}`
      const newWapp= `${selectWappCountryCode}` + `${wapp?wapp:currentUser?.wapp}`

     

        // console.log("Selected Buy Category: ",selectedCategoriesBuy);
        // console.log("PriceMode: ",priceMode);
        // console.log("Property Name: ",propertyName);
        // console.log("Property Type: ",selectedTypeProperty);
        // console.log("Bedroom: ",selectedBedRoom);
        // console.log("Bathroom: ",selectedBathroom);
        // console.log("Drawing: ",selectedDrawing);
        // console.log("Dining: ",selectedDining);
        // console.log("Balcony: ",selectedBalcony);
        // console.log("Kitchen: ",selectedKitchen);
        // console.log("Faching: ",selectedFaching);
        // console.log("Date: ",selectedDate);
        // console.log("Total Floor: ",totalFloor);
        // console.log("Floor Number: ",floorNumber);
        // console.log("Total Size: ",totalSize);
        // console.log("Total Unit: ",totalUnit);
        // console.log("Price ",price);
        // console.log("EMI: ",selectedEmi);
        // console.log("Amenities: ",selectedAmenities);
        // console.log("Youtube Link: ",ytLink);
        // console.log("Floor Plan: ",imageSrc);
        console.log("Select Images: ",images);
        // console.log("Short Address:  ",shortAddress);
        // console.log("Description: ",description);
        // console.log("You Are: ",selectedYouAres);
      
        // console.log("Name:  ",newName);
        // console.log("phone: ",newPhone);
        // console.log("wapp:  ",newWapp);

        // console.log("LP Type: ",selectedLPTypeItems);
        // console.log("Area: ",selectedAreas);
        // console.log("Measurement: ",measurement);
        // console.log("Road Size: ",roadSize);
        // console.log("Address: ",address);

        // console.log("Phone Country Code: ",selectPhoneCountryCode);
        // console.log("Wapp Country Code: ",selectWappCountryCode);
        console.log("Duel Location: ",duelLocation);
        console.log("Price Mode: ",priceMode);


      
        let buyPosDataObject={}

        if(selectedCategoriesBuy=='House' || selectedCategoriesBuy=='Flat'){
          if(!selectedBalcony){
            setErrorBalcony(true)
            return
          }else{
            setErrorBalcony(false)
          }

          if(!selectedKitchen){
            setErrorKitchen(true)
            return
          }else{
            setErrorKitchen(false)
          }

          if(!selectedFaching){
            setErrorFaching(true)
            return
          }else{
            setErrorFaching(false)
          }

          if(!totalFloor){
            setErrorTotalFloor(true)
            return
          }else{
            setErrorTotalFloor(false)
          }

          if(!floorNumber){
            setErrorFloorNumber(true)
            return
          }else{
            setErrorFloorNumber(false)
          }

          if(!totalSize){
            setErrorTotalSize(true)
            return
          }else{
            setErrorTotalSize(false)
          }

          if(!totalUnit){
            setErrorTotalUnit(true)
            return
          }else{
            setErrorTotalUnit(false)
          }

          console.log("Price Mode: ",priceMode);
          if(priceMode){
             if(!price){
               setErrorPrice(true)
               return
             }else{
               setErrorPrice(false)
             }
          }

          if(images.length<1){
            setErrorImages(true)
            return
          }

        

         console.log("সবার নিচে");

         buyPosDataObject={
          uid:uId,
          category:selectedCategoriesBuy ,
          name: propertyName,
          procondition: selectedTypeProperty,//////////////////
          bed: selectedBedRoom,
          bath: selectedBathroom,
          balcony: selectedBalcony,
          drawing: selectedDrawing,
          dining: selectedDining,
          kitchen: selectedKitchen,
          size: totalSize,
          sellfrom: new Date(),
          totalFloor: totalFloor,
          floornumber: floorNumber,
          facing: selectedFaching,
          totalUnit: totalUnit,
          price: price,
          amenities: selectedAmenities,
          floorPlan: imageSrc,
          ytVideo: ytLink,
          image1:images[0] ? images[0]:"",
          image2: images[1] ?images[1]:"",
          image3: images[2]? images[2]:"",
          image4: images[3]? images[3]:"",
          image5: images[4]? images[4]:"",
          image6: images[5]? images[5]:"",
          image7: images[6]? images[6]:"",
          image8: images[7]? images[7]:"",
          image9: images[8]? images[8]:"",
          image10: images[9]? images[9]:"",
          image11: images[10]? images[10]:"",
          image12: images[11]? images[11]:"",
          location: duelLocation,
          locationfull: displayName,
          shortaddress: shortAddress,
          description: description,
          ownertype: selectedYouAres,
          geolat: lattitude,
          geolon: longitude,
          phone: newPhone,///////////////////////////
          wapp: newWapp,
          emi: selectedEmi,
         
          landType: "",
          area: "",
          measurement: "",
          roadSize: "",
        
         }

         console.log("buyPosDataObject: ",buyPosDataObject);
         
          axios.post(`http://154.26.135.41:3800/api/pro/newpost`,buyPosDataObject)
          axios.post(`${baseUrl}/api/pro/newpost`,buyPosDataObject)
          .then(res=>{
            console.log("Doneeee: ",res.data);
          })
        }



    }

    
    return (
        <div>
           <h1 className='text-2xl font-bold roboto'>Category</h1>
                <div className='flex gap-5 my-4 justify-center'>
                {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategories(index)}
                                className={`btn btn-outline   ${selectedCategoriesBuy===category?'bg-white border-blue-500':''}`}
                                >
                             <span className='flex items-center gap-2 text-black'> {selectedCategoriesBuy===category?<FaCheckCircle className='text-blue-600' />:<FaCircle className='text-[#DFDDDD]'/> }  {category} </span>
                            </button>
                        ))}
                </div>
                {
                    componentToRender
                }

               <div className=''>
                 <button className='btn btn-success w-full' onClick={handleSubmit}>Submit</button>
               </div>
        </div>
    );
};

export default BuyPost;