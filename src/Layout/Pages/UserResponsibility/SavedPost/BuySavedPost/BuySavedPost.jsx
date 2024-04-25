import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";
import BuyCard from "../../../Buy/BuyCard/BuyCard";
import RentCardSkl from "../../../Home/Rent/Rent/RentCardSKL/RentCardSkl";

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

  const [savedBuyPageNumber, setSavedBuyPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const savedInfoRent = {
    uid: uId,
    page: savedBuyPageNumber,
  };

  useEffect(() => {
    axios.post(`${baseUrl}/pro/save/post/get`, savedInfoRent).then((res) => {
      setSavedPost(res.data);
      setIsLoading(false);
    });
  }, [uId, refress, savedBuyPageNumber]);

  console.log("Buy Saved Post: ", savedPost);

  if (isLoading) {
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
    <div className="mt-10">
      {/* <p className="w-full h-[670px] bg-green-500"></p> */}
      <div className="">
        {savedPost?.length > 0 ? (
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
        ) : (
          <h1 className="text-center">No Saved Post</h1>
        )}
      </div>
      <div className="text-center">
        <p ref={loadingRef}></p>
      </div>
    </div>
  );
};

export default BuySavedPost;
