import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import "./BathNewShort.css";
import { useLocation } from "react-router-dom";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const BathNewShort = ({
  handleShowBath,
  showBath,
  bathClose,
  setBathClose,
}) => {
  const bathNumbers = ["1", "2", "3", "4", "5", "6", "7+"];

  const {
    selectedBathrooms,
    setSelectedBathrooms,
    byFilter,
    byFilterRent,
    setByFilterRent,
    setByFilter,

    setRentPageNumber,
    setPageNumber,
    ///Short sort Dependency
    bathDep,
    setBathDep,
  } = useContext(FilterDataContext);

  const toggleBedSelection = (bedNumber) => {
    setSelectedBathrooms((prevSelectedBeds) => {
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
  const clearBath = () => {
    setSelectedBathrooms([]);
  };

  ////For Sorting
  const browserLocation = useLocation();
  const location = browserLocation?.pathname;

  const handleBathSort = () => {
    setBathClose(true);
    handleShowBath();
    if (location === "/home") {
      setByFilter(true);
      setBathDep(!bathDep);
      setPageNumber(1);
    } else {
      console.log("byFilterrrrrrrrrrrRent: ", byFilterRent);

      setByFilterRent(true);
      setBathDep(!bathDep);
      setRentPageNumber(1);
    }
  };

  ////Close means if all items will cose then  byFilterRent and byFilterRent will flase
  const handleRemoveBedSort = () => {
    setSelectedBathrooms([]);
    setBathClose(false);
    setBathDep(!bathDep);
  };

  //////Check
  // const [showBathNew, setShowBathNew] = useState(false);
  // const handleShowBathNew = () => {
  //   setShowBathNew(!showBathNew);
  // };

  return (
    <div className="z-10">
      <div className="relative">
        <button
          className={`btn bg-white border-0 shadow-md text-black hover:bg-[#7B53C1] hover:text-white ${
            bathClose ? "bgp" : ""
          } `}
          onClick={handleShowBath}
        >
          Bath{" "}
          <span>
            {" "}
            {showBath ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{" "}
          </span>
        </button>

        <span
          className="text-red-500 cursor-pointer"
          onClick={handleRemoveBedSort}
        >
          {" "}
          {bathClose ? "x" : ""}{" "}
        </span>
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
                selectedBathrooms.includes(bathNumber)
                  ? "btn-primary"
                  : "bg-white  border-0 shadow-md"
              }  `}
            >
              {bathNumber}
            </button>
          ))}

          <div className="flex gap-2">
            <button className="" onClick={clearBath}>
              Clear
            </button>
            <button
              className="btn bg-[#3FAE4C] border-0  text-white"
              onClick={handleBathSort}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathNewShort;
