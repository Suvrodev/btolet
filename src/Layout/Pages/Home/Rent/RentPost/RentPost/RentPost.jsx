import React, { useContext, useState } from "react";
import Date from "../../../../PostContent/Date/Date";
import ShortAddress from "../../../../PostContent/ShortAddress/ShortAddress";
import BedRooms from "../../../../PostContent/BedRoom/BedRooms";
import BathRoom from "../../../../PostContent/Bathroom/BathRoom";
import Balcony from "../../../../PostContent/Balcony/Balcony";
import Kitchen from "../../../../PostContent/Kitchen/Kitchen";
import Drawing from "../../../../PostContent/Drawing/Drawing";
import Dining from "../../../../PostContent/Dining/Dining";
import FloorNumber from "../../../../PostContent/FloorNumber/FloorNumber";
import Fatching from "../../../../PostContent/Fatching/Fatching";

import TotalSize from "../../../../PostContent/TotalSize/TotalSize";
import YourDetails from "../../../../PostContent/Your Details/YourDetails";
import Maintenence from "../../../../PostContent/Maintenence/Maintenence";
import GarageType from "../../../../PostContent/GarageType/GarageType";
import Renttk from "../../../../PostContent/Rent/Renttk";
import Description from "../../../../PostContent/Description/Description";
import PropertyName from "../../../../PostContent/PropertyName/PropertyName";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import Facilities from "../../../../PostContent/Facilities/Facilities";
import OneImagePage from "../../../../PostContent/OneImagePage/OneImagePage";
import MultiImagePage from "../../../../PostContent/MultiImagePAge/MultiImagePage";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import axios from "axios";

const RentPost = () => {
  const {
    currentUser,
    displayName,
    baseUrl,
    uId,
    doubleLocation,
    successfullMessage,
    lattitude,
    longitude,
  } = useContext(AuthContext);

  const rentCategories = [
    "Family",
    "Bachelor",
    "Male Seat",
    "Female Seat",
    "Sub let",
    "Hostel",
    "Shop",
    "Office",
    "Only Garage",
  ];

  const [selectedRentCategory, setSelectedRentCategory] = useState([]);

  const handleButtonClick = (category) => {
    setRentTkValue("")
    if (selectedRentCategory.includes(category)) {
      setSelectedRentCategory(
        selectedRentCategory.filter((item) => item !== category)
      );
    } else {
      setSelectedRentCategory([...selectedRentCategory, category]);
    }
  };

  console.log("Selected Category: ", selectedRentCategory);

  const checkShop = selectedRentCategory.find((s) => s == "Shop");
  const checkOffice = selectedRentCategory.find((s) => s == "Office");
  const checkGarage = selectedRentCategory.find((s) => s == "Only Garage");

  // console.log("Check Office: ", checkOffice);
  // console.log("Check Shop: ", checkShop);
  // console.log("Check Garage: ", checkGarage);

  let shape;

  ///Only Garage Exist
  if (selectedRentCategory.includes("Only Garage")) {
    console.log("only Garage ache");
    shape = (
      <div className="grid grid-cols-1  gap-10 ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Rent From</h1>
            <Date></Date>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Garage Type</h1>
            <GarageType></GarageType>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[50%]">
            <h1>Garage Rent*</h1>
            <Renttk></Renttk>
          </div>

          <div className="w-[50%]">
            <h1>Short Address</h1>
            <ShortAddress></ShortAddress>
          </div>
        </div>

        <div>
          <h1>Description</h1>
          <Description></Description>
        </div>
        <div>
          <h1>Select Images*</h1>
          <MultiImagePage></MultiImagePage>
        </div>

        <div className="bg-purple-500">
          <YourDetails ur={false}></YourDetails>
        </div>
      </div>
    );
  }

  /////Only Garage not Exists but Office exists
  else if (
    !selectedRentCategory.includes("Only Garage") &&
    selectedRentCategory.includes("Office")
  ) {
    shape = (
      <div className="grid grid-cols-1  gap-10 ">
        {/* Bedroom BathRoom Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Room*</h1>
            <BedRooms></BedRooms>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Bathroom*</h1>
            <BathRoom></BathRoom>
          </div>
        </div>
        {/* Bedroom BathRoom End */}

        {/* Floor Facing Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Floor No</h1>
            <FloorNumber></FloorNumber>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Faching</h1>
            <Fatching></Fatching>
          </div>
        </div>
        {/* Floor Facing End */}

        {/* Room Size Rent from Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Size</h1>
            <TotalSize></TotalSize>
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="my-2">Rent From</h1>
            <Date></Date>
          </div>
        </div>
        {/* Room Size Rent from End */}

        {/* Maintenance Rent Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Maintencance(Monthly)</h1>
            <Maintenence></Maintenence>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Rent*</h1>
            <Renttk></Renttk>
          </div>
        </div>
        {/* Maintenance Rent End*/}

        {/* Facilities start*/}
        <div>
          <h1>Facilities</h1>
          <Facilities></Facilities>
        </div>
        {/* Facilities  end*/}

        {/* Multi Images Start */}
        <div>
          <h1>Select Images*</h1>
          <MultiImagePage></MultiImagePage>
        </div>
        {/* Multi Images End */}

        {/* Short Address Start */}
        <div>
          <h1>Short Address</h1>
          <ShortAddress></ShortAddress>
        </div>
        {/* Short Address End */}

        {/* Details start */}
        <div>
          <h1>Description</h1>
          <Description></Description>
        </div>
        {/* Details end */}

        <div className="">
          <YourDetails></YourDetails>
        </div>
      </div>
    );
  }

  /////Only Garage and Office not Exists but Shop exists
  else if (
    !selectedRentCategory.includes("Only Garage") &&
    !selectedRentCategory.includes("Office") &&
    selectedRentCategory.includes("Shop")
  ) {
    shape = (
      <div className="grid grid-cols-1  gap-10 ">
        {/* Floor Facing Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Floor No</h1>
            <FloorNumber></FloorNumber>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Faching</h1>
            <Fatching></Fatching>
          </div>
        </div>
        {/* Floor Facing End */}

        {/* Room Size Rent from Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Size</h1>
            <TotalSize></TotalSize>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Rent From</h1>
            <Date></Date>
          </div>
        </div>
        {/* Room Size Rent from End */}

        {/* Maintenance Rent Start */}
        <div className="w-full">
          <div className="w-full]">
            <h1>Rent*</h1>
            <Renttk></Renttk>
          </div>
        </div>
        {/* Maintenance Rent End*/}

        {/* MultiImage Start */}
        <div>
          <h1>Select Images*</h1>
          <MultiImagePage></MultiImagePage>
        </div>
        {/* MultiImage End */}

        {/* Description Start */}
        <div>
          <h1>Description</h1>
          <Description></Description>
        </div>
        {/* Description End */}

        {/* Short Address Start */}
        <div>
          <h1>Short Address</h1>
          <ShortAddress></ShortAddress>
        </div>
        {/* Short Address End */}

        <div className="">
          <YourDetails></YourDetails>
        </div>
      </div>
    );
  }

  /////For All
  else {
    shape = (
      <div className="grid grid-cols-1  gap-10">
        {/* Bedroom BathRoom Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Bedroom*</h1>
            <BedRooms></BedRooms>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Bathroom*</h1>
            <BathRoom></BathRoom>
          </div>
        </div>
        {/* Bedroom BathRoom End */}

        {/* Balcony Kitchen Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Balcony</h1>
            <Balcony></Balcony>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Kitchen</h1>
            <Kitchen></Kitchen>
          </div>
        </div>
        {/* Balcony Kitchen Start */}

        {/* Drawing Dining Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Drawing</h1>
            <Drawing></Drawing>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Dining</h1>
            <Dining></Dining>
          </div>
        </div>
        {/* Drawing Dining End */}
        {/* Floor Facing Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Floor No</h1>
            <FloorNumber></FloorNumber>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Facing</h1>
            <Fatching></Fatching>
          </div>
        </div>
        {/* Floor Facing End */}

        {/* Room Size Rent from Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Room Size</h1>
            <TotalSize></TotalSize>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Rent From</h1>
            <Date></Date>
          </div>
        </div>
        {/* Room Size Rent from End */}

        {/* Maintenance Rent Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%]">
            <h1>Maintenance</h1>
            <Maintenence></Maintenence>
          </div>
          <div className="w-full md:w-[50%]">
            <h1>Rent*</h1>
            <Renttk></Renttk>
          </div>
        </div>
        {/* Maintenance Rent End*/}

        {/* Facilities Start */}
        <div className="flex flex-col md:flex-row gap-10">
          <h1>Facilities</h1>
          <Facilities></Facilities>
        </div>
        {/* Facilities End*/}

        {/*One Image start */}
        <div className="flex flex-col md:flex-row gap-10">
          <h1>Select Image</h1>
          {/* <OneImagePage></OneImagePage> */}
          <MultiImagePage></MultiImagePage>
        </div>
        {/* One Image End*/}

        {/*Description start */}
        <div className="">
          <h1>Description</h1>
          <Description></Description>
        </div>
        {/*Description End*/}

        {/* Short Address start */}
        <div>
          <h1>Short Address</h1>
          <ShortAddress></ShortAddress>
        </div>
        {/* Short Address end */}

        <div className="bg-purple-500">
          <YourDetails></YourDetails>
        </div>
      </div>
    );
  }

  /**
   * Function work Start
   */

  const {
    propertyName,
    selectedTypeProperty,
    selectedBedRoom,
    selectedBathroom,
    selectedDrawing,
    selectedDining,
    selectedBalcony,
    selectedKitchen,
    selectedFaching,
    selectedDate,
    totalFloor,
    floorNumber,
    totalSize,
    totalUnit,
    price,
    selectedEmi,
    selectedAmenities,
    ytLink,
    imageSrc,
    images,
    name,
    phone,
    wapp,
    shortAddress,
    description,
    selectedYouAres,
    selectedLPTypeItems,
    selectedAreas,
    measurement,
    roadSize,
    address,
    selectPhoneCountryCode,
    selectWappCountryCode,
    priceMode,
    rentTkValue,
    setRentTkValue,
    maintenance,
    setMaintenance,
    selectedFacilities,
    setErrorRentTkValue,
    errorRentCategory,
    setErrorRentCategory,
    selectedgarageType,
    setErrorImages,
  } = useContext(AuthContext);

  const handleRentPost = () => {
    const newName = name ? name : currentUser?.name;
    const newPhone =
      `${selectPhoneCountryCode}` + `${phone ? phone : currentUser?.phone}`;
    const newWapp =
      `${selectWappCountryCode}` + `${wapp ? wapp : currentUser?.wapp}`;

    if (selectedRentCategory.length == 0) {
      console.log("1");
      setErrorRentCategory(true);
      return;
    } else {
      setErrorRentCategory(false);
    }
    if (!rentTkValue) {
      console.log("2");
      setErrorRentTkValue(true);
      return;
    } else {
      setErrorRentTkValue(false);
    }
    if (images.length < 1) {
      console.log("3");
      setErrorImages(true);
      return;
    } else {
      setErrorImages(false);
    }

    console.log(
      "Maintaind All Criteria++++++++++++++++++++++++++++++++++++++++++++++"
    );

    let rentPosDataObject = {};

    ////for Only Garage
    if (selectedRentCategory.includes("Only Garage")) {
      console.log(
        "Only Garage---------------------------------------------------------------------------"
      );
      console.log("Property Name: ", propertyName);
      console.log("Category: ", selectedRentCategory);
      console.log("Date: ", selectedDate);
      console.log("Garage Type: ", selectedgarageType);
      console.log("Garage Rent: ", rentTkValue);
      console.log("Short Address:", shortAddress);
      console.log("description: ", description);
      console.log("Name: ", newName);
      console.log("Phone: ", newPhone);
      console.log("wapp: ", newWapp);

      rentPosDataObject = {
        uid: 193,
        geolat: lattitude ? lattitude : "",
        geolon: longitude ? longitude : "",
        location: doubleLocation ? doubleLocation : "",
        locationfull: displayName ? displayName : "",

        phone: newPhone ? newPhone : "",
        wapp: newWapp ? newWapp : "",

        propertyname: propertyName ? propertyName : "",
        category: selectedRentCategory ? selectedRentCategory : [],
        rentfrom: selectedDate ? selectedDate : "Today",
        rent: rentTkValue ? rentTkValue : "",
        garagetype: selectedgarageType ? selectedgarageType : "",
        image1: images[0] ? images[0] : "",
        image2: images[1] ? images[1] : "",
        image3: images[2] ? images[2] : "",
        image4: images[3] ? images[3] : "",
        image5: images[4] ? images[4] : "",
        image6: images[5] ? images[5] : "",
        image7: images[6] ? images[6] : "",
        image8: images[7] ? images[7] : "",
        image9: images[8] ? images[8] : "",
        image10: images[9] ? images[9] : "",
        image11: images[10] ? images[10] : "",
        image12: images[11] ? images[11] : "",
        description: description ? description : "",
        shortaddress: shortAddress ? shortAddress : "",

        bed: "",
        bath: "",
        balcony: "",
        drawing: "",
        dining: "",
        kitchen: "",
        floornumber: "",
        facing: "",
        roomsize: "",
        mentenance: "",
        fasalitis: "",
      };

      console.log("Only Garage Object: ", rentPosDataObject);
      axios
        .post(`${baseUrl}/api/tolet/newpost`, rentPosDataObject)
        .then((res) => {
          console.log("Garage Post Response: ", res.data);
          if(res.data){
            successfullMessage("Only Garage Post Done")
          }
        });
    }

    /////Only Garage not Exists but Office exists
    else if (
      !selectedRentCategory.includes("Only Garage") &&
      selectedRentCategory.includes("Office")
    ) {
      console.log(
        "Only Garage Not Exist But Office---------------------------------------------------------------------------"
      );
      console.log("Property Name: ", propertyName);
      console.log("Category: ", selectedRentCategory);
      console.log("Bedroom: ", selectedBedRoom);
      console.log("Bathroom: ", selectedBathroom);
      console.log("Floor No: ", floorNumber);
      console.log("faching: ", selectedFaching);
      console.log("Size: ", totalSize);
      console.log("Maintenance: ", maintenance);
      console.log("Date: ", selectedDate);
      console.log("Rent: ", rentTkValue);
      console.log("Facilities: ", selectedFacilities);
      console.log("Short Address:", shortAddress);
      console.log("description: ", description);
      console.log("Name: ", newName);
      console.log("Phone: ", newPhone);
      console.log("wapp: ", newWapp);

      rentPosDataObject = {
        uid: uId,
        geolat: lattitude ? lattitude : "",
        geolon: longitude ? longitude : "",
        location: doubleLocation ? doubleLocation : "",
        locationfull: displayName ? displayName : "",

        phone: newPhone ? newPhone : "",
        wapp: newWapp ? newWapp : "",

        propertyname: propertyName ? propertyName : "",
        category: selectedRentCategory ? selectedRentCategory : [],
        rentfrom: selectedDate ? selectedDate : "Today",
        rent: rentTkValue ? rentTkValue : "",
        garagetype: "",
        image1: images[0] ? images[0] : "",
        image2: images[1] ? images[1] : "",
        image3: images[2] ? images[2] : "",
        image4: images[3] ? images[3] : "",
        image5: images[4] ? images[4] : "",
        image6: images[5] ? images[5] : "",
        image7: images[6] ? images[6] : "",
        image8: images[7] ? images[7] : "",
        image9: images[8] ? images[8] : "",
        image10: images[9] ? images[9] : "",
        image11: images[10] ? images[10] : "",
        image12: images[11] ? images[11] : "",
        description: description ? description : "",
        shortaddress: shortAddress ? shortAddress : "",
        bed: selectedBedRoom ? selectedBedRoom : "",
        bath: selectedBathroom ? selectedBathroom : "",
        balcony: "",
        drawing: "",
        dining: "",
        kitchen: "",
        floornumber: floorNumber ? floorNumber : "",
        facing: selectedFaching ? selectedFaching : "",
        roomsize: totalSize ? totalSize : "",
        mentenance: maintenance ? maintenance : "",
        fasalitis: selectedFacilities ? selectedFacilities : [],
      };

      console.log("Only Garage Not but Office Exists: ", rentPosDataObject);
      axios
        .post(`${baseUrl}/api/tolet/newpost`, rentPosDataObject)
        .then((res) => {
          console.log("Garage not But Office exist Post Response: ", res.data);
          if(res.data){
            successfullMessage("Office Post done")
          }
        });
    }

    /////Only Garage and Office not Exists but Shop exists start
   else if (
      !selectedRentCategory.includes("Only Garage") &&
      !selectedRentCategory.includes("Office") &&
      selectedRentCategory.includes("Shop")
    ) {
      console.log(
        "Only Garage and Office not Exists but Shop exists-----------------------------------"
      );

      console.log("Property Name: ", propertyName);
      console.log("Category: ", selectedRentCategory);
      console.log("Floor No: ", floorNumber);
      console.log("faching: ", selectedFaching);
      console.log("Size: ", totalSize);
      console.log("Date: ", selectedDate);
      console.log("Rent: ", rentTkValue);
      console.log("Short Address:", shortAddress);
      console.log("description: ", description);
      console.log("Name: ", newName);
      console.log("Phone: ", newPhone);
      console.log("wapp: ", newWapp);


      rentPosDataObject = {
        uid: uId,
        geolat: lattitude ? lattitude : "",
        geolon: longitude ? longitude : "",
        location: doubleLocation ? doubleLocation : "",
        locationfull: displayName ? displayName : "",
  
        phone: newPhone ? newPhone : "",
        wapp: newWapp ? newWapp : "",
  
        propertyname: propertyName ? propertyName : "",
        category: selectedRentCategory ? selectedRentCategory : [],
        rentfrom: selectedDate ? selectedDate : "Today",
        rent: rentTkValue ? rentTkValue : "",
        garagetype: "",
        image1: images[0] ? images[0] : "",
        image2: images[1] ? images[1] : "",
        image3: images[2] ? images[2] : "",
        image4: images[3] ? images[3] : "",
        image5: images[4] ? images[4] : "",
        image6: images[5] ? images[5] : "",
        image7: images[6] ? images[6] : "",
        image8: images[7] ? images[7] : "",
        image9: images[8] ? images[8] : "",
        image10: images[9] ? images[9] : "",
        image11: images[10] ? images[10] : "",
        image12: images[11] ? images[11] : "",
        description: description?description: "",
        shortaddress:  shortAddress?shortAddress:"",
        bed:  "",
        bath: "",
        balcony: "",
        drawing: "",
        dining: "",
        kitchen: "",
        floornumber: floorNumber ? floorNumber : "",
        facing: selectedFaching ? selectedFaching : "",
        roomsize: totalSize ? totalSize : "",
        mentenance:  "",
        fasalitis:  [],
      };
  
      console.log("Only Garage and Office not Exists but Shop exists object ", rentPosDataObject);
      axios
        .post(`${baseUrl}/api/tolet/newpost`, rentPosDataObject)
        .then((res) => {
          console.log("Only Garage and Office not Exists but Shop exists object: ", res.data);
          if(res.data){
            successfullMessage("Shop Post Done") 
          }
        });
    }
     /////Only Garage and Office not Exists but Shop exists end


     ///For All
     else{
      console.log("For All---------------------------------------------");
      console.log("Property Name: ", propertyName);
      console.log("Category: ", selectedRentCategory);
      console.log("Bathroom: ",selectedBathroom);
      console.log("Bedroom: ",selectedBedRoom);
      console.log("Balcony: ",selectedBalcony);
      console.log("Kitchen: ",selectedKitchen);
      console.log("Drawing: ",selectedDrawing);
      console.log("Dining: ",selectedDining);
      console.log("Floor No: ", floorNumber);
      console.log("faching: ", selectedFaching);
      console.log("Size: ", totalSize);
      console.log("Date: ", selectedDate);
      console.log("Maintenance: ",maintenance);
      console.log("Rent: ", rentTkValue);
      console.log("Facilities: ",Facilities);
      console.log("Short Address:", shortAddress);
      console.log("description: ", description);
      console.log("Name: ", newName);
      console.log("Phone: ", newPhone);
      console.log("wapp: ", newWapp);

      rentPosDataObject = {
        uid: uId,
        geolat: lattitude ? lattitude : "",
        geolon: longitude ? longitude : "",
        location: doubleLocation ? doubleLocation : "",
        locationfull: displayName ? displayName : "",
  
        phone: newPhone ? newPhone : "",
        wapp: newWapp ? newWapp : "",
  
        propertyname: propertyName ? propertyName : "",
        category: selectedRentCategory ? selectedRentCategory : [],
        rentfrom: selectedDate ? selectedDate : "Today",
        rent: rentTkValue ? rentTkValue : "",
        garagetype: "",
        image1: images[0] ? images[0] : "",
        image2: images[1] ? images[1] : "",
        image3: images[2] ? images[2] : "",
        image4: images[3] ? images[3] : "",
        image5: images[4] ? images[4] : "",
        image6: images[5] ? images[5] : "",
        image7: images[6] ? images[6] : "",
        image8: images[7] ? images[7] : "",
        image9: images[8] ? images[8] : "",
        image10: images[9] ? images[9] : "",
        image11: images[10] ? images[10] : "",
        image12: images[11] ? images[11] : "",
        description: description?description: "",
        shortaddress:  shortAddress?shortAddress:"",
        bed: selectedBedRoom?selectedBedRoom:"",
        bath: selectedBathroom?selectedBedRoom:"",
        balcony: selectedBalcony?selectedBalcony:"",
        drawing: selectedDrawing?selectedDrawing:"",
        dining: selectedDining?selectedDining:"",
        kitchen: selectedKitchen?selectedKitchen:"",
        floornumber: floorNumber ? floorNumber : "",
        facing: selectedFaching ? selectedFaching : "",
        roomsize: totalSize ? totalSize : "",
        mentenance: maintenance?maintenance:"",
        fasalitis:  selectedFacilities?selectedFacilities:[],
      };
  
      console.log("For ALL ", rentPosDataObject);
      axios
        .post(`${baseUrl}/api/tolet/newpost`, rentPosDataObject)
        .then((res) => {
          console.log("For All: ", res.data);
          if(res.data){
            successfullMessage("All Post Done") 
          }
        });
     }
    
  };

  return (
    <div>
      {/* Property Name start */}
      <h1 className="my-5">Property Name</h1>
      <PropertyName></PropertyName>
      {/* <input
        type="text"
        name=""
        className="input input-bordered w-full text-white border-2 border-red-500"
        id=""
        placeholder="Property Name"
        onChange={handlePropertyName}
      /> */}
      {/* Property Name end */}

      {/* Rent Category start */}
      <h1 className="my-5">Rent Category*</h1>

      <div className="max-w-screen-lg mx-auto flex flex-wrap gap-4 ">
        {rentCategories.map((rentCategory, index) => (
          <div key={index} className="flex items-center  p-5 rounded-md">
            <button
              onClick={() => handleButtonClick(rentCategory)}
              className={`flex items-center btn btn-outline ${
                selectedRentCategory.includes(rentCategory)
                  ? "border-blue-600 border-2"
                  : ""
              } ${errorRentCategory ? "errorBorder" : ""}`}
              // style={{ backgroundColor: selectedRentCategory.includes(rentCategory) ? 'green' : 'transparent', border: 'none', cursor: 'pointer' }}
            >
              {selectedRentCategory.includes(rentCategory) ? (
                <FaCheckCircle className="text-blue-500" />
              ) : (
                <FaPlus />
              )}
              <span className="ml-2">{rentCategory}</span>
            </button>
          </div>
        ))}
        <div className="mt-4 md:col-span-4">
          {/* Selected categories: {selectedRentCategory.join(', ')} */}
        </div>
      </div>
      {/* Rent Category end */}

      <h1 className="w-4/12 mx-auto bg-yellow-400 text-center my-10  ">
        Shpe Start
      </h1>
      {shape}

      <div className="text-center my-4">
        <button onClick={handleRentPost} className="btn btn-primary">
          Rent Post
        </button>
      </div>
    </div>
  );
};

export default RentPost;
