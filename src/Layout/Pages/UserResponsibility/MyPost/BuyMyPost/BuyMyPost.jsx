import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import axios from "axios";
import BuyCard from "../../../Buy/BuyCard/BuyCard";

const BuyMyPost = () => {
  const { uId, successfullMessage, baseUrl } = useContext(AuthContext);

  const [refress, setRefress] = useState(true);
  const handleRefresh = () => {
    setRefress(!refress);
  };

  const [myPost, setMyPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (uId) {
      axios.get(`${baseUrl}/pro/user/mypost?uid=${uId}&page=1`).then((res) => {
        setMyPost(res.data);
        setIsLoading(false);
      });
    }
  }, [uId, refress]);

  if (isLoading) {
    return <h1>Data is Comming.....</h1>;
  }

  return (
    <div>
      <h1>My Post(BUY)</h1>
      <div className="">
        {myPost?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {myPost?.map((buy, idx) => (
              <BuyCard
                key={idx}
                buy={buy}
                myPostBuy={"myPostBuy"}
                handleRefresh={handleRefresh}
              ></BuyCard>
            ))}
          </div>
        ) : (
          <h1 className="text-center">No Post</h1>
        )}
      </div>
    </div>
  );
};

export default BuyMyPost;
