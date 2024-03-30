import React, { useContext, useEffect, useState } from "react";
import BedNewShort from "../BedNewShort/BedNewShort";
import BathNewShort from "../BathNewShort/BathNewShort";
import PriceNewShort from "../PriceNewShort/PriceNewShort";
import RentCategoryNewSort from "../RentCategoryNewSort/RentCategoryNewSort";
import BuyCategoryNewSort from "../BuyCategoryNewSort/BuyCategoryNewSort";
import { useLocation } from "react-router-dom";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const NewShort = () => {
  const {
    selectedBedrooms,
    setSelectedBedrooms,
    selectedBathrooms,
    setSelectedBathrooms,
    selectedRentCategory,
    setSelectedRentCategory,
    selectedCategoriesBuySort,
    setSelectedCategoriesBuySort,
    setRentPageNumber,
    setPageNumber,
    setRents,
    setBuys,
    setByFilterRent,
    setByFilter,
  } = useContext(FilterDataContext);

  const [showBed, setShowBed] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showRentCategory, setShowRentCategory] = useState(false);
  const [showBuyCategory, setShowBuyCategory] = useState(false);

  const [bedClose, setBedClose] = useState(false);
  const [bathClose, setBathClose] = useState(false);
  const [priceClose, setPriceClose] = useState(false);
  const [rentCategoryClose, setRentCategoryClose] = useState(false);
  const [buyCategoryClose, setBuyCategoryClose] = useState(false);

  const handleShowBed = () => {
    setShowBed(!showBed);
    setShowBath(false);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(false);

    setSelectedBathrooms([]);
    setSelectedRentCategory([]);
    setSelectedCategoriesBuySort([]);
  };

  const handleShowBath = () => {
    setShowBed(false);
    setShowBath(!showBath);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(false);

    setSelectedBedrooms([]);
    setSelectedRentCategory([]);
    setSelectedCategoriesBuySort([]);
  };

  const handleShowPrice = () => {
    setShowBed(false);
    setShowBath(false);
    setShowPrice(!showPrice);
    setShowRentCategory(false);
    setShowBuyCategory(false);
  };

  const handleShowRentCategory = () => {
    setShowBed(false);
    setShowBath(false);
    setShowPrice(false);
    setShowRentCategory(!showRentCategory);
    setShowBuyCategory(false);

    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedCategoriesBuySort([]);
  };

  const handleShowBuyCategory = () => {
    setShowBed(false);
    setShowBath(false);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(!showBuyCategory);

    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedRentCategory([]);
  };

  /***
   * Check Location
   */

  const [home, setHome] = useState(false);
  const browserLocation = useLocation();
  const location = browserLocation?.pathname;
  // console.log("Location(New Sort): ", location);

  useEffect(() => {
    if (location == "/home") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);
  // console.log("Homeeee: ", home);

  /**
   * Check Location end
   */

  useEffect(() => {
    if (
      bedClose == false &&
      bathClose == false &&
      priceClose == false &&
      rentCategoryClose == false
    ) {
      setByFilterRent(false);
      setRentPageNumber(1);
      setRents([]);
    }
  }, [bedClose, bathClose, priceClose, rentCategoryClose]);

  useEffect(() => {
    if (
      bedClose == false &&
      bathClose == false &&
      priceClose == false &&
      buyCategoryClose == false
    ) {
      setByFilter(false);
      setPageNumber(1);
      setBuys([]);
    }
  }, [bedClose, bathClose, priceClose, buyCategoryClose]);

  return (
    <div className="flex gap-10 z-20">
      <div className=" flex items-center">
        <BedNewShort
          showBed={showBed}
          handleShowBed={handleShowBed}
          bedClose={bedClose}
          setBedClose={setBedClose}
        ></BedNewShort>
      </div>
      <div className="flex items-center">
        <BathNewShort
          showBath={showBath}
          handleShowBath={handleShowBath}
          bathClose={bathClose}
          setBathClose={setBathClose}
        ></BathNewShort>
      </div>
      <div className="z-10">
        <PriceNewShort
          showPrice={showPrice}
          handleShowPrice={handleShowPrice}
          priceClose={priceClose}
          setPriceClose={setPriceClose}
        ></PriceNewShort>
      </div>

      {home ? (
        <div className="z-10">
          <RentCategoryNewSort
            showRentCategory={showRentCategory}
            handleShowRentCategory={handleShowRentCategory}
            rentCategoryClose={rentCategoryClose}
            setRentCategoryClose={setRentCategoryClose}
          ></RentCategoryNewSort>
        </div>
      ) : (
        <div className="z-10">
          <BuyCategoryNewSort
            showBuyCategory={showBuyCategory}
            handleShowBuyCategory={handleShowBuyCategory}
            buyCategoryClose={buyCategoryClose}
            setBuyCategoryClose={setBuyCategoryClose}
          ></BuyCategoryNewSort>
        </div>
      )}
    </div>
  );
};

export default NewShort;
