import React, { useState } from "react";
import "./Modal.css";
import Filter from "../../../../Sort/Filter/Filter";
import ModalHelp from "./ModalHelp";
import ModalComponent from "./ModalComponent";

const Modal = () => {
  return (
    <div className="flex items-center justify-center gap-5 ">
      <div>
        <dialog id="my_modal_3" className="modal">
          <ModalComponent />
        </dialog>
      </div>

      <div>
        <button
          className="btn btn-primary text-white"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Click Button
        </button>
      </div>
    </div>
  );
};

export default Modal;
