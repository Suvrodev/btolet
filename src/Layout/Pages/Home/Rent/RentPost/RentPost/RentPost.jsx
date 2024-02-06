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

  return (
    <div>
      <h1 className="my-5">Property Name</h1>
      <input
        type="text"
        name=""
        className="input input-bordered w-full text-white"
        id=""
        placeholder="Property Name"
      />

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
      {!checkShop && !checkOffice && !checkGarage ? (
        <>
          {/* Bedroom BathRoom Start */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <BedRooms></BedRooms>
            </div>
            <div className="w-full md:w-[50%]">
              <BathRoom></BathRoom>
            </div>
          </div>
          {/* Bedroom BathRoom End */}

          {/* Balcony Kitchen Start */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <Balcony></Balcony>
            </div>
            <div className="w-full md:w-[50%]">
              <Kitchen></Kitchen>
            </div>
          </div>
          {/* Balcony Kitchen Start */}

          {/* Drawing Dining Start */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <Drawing></Drawing>
            </div>
            <div className="w-full md:w-[50%]">
              <Dining></Dining>
            </div>
          </div>
          {/* Drawing Dining End */}
        </>
      ) : null}


      {/*
      {checkGarage || (
        <>
    
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <FloorNumber></FloorNumber>
            </div>
            <div className="w-full md:w-[50%]">
              <Fatching></Fatching>
            </div>
          </div>
         

        
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <TotalSize></TotalSize>
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="my-2">Rent From</h1>
              <Date></Date>
            </div>
          </div>
         

        
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <Maintenence></Maintenence>
            </div>
            <div className="w-full md:w-[50%]">
              <Renttk></Renttk>
            </div>
          </div>
         
        </>
      )} */}


        {!checkGarage && (
        <>
            {/* Floor Facing Start */}
            <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
                <FloorNumber></FloorNumber>
            </div>
            <div className="w-full md:w-[50%]">
                <Fatching></Fatching>
            </div>
            </div>
            {/* Floor Facing End */}

            {/* Room Size Rent from Start */}
            <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
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
                <Maintenence></Maintenence>
            </div>
            <div className="w-full md:w-[50%]">
                <Renttk></Renttk>
            </div>
            </div>
            {/* Maintenance Rent End*/}
        </>
        )}

      {!checkGarage || (
        <>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%]">
              <h1 className="my-2">Rent From</h1>
              <Date></Date>
            </div>
            <div className="w-full md:w-[50%]">
              <GarageType></GarageType>
            </div>
          </div>
          <div>
            <Renttk></Renttk>
          </div>
        </>
      )}
    </div>
  );
};

export default RentPost;
