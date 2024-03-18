import React, { useContext, useEffect, useRef, useState } from "react";
import BuyCard from "../BuyCard/BuyCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Filter from "../../Sort/Filter/Filter";
import { FilterDataContext } from "../../../../Providers/FilterDataProvider";
import { FaSliders } from "react-icons/fa6";
import BuyFilter from "../../Sort/BuyFilter/BuyFilter";
import axios from "axios";
import { FiChevronDown, FiSliders } from "react-icons/fi";
import Marque from "../../SharedPage/Marque/Marque";
import Banner from "../../SharedPage/Banner/Banner";

const Buy = () => {
  const {
    lattitude,
    longitude,
    baseUrl,
    doubleLocation,
    location_1,
    location_2,
    selectedAmenities,
  } = useContext(AuthContext);

  const {
    byFilter,
    setByFilter,
    selectedBathrooms,
    selectedBedrooms,
    minPrice,
    maxPrice,
    selectedCategoriesBuySort,
    buys, ///come from FilterDataContext
    setBuys, /// ///come from FilterDataContext
    pageNumber,
    setPageNumber,
    rentPageNumber,
    setRentPageNumber,
  } = useContext(FilterDataContext);

  // console.log("Buysssssssssssssssss(2): ", buys);

  /**
   * Card Operation start
   */

  // const filterBody = {
  //   geolat: lattitude,
  //   geolon: longitude,
  //   rentmin: minPrice,
  //   rentmax: maxPrice,
  //   page: 1,
  //   category: selectedCategoriesBuySort,
  //   fasalitis: selectedAmenities,
  //   bed: selectedBedrooms,
  //   bath: selectedBathrooms,
  // };
  // console.log("Filter Body(Pro): ",filterBody);

  ///Buy Data start
  const [closeFilterBuy, setCloseFilterBuy] = useState(false);
  const closeButtonRef = useRef(null);
  // const [buys, setBuys] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);

  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(null);

  ////Ovserver start
  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      console.log("Check Observer: ");
      let output = items[0].isIntersecting;
      console.log(output);
      if (output) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
      setHasMore(false);
    });
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }
    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [hasMore]);
  console.log("Page Number: ", pageNumber);

  ////Ovserver end

  /***
   * Prv code start
   */
  // console.log("ByFilter,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,: ", byFilter);
  // useEffect(() => {
  //   if (!byFilter) {
  //     fetch(
  //       `${baseUrl}/pro/postlist?page=${pageNumber}&geolat=${lattitude}&geolon=${longitude}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const newData = [...buys, ...data];
  //         setBuys(newData);
  //       });
  //   } else {
  //     axios.post(`${baseUrl}/pro/sort/postlist`, filterBody).then((res) => {
  //       setBuys(res.data);
  //       console.log(
  //         "Property Sort Data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++: ",
  //         res.data
  //       );
  //       // console.log("------------------------------------------------------------------------------Buy Filter(else)(2)",byFilter);
  //     });
  //   }
  // }, [pageNumber, byFilter]);

  // console.log("Buy Data: ", buys);

  /**
   * Maintaining specific Second start
   */
  // useEffect(() => {
  //   if (buys.length > 0) {
  //     const interval = setInterval(() => {
  //       setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //     }, 2000);

  //     // Clean up the interval to prevent memory leaks
  //     return () => clearInterval(interval);
  //   }
  // }, [buys]);
  // console.log("Page Number (Buy): ", pageNumber);

  /**
   * Maintaining specific second end
   */

  /**
   * Prv code end
   */

  /**
   * Card Operation start
   */

  /***
   * Minar code
   */

  // console.log("ByFilter,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,: ", byFilter);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     if (!byFilter) {
  //       console.log(
  //         "Up condition exist---------------------------------------"
  //       );
  //       const response = await fetch(
  //         `${baseUrl}/pro/postlist?page=${pageNumber}&geolat=${lattitude}&geolon=${longitude}`
  //       );
  //       const data = await response.json();

  //       if (data.length === 0) {
  //         setHasMore(false);
  //       } else {
  //         setBuys([...buys, ...data]);
  //         setPageNumber((prevPage) => prevPage + 1);
  //       }
  //     } else {
  //       console.log(
  //         "Down condition exist---------------------------------------"
  //       );
  //       const response = axios.post(`${baseUrl}/pro/sort/postlist`, filterBody);
  //       setBuys(response.data);
  //       console.log("Response: ", response.data);
  //       setHasMore(false);
  //     }
  //   };

  //   const onIntersection = (items) => {
  //     const loaderItem = items[0];

  //     if (loaderItem.isIntersecting && hasMore) {
  //       fetchProducts();
  //     }
  //   };

  //   const observer = new IntersectionObserver(onIntersection);

  //   if (observer && loadingRef.current) {
  //     observer.observe(loadingRef.current);
  //   }

  //   // cleanup
  //   return () => {
  //     if (observer) observer.disconnect();
  //   };
  // }, [
  //   hasMore,
  //   buys,
  //   pageNumber,
  //   byFilter,
  //   doubleLocation,
  //   minPrice,
  //   maxPrice,
  //   selectedCategoriesBuySort,
  //   selectedBedrooms,
  //   selectedBathrooms,
  //   selectedAmenities,
  // ]);

  /**
   * Minar code end
   */

  const [scrolling, setScrolling] = useState(true);
  const [scrolledPercent, setScrolledPercent] = useState(0);

  const handleAddData = () => {
    setFuck(!fuck);
    setPageNumber(pageNumber + 1);
    console.log("Add");
  };

  /**
   * Prv Code end
   */

  ///Buy Data end

  ////Post Count
  const [postCount, setPostCount] = useState("");
  useEffect(() => {
    if (location_1 && location_2) {
      fetch(
        `${baseUrl}/pro/postcount/area?location1=${location_1}&location2=${location_2}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.postCount) {
            setPostCount(data?.postCount);
          }
        });
    }
  }, [location_1, location_2]);
  ///Area End

  /**
   * Close Modal
   */
  //Show Properties button a click korle X button a o click hobe autometically
  useEffect(() => {
    if (byFilter || closeFilterBuy) {
      closeButtonRef?.current.click();
      // setByFilter(false);
    }
  }, [byFilter, closeFilterBuy]);

  return (
    <div>
      {/* Modal start */}
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
        <dialog id="filterModal_2" className="modal-middle md:modal  ">
          <div className="modal-box w-11/12 max-w-full bg-white">
            <BuyFilter
              closeFilterBuy={closeFilterBuy}
              setCloseFilterBuy={setCloseFilterBuy}
            ></BuyFilter>
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

      <div className="flex justify-between items-center my-4 mx-4 md-mx-0">
        <div>
          {
            // postCount &&
            <p>
              {postCount} ads in {location_1}, {location_2}
            </p>
          }
        </div>

        {/* <h1 className="w-6/12 text-center bg-green-400 mx-auto m-10 sticky top-0">
          Page Number: {pageNumber}
        </h1>
        <button className="btn btn-primary" onClick={handleAddData}>
          Add
        </button> */}

        <button
          className="btn btn-outline"
          onClick={() => document.getElementById("filterModal_2").showModal()}
        >
          <FiSliders />
          Filter <FiChevronDown />
        </button>
        {/* <Link to={'/buypost'}> <button className='btn btn-success'>Post</button> </Link> */}
      </div>

      <div className="">
        {buys?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4  md:gap-x-6 gap-y-6 gap-x-0 mx-5 overflow-auto ">
            {buys.map((buy, idx) => (
              <BuyCard key={idx} buy={buy} forBuy={"forBuy"}></BuyCard>
            ))}
          </div>
        ) : (
          <p>Nothig to Show</p>
        )}
      </div>

      <div ref={loadingRef}>
        {/* <p>Loading</p> */}
        <span className="loading loading-spinner text-warning"></span>
      </div>
    </div>
  );
};

export default Buy;
