import React, { useState } from "react";
import "./Modal.css";
import Filter from "../../../../Sort/Filter/Filter";
import ModalHelp from "./ModalHelp";

const Modal = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" ovf">
        <div className="ovfContent ">
          <ModalHelp />
        </div>
        <div className="w-full bg-green-400 py-2 text-center sticky bottom-0 ">
          <button className="btn btn-primary text-white">Its Bottom</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
