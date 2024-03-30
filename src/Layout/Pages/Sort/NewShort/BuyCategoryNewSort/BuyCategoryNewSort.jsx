import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const BuyCategoryNewSort = ({
  showBuyCategory,
  handleShowBuyCategory,
  buyCategoryClose,
  setBuyCategoryClose,
}) => {
  const bedNumbers = ["House", "Flat", "Land", "Plot"];
  const {
    selectedCategoriesBuySort,
    setSelectedCategoriesBuySort,
    setByFilter,

    setRentPageNumber,
    setPageNumber,
    ////Dependency for short short
    categoryBuyDep,
    setCategoryBuyDep,
  } = useContext(FilterDataContext);

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

  ////Clear Button Work
  const clearBuyCategory = () => {
    setSelectedCategoriesBuySort([]);
  };

  ////For Sorting
  const handleBuyCategorySort = () => {
    setBuyCategoryClose(true);
    handleShowBuyCategory();
    setByFilter(true);
    setCategoryBuyDep(!categoryBuyDep);
    setPageNumber(1);
  };

  ////Close means if all items will cose then  byFilterRent will flase
  const handleRemoveBuyCategorySort = () => {
    setSelectedCategoriesBuySort([]);
    setBuyCategoryClose(false);
    setPageNumber(1);
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
        <span
          className="text-red-500 cursor-pointer"
          onClick={handleRemoveBuyCategorySort}
        >
          {" "}
          {buyCategoryClose ? "x" : ""}{" "}
        </span>
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
            <button
              className="btn bg-[#3FAE4C] border-0  text-white"
              onClick={handleBuyCategorySort}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCategoryNewSort;
