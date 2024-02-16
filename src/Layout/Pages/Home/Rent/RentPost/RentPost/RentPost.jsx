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

const RentPost = () => {


 






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

  const handleCheckboxChange = (category) => {
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
  if(selectedRentCategory.includes('Only Garage')){
    console.log("only Garage ache");
    shape=<div className="grid grid-cols-1  gap-10 ">
        
        
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
             <Description></Description>
          </div>
          
          <div className="bg-purple-500">
              <YourDetails ur={false}></YourDetails>
          </div>

    </div>
  }



  /////Only Garage not Exists but Office exists
  else if (!selectedRentCategory.includes('Only Garage') && selectedRentCategory.includes('Office')) {
    shape=<div className="bg-green-700">
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

              <div className="bg-purple-500">
               <YourDetails></YourDetails>
              </div>
      </div>
  }


   /////Only Garage and Office not Exists but Shop exists
  else if (!selectedRentCategory.includes('Only Garage') && !selectedRentCategory.includes('Office') && selectedRentCategory.includes('Shop')) {
    shape=<div className="bg-green-600">

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

            <div className="bg-purple-500">
              <YourDetails></YourDetails>
            </div>
    </div>
  }

  /////For All
  else{
    shape=<div className="">
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

            <div className="bg-purple-500">
              <YourDetails></YourDetails>
          </div>
    </div>
  }


/**
 * Function work Start
 */


const {propertyName,rentTkValue,shortAddress,description,selectedDate,selectedBathroom,selectedBedRoom,selectedDrawing,selectedDining,selectedBalcony,
       selectedKitchen,floorNumber,selectedFaching,totalSize,maintenance,selectedgarageType,selectedFacilities,imageSrc,images,
       name,phone,wapp}=useContext(AuthContext)

  


  const handleRentPost=()=>{
    console.log("Property Name: ",propertyName);
    console.log("Garage rent: ",rentTkValue);
    console.log("Short Address: ",shortAddress);
    console.log("Description: ",description);
    console.log("Date :",selectedDate);
    console.log("Selected Bathroom: ",selectedBathroom);
    console.log("Selected Bedroom: ",selectedBedRoom);
    console.log("Selected Drawing: ",selectedDrawing);
    console.log("Selected Dining: ",selectedDining);
    console.log("Selected Balcony: ",selectedBalcony);
    console.log("Selected Kitchen: ",selectedKitchen);
    console.log("Floor Number: ",floorNumber);
    console.log("Faching: ",selectedFaching);
    console.log("Total size/Room Size: ",totalSize);
    console.log("Maintenance: ",maintenance);
    console.log("Garage Type: ",selectedgarageType);
    console.log("Facilities ",selectedFacilities);
    console.log("Selected Images ",images);

    console.log("Name: ",name);
    console.log("Phone: ",phone);
    console.log("Whatsapp: ",wapp);
   
  }




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
      <h1 className="my-5">Rent Category</h1>

      {/* grid grid-cols-2 md:grid-cols-4 */}
      <div className="max-w-screen-lg mx-auto flex flex-wrap  gap-4">
        {rentCategories.map((rentCategory, index) => (
          <div key={index} className="flex items-center border p-5 rounded-md">
            <input
              type="checkbox"
              id={rentCategory}
              checked={selectedRentCategory.includes(rentCategory)}
              onChange={() => handleCheckboxChange(rentCategory)}
              className="checkbox checkbox-accent mr-5"
            />
            <label htmlFor={rentCategory} className="text-sm">
              {rentCategory}
            </label>
          </div>
        ))}
        <div className="mt-4 md:col-span-4">
          {/* Selected facilities: {selectedRentCategory.join(', ')} */}
        </div>
      </div>
      {/* Rent Category end */}

      
      <h1 className="w-4/12 mx-auto bg-yellow-400 text-center my-10  ">Shpe Start</h1>
          {shape}

      <div className="text-center my-4">
         <button onClick={handleRentPost} className="btn btn-primary">Post</button>
      </div>   
    </div>
  );
};

export default RentPost;
