import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Toogle = () => {
  const browserLocation = useLocation();
  const location = browserLocation?.pathname;

  const navigate = useNavigate("");

  //Toogle Show Hide start
  const [showToogle, setShowToogle] = useState(false);
  useEffect(() => {
    if (location == "/home" || location == "/rent") {
      setShowToogle(true);
    } else {
      setShowToogle(false);
    }
  }, [location]);
  // /Toogle Show Hide end

  //Current Location start
  const [currentLocation, setCurrentLocation] = useState(true);
  useEffect(() => {
    if (location == "/home") {
      setCurrentLocation(true);
    }
    if (location == "/rent") {
      setCurrentLocation(false);
    }
  }, [location]);
  console.log("Current Location: ", currentLocation);
  //Current Location end

  const [showBuy, setShowBuy] = useState(currentLocation);
  const handleToogle = () => {
    setShowBuy(!showBuy);
  };
  console.log("Buy: ", showBuy);

  useEffect(() => {
    if (location == "/home") {
      navigate("/rent");
    }
    if (location == "/rent") {
      navigate("/");
    }
  }, [showBuy]);

  return (
    <div className={`text-black ${showToogle ? "" : "hidden"}`}>
      <div className="relative w-[90px] cursor-pointer " onClick={handleToogle}>
        <h1 className=" bg-[#B2B2B2] w-[90px] h-[45px] rounded-3xl"></h1>
        <p
          className={`bg-blue-500 w-[45px] h-[45px] rounded-full absolute top-0  z-10 ${
            showBuy ? "left-0" : "left-[47px]"
          }`}
        ></p>

        <h1
          className={`absolute transform  top-1/2 right-4 -translate-y-1/2 ${
            showBuy ? "" : "hidden"
          }`}
        >
          Buy
        </h1>
        <h1
          className={`absolute transform top-1/2 left-2 -translate-y-1/2  ${
            showBuy ? "hidden" : ""
          }`}
        >
          Rent
        </h1>
      </div>
    </div>
  );
};

export default Toogle;
