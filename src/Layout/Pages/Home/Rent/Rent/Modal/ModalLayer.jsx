import React from "react";

const ModalLayer = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>This is a modal!</p>
      </div>
    </div>
  );
};

export default ModalLayer;
