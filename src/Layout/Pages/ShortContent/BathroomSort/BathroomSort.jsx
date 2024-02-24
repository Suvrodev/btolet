import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';
import { FilterDataContext } from '../../../../Providers/FilterDataProvider';

const BathroomSort = () => {

    const bathrooms=["1","2","3","4","5","6","7+"]
    const {selectedBathrooms, setSelectedBathrooms} = useContext(FilterDataContext);
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
            Bathroom Sort

            <div className='flex gap-1'>
            {bathrooms.map((bathroom, index) => (
            <div key={index} className="flex items-center p-2 rounded-md">
                <button
                onClick={() => handleButtonClick(bathroom)}
                className={`flex items-center  btn btn-outline btn-sm ${
                    selectedBathrooms.includes(bathroom)
                    ? "border-blue-600 border-2"
                    : ""
                } `}
                >
                {selectedBathrooms.includes(bathroom) ? (
                    <FaCheckCircle className="text-blue-500" />
                ) : (
                    <FaPlus />
                )}
                <span className="ml-2">{bathroom}</span>
                </button>
            </div>
            ))}
        </div>
        </div>
    );
};

export default BathroomSort;