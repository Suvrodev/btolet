import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../../Providers/AuthProvider";
import ObserverCard from "../ObserverCard/ObserverCard";
import GoToTop from "../../../../../../../Function/GoToTop";

import { useInView } from "react-intersection-observer";
import RentCardSkl from "../../../../Rent/Rent/RentCardSKL/RentCardSkl";

const Observer = () => {
  const {
    baseUrl,
    lattitude,
    longitude,
    selectedAmenities,
    selectedFacilities,
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [prevPageNumber, setPrevPageNumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [buys, setBuys] = useState([]);
  const [dep, setDep] = useState(true);
  const [allDataget, setAllDataGet] = useState(false);

  useEffect(() => {
    fetch(
      `${baseUrl}/pro/postlist?page=${pageNumber}&geolat=${lattitude}&geolon=${longitude}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (pageNumber > prevPageNumber) {
          const newData = [...buys, ...data];
          setBuys(newData);
          if (data.length === 0) {
            setAllDataGet(true);
          }
        } else {
          setBuys(data);
          setLoading(false);
        }
      });
    setPrevPageNumber(pageNumber);
  }, [pageNumber, dep]);

  const handleCheckDependency = () => {
    setDep(!dep);
  };

  //Observer start
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);
  //Observer end

  console.log("In View: ", inView);
  console.log("Page Number: ", pageNumber);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <RentCardSkl />
        <RentCardSkl />
        <RentCardSkl />
        <RentCardSkl />
      </div>
    );
  }

  return (
    <div className="bg-blue-400">
      <GoToTop />
      <div>
        <h1 className="text-center">All Data of Property</h1>
        <div className="flex justify-center">
          <div className="w-full md:w-[750px] h-[350px] bg-green-500 flex items-center justify-center">
            <div className="w-[150px] h-[150px] bg-red-500 rounded-full"></div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleCheckDependency}>
            Check Dependency
          </button>
          <h1>Dep: {dep + ""} </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {buys.map((buy, idx) => (
            <ObserverCard key={idx} buy={buy} dep={dep}></ObserverCard>
          ))}
        </div>
        <div>
          <h1
            className={`text-center font-bold text-2xl ${
              buys.length > 0 ? "" : "hidden"
            }  ${allDataget ? "hidden" : ""}`}
            ref={ref}
          >
            Loading
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Observer;
