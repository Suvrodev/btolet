import React, { useContext, useEffect, useState } from "react";
import "./BuyDetail.css";

import { useLocation, useParams } from "react-router-dom";

import locationColorImage from "../../../../assets/icons/home/map.svg";
import { FaBath, FaBed, FaCheck, FaCheckCircle, FaShare } from "react-icons/fa";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

import GoogleMapReact from "google-map-react";
import noImage from "../../../../assets/Image/NoImage.jpg";
import BuySlider from "./BuySlider/BuySlider";
import BuyDescription from "./BuyDescription/BuyDescription";
import BuyMap from "./BuyMap/BuyMap";
import chekImage from "../../../../assets/icons/property/check.svg";

import BuyDetailsHomeData from "./BuyDetailsHomeData/BuyDetailsHomeData";
import BuyDetailsLandData from "./BuyDetailsLandData/BuyDetailsLandData";
import ContactButtons from "./ContactButtons/ContactButtons";
import BuyCard from "../BuyCard/BuyCard";
import { AuthContext } from "../../../../Providers/AuthProvider";
import {
  AccessTimeOutlined,
  CheckOutlined,
  ConstructionOutlined,
  DomainOutlined,
  Favorite,
  FavoriteBorderOutlined,
  HomeOutlined,
  PermIdentityOutlined,
  ShareLocationOutlined,
} from "@mui/icons-material";
import { FiShare2 } from "react-icons/fi";
import calculateTimeAgo from "../../../../Function/TimeAgo";
import BannerSwipperComponent from "../../SharedPage/Banner/BannerSwipperComponent/BannerSwipperComponent";
import ImageZoom from "../../UserResponsibility/Check/ImageZoom/ImageZoom";
import convertDate from "../../../../Function/DateConvert";
import buyPostshare from "../../../../Function/BuyPostShare";
import trunCateWord from "../../../../Function/TrunCate";
import numberToWord from "../../../../Function/ToCrore";
import RentDetailSkl from "../../Home/Rent/RentDetail/RentDetailSKL/RentDetailSkl";
import waterMarkImage from "../../../../assets/Image/WaterMark.png";

const BuyDetail = () => {
  const {
    uId,
    successfullMessage,
    baseUrl,
    currentUser,
    unSuccessFullMessage,
  } = useContext(AuthContext);
  const { id } = useParams();
  console.log("Comming id: ", id);
  const currentLocation = useLocation(); // Get the location object
  const { state } = currentLocation; // Access the state object
  //  console.log("State: ",state);
  let { lat, lon } = state || {};

  //  console.log("lat: ",lat," lon: ",lon);

  const [allData, setAllData] = useState("");
  useEffect(() => {
    fetch(`${baseUrl}/pro/post?pid=${id}`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [id]);

  console.log("All Data: ", allData);

  const {
    pid,
    uid,
    amenities,
    area,
    balcony,
    bath,
    bed,
    category,
    description,
    dining,
    drawing,
    emi,
    facing,
    floor_plan,
    floornumber,
    geolat,
    geolon,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    kitchen,
    land_type,
    location,
    locationfull,
    measurement,
    name,
    ownertype,
    payment,
    price,
    procondition,
    road_size,
    sellfrom,
    shortaddress,
    size,
    status,
    time,
    top_ads,
    total_floor,
    total_unit,
    phone,
    wapp,
    yt_video,
  } = allData;

  // Convert the rent to Bangladeshi Taka style start

  let buyCrorePrice;
  if (price) {
    buyCrorePrice = numberToWord(price);
  }
  console.log("Buy Crore Price", buyCrorePrice);
  // const x = numberToWord(price ? price : 0);
  const formattedRent = price?.toLocaleString("en-US");
  // Convert the rent to Bangladeshi Taka style end

  //Time Start
  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    setTimeAgo(calculateTimeAgo(time));
  }, [time]);

  ////Time End

  ////Buy More Post Start
  const rentMorePostInfo = {
    postid: pid,
    category: category,
    page: 1,
    geolat,
    geolon,
  };
  const [moreBuyPost, setMoreBuyPost] = useState([]);
  useEffect(() => {
    if (geolat && geolon) {
      fetch(`${baseUrl}/pro/more/post`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rentMorePostInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setMoreBuyPost(data);
        });
    }
  }, [geolat, geolon]);
  // console.log("More Buy: ",moreBuyPost);
  ////Buy More Post End

  ////Sell From start
  let sellfrom_ = new Date(sellfrom);
  const options = {
    day: "numeric",
    month: "long", // "long" specifies full month name
    year: "numeric",
  };
  sellfrom_ = sellfrom_.toLocaleDateString("en-US", options);

  //////Self From
  const [myDate, setMyDate] = useState("");
  useEffect(() => {
    if (sellfrom_) {
      setMyDate(convertDate(sellfrom_));
    }
  }, [sellfrom_]);
  ////Sell From end

  ///Set Image for Slider Start
  let imagesForSlider = [];
  if (image1) {
    imagesForSlider.push(image1);
  }
  if (image2) {
    imagesForSlider.push(image2);
  }
  if (image3) {
    imagesForSlider.push(image3);
  }
  if (image4) {
    imagesForSlider.push(image4);
  }
  if (image5) {
    imagesForSlider.push(image5);
  }
  if (image6) {
    imagesForSlider.push(image6);
  }
  if (image7) {
    imagesForSlider.push(image7);
  }
  if (image8) {
    imagesForSlider.push(image8);
  }
  if (image9) {
    imagesForSlider.push(image9);
  }
  if (image10) {
    imagesForSlider.push(image10);
  }
  if (image11) {
    imagesForSlider.push(image11);
  }
  if (image12) {
    imagesForSlider.push(image12);
  }

  //  console.log("All Image: ",imagesForSlider);
  //  console.log("Type of Images: ",typeof(imagesForSlider));
  //  console.log("Length of Image: ",imagesForSlider.length);

  ///Set Image for Slider End

  ///Youtube Video start

  const opts = {
    height: "200",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const [ytId, setYtId] = useState("");
  useEffect(() => {
    if (yt_video) {
      //   console.log("Youtube Video Link: ", yt_video);
      setYtId(getYouTubeID(yt_video));
    }
  }, [yt_video]);
  //   console.log("YT ID: ",ytId);

  ///Youtube Video End

  ///Map Start

  ///Map End

  ///////Important feature start
  let bedBathImportant = [];
  let roadSizeSotangso = [];
  ///Bed Bath Start
  if (bed) {
    bedBathImportant.push(bed);
  }
  if (bath) {
    bedBathImportant.push(bath);
  }
  if (kitchen) {
    bedBathImportant.push(kitchen);
  }
  if (dining) {
    bedBathImportant.push(dining);
  }
  if (drawing) {
    bedBathImportant.push(drawing);
  }
  if (balcony) {
    bedBathImportant.push(balcony);
  }
  if (size) {
    bedBathImportant.push(size);
  }
  if (facing) {
    bedBathImportant.push(facing);
  }
  if (total_floor) {
    bedBathImportant.push(total_floor);
  }
  if (floornumber) {
    bedBathImportant.push(floornumber);
  }
  if (total_unit) {
    bedBathImportant.push(total_unit);
  }
  if (emi) {
    bedBathImportant.push(emi);
  }
  //    console.log("BedBath Important: ",bedBathImportant);
  ///Bed Bath end

  ///Road Size start
  if (measurement) {
    roadSizeSotangso.push(measurement);
  }
  if (road_size) {
    roadSizeSotangso.push(road_size);
  }
  if (emi) {
    roadSizeSotangso.push(emi);
  }
  ///Road Size end

  // console.log("roadSizeSotangso Important: ",roadSizeSotangso);

  ///////Important feature end

  /***
   * Save and Unsave start
   */
  const saveInfo = {
    uid: uId,
    pid: pid,
    status: true,
  };

  const unSaveInfo = {
    uid: uId,
    pid: pid,
    status: false,
  };

  const [save, setSave] = useState(false);
  const handleSave = () => {
    console.log("Blue chilo Save korbo");

    if (currentUser) {
      fetch(`${baseUrl}/pro/save/post`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            successfullMessage("Saved Successfully");
          }
        });
      setSave(!save);
    } else {
      unSuccessFullMessage("At First Log in");
    }
  };

  const handleUnSave = () => {
    console.log("Red Chilo UnSave korbo");
    if (uId) {
      fetch(`${baseUrl}/pro/save/post`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(unSaveInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            successfullMessage("UnSaved Successfully");
            handleRefresh();
          }
        });
    }
    setSave(!save);
  };

  /**
   * Save and Unsave end
   */

  //Loading Start
  if (!pid) {
    return <RentDetailSkl />;
  }
  //Loading End

  return (
    <div className="mt-10 m-0 md:m-0">
      <div className="md:hidden">
        <footer className="contactFooter">
          <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
        </footer>
      </div>

      <div className="detailParent">
        {/* Left Div start */}
        <div className="w-full detailParentLeftdiv">
          {/* Image Map Start */}
          <div className="flex flex-col md:flex-row gap-1 w-full h-[260px] md:h-[500px] ">
            {/* Slider Image For Desktop and Mobile Start */}
            <div className="w-full md:w-[60%] h-full  p-0 md:p-0 relative ">
              <BannerSwipperComponent
                images={imagesForSlider}
                fullImage={true}
                autoscroll={true}
              ></BannerSwipperComponent>
              <div className="absolute bottom-0 right-0 md:bottom-10 md:right-10 ">
                <img
                  className="w-[120px] md:w-[150px] opacity-60"
                  src={waterMarkImage}
                  alt=""
                />
              </div>

              <div className="absolute top-6 right-20">
                <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
                  {save == true ? (
                    <Favorite onClick={handleUnSave} className="text-white" />
                  ) : (
                    <FavoriteBorderOutlined
                      onClick={handleSave}
                      className="text-white"
                    />
                  )}
                </p>
              </div>
              <div className="absolute top-6 right-10">
                <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
                  <FiShare2
                    onClick={() => buyPostshare(pid)}
                    className="text-white"
                  />
                </p>
              </div>
            </div>
            {/* Slider Image For Desktop and Mobile End */}

            {/* Floor Plan Image And Map for Desktop Start */}
            <div className="hidden md:flex w-full md:w-[40%] h-full  flex-col ">
              {floor_plan && (
                <div className="relative h-[50%] bg-red-500 z-10 phaseImageParent">
                  {floor_plan ? (
                    <>
                      <h1 className="absolute middle font-bold text-xl text-black bg-white p-2 rounded-md opacity-30">
                        Floor Plan
                      </h1>
                      <ImageZoom comeImage={floor_plan}></ImageZoom>
                    </>
                  ) : (
                    <>
                      <img
                        className="w-full h-full phaseImage z-20"
                        src={noImage}
                        alt=""
                      />
                    </>
                  )}
                </div>
              )}

              <div className={` ${floor_plan ? "h-[50%]" : "h-full"} `}>
                <BuyMap geolat={geolat} geolon={geolon}></BuyMap>
              </div>
            </div>
            {/* Floor Plan Image And Map for Desktop End */}
          </div>
          {/* Image Map end */}

          {/* Take for all And Contact For Desktop Start */}
          <div className="my-4 flex justify-between items-center rounded-md px-4 md:px-0">
            <div className="text-2xl md:text-3xl robot  text-black opacity-60">
              {price ? (
                <span className=" ">
                  {buyCrorePrice}
                  <span> BDT</span>
                </span>
              ) : (
                "Price On Call"
              )}
            </div>
            <FiShare2
              onClick={() => buyPostshare(id)}
              className="md:hidden relative -left-3"
            />

            <div className="hidden md:flex gap-4 items-center">
              <ContactButtons phone={phone} wapp={wapp}></ContactButtons>
            </div>
          </div>
          {/* Take for all And Contact For Desktop end */}

          {/* div for 1 line */}
          <div className="w-[95%] md:w-full mx-auto h-[1px] bg-black opacity-20 my-4"></div>

          {/* Location Remaining Days and Share for Desktop start */}
          <div className="flex justify-between items-center prText w-full md:w-full   ">
            {/* Location Image and Location start */}
            <div className="my-4 flex items-center gap-2  w-[77%] px-4 md:px-0  ">
              <div className="w-[50px] h-[50px] md:w-[50px] md:h-[50px]  border-2 rounded-full p-2  border-blue-500 flex items-center justify-center  ">
                <img
                  className="w-[25px] h-[25px] md:h-full md:w-full rounded-full"
                  src={locationColorImage}
                  alt=""
                />
              </div>
              <p className="hidden md:block text-lg font-bold truncate  ">
                {location}
              </p>

              <p className="md:hidden text-sm  ">
                {trunCateWord(location, 25)}
              </p>
            </div>
            {/* Location Image and Location end */}

            {/* Time Ago start */}
            <div className="flex gap-4 justify-start md:justify-end items-center w-[23%]   ">
              <div className=" text-sm md:text-xl">{timeAgo}</div>
              <FiShare2
                onClick={() => buyPostshare(id)}
                className="hidden md:block"
              />
            </div>
            {/* Time Ago End */}
          </div>
          {/* Location Remaining Days and Share for Desktop end */}

          {/* Land Type for Mobile Device start */}
          <div className="md:hidden  w-full">
            <div className="flex justify-center gap-1 my-4 w-full">
              {land_type.map((lt, idx) => (
                <p
                  key={idx}
                  className="border border-blue-500 p-2 rounded-full font-normal"
                >
                  {" "}
                  <span className="flex items-center gap-1 prText">
                    {" "}
                    <CheckOutlined />
                    <span className="text-[12px]">{lt}</span>
                  </span>{" "}
                </p>
              ))}
            </div>
          </div>
          {/* Land Type for Mobile Device end */}

          {/* Box Amenities Land Type Start */}
          <div className="flex  gap-0 md:gap-20 p-3 md:p-0 ">
            {/* Box For Desktop And Mobile Device start */}
            <div className="w-full md:w-[70%] bg-white ">
              {category === "House" || category === "Flat" ? (
                <div className=" border-2  grid grid-cols-4 md:grid-cols-4 gap-4 p-5 ">
                  {bedBathImportant.map((b, idx) => (
                    <BuyDetailsHomeData
                      key={idx}
                      b={b}
                      num={idx}
                    ></BuyDetailsHomeData>
                  ))}
                </div>
              ) : (
                <div
                  className={`border-2  grid ${
                    roadSizeSotangso.length == 3 ? "grid-cols-3" : "grid-cols-2"
                  }   `}
                >
                  {roadSizeSotangso.map((b, idx) => (
                    <BuyDetailsLandData
                      key={idx}
                      b={b}
                      num={idx}
                      area={area}
                    ></BuyDetailsLandData>
                  ))}
                </div>
              )}
            </div>
            {/* Box For Desktop And Mobile Device end */}

            {/* Amnenities and Land Type for Desktop start */}
            <div className="hidden md:flex w-[30%]    flex-col gap-4">
              <div className={`prText ${amenities.length > 0 ? "" : "hidden"}`}>
                <h1 className="text-xl font-bold mb-5">Amenities: </h1>

                <div className="grid grid-cols-2">
                  {amenities.map((a, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <p>
                        <FaCheckCircle className=" text-green-600" />
                      </p>
                      <p>{a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={land_type.length < 1 ? "hidden" : "prText"}>
                <h1 className="font-bold">Land Type:</h1>
                <div className="flex flex-wrap gap-4 my-4">
                  {land_type.map((lt, idx) => (
                    <p
                      key={idx}
                      className="border-2 border-blue-500 p-2 rounded-md"
                    >
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <CheckOutlined /> {lt}
                      </span>{" "}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Location Remain Days and Share for Desktop end */}

          {/* div for 1 line */}
          <div className="w-[95%] md:w-full mx-auto h-[1px] bg-black opacity-20 my-4"></div>

          {/* Details and Youtube video for Desktop and Mobile Start */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-40   prText ">
            <div className="w-full md:w-[30%] peText p-5">
              <h1 className="hidden md:block text-xl font-bold mb-2">
                Details:{" "}
              </h1>
              {name && (
                <div className="w-full md:w-[450px]  flex gap-2 mb-3">
                  <div className="w-[40%] flex items-start gap-1">
                    <HomeOutlined />
                    <p className="text-[14px] md:text-xl">Name</p>
                  </div>

                  <p className="w-[60%]  text-[14px] md:text-xl">{name}</p>
                </div>
              )}

              <div className="w-full md:w-[450px]  flex gap-2 mb-3">
                <div className="w-[40%]  flex items-start gap-1">
                  <DomainOutlined />
                  <p className="text-[14px] md:text-xl">Type</p>
                </div>
                <p className="w-[60%]  text-[14px] md:text-xl">{category}</p>
              </div>

              {procondition && (
                <div className="w-full md:w-[350px] flex gap-2 mb-3">
                  <div className="w-[40%] flex items-start gap-1">
                    <ConstructionOutlined />
                    <p className="text-[14px] md:text-xl">condition</p>
                  </div>
                  <p className="w-[60%] text-[14px] md:text-xl">
                    {procondition}
                  </p>
                </div>
              )}

              {sellfrom_ && (
                <div className="w-full md:w-[450px] flex gap-2 mb-3">
                  <div className="w-[40%] flex items-start gap-1">
                    <AccessTimeOutlined />
                    <p className="text-[14px] md:text-xl">Available from</p>
                  </div>
                  <p className="w-[60%] text-[14px] md:text-xl">{myDate}</p>
                </div>
              )}

              {shortaddress && (
                <div className="w-full md:w-[450px]  flex gap-2 mb-3">
                  <div className="w-[40%] flex items-start gap-1">
                    <ShareLocationOutlined />
                    <p className="text-[14px] md:text-xl ">Short Address</p>
                  </div>
                  <p className="w-[60%] text-[12px] md:text-xl ">
                    {shortaddress}
                  </p>
                </div>
              )}

              {ownertype && (
                <div className=" w-full md:w-[450px] flex gap-2">
                  <div className="w-[40%] flex items-center gap-1 ">
                    <PermIdentityOutlined />
                    <p className="text-[14px] md:text-xl ">Posted By</p>
                  </div>
                  <p className="w-[60%] text-[14px] md:text-xl ">{ownertype}</p>
                </div>
              )}
            </div>

            <div className="w-full md:w-[70%] flex justify-center ">
              {ytId && (
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold my-4">Youtube Video</h1>
                  <div className="flex items-center justify-center bg-green-500">
                    <YouTube videoId={ytId} opts={opts} />
                  </div>
                </div>
              )}
              {ytId && (
                <div className="md:hidden">
                  <h1 className="text-xl font-bold my-4">Youtube Video</h1>
                  <div className="flex items-center justify-center bg-green-500">
                    <YouTube videoId={ytId} className="w-full rounded-xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Details and Youtube Video for Desktop and Mobile end */}

          {/* Floor Plan for Mobile Device start */}
          <div className="md:hidden">
            {floor_plan && (
              <div>
                <div className="collapse border-2 border-blue-500 w-full collapse-arrow">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    Floor Plan
                  </div>

                  <div className="collapse-content">
                    <img
                      src={`data:image/jpeg;base64,${floor_plan}`}
                      className="rounded-xl"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Floor Plan for Mobile Device end */}

          {/* Amienities for Mobile device start */}
          <div className={`md:hidden px-5`}>
            <h1 className="text-xl mb-2 prText">Amenities: </h1>
            <div className={`grid grid-cols-2 `}>
              {amenities.map((a, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <p>
                    <FaCheckCircle className=" text-green-600" />
                  </p>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Amienities for Mobile device end*/}

          <div className="px-3">
            <BuyDescription
              description={description}
              post_id={id}
            ></BuyDescription>
          </div>

          {/* Map For Mobile start */}
          <div className="md:hidden h-[150px] w-full  rounded-xl px-3 ">
            <h1 className="prText">In Map: </h1>
            <BuyMap
              geolat={geolat}
              geolon={geolon}
              className="rounded-xl"
            ></BuyMap>
          </div>
          {/* Map For Mobile end */}
        </div>
        {/* Left Div End */}

        {/* Right Div for Desktop Start Start */}

        {/* More post for desktop screent start */}
        <div className="w-full px-4 detailParentRightdiv hidden md:block">
          <div className="grid  grid-cols-1 gap-5">
            {moreBuyPost &&
              moreBuyPost.map((buy, idx) => (
                <BuyCard key={idx} buy={buy} forBuy={"forBuy"}></BuyCard>
              ))}
          </div>
        </div>
        {/* More Post for desktop screen end */}
        {/* Right Div for Desktop Start End */}

        {/* Right Div for Mobile Start Start */}
        {/* For Mobile Device start */}

        <div className="w-full detailParentRightdiv overflow-x-auto md:hidden mb-[70px] px-3 ">
          <div className="flex gap-8 flex-nowrap md:overflow-x-auto">
            {moreBuyPost &&
              moreBuyPost.map((buy, idx) => (
                <div
                  key={idx}
                  className="w-10/12 md:w-screen  flex-none md:flex-grow-0 md:flex-shrink-0"
                >
                  <BuyCard buy={buy} forBuy={"forBuy"} />
                </div>
              ))}
          </div>
        </div>

        {/* For Mobile Device start */}
        {/* Right Div for Mobile Start End */}

        {/* More Post End */}
      </div>
    </div>
  );
};

export default BuyDetail;
