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
    byFilter,
    setByFilter,
    selectedBathrooms,
    selectedBedrooms,
    minPrice,
    maxPrice,
    selectedRentCategory,
  } = useContext(FilterDataContext);

  // console.log("Lattitude: ",lattitude);
  // console.log("Longitude: ",longitude);

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

  // console.log("Filter Body: ",filterBody);

  ////rents Data start
  const closeButtonRef = useRef("");

  const [pageNumber, setPageNumber] = useState(1);
  const [rents, setRents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!byFilter) {
      fetch(
        `${baseUrl}/tolet/postlist?page=${pageNumber}&geolat=${lattitude}&geolon=${longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          const newData = [...rents, ...data];
          setRents(newData);
        });
    } else {
      axios.post(`${baseUrl}/tolet/sort/postlist`, filterBody).then((res) => {
        setRents(res.data);
        console.log(
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++: ",
          res.data
        );
        // console.log("------------------------------------------------------------------------------Buy Filter(else)(2)",byFilter);
      });
    }
  }, [pageNumber, byFilter]);

  // console.log("Rent Data: ",rents);

  /**
   * Maintaining specific Second start
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, 2000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  /**
   * Maintaining specific second end
   */

  ////rents Data end

  ///Post Count
  const [postCount, setPostCount] = useState("0");
  useEffect(() => {
    if (location_1 && location_2) {
      fetch(
        `${baseUrl}/tolet/postcount/area?location1=${location_1}&location2=${location_2}`
      )
        // fetch(`${baseUrl}/api/tolet/postcount/area?location1=${location_1}&location2=${location_2}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.postCount) {
            setPostCount(data?.postCount);
          }
        });
    }
  }, [location_1, location_2, doubleLocation]);
  // console.log("Post Count(Rent): ", postCount);
  // console.log("Location-1 + Location-2 : ",location_1+location_2);
  ///Area End

  ////Close Popup
  //Show Properties button a click korle X button a o click hobe autometically

  // console.log("---------------------------------------------------------------------------By Filter(3)): ",byFilter);
  if (byFilter) {
    closeButtonRef?.current.click();
    setByFilter(false);
  }

  return (
    <div className="my-4">
      {/* Modal start */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
        <dialog id="filterModal_1" className=" modal md:modal  ">
          <div className="modal-box w-full md:w-11/12 max-w-full bg-white">
            <Filter></Filter>
            {/* <CheckFilterSize></CheckFilterSize> */}
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button
                  className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
                  ref={closeButtonRef}
                >
                  ✕
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* Modal end */}

      {/* <h1 className='my-4 text-center text-4xl font-bold'>Rent </h1> */}

      <div className="flex justify-between items-center my-4 mx-4 md-mx-0">
        <div>
          <p className="text-2xl prText">
            <span className="text-black opacity-80 text-xl">
              {postCount} ads in
            </span>{" "}
            <span className="robotoBangla">
              {location_1}, {location_2}
            </span>
          </p>
        </div>

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

        {/* POST bUTTON */}
        {/* <Link to={'/rentpost'}> <p className='postButtonrd absolute bottom-[50px] left-[50%] translate(-50%, -50%) '> <span className='postButtonrdwht flex items-center'> <AddOutlined/> post</span> </p> </Link> */}

        {/* <div style={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <Link to='/rentpost' className='postButtonrd'>
                      <p className='postButtonrdwht flex items-center'>
                          <AddOutlined/> post
                      </p>
                  </Link>
             </div> */}
      </div>
    </div>
  );
};

export default Rent;
