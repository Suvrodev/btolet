import React, { useEffect, useState } from "react";
import BedNewShort from "../BedNewShort/BedNewShort";
import BathNewShort from "../BathNewShort/BathNewShort";
import PriceNewShort from "../PriceNewShort/PriceNewShort";
import RentCategoryNewSort from "../RentCategoryNewSort/RentCategoryNewSort";
import BuyCategoryNewSort from "../BuyCategoryNewSort/BuyCategoryNewSort";
import { useLocation } from "react-router-dom";

const NewShort = () => {
  const [showBed, setShowBed] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showRentCategory, setShowRentCategory] = useState(false);
  const [showBuyCategory, setShowBuyCategory] = useState(false);

  const handleShowBed = () => {
    setShowBed(!showBed);
    setShowBath(false);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(false);
  };

  const handleShowBath = () => {
    setShowBed(false);
    setShowBath(!showBath);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(false);
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
  };

  const handleShowBuyCategory = () => {
    setShowBed(false);
    setShowBath(false);
    setShowPrice(false);
    setShowRentCategory(false);
    setShowBuyCategory(!showBuyCategory);
  };

  /***
   * Check Location
   */

  const [home, setHome] = useState(false);
  const browserLocation = useLocation();
  const location = browserLocation?.pathname;
  console.log("Location(New Sort): ", location);

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

  return (
    <div className="flex gap-10 z-20">
      <div className=" flex items-center">
        <BedNewShort
          showBed={showBed}
          handleShowBed={handleShowBed}
        ></BedNewShort>
      </div>
      <div className="flex items-center">
        <BathNewShort
          showBath={showBath}
          handleShowBath={handleShowBath}
        ></BathNewShort>
      </div>
      <div className="z-10">
        <PriceNewShort
          showPrice={showPrice}
          handleShowPrice={handleShowPrice}
        ></PriceNewShort>
      </div>

      {home ? (
        <div className="z-10">
          <RentCategoryNewSort
            showRentCategory={showRentCategory}
            handleShowRentCategory={handleShowRentCategory}
          ></RentCategoryNewSort>
        </div>
      ) : (
        <div className="z-10">
          <BuyCategoryNewSort
            showBuyCategory={showBuyCategory}
            handleShowBuyCategory={handleShowBuyCategory}
          ></BuyCategoryNewSort>
        </div>
      )}
    </div>
  );
};

export default NewShort;
