import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const PriceNewShort = ({ showPrice, handleShowPrice }) => {
  const bedNumbers = ["1-10", "10-20", "20-30"];
  const [selectedBed, setSelectedBed] = useState(null);

  const handleBedButtonClick = (bedNumber) => {
    setSelectedBed((prevSelectedBed) => {
      if (prevSelectedBed === bedNumber) {
        return null; // Deselect the currently selected button
      } else {
        return bedNumber; // Select the newly clicked button
      }
    });
  };

  console.log("Selected Bed: ", selectedBed);

  const clearPrice = () => {
    setSelectedBed(null);
  };

  return (
    <div className="z-10">
      <div className="relative">
        <h2 className="text-xl cursor-pointer" onClick={handleShowPrice}>
          Price{" "}
          <span>{showPrice ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</span>
        </h2>
        <div
          className={`absolute flex flex-col gap-2 bg-white p-5 rounded-md ${
            showPrice ? "" : "hidden"
          }`}
        >
          {bedNumbers.map((bedNumber) => (
            <button
              key={bedNumber}
              onClick={() => handleBedButtonClick(bedNumber)}
              className={`btn text-black hover:bg-white ${
                selectedBed === bedNumber
                  ? "btn-primary"
                  : "bg-white border-0 shadow-md"
              }`}
            >
              {bedNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button onClick={clearPrice} className="btn btn-warning">
              Clear
            </button>
            <button className="btn btn-primary">Show</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceNewShort;
