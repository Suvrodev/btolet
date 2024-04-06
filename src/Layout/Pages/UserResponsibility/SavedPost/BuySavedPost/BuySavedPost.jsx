import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";
import BuyCard from "../../../Buy/BuyCard/BuyCard";

const BuySavedPost = () => {
  const { uId, successfullMessage, baseUrl } = useContext(AuthContext);
  const [savedPost, setSavedPost] = useState([]);

  const [refress, setRefress] = useState(true);
  const loadingRef = useRef(null);

  const handleRefresh = () => {
    setRefress(!refress);
    setSavedPost([]);
  };

  console.log("Refresh: ", refress);

  const [savedBuyPageNumber, setSavedBuyPageNumber] = useState(0);
  const savedInfoRent = {
    uid: uId,
    page: savedBuyPageNumber,
  };

  useEffect(() => {
    axios.post(`${baseUrl}/pro/save/post/get`, savedInfoRent).then((res) => {
      const comeData = res.data;
      // if (savedBuyPageNumber == 1) {
      //   setSavedPost(comeData);
      // }
      // if (savedBuyPageNumber > 1) {
      if (comeData.length > 0) {
        const newData = [...savedPost, ...res.data];
        setSavedPost(newData);
        // }
      }
    });
  }, [uId, refress, savedBuyPageNumber]);

  //Ovserver start
  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      let output = items[0].isIntersecting;
      console.log({ output });
      // if (output && searchingRent) {
      if (output) {
        setSavedBuyPageNumber((prevPageNumber) => prevPageNumber + 1);
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
  }, []);
  console.log(
    "Saved Buy Page Numberrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr: ",
    savedBuyPageNumber
  );

  ////Ovserver end

  console.log("Buy Saved Post: ", savedPost);

  return (
    <div className="mt-10">
      {/* <p className="w-full h-[670px] bg-green-500"></p> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {savedPost.map((buy, idx) => (
          <BuyCard
            key={idx}
            buy={buy}
            savedBuy={"savedBuy"}
            handleRefresh={handleRefresh}
          ></BuyCard>
        ))}
      </div>
      <div className="text-center">
        <p ref={loadingRef}>Loading</p>
      </div>
    </div>
  );
};

export default BuySavedPost;
