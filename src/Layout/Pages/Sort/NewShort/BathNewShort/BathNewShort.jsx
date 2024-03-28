import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BathNewShort = ({ handleShowBath, showBath }) => {
  const bathNumbers = ["1", "2", "3", "4", "5", "6", "7+"];
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

  console.log("Selected Bath: ", selectedBeds);
  console.log({ showBath });

  const clearBath = () => {
    setSelectedBeds([]);
  };

  return (
    <div className="z-10">
      <div className="relative">
        <h2 className="text-xl cursor-pointer" onClick={handleShowBath}>
          Bath{" "}
          <span>
            {" "}
            {showBath ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{" "}
          </span>
        </h2>
        <div
          className={` absolute flex flex-col gap-2 bg-white p-5 rounded-md ${
            showBath ? "" : "hidden"
          } `}
        >
          {bathNumbers.map((bathNumber) => (
            <button
              key={bathNumber}
              onClick={() => handleBedButtonClick(bathNumber)}
              className={`btn text-black hover:bg-white ${
                selectedBeds.includes(bathNumber)
                  ? "btn-primary"
                  : "bg-white  border-0 shadow-md"
              }  `}
            >
              {bathNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button className="btn btn-warning" onClick={clearBath}>
              Clear
            </button>
            <button className="btn btn-primary">Show</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathNewShort;
