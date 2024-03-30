import React, { useContext, useEffect, useState } from "react";
import {
  FaBath,
  FaBed,
  FaBeer,
  FaChartArea,
  FaHeart,
  FaLayerGroup,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegHeart,
  FaShare,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";

import locationImage from "../../../../assets/downloadedIcon/location.svg";
import shareImage from "../../../../assets/downloadedIcon/share.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import calculateTimeAgo from "../../../../Function/TimeAgo";
import axios from "axios";
import Swal from "sweetalert2";
import { FiLayers, FiMapPin, FiShare2 } from "react-icons/fi";

import CallIcon from "../../../../assets/icons/home/call.svg";
import SmsIcon from "../../../../assets/icons/home/sms_white.svg";
import whatsappIcon from "../../../../assets/icons/home/wapp.svg";
import {
  Call,
  Favorite,
  FavoriteBorderOutlined,
  PhoneOutlined,
  WhatsApp,
} from "@mui/icons-material";

import bedIcon from "../../../../assets/icons/tolet/bed.svg";
import bathIcon from "../../../../assets/icons/tolet/bath.svg";
import areaIcon from "../../../../assets/icons/tolet/size.svg";
import kitchenIcon from "../../../../assets/icons/tolet/kitchen.svg";
import handlePhoneCall from "../../../../Function/GoCall";
import handleWhatsAppCall from "../../../../Function/GoWhatappCall";
import handleSendSMS from "../../../../Function/GoMessage";
import buyPostshare from "../../../../Function/BuyPostShare";
import LazyLoad from "react-lazy-load";

// import { ReactComponent as BedIcons } from "../../../../assets/icons/tolet/bed.svg";
import ReactLogo from "../../../../assets/icons/tolet/bed.svg?react";

import checkImage from "../../../../assets/Image/Suvrodev.jpg";
import KitchenSvgIcon from "../../SharedPage/SVGCode/KitchenSvgIcon";
import AreaSvgIcon from "../../SharedPage/SVGCode/AreaSvgIcon";
import BathSvgIcon from "../../SharedPage/SVGCode/BathSvgIcon";
import BedSvgIcon from "../../SharedPage/SVGCode/BedSvgIcon";
import CallSvgIcon from "../../SharedPage/SVGCode/CallSvgIcon";
import WhatsappSvgIcon from "../../SharedPage/SVGCode/WhatsappSvgIcon";

const BuyCard = ({ buy, forBuy, savedBuy, handleRefresh, myPostBuy }) => {
  const {
    uId,
    successfullMessage,
    baseUrl,
    currentUser,
    unSuccessFullMessage,
  } = useContext(AuthContext);
  // console.log("Buy Card: ",buy);
  const {
    pid,
    image,
    image1,
    wapp,
    price,
    bath,
    bed,
    area,
    phone,
    size,
    location,
    measurement,
    time,
    total_image,
    category,
    geolat,
    geolon,
  } = buy;

  const naviagte = useNavigate();

  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    setTimeAgo(calculateTimeAgo(time));
  }, [time]);

  // Convert the rent to Bangladeshi Taka style start
  const formattePrice = price.toLocaleString("en-US");
  // const formattePrice = "Ammount";
  // Convert the rent to Bangladeshi Taka style end

  const handleshare = async () => {
    try {
      await navigator.share({
        url: `https://celadon-kitsune-3c82ab.netlify.app/buydetail/${pid}`,
      });
      console.log("Shared successfully");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const goinDetail = (pid, lat, lon) => {
    console.log("Lattitudde: ", lat);
    console.log("Longitude: ", lon);
    naviagte(`/buydetail/${pid}`, { state: { lat, lon } });
  };

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

  const handleDelte = () => {
    if (uId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `${baseUrl}/pro/user/mypost/delete?uid=${uId}&post_id=${pid}`
            )
            .then((res) => {
              console.log("Delete Res: ", res.data);
              if (res.data) {
                handleRefresh();
                successfullMessage("Deleted Successfully");
              }
            });
        }
      });
    }
  };

  // console.log("savedBuy: ",savedBuy);
  // console.log('forBuy',forBuy);
  // console.log("myPostBuy",myPostBuy);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    // <div className=" flex flex-col  border  rounded-md  w-full h-[520px] mx-auto p-0  overflow-hidden bg-orange-400">
    //   {/* Image Box Start */}
    //   <div className="relative bg-cover bg-center ">
    //     {image1 ? (
    //       <Link
    //         to={`/buydetail/${pid}`}
    //         className="w-full h-[200px] md:h-[250px] rounded-md"
    //       >
    //         <img
    //           onClick={() => {
    //             goinDetail(pid, geolat, geolon);
    //           }}
    //           className="w-full h-[200px] md:h-[240px] rounded-md  object-cover object-center"
    //           src={`data:image/png;base64,${image1}`}
    //           // src={checkImage}
    //           alt=""
    //         />
    //       </Link>
    //     ) : (
    //       <div className="w-full h-[200px] md:h-[250px] rounded-md flex items-center justify-center text-4xl text-green-500">
    //         <h1>Will Set Image</h1>
    //       </div>
    //     )}

    //     {/* For Saved Start */}
    //     {savedBuy && (
    //       <div className="absolute top-5 right-[60px] ">
    //         <p className="w-[30px] h-[30px] BlkOpct  flex items-center justify-center rounded-full">
    //           <Favorite onClick={handleUnSave} className="text-white" />:
    //         </p>
    //       </div>
    //     )}
    //     {/* For Saved End */}

    //     {/* Save UnSave  Start */}
    //     {forBuy && (
    //       <div className="absolute top-5 right-[60px] ">
    //         <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
    //           {save == true ? (
    //             <Favorite onClick={handleUnSave} className="text-white" />
    //           ) : (
    //             <FavoriteBorderOutlined
    //               onClick={handleSave}
    //               className="text-white"
    //             />
    //           )}
    //         </p>
    //       </div>
    //     )}
    //     {/* Save UnSave  End */}

    //     {/* For Delete Start */}
    //     {myPostBuy && (
    //       <div className="absolute top-5 right-[60px] ">
    //         <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
    //           <FaTrash onClick={handleDelte} className="text-red-700 " />
    //         </p>
    //       </div>
    //     )}
    //     {/* For Delete End */}

    //     <div className="absolute top-5 right-5 ">
    //       <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
    //         <FiShare2
    //           onClick={() => buyPostshare(pid)}
    //           className="text-white"
    //         />
    //       </p>
    //     </div>

    //     <div className="absolute bottom-2 right-10">
    //       <p className="py-[2px] px-4 BlkOpct flex items-center justify-center gap-2 rounded-full ">
    //         <span className="text-white">{total_image}</span>{" "}
    //         <FiLayers className="text-white" />
    //       </p>
    //     </div>
    //   </div>
    //   {/* Image Box End */}

    //   <div className="py-5 px-4  h-[120px] ">
    //     <p className="roboto  text-xl text-black prText">{category}</p>
    //     {price != 0 ? (
    //       <p className="text-4xl font-bold text-black opacity-80">
    //         {" "}
    //         ৳ {formattePrice}{" "}
    //       </p>
    //     ) : (
    //       <span className="text-xl font-bold text-black opacity-80">
    //         Price on Call
    //       </span>
    //     )}
    //     <p className="flex gap-2 items-center my-2 prText">
    //       <FiMapPin />
    //       <span>{location}</span>
    //     </p>
    //   </div>

    //   <div className="h-[50px] text-black opacity-60 ">
    //     {category == "Flat" || category == "House" ? (
    //       <div>
    //         <div className="p-5 flex gap-3">
    //           <div className="flex items-center  gap-2 roboto">
    //             <div className="flex items-center gap-2">
    //               <img className="w-[35px] opacity-40" src={bedIcon} alt="" />{" "}
    //               {bed}
    //             </div>
    //           </div>
    //           <div className="flex items-center  gap-2">
    //             <div className="flex items-center gap-2 ">
    //               {" "}
    //               <img
    //                 className="w-[30px] opacity-40 mb-[2px]"
    //                 src={bathIcon}
    //                 alt=""
    //               />{" "}
    //               {bath}
    //             </div>
    //           </div>
    //           <div className="flex items-center  gap-2">
    //             {size ? (
    //               <div className="flex items-center gap-2">
    //                 <img
    //                   className="w-[30px] opacity-40"
    //                   src={areaIcon}
    //                   alt=""
    //                 />{" "}
    //                 {size} ft<sup>2</sup>
    //               </div>
    //             ) : (
    //               <div className="flex items-center gap-2">
    //                 <img
    //                   className="w-[30px] opacity-40"
    //                   src={kitchenIcon}
    //                   alt=""
    //                 />{" "}
    //                 {kitchen}{" "}
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className="flex gap-2 p-4 text-[22px]">
    //         <p>{measurement}</p>
    //         <p className="">{area}</p>
    //       </div>
    //     )}
    //   </div>

    //   <div className="h-[1px] w-full customBorder"> </div>

    //   <div className="py-5 px-2 flex gap-2 justify-around h-full bg-green-400">
    //     <div className="flex gap-2 items-center text-black opacity-60">
    //       <img className="w-[40px] h-[40px] rounded-full " src={image} alt="" />
    //       <p>{timeAgo} </p>
    //     </div>
    //     <div className="flex items-center justify-center gap-2">
    //       <button
    //         onClick={() => handlePhoneCall(phone)}
    //         className="w-[35px] h-[35px] bg-[#F36150] rounded-xl flex items-center justify-center text-white font-bold"
    //       >
    //         {" "}
    //         <FaPhoneAlt />{" "}
    //       </button>
    //       <button
    //         onClick={() => handleSendSMS(phone)}
    //         className="w-[35px] h-[35px] bg-[#2196F5] rounded-xl flex items-center justify-center text-white font-bold"
    //       >
    //         {" "}
    //         <img className="w-[20px]" src={SmsIcon} alt="" />{" "}
    //       </button>
    //       <button
    //         onClick={() => handleWhatsAppCall(wapp)}
    //         className="w-[35px] h-[35px] bg-[#25D569] rounded-xl flex items-center justify-center text-white text-xl"
    //       >
    //         <img className="w-[30px]" src={whatsappIcon} alt="" />
    //       </button>
    //     </div>
    //   </div>-------------
    // </div>

    <div className="flex flex-col  border  rounded-md  w-full h-[375px]  md:h-[510px] mx-auto p-0  overflow-hidden bg-white">
      {/* Image Box Start */}
      {/* <ReactLogo /> */}
      <div className="relative bg-cover bg-center ">
        {image1 ? (
          <Link
            to={`/buydetail/${pid}`}
            className="w-full h-[200px] md:h-[250px] rounded-md"
          >
            <img
              onClick={() => {
                goinDetail(pid, geolat, geolon);
              }}
              className="w-full h-[150px] md:h-[240px] rounded-md  object-cover object-center"
              src={`data:image/png;base64,${image1}`}
              // src={checkImage}
              alt=""
            />
          </Link>
        ) : (
          <div className="w-full h-[200px] md:h-[250px] rounded-md flex items-center justify-center text-4xl text-green-500">
            <h1>Will Set Image</h1>
          </div>
        )}

        {/* For Saved Start */}
        {savedBuy && (
          <div className="absolute top-5 right-[60px] ">
            <p className="w-[30px] h-[30px] BlkOpct  flex items-center justify-center rounded-full">
              <Favorite onClick={handleUnSave} className="text-white" />:
            </p>
          </div>
        )}
        {/* For Saved End */}

        {/* Save UnSave  Start */}
        {forBuy && (
          <div className="absolute top-5 right-[60px] ">
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
        )}
        {/* Save UnSave  End */}

        {/* For Delete Start */}
        {myPostBuy && (
          <div className="absolute top-5 right-[60px] ">
            <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
              <FaTrash onClick={handleDelte} className="text-red-700 " />
            </p>
          </div>
        )}
        {/* For Delete End */}

        {/* Share Icon start */}
        <div className="absolute top-5 right-5 ">
          <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
            <FiShare2
              onClick={() => buyPostshare(pid)}
              className="text-white"
            />
          </p>
        </div>
        {/* Share Icon end */}

        {/* Layer Icon Start */}
        <div className="absolute bottom-2 right-10">
          <p className="py-[2px] px-4 BlkOpct flex items-center justify-center gap-2 rounded-full ">
            <span className="text-white">{total_image}</span>{" "}
            <FiLayers className="text-white" />
          </p>
        </div>
      </div>
      {/* Layer Icon end */}
      {/* Image Box End */}

      {/* Family Taka Location Start */}
      <div className="py-1 md:py-5 px-4  h-[110px] md:h-[150px]  ">
        <p className="roboto  text-xl text-black prText">{category}</p>
        {price != 0 ? (
          <p className="text-4xl font-bold text-black opacity-80">
            {" "}
            ৳ {formattePrice}{" "}
          </p>
        ) : (
          <span className="text-xl font-bold text-black opacity-80">
            Price on Call
          </span>
        )}
        <p className="flex gap-2 items-center my-2 prText">
          <FiMapPin />
          <span className="truncate">{location}</span>
        </p>
      </div>
      {/* Family Taka Location end */}

      <div className="h-[40px] text-black opacity-60  ">
        {category == "Flat" || category == "House" ? (
          <div className="p-5 flex items-center gap-3 h-full ">
            <div className="flex items-center  gap-2 roboto">
              <div className="flex items-center gap-2">
                <BedSvgIcon />
                {bed}
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div className="flex items-center gap-2 ">
                {" "}
                <BathSvgIcon />
                {bath}
              </div>
            </div>
            <div className="flex items-center  gap-2">
              {size ? (
                <div className="flex items-center gap-2">
                  <AreaSvgIcon />
                  {size} ft<sup>2</sup>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* <img
                      className=" w-[10px] h-[10px] md:w-[30px]  md:h-[30px] opacity-40"
                      src={kitchenIcon}
                      alt=""
                    />{" "} */}
                  <KitchenSvgIcon />
                  {kitchen}{" "}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-4 text-[22px] h-full pb-2">
            <p>{measurement}</p>
            <p className="">{area}</p>
          </div>
        )}
      </div>

      <div className="h-[1px] w-full customBorder"> </div>

      {/* Contact Button start */}
      <div className="py-5 px-4 flex items-center gap-2 justify-between h-[70px] ">
        <div className="flex gap-2 items-center text-black opacity-60 ">
          <img className="w-[40px] h-[40px] rounded-full " src={image} alt="" />
          <p>{timeAgo} </p>
        </div>

        <div className="flex items-center justify-center gap-2 overflow-hidden ">
          <div
            onClick={() => handlePhoneCall(phone)}
            className="w-[35px] h-[35px] bg-[#F36150] rounded-xl flex items-center justify-center text-white font-bold overflow-visible"
          >
            {/* Call Icon */}
            {/* <FaPhoneAlt className="" />{" "} */}
            {/* <img className="w-[20px]" src={CallIcon} alt="" />{" "} */}
            {/* <CallSvgIcon /> */}
            {/* <PhoneOutlined /> */}
            <Call />
          </div>

          <button
            onClick={() => handleSendSMS(phone)}
            className="w-[35px] h-[35px] bg-[#2196F5] rounded-xl flex items-center justify-center text-white font-bold"
          >
            {" "}
            <img className="w-[20px]" src={SmsIcon} alt="" />{" "}
          </button>

          <button
            onClick={() => handleWhatsAppCall(wapp)}
            className="w-[35px] h-[35px] bg-[#25D569] rounded-xl flex items-center justify-center text-white text-xl"
          >
            {/* <WhatsappSvgIcon /> */}
            <WhatsApp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
