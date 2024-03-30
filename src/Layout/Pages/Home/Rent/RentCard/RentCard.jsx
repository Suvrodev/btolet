import React, { useContext, useEffect, useState } from "react";
import "./BlackOpacity.css";
import "./RentCard.css";

import {
  FaBath,
  FaBed,
  FaCarAlt,
  FaChartArea,
  FaFacebook,
  FaGoogle,
  FaHeart,
  FaHouseDamage,
  FaLayerGroup,
  FaMailBulk,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPhoneAlt,
  FaRegHeart,
  FaShare,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import calculateTimeAgo from "../../../../../Function/TimeAgo";
import axios from "axios";
import Swal from "sweetalert2";
import { FiLayers, FiMapPin, FiShare2 } from "react-icons/fi";

/////Image Icon start
import bedIcon from "../../../../../assets/icons/tolet/bed.svg";
import bathIcon from "../../../../../assets/icons/tolet/bath.svg";
import areaIcon from "../../../../../assets/icons/tolet/size.svg";
import garageIcon from "../../../../../assets/icons/tolet/garage.svg";
import bikeIcon from "../../../../../assets/icons/tolet/bike.svg";
import carIcon from "../../../../../assets/icons/tolet/car.svg";
import SmsIcon from "../../../../../assets/icons/home/sms_white.svg";
import whatsappIcon from "../../../../../assets/icons/home/wapp.svg";
import kitchenIcon from "../../../../../assets/icons/tolet/kitchen.svg";
import {
  Blender,
  Call,
  Favorite,
  FavoriteBorderOutlined,
  Kitchen,
  WhatsApp,
} from "@mui/icons-material";
import RentPostShare from "../../../../../Function/RentPostShare";
import handlePhoneCall from "../../../../../Function/GoCall";
import handleSendSMS from "../../../../../Function/GoMessage";
import handleWhatsAppCall from "../../../../../Function/GoWhatappCall";
import LazyLoad from "react-lazy-load";
import BedSvgIcon from "../../../SharedPage/SVGCode/BedSvgIcon";
import BathSvgIcon from "../../../SharedPage/SVGCode/BathSvgIcon";
import AreaSvgIcon from "../../../SharedPage/SVGCode/AreaSvgIcon";
import KitchenSvgIcon from "../../../SharedPage/SVGCode/KitchenSvgIcon";
// import KitchenSvgIcon from "../../../../../assets/icons/property/kitchen_.png";

const RentCard = ({ r, forRent, savedRent, handleRefresh, myPostRent }) => {
  const {
    uId,
    successfullMessage,
    baseUrl,
    currentUser,
    unSuccessFullMessage,
  } = useContext(AuthContext);
  // console.log("Rent: ",r);
  const {
    post_id,
    image,
    image1,
    wapp,
    rent,
    bath,
    bed,
    area,
    phone,
    roomsize,
    location,
    measurement,
    time,
    total_image,
    category,
    garagetype,
    kitchen,
  } = r;

  const naviagte = useNavigate();

  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    setTimeAgo(calculateTimeAgo(time));
  }, [time]);

  ////Category String start

  let categoryString = category.join(", ");
  if (categoryString.length > 35) {
    // Truncate the string to 19 characters and add '...'
    categoryString = categoryString.substring(0, 25) + "...";
  }
  ///Category String end

  // Location String Start
  // console.log("Location: ", location);
  let locationString = "";
  if (location.length > 25) {
    locationString = location.slice(0, 25) + "...";
  } else {
    locationString = location;
  }
  // Location String end

  // Convert the rent to Bangladeshi Taka style start
  const formattedRent = rent.toLocaleString("en-US");
  // Convert the rent to Bangladeshi Taka style end

  const goinDetail = (post_id) => {
    naviagte(`/rentdetail/${post_id}`);
  };

  /**
   * Wait 2 Second Start
   */

  /**
   * wait 2 second End
   */

  ///////Check Catgory start
  let iconDiv;
  if (category.includes("Only Garage")) {
    // console.log("Post id: ",post_id," Only Garage: yes");
    if (garagetype == "Bike") {
      iconDiv = (
        <div className="flex items-center gap-2 p-5 h-[45px]  prText text-[22px]">
          {" "}
          <img
            className="w-[35px] opacity-40"
            src={bikeIcon}
            alt=""
          /> Bike{" "}
        </div>
      );
      // console.log("Garage Type: ",garagetype);
    }
    if (garagetype == "Car") {
      iconDiv = (
        <div className="flex items-center gap-2 p-5 h-[45px]  prText text-[22px]  ">
          {" "}
          <img className="w-[35px] opacity-40" src={carIcon} alt="" /> Car{" "}
        </div>
      );
      // console.log("Garage Type: ",garagetype);
    }
    if (garagetype == "Garage") {
      iconDiv = (
        <div className="flex items-center gap-2 p-5 h-[45px] prText text-[22px] ">
          {" "}
          <img className="w-[35px] opacity-40" src={garageIcon} alt="" />
          Garage{" "}
        </div>
      );
      // console.log("Garage Type: ",garagetype);
    }
  } else {
    // console.log("Post id: ",post_id," Only Garage: No");
    if (category.includes("Office") || category.includes("Shop")) {
      iconDiv = <div className="p-5 h-[45px] text-black opacity-60   "> </div>;
    } else {
      iconDiv = (
        <div className="flex gap-5 items-center p-5 h-[45px] prText text-[22px] ">
          <div className="flex items-center gap-2">
            <BedSvgIcon />
            {bed}
          </div>
          <div className="flex items-center gap-2 ">
            {" "}
            <BathSvgIcon />
            {bath}
          </div>
          {roomsize ? (
            <div className="flex items-center gap-2">
              <AreaSvgIcon className="bg-green-400 " />
              {roomsize} ft<sup>2</sup>
            </div>
          ) : (
            <div className="flex items-center gap-2  ">
              {/* <KitchenSvgIcon /> */}
              <Blender />
              {kitchen}{" "}
            </div>
          )}
        </div>
      );
    }
  }
  ////Check Category end

  ////Save And Unsave and Delete Start
  const saveInfo = {
    uid: uId,
    pid: post_id,
    status: true,
  };

  const unSaveInfo = {
    uid: uId,
    pid: post_id,
    status: false,
  };

  const [save, setSave] = useState(false);
  const handleSave = () => {
    // console.log("Blue chilo Save korbo");

    if (currentUser) {
      fetch(`${baseUrl}/tolet/save/post`, {
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
    // console.log("Red Chilo UnSave korbo");
    if (uId) {
      fetch(`${baseUrl}/tolet/save/post`, {
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

  const deleteInfo = {
    uid: uId,
    post_id: post_id,
  };

  const handleDelte = () => {
    //  console.log("Delete");
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
              `${baseUrl}/tolet/user/mypost/delete?uid=${uId}&post_id=${post_id}`
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
  ////Save And Unsave and Delete end

  // console.log("savedRent: ",savedRent);
  // console.log('forRent',forRent);
  // console.log("myPostRent",myPostRent);

  return (
    <div className="flex flex-col relative border  rounded-md m-2 md:m-0   h-[410px] md:h-[480px] ">
      {/* Image Box Start */}
      <div className="relative">
        <Link
          to={`/rentdetail/${post_id}`}
          className="w-full h-[200px] md:h-[250px] rounded-m"
        >
          <img
            onClick={() => goinDetail(post_id)}
            className="w-full h-[190px] md:h-[250px] rounded-tl-md rounded-tr-md "
            src={`data:image/png;base64,${image1}`}
            alt=""
          />
        </Link>

        {/* For Saved Start */}
        {savedRent && (
          <div className="absolute top-4 right-[60px] ">
            <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
              <Favorite onClick={handleUnSave} className="text-white" />
            </p>
          </div>
        )}
        {/* For Saved End */}

        {/* Save UnSave  Start */}
        {forRent && (
          <div className="absolute top-2 right-[60px] ">
            <p className="w-[30px] h-[30px] BlkOpct flex items-center justify-center rounded-full">
              {save == true ? (
                <Favorite onClick={handleUnSave} className="text-white" />
              ) : (
                // <FaRegHeart  onClick={handleSave} className='text-blue-600 '/>
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
        {myPostRent && (
          <div className="absolute top-2 right-[60px] ">
            <p className="w-[30px] h-[30px] BlkOpct  flex items-center justify-center rounded-full">
              <FaTrash onClick={handleDelte} className="text-red-700 " />
            </p>
          </div>
        )}
        {/* For Delete End */}

        {/* Share Icon start */}
        <div className="absolute top-2 right-4">
          <p className="w-[30px] h-[30px] BlkOpct  flex items-center justify-center rounded-full">
            <FiShare2
              onClick={() => RentPostShare(post_id)}
              className="text-white"
            />
          </p>
        </div>
        {/* Share Icon end */}

        {/* Layer Icon Start */}
        <div className="absolute bottom-2 right-4">
          <p className="py-[2px] px-4 BlkOpct flex items-center justify-center gap-2 rounded-full ">
            <span className="text-white">{total_image} </span>{" "}
            <FiLayers className="text-white" />
          </p>
        </div>
      </div>
      {/* Layer Icon end */}

      {/* Image Box End */}

      {/* Family Taka Location Start */}
      <div className="py-1 md:py-1 px-4  h-[110px] md:h-[125px] ">
        <p className="roboto text-2xl  prText ">{categoryString}</p>
        {{ rent } ? (
          <p className="text-4xl  text-black opacity-60 flex items-center gap-1">
            {" "}
            <span className="text-4xl"> ৳</span>
            {formattedRent}{" "}
          </p>
        ) : (
          <span className="text-xl font-bold">Price on Call</span>
        )}
        <p className="flex gap-2 items-center my-2 prText">
          <FiMapPin />

          <span className="truncate">{location}</span>
        </p>
      </div>
      {/* Family Taka Location Start */}

      <div className=" h-[45px]  ">{iconDiv}</div>

      <div className="h-[2px] w-full bg-black opacity-10"> </div>

      {/* Contact Part start */}
      <div className="py-5 px-2 flex gap-2 justify-around h-[60px] md:h-[60px]  ">
        <div className="flex gap-2 items-center">
          <p className="text-black opacity-80">{timeAgo} </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handlePhoneCall(phone)}
            className="w-[50px] h-[50px] bg-[#F36150] rounded-lg flex items-center justify-center text-white font-bold"
          >
            {/* <FaPhoneAlt /> */}
            <Call className="cardContactIconSize" />
          </button>
          <button
            onClick={() => handleSendSMS(phone)}
            className="w-[50px] h-[50px] bg-[#2196F5] rounded-lg flex items-center justify-center text-white font-bold"
          >
            <img className="w-[30px]" src={SmsIcon} alt="" />{" "}
          </button>
          <button
            onClick={() => handleWhatsAppCall(wapp)}
            className="w-[50px] h-[50px] bg-[#25D569] rounded-lg flex items-center justify-center text-white text-xl"
          >
            <WhatsApp className="cardContactIconSize" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
