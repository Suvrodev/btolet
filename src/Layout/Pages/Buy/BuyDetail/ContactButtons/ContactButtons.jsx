import React, { useContext } from "react";
import "./ContactButton.css";

// import { ReactComponent as SmsIcon } from '../../../../../assets/icons/home/message.svg';

import SmsIcon from "../../../../../assets/icons/home/sms_white.svg";
import whatsappIcon from "../../../../../assets/icons/home/wapp.svg";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import handleWhatsAppCall from "../../../../../Function/GoWhatappCall";
import handlePhoneCall from "../../../../../Function/GoCall";
import handleSendSMS from "../../../../../Function/GoMessage";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import LoginModalComponent from "../../../UserResponsibility/Login/LoginModalComponent/LoginModalComponent";

const ContactButtons = ({ phone, wapp }) => {
  const { currentUser } = useContext(AuthContext);

  const checkPhoneCall = (phone) => {
    if (currentUser) {
      handlePhoneCall(phone);
    } else {
      document.getElementById("id_login_modal").showModal();
    }
  };

  const checkWpCall = (phone) => {
    if (currentUser) {
      handleWhatsAppCall(phone);
    } else {
      document.getElementById("id_login_modal").showModal();
    }
  };

  const checkSms = (phone) => {
    if (currentUser) {
      handleSendSMS(phone);
    } else {
      document.getElementById("id_login_modal").showModal();
    }
  };

  return (
    <div>
      <dialog id="id_login_modal" className="modal">
        <LoginModalComponent />
      </dialog>

      <div className="w-full flex items-center justify-between gap-0 md:gap-2">
        <button
          onClick={() => checkPhoneCall(phone)}
          className=" btn bg-[#F36150] border-0 text-white"
        >
          {" "}
          <FaPhoneAlt className="text-[18px]" /> Call
        </button>
        <button
          onClick={() => checkSms(phone)}
          className=" btn bg-[#2196F5] border-0 text-white"
        >
          <img className="w-[20px] sms-icon " src={SmsIcon} alt="" />
          SMS
        </button>

        <button
          onClick={() => checkWpCall(wapp)}
          className=" btn bg-[#25D569] text-white border-0"
        >
          <img className="w-[30px] " src={whatsappIcon} alt="" />
          Whatsapp
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;
