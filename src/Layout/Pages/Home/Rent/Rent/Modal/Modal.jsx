import React, { useState } from "react";
import ModalLayer from "./ModalLayer";

const Modall = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <button onClick={handleShowModal}>Open Modal</button>
      {isModalOpen && (
        <Modall onClose={handleCloseModal}>
          <div className="modal-content">
            <p>gaqief</p>
          </div>
        </Modall>
      )}
    </div>
  );
};

export default Modal;
