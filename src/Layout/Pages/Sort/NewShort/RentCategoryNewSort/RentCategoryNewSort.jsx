import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const RentCategoryNewSort = ({
  handleShowRentCategory,
  showRentCategory,
  rentCategoryClose,
  setRentCategoryClose,

  ///Short sort Dependency
}) => {
  const bedNumbers = [
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
  // const [selectedBeds, setSelectedBeds] = useState([]);
  const {
    selectedRentCategory,
    setSelectedRentCategory,
    setByFilterRent,

    setRentPageNumber,
    setPageNumber,
    ///Dependency
    categoryRentDep,
    setCategoryRentDep,
  } = useContext(FilterDataContext);

  const toggleBedSelection = (bedNumber) => {
    setSelectedRentCategory((prevSelectedBeds) => {
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

  // console.log("Selected Category(rent): ", selectedRentCategory);

  ////Clear Button Work
  const clearRentCategory = () => {
    setSelectedRentCategory([]);
  };

  ////For Sorting
  const handleRentCategorySort = () => {
    setRentCategoryClose(true);
    handleShowRentCategory();
    setByFilterRent(true);

    setCategoryRentDep(!categoryRentDep);
    setRentPageNumber(1);
  };

  ////Close means if all items will cose then  byFilterRent and byFilterRent will flase
  const handleRemoveRentCategorySort = () => {
    setSelectedRentCategory([]);
    setRentCategoryClose(false);

    setCategoryRentDep(!categoryRentDep);
    setRentPageNumber(1);
  };

  return (
    <div className=" z-10 ">
      <div className="relative">
        <button
          className="btn bg-white border-0 shadow-md text-black hover:bg-white "
          onClick={handleShowRentCategory}
        >
          Category(Rent)
          <span>
            {" "}
            {showRentCategory ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}{" "}
          </span>
        </button>
        <span
          className="text-red-500 cursor-pointer"
          onClick={handleRemoveRentCategorySort}
        >
          {" "}
          {rentCategoryClose ? "x" : ""}{" "}
        </span>
        <div
          className={` absolute flex flex-col gap-2 bg-white p-5 rounded-md ${
            showRentCategory ? "" : "hidden"
          } `}
        >
          {bedNumbers.map((bedNumber) => (
            <button
              key={bedNumber}
              onClick={() => handleBedButtonClick(bedNumber)}
              className={`btn text-black hover:bg-white ${
                selectedRentCategory.includes(bedNumber)
                  ? "btn-primary"
                  : "bg-white border-0 shadow-md"
              }  `}
            >
              {bedNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button className="" onClick={clearRentCategory}>
              Clear
            </button>
            <button
              className="btn bg-[#3FAE4C] border-0  text-white"
              onClick={handleRentCategorySort}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCategoryNewSort;
