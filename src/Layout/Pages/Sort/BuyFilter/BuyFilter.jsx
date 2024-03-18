import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";
import axios from "axios";
import ReactSlider from "react-slider";
import CategoryContentSort from "../../ShortContent/CategoryContentSort/CategoryContentSort";
import BedRoomSort from "../../ShortContent/BedRoomSort/BedRoomSort";
import BathroomSort from "../../ShortContent/BathroomSort/BathroomSort";
import Facilities from "../../PostContent/Facilities/Facilities";
import Amenities from "../../PostContent/Amenities/Amenities";
import CategoryContentProSort from "../../ShortContent/CategoryContentProSort/CategoryContentProSort";

const BuyFilter = ({ closeFilterBuy, setCloseFilterBuy }) => {
  const {
    baseUrl,
    lattitude,
    longitude,
    doubleLocation,
    selectedFacilities,
    selectedAmenities,
  } = useContext(AuthContext);

  const {
    selectedBathrooms,
    setSelectedBathrooms,
    selectedCategoriesBuySort,
    selectedBedrooms,
    setSelectedBedrooms,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setByFilter,
    setPageNumber,
    setBuys,
  } = useContext(FilterDataContext);

  const [propertyNumber, setPropertyNumber] = useState("");

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleMinInputChange = (event) => {
    const value = parseInt(event.target.value);
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
    category: selectedCategoriesBuySort,
    fasalitis: selectedAmenities,
    bed: selectedBedrooms,
    bath: selectedBathrooms,
  };

  //   console.log("Filter Body============================: ",filterBody);

  useEffect(() => {
    axios.post(`${baseUrl}/pro/sort/postcount`, filterBody).then((res) => {
      let count = res.data;
      count = count.total_count;
      //   console.log("Post Count Property++++++++++++++++++++++++++", count);
      setPropertyNumber(count);
    });
  }, [
    doubleLocation,
    minPrice,
    maxPrice,
    selectedCategoriesBuySort,
    selectedBedrooms,
    selectedBathrooms,
    selectedAmenities,
  ]);

  const handleRentSort = () => {
    // console.log("Pro Sort??????????????????????????");
    // console.log("Min Range: ",minPrice);
    // console.log("Max Price: ",maxPrice);
    // console.log("Category: ",selectedCategoriesBuySort);
    // console.log("Double Location: ",doubleLocation);
    // console.log("Bedroom: ",selectedBedrooms);
    // console.log("Bathroom: ",selectedBathrooms);
    // console.log("Amenities: ",selectedAmenities);

    setByFilter(true);
  };

  const handleBuyClearSort = () => {
    setCloseFilterBuy(true);
    setByFilter(false);
    setPageNumber(0);
    setBuys([]);
  };

  return (
    <div>
      <h1 className="text-center">Property Sort</h1>
      <div className=" p-5 flex flex-col justify-center rounded-md">
        <p className="bg-yellow-600 w-2/12 text-center font-bold text-xl text-white mx-auto rounded-md mb-20 p-2">
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
            onChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5  w-[80%] mx-auto justify-center">
        <div className="flex gap-5 items-center justify-center ">
          <div>
            <p>Min</p>
            <input
              type="number"
              name=""
              id=""
              className="input input-bordered  border-red-500 bg-gray-500"
              value={minPrice}
              onChange={handleMinInputChange}
            />
          </div>
          <div>
            <p>Max</p>
            <input
              type="number"
              name=""
              id=""
              className="input input-bordered  border-red-500 bg-gray-500"
              value={maxPrice}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>

      <div>
        <CategoryContentProSort></CategoryContentProSort>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* BedRoom Start */}
        <BedRoomSort></BedRoomSort>

        {/* Bathroom short */}
        <BathroomSort></BathroomSort>
      </div>

      {/* Facilities */}
      <div className="">
        <h1>Amenities:</h1>
        <Amenities forSort={true}></Amenities>
      </div>

      <div className="flex gap-4 w-4/12 mx-auto justify-center">
        <button className="btn btn-warning" onClick={handleBuyClearSort}>
          Clear
        </button>
        <button onClick={handleRentSort} className="btn btn-primary">
          Show Properties {propertyNumber} Properties{" "}
        </button>
      </div>

      {/* <form method="dialog">
        <button className='btn'>Check</button>
    </form> */}
    </div>
  );
};

export default BuyFilter;
