import React, {
  Children,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  // const baseUrl = "http://localhost:3000/api";
  // const baseUrl= 'http://154.26.135.41:3800'
  const baseUrl = "https://api.btolet.com/api";

  const [uId, setUId] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  ///uId from Local Storage start-------------------------------------------------
  useEffect(() => {
    const uid = localStorage.getItem("uId");
    if (uid) {
      setUId(uid);
    } else {
      setUId("nouid");
    }
  }, [uId]);
  ///uId from Local Storage start----------------------------------------------------------

  ////Current User from Database start------------------------------------------------------------------
  useEffect(() => {
    if (uId) {
      fetch(`${baseUrl}/uid`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ uid: uId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCurrentUser(data[0]);
            console.log("&&&&Current User: ", data[0]);
            setLoading(false);
            // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",data);
          }
          if (data.length < 1) {
            localStorage.removeItem("uId");
            localStorage.setItem("uId", "***");
          }
        });
    }
  }, [uId]);

  // console.log("Local Storage uid: ",uId);
  // console.log("Current User: ",currentUser);
  ////Current User from Database end--------------------------------------------------------------------

  /***
   * Scareen Touch Start
   */

  const [screenTouch, setScreenTouch] = useState(false);
  const handleScreenTouch = () => {
    // setScreenTouch(!screenTouch)
    // console.log("Screen Touch: ",screenTouch);
  };

  /**
   * Screen Touch end
   */

  /**
   *
   * Toast Message Start---------------------------------------------------------
   */
  const successfullMessage = (text) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const unSuccessFullMessage = (text) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };
  /**
   * Toast Message End--------------------------------------------------------------------
   */

  /**
   * Collect Lattitude Longitude Start----------------------------------------------------------------
   */

  ///After
  ///Lattitude: 22.81854080201318
  ///Longitude:  89.55184745782235

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [lattitude, setLattitude] = useState("0");
  const [longitude, setLongitude] = useState("0");

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    if (coordinates) {
      setLattitude(coordinates?.latitude);
      setLongitude(coordinates?.longitude);
    }
  }, [coordinates]);
  // console.log("Latitude(auth): ", lattitude);
  // console.log("Longitude(auth): ", longitude);

  /**
   * Collect Lattitude Logitude end--------------------------------------------------------------------
   *
   */

  /**
   * Area Start-----------------------------------------------------------------------------------
   */

  const [doubleLocation, setDoubleLocation] = useState("");
  let place = "";
  let displayName = "";
  const [area, setArea] = useState("");
  const [location_1, setLocation_1] = useState("");
  const [location_2, setLocation_2] = useState("");
  // let location_1='',location_2='';

  // useEffect(() => {
  //   if (lattitude && longitude) {
  //     fetch(
  //       `https://map.btolet.com/nominatim/reverse.php?lat=${lattitude}&lon=${longitude}&format=jsonv2&accept-language=bn`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setArea(data);
  //       });
  //   }
  // }, [lattitude, longitude]);

  //   console.log("Area--------------------------------:", area);

  // useEffect(() => {
  //   const { address } = area;
  //   displayName = area?.display_name;

  //   if (address?.suburb && address?.city) {
  //     // console.log("Execute-1");
  //     place = address?.suburb + "," + address?.city;
  //   } else if (address?.name && address?.city) {
  //     // console.log("Execute-2");
  //     place = address?.name + "," + address?.city;
  //   } else if (address?.stateDistrict && address?.name) {
  //     // console.log("Execute-3");
  //     place = address?.name + "," + address?.city;
  //   } else {
  //     // console.log("Execute-4");
  //     place = displayName;
  //   }

  //   if (place) {
  //     let loc_1 = place.split(",")[0];
  //     let loc_2 = place.split(",")[1];
  //     let doubleLocationn = `${location_1},${location_2}`;
  //     //   console.log("doubleLocation(Auh: ", doubleLocationn);
  //     setDoubleLocation(doubleLocationn);
  //     setLocation_1(loc_1);
  //     setLocation_2(loc_2);
  //   }
  // }, [area, lattitude, longitude, location_1, location_2]);

  // console.log("doubleLocation(Auh)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ",doubleLocation);
  // console.log("Location-1(Auh)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ",location_1);
  // console.log("Location-2(Auh)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ",location_2);

  /**
   * Area End---------------------------------------------------------------------------------------------------------------------
   */

  /**
   * Header Data start
   */

  const [profileBox, setProfileBox] = useState(false);
  const [leftNav, setLeftNav] = useState(false);

  /***
   * Header Data end
   */

  /**
   * Post Data Start------------------------------------------------------------------------------------------
   */

  ///Your details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wapp, setWapp] = useState("");

  ///Buy Categories
  const [selectedCategoriesBuy, setSelectedCategoriesBuy] = useState("House");

  ///Property Name
  const [propertyName, setPropertyName] = useState("");
  ///Rent Tk
  const [rentTkValue, setRentTkValue] = useState("");
  const [errorRentTkValue, setErrorRentTkValue] = useState(false);
  ///Short Address
  const [shortAddress, setShortAddress] = useState("");
  ///Description
  const [description, setDescription] = useState("");
  ////Floor No
  const [floorNumber, setFloorNumber] = useState("");
  const [errorFloorNumber, setErrorFloorNumber] = useState(false);
  ////Total Size/Room Size
  const [totalSize, setTotalSize] = useState("");
  const [errorTotalSize, setErrorTotalSize] = useState(false);
  ////Maintenance
  const [maintenance, setMaintenance] = useState("");
  ///Date
  let cd = new Date();
  cd = new window.Date(cd.setHours(cd.getHours() + 6));
  const [selectedDate, setSelectedDate] = useState(cd);
  ///Bathroom
  const [selectedBedRoom, setSelectedBedRoom] = useState("1");
  ///Bathroom
  const [selectedBathroom, setSelectedBathroom] = useState("1");
  ///Drawing
  const [selectedDrawing, setSelectedDrawing] = useState("1");
  ///Dining
  const [selectedDining, setSelectedDining] = useState("1");
  ///Balcony
  const [selectedBalcony, setSelectedBalcony] = useState("");
  const [errorBalcony, setErrorBalcony] = useState(false);
  ////Kitchen
  const [selectedKitchen, setSelectedKitchen] = useState("");
  const [errorKitchen, setErrorKitchen] = useState(false);
  ////faching
  const [selectedFaching, setSelectedFaching] = useState("");
  const [errorFaching, setErrorFaching] = useState(false);
  ///Garage Type
  const [selectedgarageType, setSelectedgarageType] = useState("Garage");
  ////facilities
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  ////
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  ////One Image
  const [imageSrc, setImageSrc] = useState("");
  ///MultiImage
  const [images, setImages] = useState([]);
  const [errorImages, setErrorImages] = useState(false);

  /////Property Type
  const [selectedTypeProperty, setSelectedTypeProperty] = useState("New");

  ////Total Floor
  const [totalFloor, setTotalFloor] = useState("");
  const [errorTotalFloor, setErrorTotalFloor] = useState(false);
  ///Total Unit
  const [totalUnit, setTotalUnit] = useState("");
  const [errorTotalUnit, setErrorTotalUnit] = useState(false);
  ///Price
  const [priceMode, setPriceMode] = useState(true);
  const [price, setPrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState(false);
  ///EMI
  const [selectedEmi, setSelectedEmi] = useState("Yes");
  ///Yt Link
  const [ytLink, setYtLink] = useState("");
  ///You Are
  const [selectedYouAres, setSelectedYouAres] = useState("Owner");
  ///Lp Type
  const [selectedLPTypeItems, setSelectedILPTypeItems] = useState([
    "Residential",
  ]);
  ///Area
  const [selectedAreas, setSelectedAreas] = useState("শতাংশ");
  ////Measurement
  const [measurement, setMeasurement] = useState("");
  const [errorMeasurement, setErrorMeasurement] = useState(false);
  ///RoadSize
  const [roadSize, setRoadSize] = useState("");
  const [errorRoadSize, setErrorRoadSize] = useState(false);

  ////Display Name
  // const [address,setAddress]=useState('')

  ////Country Code
  const [selectPhoneCountryCode, setSelectPhoneCountryCode] = useState("+880");
  const [selectWappCountryCode, setSelectWappCountryCode] = useState("+880");

  ////Rent Category
  const [errorRentCategory, setErrorRentCategory] = useState(false);

  const clearTextField = () => {
    setPropertyName("");
    setTotalSize("");
    setMaintenance("");
    setRentTkValue("");

    setTotalFloor("");
    setFloorNumber("");
    setTotalUnit("");
    setPrice("");
    setYtLink("");
    setRoadSize("");
    setMeasurement("");
    setImageSrc("");
    setImages([]);

    setShortAddress("");
    setDescription("");
    setName("");
    setPhone("");
    setWapp("");
  };
  /**
   * Post Data End------------------------------------------------------------------------------
   */

  const authInfo = {
    uId,
    currentUser,
    successfullMessage,
    unSuccessFullMessage,
    loading,

    ///Lattitude Longitude start
    lattitude,
    setLattitude,
    longitude,
    setLongitude,
    ///Lattitude Longitude end

    ///doubleLocation
    doubleLocation,
    setDoubleLocation,
    location_1,
    location_2,

    ////Buy Categories
    selectedCategoriesBuy,
    setSelectedCategoriesBuy,
    ///Post Data start
    propertyName,
    setPropertyName,
    //RentTk
    rentTkValue,
    setRentTkValue,
    ////Short Address
    shortAddress,
    setShortAddress,
    ///Description
    description,
    setDescription,
    ///Floor Number
    floorNumber,
    setFloorNumber,
    ////Total Size/Room Size
    totalSize,
    setTotalSize,
    ////Maintenance
    maintenance,
    setMaintenance,
    ///Date
    selectedDate,
    setSelectedDate,
    ///Bathroom
    selectedBathroom,
    setSelectedBathroom,
    //BedRoom
    selectedBedRoom,
    setSelectedBedRoom,
    ////Drawing
    selectedDrawing,
    setSelectedDrawing,
    ///Dining
    selectedDining,
    setSelectedDining,
    ////Balcony
    selectedBalcony,
    setSelectedBalcony,
    ////Kitchen
    selectedKitchen,
    setSelectedKitchen,
    ///Faching
    selectedFaching,
    setSelectedFaching,
    ////Garage Type
    selectedgarageType,
    setSelectedgarageType,
    ///Facilities
    selectedFacilities,
    setSelectedFacilities,
    ////One Images
    imageSrc,
    setImageSrc,
    ///MultiImages
    images,
    setImages,
    /////Your Details
    name,
    setName,
    phone,
    setPhone,
    wapp,
    setWapp,
    ///Property Type
    selectedTypeProperty,
    setSelectedTypeProperty,
    ////Total Floor
    totalFloor,
    setTotalFloor,
    ///Total Unit
    totalUnit,
    setTotalUnit,
    ///Price
    priceMode,
    setPriceMode,
    price,
    setPrice,
    ///EMI
    selectedEmi,
    setSelectedEmi,
    ////Amenities
    selectedAmenities,
    setSelectedAmenities,
    ////Yt Link
    ytLink,
    setYtLink,
    ///You Are
    selectedYouAres,
    setSelectedYouAres,
    ///LpType
    selectedLPTypeItems,
    setSelectedILPTypeItems,
    ///Area
    selectedAreas,
    setSelectedAreas,
    ///Measurement
    measurement,
    setMeasurement,
    ///RoadSize
    roadSize,
    setRoadSize,
    // ////Address
    // address,setAddress,

    ///displayName
    displayName,

    ///Country Code
    ////Country Code
    selectPhoneCountryCode,
    setSelectPhoneCountryCode,
    selectWappCountryCode,
    setSelectWappCountryCode,

    ////Error
    errorBalcony,
    setErrorBalcony,
    errorKitchen,
    setErrorKitchen,
    errorFaching,
    setErrorFaching,
    errorTotalFloor,
    setErrorTotalFloor,
    errorFloorNumber,
    setErrorFloorNumber,
    errorTotalSize,
    setErrorTotalSize,
    errorTotalUnit,
    setErrorTotalUnit,
    errorImages,
    setErrorImages,
    errorMeasurement,
    setErrorMeasurement,
    errorRoadSize,
    setErrorRoadSize,
    errorPrice,
    setErrorPrice,
    errorRentTkValue,
    setErrorRentTkValue,
    errorRentCategory,
    setErrorRentCategory,

    //baseurl
    baseUrl,

    ///Clear Text Field
    clearTextField,

    ///Screen Touch
    profileBox,
    setProfileBox,
    leftNav,
    setLeftNav,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
