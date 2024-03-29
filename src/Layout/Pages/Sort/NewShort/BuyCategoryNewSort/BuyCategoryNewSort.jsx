import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const BuyCategoryNewSort = ({ showBuyCategory, handleShowBuyCategory }) => {
  const bedNumbers = ["House", "Flat", "Land", "Plot"];
  const { selectedCategoriesBuySort, setSelectedCategoriesBuySort } =
    useContext(FilterDataContext);

  const toggleBedSelection = (bedNumber) => {
    setSelectedCategoriesBuySort((prevSelectedBeds) => {
      if (prevSelectedBeds.includes(bedNumber)) {
        return prevSelectedBeds.filter((bed) => bed !== bedNumber);
      } else {
        return [...prevSelectedBeds, bedNumber];
      }
    });
  };
  const handleBedButtonClick = (bedNumber) => {
    toggleBedSelection(bedNumber);
  };

  console.log("Selected Category(rent): ", selectedCategoriesBuySort);

  const clearBuyCategory = () => {
    setSelectedCategoriesBuySort([]);
  };

  return (
    <div className=" z-10 ">
      <div className="relative">
        <button
          className="btn bg-white border-0 shadow-md text-black hover:bg-white "
          onClick={handleShowBuyCategory}
        >
          Category(Buy)
          <span>
            {" "}
            {showBuyCategory ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{" "}
          </span>
        </button>
        <div
          className={` absolute flex flex-col gap-2 bg-white p-5 rounded-md ${
            showBuyCategory ? "" : "hidden"
          } `}
        >
          {bedNumbers.map((bedNumber) => (
            <button
              key={bedNumber}
              onClick={() => handleBedButtonClick(bedNumber)}
              className={`btn text-black hover:bg-white ${
                selectedCategoriesBuySort.includes(bedNumber)
                  ? "btn-primary"
                  : "bg-white border-0 shadow-md"
              }  `}
            >
              {bedNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button onClick={clearBuyCategory} className="">
              Clear
            </button>
            <button className="btn bg-[#3FAE4C] border-0  text-white">
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCategoryNewSort;
