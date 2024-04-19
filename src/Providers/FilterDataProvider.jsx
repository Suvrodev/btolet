import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

export const FilterDataContext = createContext("");
const FilterDataProvider = ({ children }) => {
  const {
    baseUrl,
    lattitude,
    longitude,
    selectedAmenities,
    selectedFacilities,
  } = useContext(AuthContext);

  const [byFilter, setByFilter] = useState(false);
  const [byFilterRent, setByFilterRent] = useState(false);

  const MAX_PRICE_RENT = 50000;
  const MAX_PRICE_BUY = 10000000;

  const [minPriceRent, setMinPriceRent] = useState(0);
  const [maxPriceRent, setMaxPriceRent] = useState(50000);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);

  const [selectedRentCategory, setSelectedRentCategory] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);

  ////Property
  const [selectedCategoriesBuySort, setSelectedCategoriesBuySort] = useState(
    []
  );

  const [bedDep, setBedDep] = useState(false);
  const [bathDep, setBathDep] = useState(false);
  const [priceDep, setPriceDep] = useState(false);
  const [categoryRentDep, setCategoryRentDep] = useState(false);
  const [categoryBuyDep, setCategoryBuyDep] = useState(false);

  /***
   * Rent Data Retrive start
   */

  console.log("By Filter Rent: ", byFilterRent);

  const [rents, setRents] = useState([]);
  const [rentPageNumber, setRentPageNumber] = useState(1);
  const [searchingRent, setSearchingRent] = useState(true);

  const rentFilterBody = {
    geolat: lattitude,
    geolon: longitude,
    rentmin: minPriceRent,
    rentmax: maxPriceRent,
    page: 1,
    category: selectedRentCategory,
    fasalitis: selectedFacilities,
    bed: selectedBedrooms,
    bath: selectedBathrooms,
  };
  console.log("Rent Filter Body: ", rentFilterBody);

  useEffect(() => {
    if (!byFilterRent) {
      console.log("Up Condition (Buy Filter Rent):::::", byFilterRent);
      fetch(
        `${baseUrl}/tolet/postlist?page=${rentPageNumber}&geolat=${lattitude}&geolon=${longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            setSearchingRent(false);
          }
          const newData = [...rents, ...data];
          setRents(newData);
        })
        .catch((error) => {
          console.log("Error Fetch: ", error);
          setSearchingRent(false);
        });
    } else {
      console.log("Down Condition (Buy Filter Rent):::::", byFilterRent);
      axios
        .post(`${baseUrl}/tolet/sort/postlist`, rentFilterBody)
        .then((res) => {
          setRents(res.data);
        });
    }
  }, [
    rentPageNumber,
    byFilterRent,
    bedDep,
    bathDep,
    priceDep,
    categoryRentDep,
  ]);

  /***
   * Rent Retrive data end
   */

  /**
   * Buy Data retrive start
   */

  const [pageNumber, setPageNumber] = useState(0);
  const [buys, setBuys] = useState([]);
  const [searchingBuy, setSearchingBuy] = useState(true);

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

  useEffect(() => {
    if (!byFilter) {
      fetch(
        `${baseUrl}/pro/postlist?page=${pageNumber}&geolat=${lattitude}&geolon=${longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            setSearchingBuy(false);
          }
          const newData = [...buys, ...data];
          setBuys(newData);
        });
    } else {
      axios.post(`${baseUrl}/pro/sort/postlist`, filterBody).then((res) => {
        setBuys(res.data);
        console.log(
          "Property Sort Data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++: ",
          res.data
        );
        // console.log("------------------------------------------------------------------------------Buy Filter(else)(2)",byFilter);
      });
    }
  }, [pageNumber, byFilter, bedDep, bathDep, priceDep, categoryBuyDep]);

  // useEffect(() => {
  //   if (byFilter) {
  //     axios.post(`${baseUrl}/pro/sort/postlist`, filterBody).then((res) => {
  //       const newData = [...buys, ...res.data];
  //       setBuys(newData);
  //       console.log("Property Sort Data*****************************: ", buys);
  //     });
  //   }
  // }, [byFilter, pageNumber]);

  /**
   * Buy Data retrive end
   */

  const filterDataContextInfo = {
    byFilter,
    setByFilter,
    byFilterRent,
    setByFilterRent,
    selectedRentCategory,
    setSelectedRentCategory,
    selectedBathrooms,
    setSelectedBathrooms,
    selectedBedrooms,
    setSelectedBedrooms,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minPriceRent,
    setMinPriceRent,
    maxPriceRent,
    setMaxPriceRent,
    MAX_PRICE_RENT,
    MAX_PRICE_BUY,
    ////Property
    selectedCategoriesBuySort,
    setSelectedCategoriesBuySort,

    /////
    searchingRent,
    setSearchingRent,
    searchingBuy,
    buys,
    setBuys,
    rents,
    setRents,
    pageNumber,
    setPageNumber,
    rentPageNumber,
    setRentPageNumber,

    ////Dependency for short short
    bedDep,
    bathDep,
    priceDep,
    categoryBuyDep,
    categoryRentDep,
    setBedDep,
    setBathDep,
    setPriceDep,
    setCategoryRentDep,
    setCategoryBuyDep,
  };
  return (
    <FilterDataContext.Provider value={filterDataContextInfo}>
      {children}
    </FilterDataContext.Provider>
  );
};

export default FilterDataProvider;
