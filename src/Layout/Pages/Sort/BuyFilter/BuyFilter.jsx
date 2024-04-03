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
import { CancelOutlined } from "@mui/icons-material";

const BuyFilter = ({ closeFilterBuy, setCloseFilterBuy }) => {
  const {
    baseUrl,
    lattitude,
    longitude,
    doubleLocation,
    selectedFacilities,
    selectedAmenities,
    setSelectedAmenities,
  } = useContext(AuthContext);

  const {
    selectedBathrooms,
    setSelectedBathrooms,
    selectedCategoriesBuySort,
    setSelectedCategoriesBuySort,
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
    setPageNumber(1);
    setByFilter(false);
    setTimeout(() => {
      setByFilter(true);
    }, 1000);

    // setByFilter(true);
  };

  const handleBuyClearSort = () => {
    // setCloseFilterBuy(true);
    // setByFilter(false);
    // setPageNumber(1);
    // setBuys([]);
    setMaxPrice(10000000);
    setMinPrice(0);
    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedAmenities([]);
    setSelectedCategoriesBuySort([]);
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
    <div>
      {/* Upper Part without Bottom Button Start */}
      <div className="p-[10px] md:p-[20px]">
        {/* Hole Price Start */}
        <div className="flex flex-col justify-center rounded-md ">
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
                  <p className="prText font-bold">Min Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown opacity-70"
                    value={minPrice}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div className="hidden w-[60px] md:flex justify-center items-center ">
                  <p className=" w-full h-[1px] bg-black opacity-50"></p>
                </div>
                <div className="w-full bg-white rounded-lg p-5">
                  <p className="prText font-bold">Max Price</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="bg-white outline-none border-1 dag numberInputUpDown opacity-70"
                    value={maxPrice}
                    onChange={handleMaxInputChange}
                  />
                  {/* </div> */}
                </div>
              </div>
              {/* Price Write End */}
            </div>
          </div>
          {/* Slider And Price End */}
        </div>
        {/* Hole Price end */}

        <div className="mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Category
          </h1>
          <div className=" w-full md:w-[80%]">
            <CategoryContentProSort></CategoryContentProSort>
          </div>
        </div>

        <div className="mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bedrooms
          </h1>
          <div className=" w-full md:w-[80%]">
            <BedRoomSort></BedRoomSort>
          </div>
        </div>

        <div className="mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36]  w-full md:w-[20%]">
            Bathrooms
          </h1>
          <div className="w-full md:w-[80%]">
            <BathroomSort></BathroomSort>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-16  flex flex-col md:flex-row gap-5 md:gap-0  w-full">
          <h1 className="font-bold text-[#2E2D36] w-full md:w-[20%]">
            Amenities
          </h1>
          <div className="w-full md:w-[80%]">
            <Amenities forSort={true}></Amenities>
          </div>
        </div>
      </div>
      {/* Upper Part without Bottom Button End */}

      <div className="filterFooter  ">
        <button
          onClick={handleBuyClearSort}
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

export default BuyFilter;
