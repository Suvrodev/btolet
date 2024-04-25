import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";
import RentCard from "../../../Home/Rent/RentCard/RentCard";
import RentCardSkl from "../../../Home/Rent/Rent/RentCardSKL/RentCardSkl";

const RentSavedPost = () => {
  const { uId, successfullMessage, baseUrl } = useContext(AuthContext);

  const [refress, setRefress] = useState(true);

  const handleRefresh = () => {
    setRefress(!refress);
  };

  console.log("Refresh: ", refress);

  const savedInfoRent = {
    uid: uId,
    page: 1,
  };

  const [savedPost, setSavedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.post(`${baseUrl}/tolet/save/post/get`, savedInfoRent).then((res) => {
      setSavedPost(res.data);
      setIsLoading(false);
    });
  }, [uId, refress]);

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
      <div className="">
        {savedPost?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {savedPost?.map((rent, idx) => (
              <RentCard
                key={idx}
                r={rent}
                savedRent={"savedRent"}
                handleRefresh={handleRefresh}
              ></RentCard>
            ))}
          </div>
        ) : (
          <h1 className="text-center">No Saved Post</h1>
        )}
      </div>
      <div className="text-center">
        <p></p>
      </div>
    </div>
  );
};

export default RentSavedPost;
