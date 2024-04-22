import React, { useContext, useState } from "react";
import { FaCheckCircle, FaCircle, FaPlus } from "react-icons/fa";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";

const CategoryContentProSort = () => {
  const { selectedCategoriesBuySort, setSelectedCategoriesBuySort } =
    useContext(FilterDataContext);

  const categories = ["House", "Flat", "Land", "Plot"];
  // const [selectedCategories, setSelectedCategories] = useState("House");

  const handleButtonClick = (category) => {
    if (selectedCategoriesBuySort.includes(category)) {
      setSelectedCategoriesBuySort(
        selectedCategoriesBuySort.filter((item) => item !== category)
      );
    } else {
      setSelectedCategoriesBuySort([...selectedCategoriesBuySort, category]);
    }
  };
  // console.log("Sorting Property Category**************************",selectedCategoriesBuySort);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-4 md:grid-cols-3 gap-y-2 ">
        {categories.map((rentCategory, index) => (
          <div key={index} className="flex items-center  p-2 rounded-md">
            <button
              onClick={() => handleButtonClick(rentCategory)}
              className={`shadow-sm  h-[55px] w-[90px] md:w-[150px]  
              flex items-center justify-center border-2 rounded-[5px] bg-white
               text-[12px] md:text-[16px] text-[#2E2D36] gap-2 hover:bg-[#7B53C1] hover:text-white ${
                 selectedCategoriesBuySort.includes(rentCategory)
                   ? "border-blue-600 border-2"
                   : ""
               }`}
            >
              {selectedCategoriesBuySort.includes(rentCategory) ? (
                <FaCheckCircle className="text-blue-500" />
              ) : (
                // <FaCircle className="text-[#DFDDDD]" />
                <></>
              )}
              <span className="ml-2">{rentCategory}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContentProSort;
