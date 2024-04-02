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
import { Cancel, CancelOutlined } from "@mui/icons-material";
import Amenities from "../../PostContent/Amenities/Amenities";

const Filter = ({ closeFilterRent, setCloseFilterRent }) => {
  const {
    baseUrl,
    lattitude,
    longitude,
    doubleLocation,
    selectedFacilities,
    setSelectedFacilities,
  } = useContext(AuthContext);
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
    setSelectedRentCategory,
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
      setRentPageNumber(1);
      setByFilterRent(true);
    }, 1000);
    // setByFilterRent(true);
  };

  const handleRentClearSort = () => {
    // setCloseFilterRent(true);
    // setRentPageNumber(1);
    // setByFilterRent(false);
    // setRents([]);
    // window.location.reload();
    setMaxPrice(10000000);
    setMinPrice(0);
    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedFacilities([]);
    setSelectedRentCategory([]);
  };

  let upperPrice = "";
  if (minPrice == 0 && maxPrice == 10000000) {
    upperPrice = <span>Any Price</span>;
  } else if (maxPrice < 10000000) {
    upperPrice = (
      <span>
        BDT {minPrice} to {maxPrice}/month
      </span>
    );
  } else if (maxPrice == 10000000) {
    upperPrice = (
      <span>
        BDT {minPrice} to {maxPrice} +/month
      </span>
    );
  }

  return (
    <div className=" ">
      <div className="p-[40px]">
        <div className="  flex flex-col justify-center rounded-md">
          <div className="flex flex-col md:flex-row md:gap-20">
            <div></div>
            <p className="bg-[#FF9800] w-full md:w-6/12 text-center font-bold text-xl text-white mx-auto rounded-full mb-10 p-2 mt-20">
              {upperPrice}
            </p>
          </div>
          {/* Slider And Price Start */}
          <div className="  flex flex-col md:flex-row gap-5 md:gap-0  w-full   ">
            <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
              Price
            </h1>
            <div className=" w-full md:w-[80%] flex flex-col   ">
              {/* Only Slider Start */}
              <div className="  ">
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
              {/* Only Slider End */}

              {/* Price Write Start */}
              <div className="flex flex-col md:flex-row gap-5 w-full  justify-center mt-10 ">
                {/* <div className="flex flex-col md:flex-row gap-5 items-center w-full "> */}
                <div className=" w-full bg-white rounded-lg p-5">
                  <p className="prText">Min Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown"
                    value={minPrice}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div className="w-full bg-white rounded-lg p-5">
                  <p className="prText">Max Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown"
                    value={maxPrice}
                    onChange={handleMaxInputChange}
                  />
                  {/* </div> */}
                </div>
              </div>
              {/* Price Write End */}
            </div>
          </div>
          {/* Slider And Price Start */}
        </div>

        <div className="mt-10  flex flex-col md:flex-row gap-5 md:gap-0  w-full ">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Category
          </h1>
          <div className=" w-full md:w-[80%]">
            <CategoryContentSort></CategoryContentSort>
          </div>
        </div>

        <div className="mt-10  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bedrooms
          </h1>
          <div className=" w-full md:w-[80%]">
            <BedRoomSort></BedRoomSort>
          </div>
        </div>

        <div className="mt-10  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bathrooms
          </h1>
          <div className="w-full md:w-[80%]">
            <BathroomSort></BathroomSort>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-10  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36] w-full md:w-[20%]">
            Facilities
          </h1>
          <div className="w-full md:w-[80%]">
            <Facilities fromFilter={true}></Facilities>
          </div>
        </div>
      </div>

      <div className="filterFooter ">
        <button
          onClick={handleRentClearSort}
          className="btn bg-[#FCECEE] border-0 text-[#DF495D] hover:bg-[#DF495D] hover:text-white"
        >
          Clear All Filter <CancelOutlined />
        </button>
        <button
          onClick={handleRentSort}
          className="btn bg-[#FF9800] border-0 hover:bg-[#FF9800] text-white "
        >
          Show Properties {propertyNumber} Properties{" "}
        </button>
      </div>
    </div>
  );
};

export default Filter;
