import React, { Children, createContext, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext=createContext("")
const AuthProvider = ({children}) => {

    const [uId,setUId]=useState("")
    const [currentUser,setCurrentUser]=useState("")

    ///uId from Local Storage start
    useEffect(()=>{
        const uid=localStorage.getItem('uId')
        if(uid){
            console.log("Local Storage uid: ",uid);
            setUId(uid)
        }else{
            setUId('nouid')
        }
      
    },[uId])
    ///uId from Local Storage start


   

 
    ////Current User from Database start
    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/uid`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({uid: uId })
        })
        .then(res=>res.json())
        .then(data=>{
           if(data){
            setCurrentUser(data[0]);
           }
        })        
    },[uId])

    // console.log("Current User: ",currentUser);
    ////Current User from Database end




    ///Toast Message start
    const successfullMessage=(text)=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: text,
            showConfirmButton: false,
            timer: 1500
          });
    }


    const unSuccessFullMessage=(text)=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: text,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    ///Toast Message End


    //////Lattitude and Longitude start
    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setCoordinates({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }, []);

    let lattitude=coordinates.latitude
    let longitude=coordinates.longitude
    // console.log("Lattitude: ",lattitude);
    // console.log("Longitude: ",longitude);
    //////Lattitude and Longitude end



    //////Post Data start

    ///Your details
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [wapp,setWapp]=useState('')


    ///Buy Categories
    const [selectedCategoriesBuy, setSelectedCategoriesBuy] = useState("House");

    ///Property Name
    const [propertyName, setPropertyName] = useState('');
    ///Rent Tk 
    const [rentTkValue,setRentTkValue]=useState('')
    ///Short Address
    const [shortAddress,setShortAddress]=useState('')
    ///Description
    const [description,setDescription]=useState('')
    ////Floor No
    const [floorNumber,setFloorNumber]=useState('')
    const [errorFloorNumber,setErrorFloorNumber]=useState(false)
    ////Total Size/Room Size
    const [totalSize,setTotalSize]=useState('')
    const [errorTotalSize,setErrorTotalSize]=useState(false)
    ////Maintenance
    const [maintenance,setMaintenance]=useState('')
    ///Date
    const [selectedDate,setSelectedDate]=useState('')
    ///Bathroom
    const [selectedBedRoom,setSelectedBedRoom]=useState("1")
    ///Bathroom
    const [selectedBathroom,setSelectedBathroom]=useState("1")
    ///Drawing
    const [selectedDrawing,setSelectedDrawing]=useState('1')
    ///Dining
    const [selectedDining,setSelectedDining]=useState("1")
    ///Balcony
    const [selectedBalcony, setSelectedBalcony] = useState('');
    const [errorBalcony,setErrorBalcony]=useState(false)
    ////Kitchen
    const [selectedKitchen, setSelectedKitchen] = useState('');
    const [errorKitchen,setErrorKitchen]=useState(false)
    ////faching
    const [selectedFaching,setSelectedFaching]=useState('');
    const [errorFaching,setErrorFaching]=useState(false)
    ///Garage Type
    const [selectedgarageType, setSelectedgarageType] = useState('Garage');
    ////facilities
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    ////
    const [selectedAmenities,setSelectedAmenities]=useState([])

    ////One Image
    const [imageSrc, setImageSrc] = useState('');
    ///MultiImage
    const [images, setImages] = useState([]);
    const [errorImages,setErrorImages]=useState(false)


    /////Property Type
    const [selectedTypeProperty, setSelectedTypeProperty] = useState("New");
 

    


    ////Total Floor
    const [totalFloor,setTotalFloor]=useState('')
    const [errorTotalFloor,setErrorTotalFloor]=useState(false)
    ///Total Unit
    const [totalUnit,setTotalUnit]=useState('')
    const [errorTotalUnit,setErrorTotalUnit]=useState(false)
    ///Price
    const [price,setPrice]=useState(0)
    const [errorPrice,setErrorPrice]=useState(false)
    ///EMI
    const [selectedEmi, setSelectedEmi] = useState("Yes");
    ///Yt Link
    const [ytLink,setYtLink]=useState("")
    ///You Are
    const [selectedYouAres,setSelectedYouAres]=useState('Owner')
    ///Lp Type
    const [selectedLPTypeItems, setSelectedILPTypeItems] = useState(['Residential']);
    ///Area
    const [selectedAreas, setSelectedAreas] = useState('শতাংশ');
    ////Measurement
    const [measurement,setMeasurement]=useState('')
    const [errorMeasurement,setErrorMeasurement]=useState(false)
    ///RoadSize
    const [roadSize,setRoadSize]=useState('')
    const [errorRoadSize,setErrorRoadSize]=useState(false)
    ////Address
    const [address,setAddress]=useState('')


    ////Country Code
    const [selectPhoneCountryCode,setSelectPhoneCountryCode]=useState('+880')
    const [selectWappCountryCode,setSelectWappCountryCode]=useState('+880')


    


    //////Post Data end

    const authInfo={
        uId,
        currentUser,
        successfullMessage,


        ///Lattitude Longitude start
        lattitude,
        longitude,
        ///Lattitude Longitude end

        ////Buy Categories
        selectedCategoriesBuy,setSelectedCategoriesBuy,
        ///Post Data start
        propertyName,setPropertyName,
        //RentTk
        rentTkValue,setRentTkValue,
        ////Short Address
        shortAddress,setShortAddress,
        ///Description
        description,setDescription,
        ///Floor Number
        floorNumber,setFloorNumber,
        ////Total Size/Room Size
        totalSize,setTotalSize,
        ////Maintenance
        maintenance,setMaintenance,
        ///Date
        selectedDate,setSelectedDate,
        ///Bathroom
        selectedBathroom,setSelectedBathroom,
        //BedRoom
        selectedBedRoom,setSelectedBedRoom,
        ////Drawing
        selectedDrawing,setSelectedDrawing,
        ///Dining
        selectedDining,setSelectedDining,
        ////Balcony
        selectedBalcony,setSelectedBalcony,
        ////Kitchen
        selectedKitchen,setSelectedKitchen,
        ///Faching
        selectedFaching,setSelectedFaching,
        ////Garage Type
        selectedgarageType,setSelectedgarageType,
        ///Facilities
        selectedFacilities,setSelectedFacilities,
        ////One Images
        imageSrc,setImageSrc,
        ///MultiImages
        images, setImages,
        /////Your Details
        name,setName,phone,setPhone,wapp,setWapp,
        ///Property Type
        selectedTypeProperty,setSelectedTypeProperty,
        ////Total Floor
        totalFloor,setTotalFloor,
        ///Total Unit
        totalUnit,setTotalUnit,
        ///Price
        price,setPrice,
        ///EMI
        selectedEmi,setSelectedEmi,
        ////Amenities
        selectedAmenities,setSelectedAmenities,
        ////Yt Link
        ytLink,setYtLink,
        ///You Are
        selectedYouAres,setSelectedYouAres,
        ///LpType
        selectedLPTypeItems, setSelectedILPTypeItems,
        ///Area
        selectedAreas, setSelectedAreas,
        ///Measurement
        measurement,setMeasurement,
        ///RoadSize
        roadSize,setRoadSize,
        ////Address
        address,setAddress,

        ///Country Code
          ////Country Code
        selectPhoneCountryCode,setSelectPhoneCountryCode,selectWappCountryCode,setSelectWappCountryCode,



        ////Error
        errorBalcony,setErrorBalcony,errorKitchen,setErrorKitchen,errorFaching,setErrorFaching,errorTotalFloor,setErrorTotalFloor,errorFloorNumber,setErrorFloorNumber,
        errorTotalSize,setErrorTotalSize,errorTotalUnit,setErrorTotalUnit,errorImages,setErrorImages,errorMeasurement,setErrorMeasurement,errorRoadSize,setErrorRoadSize,
        errorPrice,setErrorPrice,
        


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;