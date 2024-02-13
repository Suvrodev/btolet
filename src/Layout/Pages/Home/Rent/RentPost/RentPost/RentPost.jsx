import React, { useState } from "react";
import BedRooms from "../../../../BuyRentCommonPost/BedRoom/BedRooms";
import BathRoom from "../../../../BuyRentCommonPost/Bathroom/BathRoom";
import Balcony from "../../../../BuyRentCommonPost/Balcony/Balcony";
import Kitchen from "../../../../BuyRentCommonPost/BuyRentCommonPage/Kitchen/Kitchen";
import Drawing from "../../../../BuyRentCommonPost/Drawing/Drawing";
import Dining from "../../../../BuyRentCommonPost/Dining/Dining";
import FloorNumber from "../../../../BuyRentCommonPost/FloorNumber/FloorNumber";
import Fatching from "../../../../BuyRentCommonPost/Fatching/Fatching";
import TotalSize from "../../../../BuyRentCommonPost/BuyRentCommonPage/TotalSize/TotalSize";
import Date from "../../../../BuyRentCommonPost/Date/Date";
import Maintenence from "../Maintenence/Maintenence";
import Renttk from "../Rent/Renttk";
import GarageType from "../GarageType/GarageType";
import ShortAddress from "../../../../BuyRentCommonPost/ShortAddress/ShortAddress";
import Description from "../../../../BuyRentCommonPost/Description/Description";
import YourDetails from "../../../../BuyRentCommonPost/Your Details/YourDetails";

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

  console.log("Check Office: ", checkOffice);
  console.log("Check Shop: ", checkShop);
  console.log("Check Garage: ", checkGarage);
  


  let shape;


  ///Only Garage Exist
  if(selectedRentCategory.includes('Only Garage')){
    console.log("only Garage ache");
    shape=<div className="grid grid-cols-1  gap-10 bg-green-600">
        
        
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


          <div className="flex flex-col md:flex-row gap-10 bg-red-500">
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
              <YourDetails></YourDetails>
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
    shape=<div className="bg-green-600">
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

            <div className="bg-purple-500">
              <YourDetails></YourDetails>
          </div>
    </div>
  }




  return (
    <div>


      {/* Property Name start */}
      <h1 className="my-5">Property Name</h1>
      <input
        type="text"
        name=""
        className="input input-bordered w-full text-white"
        id=""
        placeholder="Property Name"
      />
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
    </div>
  );
};

export default RentPost;
