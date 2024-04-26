import React, { useContext } from "react";
import Header from "../Pages/SharedPage/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

import "./Font.css";
import "./Main.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Marque from "../Pages/SharedPage/Marque/Marque";
import Banner from "../Pages/SharedPage/Banner/Banner";
import GoToTop from "../../Function/GoToTop";

const Main = () => {
  const { profileBox, setProfileBox, leftNav, setLeftNav } =
    useContext(AuthContext);

  let show = false;
  let loc = useLocation();
  let location = loc?.pathname;

  if (location == "/home" || location == "/rent") {
    show = true;
  } else {
    show = false;
  }

  // console.log("Show: ",show);

  // console.log("My Location::::::::::::::::::::::::::",location);

  const handleScreenTouch = () => {
    setProfileBox(false);
    setLeftNav(false);
  };

  return (
    <div className="roboto  ">
      <GoToTop />
      {/* <GoToTop /> */}
      <Header></Header>

      <div className={`max-w-[100rem] mx-auto ${show ? "" : "hidden"} `}>
        <Marque></Marque>
        <div
          onClick={handleScreenTouch}
          className="h-full md:h-[360px] flex flex-col md:flex-row gap-2 items-center justify-start mx-4 md:mx-0"
        >
          <div className="w-full md:w-[60%] h-[160px] md:h-[360px]">
            <Banner></Banner>
          </div>
          <div className="hidden md:block w-full md:w-[40%]    ">
            <div className="bg-green-500 h-[360px] rounded-lg  flex items-center justify-center ">
              <h1> Google Ads</h1>
            </div>
          </div>
        </div>
      </div>

      <div onClick={handleScreenTouch} className="max-w-[100rem] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
