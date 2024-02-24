import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';
import { FilterDataContext } from '../../../../Providers/FilterDataProvider';

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
    
      const {selectedRentCategory, setSelectedRentCategory} = useContext(FilterDataContext);

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
        <div>
            <h1>Category Content Sort</h1>
            <div className="max-w-screen-lg mx-auto flex flex-wrap gap-4 ">
            {rentCategories.map((rentCategory, index) => (
            <div key={index} className="flex items-center  p-2 rounded-md">
                <button
                onClick={() => handleButtonClick(rentCategory)}
                className={`flex items-center btn btn-outline btn-sm ${
                    selectedRentCategory.includes(rentCategory)
                    ? "border-blue-600 border-2"
                    : ""
                }`}
               
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
        </div>
    );
};

export default CategoryContentSort;