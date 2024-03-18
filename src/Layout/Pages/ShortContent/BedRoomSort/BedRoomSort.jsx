import React, { useContext, useState } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";

const BedRoomSort = () => {
  const bedrooms = ["1", "2", "3", "4", "5", "6", "7+"];
  const { selectedBedrooms, setSelectedBedrooms } =
    useContext(FilterDataContext);

  const handleButtonClick = (bedroom) => {
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms(selectedBedrooms.filter((item) => item !== bedroom));
    } else {
      setSelectedBedrooms([...selectedBedrooms, bedroom]);
    }
  };

  // console.log("Selected Bedroom: ", selectedBedrooms);
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {bedrooms.map((bedroom, index) => (
          <div key={index} className="flex items-center  p-2 rounded-md">
            <button
              onClick={() => handleButtonClick(bedroom)}
              className={`flex items-center btn btn-sm btn-outline ${
                selectedBedrooms.includes(bedroom)
                  ? "border-blue-600 border-2"
                  : ""
              } `}
              // style={{ backgroundColor: selectedRentCategory.includes(rentCategory) ? 'green' : 'transparent', border: 'none', cursor: 'pointer' }}
            >
              {selectedBedrooms.includes(bedroom) ? (
                <FaCheckCircle className="text-blue-500" />
              ) : (
                <FaPlus />
              )}
              <span className="ml-2">{bedroom}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedRoomSort;
