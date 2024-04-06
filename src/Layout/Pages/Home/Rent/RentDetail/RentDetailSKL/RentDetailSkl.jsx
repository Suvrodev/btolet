import React from "react";
import BuyDescription from "../../../../Buy/BuyDetail/BuyDescription/BuyDescription";
import { FiMenu } from "react-icons/fi";
import RentCardSkl from "../../Rent/RentCardSKL/RentCardSkl";

const RentDetailSkl = () => {
  return (
    <div className={`mt-10 md:m-0 `}>
      <div className="md:hidden ">
        <div className="contactFooter ">
          <div className="w-full flex items-center justify-between gap-0 md:gap-2">
            <div className="btn sklLoading border-0 w-[100px]"></div>
            <div className="btn sklLoading border-0 w-[100px]"></div>
            <div className="btn sklLoading border-0 w-[100px]"></div>
          </div>
        </div>
      </div>

      <div className="detailParent">
        {/* Left Div start */}
        <div className="w-full detailParentLeftdiv">
          {/* Image Map Start */}
          <div className="flex flex-col md:flex-row gap-1 w-full h-[260px] md:h-[500px] ">
            {/* Slider Image For Desktop and Mobile Start */}
            <div
              className={`w-full md:w-[60%] h-full rounded-md p-0 md:p-0 sklLoading`}
            ></div>
            {/* Slider Image For Desktop and Mobile end */}

            {/*  Map for Desktop Start */}
            <div className="hidden md:flex w-[40%] h-full  flex-col  rounded-xl sklLoading">
              <div
                className={`h-full w-[80%] md:w-full mx-auto rounded-xl sklLoading}`}
              ></div>
            </div>
            {/*  Map for Desktop Start */}
          </div>
          {/* Image Map end */}

          {/* Take for all And Contact For Desktop Start */}
          <div className="my-4 flex justify-between items-center rounded-md px-4 md:px-0">
            <div
              className={`text-2xl md:text-3xl robot  text-black opacity-60`}
            >
              <p className="w-[150px] md:w-[576px] h-[14px] sklLoading"></p>
              <p className="w-[150px] md:w-[576px] h-[14px] mt-3 sklLoading"></p>
            </div>
            <div className={`hidden md:block `}>
              <div className="flex gap-2">
                <div className="btn sklLoading border-0 w-[100px]"></div>
                <div className="btn sklLoading border-0 w-[100px]"></div>
                <div className="btn sklLoading border-0 w-[100px]"></div>
              </div>
            </div>
          </div>
          {/* Take for all And Contact For Desktop end */}

          {/* Bed Bath Icon Start */}
          {/* <div>Icon Div</div> */}
          {/* Bed Bath Icon End */}

          {/* div for 1 line */}
          <div className="w-full h-[1px] bg-black opacity-20 my-4"></div>

          {/* Location Remaining Days and Share for Desktop start */}
          <div
            className={`flex justify-between items-center prText w-full md:w-full  `}
          >
            {/* Location Image and Location start */}
            <div className="my-4 flex items-center gap-4 px-3 md:px-0 ">
              <div className="w-[50px] h-[50px] border-2 rounded-full p-2  flex items-center justify-center ">
                <div className="w-[25px] h-[25px] md:h-full md:w-full rounded-full sklLoading"></div>
              </div>
              <p className="hidden md:block text-lg font-bold w-[576px] h-[14px] sklLoading"></p>
              <p className="md:hidden text-sm w-[150px] h-[14px] sklLoading "></p>
            </div>
            {/* Location Image and Location end */}

            {/* Time Ago start */}
            <div className="flex gap-4 justify-start md:justify-end items-center w-[23%]   ">
              <div className=" text-sm md:text-xl h-[14px] w-[75px] sklLoading"></div>
            </div>
            {/* Time Ago End */}
          </div>
          {/* Location Remaining Days and Share for Desktop end */}

          <div className="h-[30px] w-full bg-[#DEDEE0]"></div>

          {/* Details Start */}
          <section className={`px-3 md:px-0  `}>
            <div className="flex justify-between items-center prText ">
              <h1 className="text-xl my-4">Details</h1>
              <p className="h-[14px] w-[75px] sklLoading"></p>
            </div>
            <div
              className={`w-full md:w-[750px] p-0 rounded-md grid grid-cols-2 gap-x-10 gap-y-4`}
            >
              <p className="h-[14px] w-[150px] md:w-[250px]  sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px] sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px]  sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px] sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px]  sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px] sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px]  sklLoading"></p>
              <p className="h-[14px] w-[150px] md:w-[250px] sklLoading"></p>
              <p></p>
            </div>
          </section>
          {/* Details End */}

          {/* <div className="h-[1px] w-full  my-[25px]  customBorder "></div> */}

          <div className="px-3 md:p-0 ">
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
                className={`h-[150px] p-5 rounded-md text-[14px] md:text-[20px] sklLoading`}
              >
                <span className="opacity-70 sklLoading"></span>
              </p>
            </div>
          </div>

          {/* Map For Mobile start */}
          <div className="md:hidden h-[150px] w-full px-3 rounded-xl ">
            <h1>In Map: </h1>
            <div className="rounded-xl w-full h-[150px] sklLoading"></div>
          </div>
          {/* Map For Mobile end */}
        </div>
        {/* Left Div End */}

        {/* More Post */}

        {/* For Desktop Device start */}
        <div className="w-full  detailParentRightdiv  hidden md:block">
          <div className="flex flex-no-wrap overflow-x-scroll md:flex-col gap-5 ">
            <RentCardSkl />
            <RentCardSkl />
            <RentCardSkl />
            <RentCardSkl />
          </div>
        </div>
        {/* For Desktop Device end */}

        {/* For Mobile Device start */}
        <div className="w-full detailParentRightdiv overflow-x-auto md:hidden h-[500px] mb-20 px-3  ">
          <div className="flex flex-nowrap md:overflow-x-auto">
            <RentCardSkl />
            <RentCardSkl />
            <RentCardSkl />
            <RentCardSkl />
          </div>
        </div>
        {/* For Mobile Device end */}

        {/* More Post End */}
      </div>
    </div>
  );
};

export default RentDetailSkl;
