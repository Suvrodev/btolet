import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";
import RentCard from "../../../Home/Rent/RentCard/RentCard";

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
  useEffect(() => {
    axios.post(`${baseUrl}/tolet/save/post/get`, savedInfoRent).then((res) => {
      setSavedPost(res.data);
    });
  }, [uId, refress]);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {savedPost.map((rent, idx) => (
          <RentCard
            key={idx}
            r={rent}
            savedRent={"savedRent"}
            handleRefresh={handleRefresh}
          ></RentCard>
        ))}
      </div>
      <div className="text-center">
        <p>Loading</p>
      </div>
    </div>
  );
};

export default RentSavedPost;
