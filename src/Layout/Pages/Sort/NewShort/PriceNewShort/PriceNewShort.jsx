import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const PriceNewShort = ({ showPrice, handleShowPrice }) => {
  const bedNumbers = ["10000", "20000", "50000"];

  const { maxPrice, setMaxPrice } = useContext(FilterDataContext);

  // const [selectedBed, setSelectedBed] = useState(null);

  const handleBedButtonClick = (bedNumber) => {
    setMaxPrice((prevSelectedBed) => {
      if (prevSelectedBed === bedNumber) {
        return null; // Deselect the currently selected button
      } else {
        return bedNumber; // Select the newly clicked button
      }
    });
  };

  // console.log("Max Price: ", maxPrice);

  const clearPrice = () => {
    setMaxPrice("");
  };

  return (
    <div className="z-10">
      <div className="relative">
        <button
          className="btn bg-white border-0 shadow-md text-black hover:bg-white "
          onClick={handleShowPrice}
        >
          Price{" "}
          <span>{showPrice ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</span>
        </button>
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
                maxPrice === bedNumber
                  ? "btn-primary"
                  : "bg-white border-0 shadow-md"
              }`}
            >
              <h1>up to {bedNumber}</h1>
            </button>
          ))}

          <div className="flex gap-2">
            <button onClick={clearPrice} className="">
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

export default PriceNewShort;
