import React, { useContext, useEffect, useState } from "react";

import "./Filter.css";
import BedRooms from "../../PostContent/BedRoom/BedRooms";
import BathRoom from "../../PostContent/Bathroom/BathRoom";
import Facilities from "../../PostContent/Facilities/Facilities";
import ReactSlider from "react-slider";
import BedRoomSort from "../../ShortContent/BedRoomSort/BedRoomSort";
import BathroomSort from "../../ShortContent/BathroomSort/BathroomSort";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";
import CategoryContentSort from "../../ShortContent/CategoryContentSort/CategoryContentSort";
import axios from "axios";

const Filter = ({ closeFilterRent, setCloseFilterRent }) => {
  const { baseUrl, lattitude, longitude, doubleLocation, selectedFacilities } =
    useContext(AuthContext);
  const {
    selectedBathrooms,
    setSelectedBathrooms,
    selectedRentCategory,
    selectedBedrooms,
    setSelectedBedrooms,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    byFilterRent,
    setByFilterRent,
    setRentPageNumber,
    setRents,
  } = useContext(FilterDataContext);

  const [propertyNumber, setPropertyNumber] = useState("");

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleMinInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (minPrice > maxPrice) {
      alert("Min will not more than max price");
      return;
    }
    setMinPrice(value);
  };

  const handleMaxInputChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxPrice(value);
  };

  const filterBody = {
    geolat: lattitude,
    geolon: longitude,
    rentmin: minPrice,
    rentmax: maxPrice,
    page: 1,
    category: selectedRentCategory,
    fasalitis: selectedFacilities,
    bed: selectedBedrooms,
    bath: selectedBathrooms,
  };

  //   console.log("Filter Body============================: ",filterBody);

  useEffect(() => {
    axios.post(`${baseUrl}/tolet/sort/postcount`, filterBody).then((res) => {
      let count = res.data;
      count = count.total_count;
      // console.log("Post Count++++++++++++++++++++++++++",count);
      setPropertyNumber(count);
    });
  }, [
    doubleLocation,
    minPrice,
    maxPrice,
    selectedRentCategory,
    selectedBedrooms,
    selectedBathrooms,
    selectedFacilities,
  ]);

  const handleRentSort = () => {
    console.log("Rent Sort");
    console.log("Min Range: ", minPrice);
    console.log("Max Price: ", maxPrice);
    console.log("Category: ", selectedRentCategory);
    console.log("Double Location: ", doubleLocation);
    console.log("Bedroom: ", selectedBedrooms);
    console.log("Bathroom: ", selectedBathrooms);
    console.log("Facilitite: ", selectedFacilities);

    setByFilterRent(false);

    setTimeout(() => {
      setByFilterRent(true);
    }, 1000);
    // setByFilterRent(true);
  };

  const handleRentClearSort = () => {
    setCloseFilterRent(true);
    setRentPageNumber(1);
    setByFilterRent(false);
    setRents([]);
    // window.location.reload();
  };

  return (
    <div>
      <div className=" p-5 flex flex-col justify-center rounded-md">
        <p className="bg-yellow-600 w-full md:w-6/12 text-center font-bold text-xl text-white mx-auto rounded-md mb-20 p-2">
          BDT {minPrice} to {maxPrice} +/month
        </p>
        <div className="  mb-10 p-5">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 10000000]}
            max={10000000}
            min={0}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={5}
            value={[minPrice, maxPrice]}
            onChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full  md:w-[80%] mx-auto justify-center ">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full ">
          <div className=" w-full">
            <p>Min</p>
            <input
              type="number"
              name=""
              id=""
              className="input input-bordered w-full  border-red-500 bg-gray-500"
              value={minPrice}
              onChange={handleMinInputChange}
            />
          </div>
          <div className="w-full">
            <p>Max</p>
            <input
              type="number"
              name=""
              id=""
              className="input input-bordered w-full border-red-500 bg-gray-500"
              value={maxPrice}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1>Category: </h1>
        <CategoryContentSort></CategoryContentSort>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BedRoom Start */}
        <div>
          <h1>Bedroom:</h1>
          <BedRoomSort></BedRoomSort>
        </div>

        {/* Bathroom short */}
        <div>
          <h1>Bathroom</h1>
          <BathroomSort></BathroomSort>
        </div>
      </div>

      {/* Facilities */}
      <div className="">
        <h1>Facilities:</h1>
        <Facilities fromFilter={true}></Facilities>
      </div>

      <div className="flex gap-4 w-full md:w-4/12 mx-auto flex-col-reverse md:flex-row justify-center">
        <button onClick={handleRentClearSort} className="btn btn-warning">
          Clear
        </button>
        <button onClick={handleRentSort} className="btn btn-primary ">
          Show Properties {propertyNumber} Properties{" "}
        </button>
      </div>

      {/* <form method="dialog">
         <button className='btn'>Check</button>
       </form> */}
    </div>
  );
};

export default Filter;
