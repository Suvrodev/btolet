import React from "react";

const RentCardSkl = () => {
  return (
    <div className="flex flex-col relative border  rounded-md m-2 md:m-0   h-[420px] md:h-[480px] ">
      <div className="relative ">
        <div className="w-full h-[200px] md:h-[250px] rounded-m">
          <div
            className="w-full h-[190px] md:h-[250px] rounded-tl-md rounded-tr-md sklLoading"
            alt=""
          />
        </div>

        {/* Family Taka Location Start */}
        <div className="py-3 md:py-2 px-4  h-[110px] md:h-[115px]  flex flex-col gap-0 ">
          <p className="roboto text-2xl  prText -mb-1 md:mb-0 h-[16px] sklLoading"></p>

          <span className="text-xl font-bold h-[24px] mt-2 sklLoading"></span>

          <p className="flex gap-2 items-center my-2 prText">
            <span className="h-[24px] w-4/12 mt-2 sklLoading"></span>
          </p>
        </div>
        {/* Family Taka Location Start */}

        <div className=" h-[45px]  ">
          <div className="p-5 h-[45px] text-black opacity-60   "> </div>
        </div>

        <div className="h-[2px] w-full bg-black opacity-10"> </div>

        {/* Contact Part start */}
        <div className="py-5 px-2 flex gap-2 justify-around items-center h-[50px] md:h-[60px]  ">
          <div className="w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full sklLoading" />
          <div className="flex gap-2 items-center left-2 relative">
            <p className="text-black opacity-70 sklLoading w-[100px] h-[10px]"></p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]  rounded-lg flex items-center justify-center text-white font-bold sklLoading"></button>
            <button className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]  rounded-lg flex items-center justify-center text-white font-bold sklLoading"></button>
            <button className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]  rounded-lg flex items-center justify-center text-white text-xl sklLoading"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCardSkl;
