import { NearMeOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./FeedBack.css";

import FeedBackImage from "./FeedBackImage/FeedBackImage";
import GoToTop from "../../../../../Function/GoToTop";

const FeedBack = () => {
  const [inputText, setInputText] = useState("");
  const [collectedText, setCollectedText] = useState("");
  const handleFeedbackText = (e) => {
    setInputText(e.target.value);
  };

  const [selectedImages, setSelectedImages] = useState([]);
  console.log("Selected Image: ", selectedImages);

  const handleFeedBack = () => {
    console.log("Feedback Button: ", inputText);
  };
  return (
    <div className="prText p-3 md:p-0">
      <GoToTop />
      <div className="mt-20 md:mt-0 feedbackText text-[12px] md:text-[16px] ">
        <h1 className="leading-6">
          Feedback wanted! Enhance our website? Suggestions for extra features?
        </h1>
        <p className="mt-6">Let us know! 🌟</p>
      </div>

      <div>
        <p className="mt-6 text-[12px] md:text-[16px]">Select image</p>
        <div>
          <FeedBackImage
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          ></FeedBackImage>
        </div>
      </div>

      <div className="p-3 overflow-auto">
        <h1>Text</h1>
        <div className="bg-[#F3F3F3] h-[150px] md:h-[250px] p-4 md:p-5 rounded-md relative overflow-hidden">
          <textarea
            onChange={handleFeedbackText}
            className="bg-white w-full h-full  px-5 py-2 outline-none"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
      <button
        onClick={handleFeedBack}
        className="absolute bottom-10 right-10 bg-[#D0E4FF] rounded-lg p-4 md:p-5 shadow-xl"
      >
        <NearMeOutlined /> Send
      </button>
    </div>
  );
};

export default FeedBack;
