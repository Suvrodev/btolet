import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BedNewShort = ({ handleShowBed, showBed }) => {
  const bedNumbers = ["1", "2", "3", "4", "5", "6", "7+"];
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

  const clearBed = () => {
    setSelectedBeds([]);
  };

  console.log("Selected Bed: ", selectedBeds);

  return (
    <div className=" z-10 ">
      <div className="relative">
        <h2 className="text-xl cursor-pointer " onClick={handleShowBed}>
          Bed{" "}
          <span> {showBed ? <KeyboardArrowUp /> : <KeyboardArrowDown />} </span>
        </h2>
        <div
          className={` absolute flex flex-col gap-2 bg-white p-5 rounded-md ${
            showBed ? "" : "hidden"
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
            <button className="btn btn-warning" onClick={clearBed}>
              Clear
            </button>
            <button className="btn btn-primary">Show</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedNewShort;
