import React, { useContext, useState } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";

const BathroomSort = () => {
  const bathrooms = ["1", "2", "3", "4", "5", "6", "7+"];
  const { selectedBathrooms, setSelectedBathrooms } =
    useContext(FilterDataContext);
  // const [selectedBathrooms, setSelectedBathrooms] = useState([]);

  const handleButtonClick = (bedroom) => {
    if (selectedBathrooms.includes(bedroom)) {
      setSelectedBathrooms(
        selectedBathrooms.filter((item) => item !== bedroom)
      );
    } else {
      setSelectedBathrooms([...selectedBathrooms, bedroom]);
    }
  };

  // console.log("Selected Bathroom: ", selectedBathrooms);

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {bathrooms.map((bathroom, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(bathroom)}
            className={`h-[40px] w-[70px] flex justify-center items-center  gap-2 border-2  rounded-[10px] bg-white text-[12px] md:text-[16px] text-[#2E2D36] ${
              selectedBathrooms.includes(bathroom)
                ? "border-blue-600 border-2"
                : ""
            } `}
          >
            {selectedBathrooms.includes(bathroom) ? (
              <FaCheckCircle className="text-blue-500" />
            ) : (
              <FaPlus className="text-[#2E2D36] opacity-70" />
            )}
            <span className="ml-0">{bathroom}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BathroomSort;
