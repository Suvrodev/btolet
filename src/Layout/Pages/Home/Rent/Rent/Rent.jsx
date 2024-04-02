import React, { useContext, useEffect, useRef, useState } from "react";
import "./Rent.css";

import "../../../../Main/Font.css";

import Marque from "../../../SharedPage/Marque/Marque";
import Banner from "../../../SharedPage/Banner/Banner";
import RentCard from "../RentCard/RentCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import Filter from "../../../Sort/Filter/Filter";
import { FaSliders } from "react-icons/fa6";

import "./RentModal.css";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";
import axios from "axios";
import { FiChevronDown, FiSliders } from "react-icons/fi";
import { AddOutlined } from "@mui/icons-material";
import CheckFilterSize from "../../../Sort/CheckFilterSize/CheckFilterSize";

const Rent = () => {
  const {
    lattitude,
    longitude,
    baseUrl,
    location_1,
    location_2,
    selectedFacilities,
    doubleLocation,
  } = useContext(AuthContext);

  const {
    byFilterRent,
    setByFilterRent,
    selectedBathrooms,
    selectedBedrooms,
    minPrice,
    maxPrice,
    selectedRentCategory,
    rents,
    setRents,
    searchingRent,
    rentPageNumber,
    setRentPageNumber,
  } = useContext(FilterDataContext);

  const [closeFilterRent, setCloseFilterRent] = useState(false);
  const closeButtonRef = useRef("");
  const loadingRef = useRef(null);

  ////Ovserver start
  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      let output = items[0].isIntersecting;
      console.log({ output });
      // if (output && searchingRent) {
      if (output) {
        setRentPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }
    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [searchingRent]);
  console.log("Searching Rent: ", searchingRent);
  console.log("Rent Page Number: ", rentPageNumber);

  ////Ovserver end

  ///Post Count
  // const [postCount, setPostCount] = useState("0");
  // useEffect(() => {
  //   if (location_1 && location_2) {
  //     fetch(
  //       `${baseUrl}/tolet/postcount/area?location1=${location_1}&location2=${location_2}`
  //     )
  //       // fetch(`${baseUrl}/api/tolet/postcount/area?location1=${location_1}&location2=${location_2}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data?.postCount) {
  //           setPostCount(data?.postCount);
  //         }
  //       });
  //   }
  // }, [location_1, location_2, doubleLocation]);

  ///Area End

  ////Close Popup
  useEffect(() => {
    if (byFilterRent || closeFilterRent) {
      closeButtonRef?.current.click();
      // setByFilterRent(false);
    }
  }, [byFilterRent, closeFilterRent]);

  return (
    <div className="my-4">
      {/* Modal start */}
      <div>
        <dialog id="filterModal_1" className="modal mainDialog ">
          <div className="modal-box w-full md:w-6/12 h-full max-w-full max-h-[80%] md:max-h-full absolute bottom-0  bg-[#F3F4F6] p-0 overfollowParent  ">
            <form method="dialog" className="sticky top-0 left-0 w-full z-10">
              <div className="FilterUp flex justify-between items-center p-2  ">
                <h1 className="ml-2 ">Filter</h1>
                <button className="" ref={closeButtonRef}>
                  ✕
                </button>
              </div>
            </form>
            <div className="tung">
              <Filter
                closeFilterRent={closeFilterRent}
                setCloseFilterRent={setCloseFilterRent}
              ></Filter>
            </div>
          </div>
        </dialog>

        {/* <dialog id="filterModal_1" className="modal md:modal ">
          <div className="modal-box w-full md:w-6/12 h-full max-w-full bg-[#F3F4F6] p-0 m-0 mainBox">
            <div className=" w-full top-0  z-10 startSticky">
              <div className="modal-action p-0 formDiv ">
                <form method="dialog mainForm ">
                  <div className="FilterUp flex justify-between items-center p-2  ">
                    <h1 className="ml-2 ">Filterttt</h1>
                    <button className="" ref={closeButtonRef}>
                      ✕
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="">
              <Filter
                closeFilterRent={closeFilterRent}
                setCloseFilterRent={setCloseFilterRent}
              />
            </div>
          </div>
        </dialog> */}

        {/* <dialog id="filterModal_1" className=" modal md:modal    ">
          <div className="modal-box w-full md:w-6/12 h-full max-w-full bg-[#F3F4F6] p-0 sizeAdjust overflow-auto ">
            <Filter
              closeFilterRent={closeFilterRent}
              setCloseFilterRent={setCloseFilterRent}
            ></Filter>

            <div className="modal-action ">
              <form method="dialog">
                <div className="FilterUp  ">
                  <h1 className="ml-2">Filter</h1>
                  <button className="" ref={closeButtonRef}>
                    ✕
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog> */}
      </div>
      {/* Modal end */}

      {/* <h1 className='my-4 text-center text-4xl font-bold'>Rent </h1> */}

      <div className="flex justify-end items-center my-4 mx-4 md-mx-0">
        {/* x ads in abc area start */}
        {/* <div>
          <p className="text-2xl prText">
            <span className="text-black opacity-80 text-xl">
              {postCount} ads in
            </span>{" "}
            <span className="robotoBangla">
              {location_1}, {location_2}
            </span>
          </p>
        </div> */}
        {/*} x ads in abc area end */}

        <button
          className="btn btn-outline"
          onClick={() => document.getElementById("filterModal_1").showModal()}
        >
          <FiSliders />
          Filter <FiChevronDown />
        </button>
      </div>

      <div className="relative">
        {rents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {rents.map((rent, idx) => (
              <RentCard key={idx} r={rent} forRent={"forRent"}></RentCard>
            ))}
          </div>
        ) : (
          <p>Nothing to Show</p>
        )}
      </div>
      <div ref={loadingRef} className="text-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    </div>
  );
};

export default Rent;
