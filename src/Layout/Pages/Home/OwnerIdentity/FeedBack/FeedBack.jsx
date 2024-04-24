import { NearMeOutlined } from "@mui/icons-material";
import React from "react";
import FeedBackImage from "./FeedBackImage/FeedBackImage";
import GoToTop from "../../../../../Function/GoToTop";

const FeedBack = () => {
  return (
    <div>
      <GoToTop />
      <div>
        <h1>
          Feedback wanted! Enhance our website? Suggestions for extra features?
        </h1>
        <p>Let us know! 🌟</p>
      </div>

      <div>
        <p>Select image</p>
        <div>
          <FeedBackImage></FeedBackImage>
        </div>
      </div>

      <div className="p-3 overflow-auto">
        <h1>Text</h1>
        <div className="bg-[#F3F3F3] h-[150px] md:h-[250px] p-4 md:p-5 rounded-md relative overflow-hidden">
          <textarea
            className="bg-white w-full h-full  px-5 py-2"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
      <button className="absolute bottom-10 right-10 bg-[#D0E4FF] rounded-lg p-4 md:p-5 shadow-xl">
        <NearMeOutlined /> Send
      </button>
    </div>
  );
};

export default FeedBack;
