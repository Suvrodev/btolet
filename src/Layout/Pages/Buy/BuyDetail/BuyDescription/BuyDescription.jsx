import { DensityMediumOutlined } from "@mui/icons-material";
import React from "react";
import { FiMenu } from "react-icons/fi";

const BuyDescription = ({ description, post_id }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center prText">
        <h1 className=" text-2xl flex items-center gap-2 my-6 ">
          {" "}
          <FiMenu className="text-[#8595A9] opacity-50" />{" "}
          <span className="ml-4">Description</span>
        </h1>
        {/* <p>id: {post_id}</p> */}
      </div>
      <p
        className={`bg-[#E6E8FF] p-5 rounded-md text-[14px] md:text-[20px] leading-8 md:leading-10 ${
          post_id ? "" : "sklLoading"
        }`}
      >
        <span className="opacity-70">
          {description ? description : "No Description"}
        </span>
      </p>
    </div>
  );
};

export default BuyDescription;
