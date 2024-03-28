import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const BuyCategoryNewSort = ({ showBuyCategory, handleShowBuyCategory }) => {
  const bedNumbers = ["House", "Flat", "Land", "Plot"];
  const [selectedBeds, setSelectedBeds] = useState([]);

  const toggleBedSelection = (bedNumber) => {
    setSelectedBeds((prevSelectedBeds) => {
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

  console.log("Selected Category(rent): ", selectedBeds);

  const clearBuyCategory = () => {
    setSelectedBeds([]);
  };

  return (
    <div className=" z-10 ">
      <div className="relative">
        <h2 className="text-xl  cursor-pointer" onClick={handleShowBuyCategory}>
          Category(Buy)
          <span>
            {" "}
            {showBuyCategory ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{" "}
          </span>
        </h2>
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
                selectedBeds.includes(bedNumber)
                  ? "btn-primary"
                  : "bg-white border-0 shadow-md"
              }  `}
            >
              {bedNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button onClick={clearBuyCategory} className="btn btn-warning">
              Clear
            </button>
            <button className="btn btn-primary">Show</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCategoryNewSort;
