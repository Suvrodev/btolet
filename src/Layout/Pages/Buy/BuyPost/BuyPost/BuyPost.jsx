import React, { useContext, useState } from 'react';
import HomeFlat from '../HomeFlat/HomeFlat';
import Land from '../Land/Land';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { FaCheckCircle, FaCircle, FaGoogle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BuyPost = () => {
    
   const {selectedCategoriesBuy,setSelectedCategoriesBuy,displayName,baseUrl,uId,doubleLocation,successfullMessage,  lattitude,longitude,clearTextField}=useContext(AuthContext)

   

   console.log("Double Location:",doubleLocation);
    
    const categories=["House","Flat","Land","Plot"]
    // const [selectedCategories, setSelectedCategories] = useState("House");

    const handleCategories = (index) => {
      clearTextField()
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
      
       }=useContext(AuthContext)



 
    

   
    const handleSubmit=()=>{
      console.log("Click Button");
      const newName= name?name:currentUser?.name
      const newPhone=`${selectPhoneCountryCode}`+ `${phone?phone:currentUser?.phone}`
      const newWapp= `${selectWappCountryCode}` + `${wapp?wapp:currentUser?.wapp}`

     

        console.log("Selected Buy Category: ",selectedCategoriesBuy);
        console.log("Property Name: ",propertyName);
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

         // console.log("PriceMode: ",priceMode);
        console.log("Price ",price);
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

        console.log("LP Type: ",selectedLPTypeItems);
        console.log("Area: ",selectedAreas);
        console.log("Measurement: ",measurement);
        console.log("Road Size: ",roadSize);
        // console.log("Address: ",address);

        // console.log("Phone Country Code: ",selectPhoneCountryCode);
        // console.log("Wapp Country Code: ",selectWappCountryCode);
        console.log("Double Location: ",doubleLocation);
        console.log("Price Mode: ",priceMode);


      
        let buyPosDataObject={}

        ////For House and Flat
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
        //  const img1=images[0]
        //  console.log("img1: ",img1);

         buyPosDataObject={
          uid:uId,
          category:selectedCategoriesBuy?selectedCategoriesBuy:"" ,
          name: propertyName?propertyName:"",
          procondition: selectedTypeProperty,
          bed: selectedBedRoom?selectedBedRoom:"",
          bath: selectedBathroom?selectedBathroom:"",
          balcony: selectedBalcony?selectedBalcony:"",
          drawing: selectedDrawing?selectedDrawing:"",
          dining: selectedDining?selectedDining:"",
          kitchen: selectedKitchen?selectedKitchen:"",
          size: totalSize?totalSize:"",
          sellfrom: selectedDate?selectedDate:new Date(),
          totalFloor: totalFloor?totalFloor:"",
          floornumber: floorNumber?floorNumber:"",
          facing: selectedFaching?selectedFaching:"",
          total_unit: totalUnit?totalUnit:"",
          price: priceMode?price:0,
          amenities: selectedAmenities?selectedAmenities:"",
          floor_plan: imageSrc?imageSrc:"",
          yt_video: ytLink?ytLink:"",
          image1:images[0] ?images[0]:"",
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
          location: doubleLocation?doubleLocation:"",
          locationfull: displayName?displayName:"",
          shortaddress: shortAddress?shortAddress:"",
          description: description?description:"",
          ownertype: selectedYouAres?selectedYouAres:"",
          geolat: lattitude?lattitude:"",
          geolon: longitude?longitude:"",
          phone: newPhone?newPhone:"",
          wapp: newWapp?newWapp:"",
          emi: selectedEmi?selectedEmi:"",
          land_type: [],
          area: "",
          measurement: "",
          road_size: ""
        
         }

         console.log("buyPosDataObject (House Flat): ",buyPosDataObject);
         
          // axios.post(`http://154.26.135.41:3800/api/pro/newpost`,buyPosDataObject)
          axios.post(`${baseUrl}/api/pro/newpost`,buyPosDataObject)
          .then(res=>{
            console.log(`Post done(Home-Flat): `,res.data);
            if(res.data){
              successfullMessage("Post Done for Home-Flat")
            }
          })
        }





        ////For Land and Plot
        if(selectedCategoriesBuy=='Land' || selectedCategoriesBuy=='Plot'){
          console.log("This is Land or Plot");

          if(!measurement){
            setErrorMeasurement(true)
            return
          }else{
            setErrorMeasurement(false)
          }

          if(!roadSize){
            setErrorRoadSize(true)
            return
          }else{
            setErrorRoadSize(false)
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

          console.log("Land নিচে");

          buyPosDataObject={
            uid:uId,
            category:selectedCategoriesBuy?selectedCategoriesBuy:"" ,
            name: propertyName?propertyName:"",
            sellfrom: selectedDate?selectedDate:new Date(),
            price: priceMode?price:0,
            amenities: selectedAmenities?selectedAmenities:"",
            yt_video: ytLink?ytLink:"",
            image1:images[0] ?images[0]:"",
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
            location: doubleLocation?doubleLocation:"",
            locationfull: displayName?displayName:"",
            shortaddress: shortAddress?shortAddress:"",
            description: description?description:"",
            ownertype: selectedYouAres?selectedYouAres:"",
            geolat: lattitude?lattitude:"",
            geolon: longitude?longitude:"",
            phone: newPhone?newPhone:"",
            wapp: newWapp?newWapp:"",
           
            land_type: selectedLPTypeItems?selectedLPTypeItems:[],
            area: selectedAreas?selectedAreas:"",
            measurement: measurement?measurement:"",
            road_size: roadSize?roadSize:"",

            procondition: "",
            bed: "",
            bath:"",
            balcony: "",
            drawing: "",
            dining: "",
            kitchen: "",
            size:"",
            emi: "",
            totalFloor:"",
            floornumber: "",
            facing: "",
            total_unit:"",
            floor_plan:""
           }
           console.log("buyPosDataObject (Land-Plot): ",buyPosDataObject);
           axios.post(`${baseUrl}/api/pro/newpost`,buyPosDataObject)
           .then(res=>{
             console.log(`Doneeee:(Land-Plot)`,res.data);
             if(res.data){
              successfullMessage("Post Done Land-Plot")
             }
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