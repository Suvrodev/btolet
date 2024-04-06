import React, { useContext, useState } from "react";
import "./Header.css";

import { Link, NavLink, useLocation } from "react-router-dom";
import headerLogo from "../../../../assets/Logo/logo.png";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaBaby, FaBars, FaCross, FaReply } from "react-icons/fa";
import {
  FiAlertCircle,
  FiEdit,
  FiHeart,
  FiHome,
  FiPhoneCall,
  FiRadio,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import BedNewShort from "../../Sort/NewShort/BedNewShort/BedNewShort";
import NewShort from "../../Sort/NewShort/NewShort/NewShort";
import {
  Clear,
  HomeWorkOutlined,
  LogoutOutlined,
  Tune,
} from "@mui/icons-material";

const Header = () => {
  const {
    currentUser,
    lattitude,
    longitude,
    doubleLocation,
    profileBox,
    setProfileBox,
    leftNav,
    setLeftNav,
  } = useContext(AuthContext);

  // console.log("Current User Header: ",currentUser);
  // const {image}=currentUser

  const handleProfileBox = () => {
    setProfileBox(!profileBox);
  };

  const handleLeftNav = () => {
    setLeftNav(true);
  };

  const handleCloseLeftNav = () => {
    // console.log("Close Left Nav: ", leftNav);
    setLeftNav(false);
  };

  // console.log("Left Nav: ",leftNav);

  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("uId");
    localStorage.setItem("uId", "***");
    window.location.reload();
  };

  const browserLocation = useLocation();
  const location = browserLocation?.pathname;
  // console.log("Location (Header): ", location);

  const NavItems = (
    <div className="lg:flex items-center justify-center text-white">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 rb_rg font-extrabold " : "rb_rg"
          }
          to="/blue"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 rb_rg font-extrabold " : "rb_rg"
          }
          to="/buy"
        >
          Buy
        </NavLink>
      </li>
      <li className="text-black">{lattitude}</li>
    </div>
  );

  return (
    <div>
      <div className="  border-[1px] border-r-0 border-l-0">
        <div className="hidden max-w-[100rem] mx-auto w-full h-[75px] py-5 md:flex items-center justify-end ">
          <div className="w-[70%] flex justify-start items-center gap-10">
            <div className="flex gap-2 items-center ">
              <Link to="/">
                <img className="w-[50px] h-[50px]" src={headerLogo} alt="" />
              </Link>
              <h1 className="h-[50px] text-4xl font-bold my-auto">BtoLet</h1>
            </div>
            <div className="text-lg flex gap-5 items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600 upLine " : "text-gray-500"
                }
                to="/home"
              >
                Rent
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600 upLine" : "text-gray-500"
                }
                to="/buy"
              >
                Buy
              </NavLink>
              <div>
                {(location === "/home" || location === "/buy") && (
                  <NewShort></NewShort>
                )}
              </div>
            </div>
          </div>
          <div className="w-[30%] flex items-center justify-end">
            {currentUser ? (
              <div className="relative">
                <img
                  className="w-[45px] h-[45px] rounded-full customBorder"
                  onClick={handleProfileBox}
                  src={currentUser?.image}
                  alt=""
                />

                <div
                  className={`w-[270px] border-2 absolute top-14 right-0 bg-white rounded-md p-5 z-10 ${
                    profileBox ? "" : "hidden"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <Link to="/updateprofile">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiUser /> Profile
                      </span>{" "}
                    </Link>
                    <Link to="/savedpost">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiHeart /> Saved
                      </span>
                    </Link>
                    <Link to="/mypost">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiEdit /> My Post
                      </span>
                    </Link>
                    <Link to="">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiRadio />
                        Feedback
                      </span>
                    </Link>
                    <p className="h-[1px] customBorder mt-2 mb-2"></p>
                    <Link to="">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiSearch />
                        Terms And Condition
                      </span>
                    </Link>
                    <Link to="">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiPhoneCall />
                        Contact us
                      </span>
                    </Link>
                    <Link to="">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FiAlertCircle />
                        About US
                      </span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className=" bg-[#FF5861] text-white rounded-md h-[30px] flex items-center justify-center"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // <Link to='/login'><button className=" py-2 px-5 hover:border-2 transition duration-700 ease-in-out"><span className='flex items-center gap-1 text-black opacity-75'> <FiUser /> Sign in</span></button></Link>
              <Link to="/login">
                <button className="py-2 px-5 border border-transparent hover:border-[#e9e8e8] rounded-lg transition duration-1000 ease-in-out">
                  <span className="flex items-center gap-1 text-black opacity-75">
                    <FiUser /> Sign in
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* For Mobile Device */}

      <div className="w-full  h-[75px] border-4 p-5 flex items-center justify-between fixed top-0 z-10 bg-white md:hidden   ">
        <div className=" relative ">
          <FaBars onClick={handleLeftNav} />
          {/* Which Will do After Click Bar start */}
          <div
            className={`bg-white w-[300px] h-[100vh]  border-2 absolute  rounded-md z-10 -top-8 transition-all duration-700 ease-in-out
             ${leftNav ? "-left-7 " : "-left-[500px] "}`}
          >
            <div className="bg-[#03A9F5] p-2 text-white">
              <div className="mb-10 ">
                <Clear onClick={handleCloseLeftNav} />
              </div>
              <div className="mb-5">
                {currentUser && (
                  <div className="">
                    <img
                      src={currentUser?.image}
                      alt=""
                      className="w-[75px] h-[75px] rounded-full"
                    />
                    <h1 className="mt-2">
                      {currentUser?.name} ({currentUser?.uid})
                    </h1>
                    <h1>{currentUser?.email}</h1>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 p-5 prText">
              <Link
                to="/home"
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiHome />
                </span>
                <span>Rent</span>
              </Link>
              <Link
                to="/buy"
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <HomeWorkOutlined />
                </span>
                <span>Buy</span>
              </Link>
              <Link
                to="/updateprofile"
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiUser />
                </span>
                <span> Profile</span>
              </Link>
              <Link
                to="/savedpost"
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiHeart />
                </span>
                <span>Saved</span>
              </Link>
              <Link
                to="/mypost"
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiEdit />
                </span>
                <span>My Post</span>
              </Link>
              <Link
                to=""
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiRadio />
                </span>
                <span>FeedBack</span>
              </Link>
              <p className="h-[1px] mt-4 mb-2 customBorder"></p>
              <Link
                to=""
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiSearch />
                </span>
                <span>Terms And Condition</span>
              </Link>
              <Link
                to=""
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiPhoneCall />
                </span>
                <span>Contact</span>
              </Link>
              <Link
                to=""
                className="flex items-center gap-2"
                onClick={handleCloseLeftNav}
              >
                <span>
                  <FiAlertCircle />
                </span>
                <span>About US</span>
              </Link>
              {currentUser && (
                <div className="flex items-center gap-2" onClick={handleLogout}>
                  <LogoutOutlined />
                  <p>Logout</p>
                </div>
              )}
            </div>
          </div>
          {/* Which Will do After Click Bar end */}
        </div>
        <div className="">
          <img className="w-[50px] h-[50px]" src={headerLogo} alt="" />
        </div>
        <div>
          {currentUser ? (
            <div className="relative">
              <img
                className="w-[45px] h-[45px] rounded-full"
                src={currentUser?.image}
                alt=""
              />
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-accent text-xl font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
