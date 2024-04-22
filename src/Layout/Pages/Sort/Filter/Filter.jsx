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
    minPriceRent,
    setMinPriceRent,
    maxPriceRent,
    setMaxPriceRent,
    MAX_PRICE_RENT,
    MAX_PRICE_BUY,
    byFilterRent,
    setByFilterRent,
    setRentPageNumber,
    setRents,
    setSelectedRentCategory,
  } = useContext(FilterDataContext);

  const [propertyNumber, setPropertyNumber] = useState("");

  const handleSliderChange = (value) => {
    setMinPriceRent(value[0]);
    setMaxPriceRent(value[1]);
  };

  const handleMinInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (minPriceRent > maxPriceRent) {
      alert("Min will not more than max price");
      return;
    }
    setMinPriceRent(value);
  };

  const handleMaxInputChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxPriceRent(value);
  };

  const filterBody = {
    geolat: lattitude,
    geolon: longitude,
    rentmin: minPriceRent,
    rentmax: maxPriceRent,
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
    minPriceRent,
    maxPriceRent,
    selectedRentCategory,
    selectedBedrooms,
    selectedBathrooms,
    selectedFacilities,
  ]);

  const handleRentSort = () => {
    console.log("Rent Sort");
    console.log("Min Range: ", minPriceRent);
    console.log("Max Price: ", maxPriceRent);
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
    setMaxPriceRent(MAX_PRICE_RENT);
    setMinPriceRent(0);
    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedFacilities([]);
    setSelectedRentCategory([]);
  };

  let upperPrice = "";
  if (minPriceRent == 0 && maxPriceRent == MAX_PRICE_RENT) {
    upperPrice = <span>Any Price</span>;
  } else if (maxPriceRent < MAX_PRICE_RENT) {
    upperPrice = (
      <span>
        BDT {minPriceRent} to {maxPriceRent}/month
      </span>
    );
  } else if (minPriceRent > 0 && maxPriceRent == MAX_PRICE_RENT) {
    upperPrice = (
      <span>
        BDT {minPriceRent} to {maxPriceRent} +/month
      </span>
    );
  }

  return (
    <div className=" ">
      {/* Upper Part without Bottom Button Start */}
      <div className="p-[10px] md:p-[20px]">
        {/* Hole Price Start */}
        <div className="  flex flex-col justify-center rounded-md ">
          {/* Price in Orrange Color Start */}
          <div className="flex flex-col md:flex-row md:gap-0">
            <div className="w-[20%]"></div>
            <div className="w-full md:w-[80%]">
              <p className="bg-[#FF9800] w-full md:w-10/12  text-center font-bold text-sm md:text-xl text-white mx-auto rounded-full mb-10 p-2 mt-20">
                {upperPrice}
              </p>
            </div>
          </div>
          {/* Price in Orrange Color end */}

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
                  defaultValue={[0, MAX_PRICE_RENT]}
                  max={MAX_PRICE_RENT}
                  min={0}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={5}
                  value={[minPriceRent, maxPriceRent]}
                  onChange={handleSliderChange}
                />
              </div>
              {/* Only Slider End */}

              {/* Price Write Start */}
              <div className="flex flex-row gap-5 w-full  justify-center mt-10  ">
                {/* <div className="flex flex-col md:flex-row gap-5 items-center w-full "> */}
                <div className=" w-[50%] md:w-full bg-white rounded-lg p-5">
                  <p className="prText font-bold">Min Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown opacity-70 w-full"
                    value={minPriceRent}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div className="hidden w-[60px] md:flex justify-center items-center ">
                  <p className=" w-full h-[1px] bg-black opacity-50"></p>
                </div>
                <div className="w-[50%] md:w-full bg-white rounded-lg p-5">
                  <p className="prText font-bold">Max Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown opacity-70 w-full"
                    value={maxPriceRent}
                    onChange={handleMaxInputChange}
                  />
                </div>
              </div>
              {/* Price Write End */}
            </div>
          </div>
          {/* Slider And Price End */}
        </div>
        {/* Hole Price end */}

        <div className="mt-2 md:mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full ">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Category
          </h1>
          <div className=" w-full md:w-[80%]">
            <CategoryContentSort></CategoryContentSort>
          </div>
        </div>

        <div className="mt-2 md:mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bedrooms
          </h1>
          <div className=" w-full md:w-[80%]">
            <BedRoomSort></BedRoomSort>
          </div>
        </div>

        <div className="mt-2 md:mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bathrooms
          </h1>
          <div className="w-full md:w-[80%]">
            <BathroomSort></BathroomSort>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-2 md:mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36] w-full md:w-[20%]">
            Facilities
          </h1>
          <div className="w-full md:w-[80%]">
            <Facilities fromFilter={true}></Facilities>
          </div>
        </div>
      </div>
      {/* Upper Part without Bottom Button end */}

      <div className="filterFooter  ">
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
          Show {propertyNumber} Properties{" "}
        </button>
      </div>
    </div>
  );
};

export default Filter;
