import React, { useState } from "react";

const Toogle = () => {
  const [showBuy, setShowBuy] = useState(true);
  const handleToogle = () => {
    setShowBuy(!showBuy);
  };
  console.log("Buy: ", showBuy);

  return (
    <div className="text-black">
      <div className="relative w-[120px] cursor-pointer" onClick={handleToogle}>
        <h1 className=" bg-green-400 w-[120px] h-[40px] rounded-2xl"></h1>
        <p
          className={`bg-blue-500 w-[40px] h-[40px] rounded-full absolute top-0 transition-all duration-500 ease-in-out ${
            showBuy ? "-left-[3px]" : "right-0"
          }`}
        ></p>

        <h1
          className={`absolute transform  top-1/2 right-10 -translate-y-1/2 ${
            showBuy ? "" : "hidden"
          }`}
        >
          Buy
        </h1>
        <h1
          className={`absolute transform top-1/2 left-10 -translate-y-1/2  ${
            showBuy ? "hidden" : ""
          }`}
        >
          Rent
        </h1>
      </div>
    </div>
  );
};

export default Toogle;
