import React, { useContext, useState } from "react";
import "./CategoryContentSort.css";

import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";

const CategoryContentSort = () => {
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

  const { selectedRentCategory, setSelectedRentCategory } =
    useContext(FilterDataContext);

  const handleButtonClick = (category) => {
    if (selectedRentCategory.includes(category)) {
      setSelectedRentCategory(
        selectedRentCategory.filter((item) => item !== category)
      );
    } else {
      setSelectedRentCategory([...selectedRentCategory, category]);
    }
  };

  //   console.log("Selected Category: ", selectedRentCategory);
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-5 ">
        {rentCategories.map((rentCategory, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(rentCategory)}
            className={`  h-[40px] w-[120px] md:w-[150px]   flex items-center justify-center border-2 rounded-[15px] bg-white text-[12px] md:text-[16px] text-[#2E2D36] gap-2  ${
              selectedRentCategory.includes(rentCategory)
                ? "border-blue-600 border-2"
                : ""
            }`}
          >
            {selectedRentCategory.includes(rentCategory) ? (
              <FaCheckCircle className="text-blue-500" />
            ) : (
              <FaPlus className="text-[#2E2D36] opacity-70" />
            )}
            <span className="ml-0">{rentCategory}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryContentSort;
