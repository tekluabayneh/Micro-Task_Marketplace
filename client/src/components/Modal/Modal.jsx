import React from "react";

const Modal = ({ isOpen, children }) => {
  return (
    <div>
      {isOpen ? (
        <div>
          <h1>this is the modal</h1>
          <button onClick={!isOpen}>close modal</button>
        </div>
      ) : (
        { children }
      )}
    </div>
  );
};

export default Modal;
