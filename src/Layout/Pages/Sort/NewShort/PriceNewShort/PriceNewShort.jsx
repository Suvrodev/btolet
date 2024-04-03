import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";
import { useLocation } from "react-router-dom";

const PriceNewShort = ({
  showPrice,
  handleShowPrice,
  priceClose,
  setPriceClose,
  MAX_PRICE_RENT,
  MAX_PRICE_BUY,
}) => {
  const bedNumbers = [5000, 10000, 15000, 20000, 25000];

  const {
    maxPrice,
    setMaxPrice,
    setMaxPriceRent,
    setByFilterRent,
    setByFilter,
    setRentPageNumber,
    setPageNumber,
    ////Dependency for short short

    priceDep,
    setPriceDep,
  } = useContext(FilterDataContext);

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

  ////For Sorting
  const browserLocation = useLocation();
  const location = browserLocation?.pathname;

  ////Clear Button Work
  const clearPrice = () => {
    setMaxPrice(100000);
  };

  const handlePriceSort = () => {
    setPriceClose(true);
    handleShowPrice();
    if (location === "/home") {
      setByFilterRent(true);
      setPriceDep(!priceDep);
      setRentPageNumber(1);
    } else {
      setByFilter(true);
      setPriceDep(!priceDep);
      setPageNumber(1);
    }
  };

  ////Close means if all items will cose then  byFilterRent and byFilterRent will flase
  const handleRemovePriceSort = () => {
    setPriceClose(false);
    setPriceDep(!priceDep);
    setRentPageNumber(1);
    setPageNumber(1);
  };

  return (
    <div className="z-10">
      <div className="relative">
        <button
          className={`btn bg-white border-0 shadow-md text-black hover:bg-[#7B53C1] hover:text-white ${
            priceClose ? "bg-[#7B53C1] text-white" : ""
          } `}
          onClick={handleShowPrice}
        >
          Price{" "}
          <span>{showPrice ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</span>
        </button>
        <span
          className="text-red-500 cursor-pointer"
          onClick={handleRemovePriceSort}
        >
          {" "}
          {priceClose ? "x" : ""}{" "}
        </span>
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
            <button
              className="btn bg-[#3FAE4C] border-0  text-white"
              onClick={handlePriceSort}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceNewShort;
