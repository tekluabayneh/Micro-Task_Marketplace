// components/DynamicPortal.jsx
import React from "react";
import ReactDOM from "react-dom";

const DynamicPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg  relative">
        <span
          onClick={onClose}
          className="material-symbols-outlined absolute top-2 right-6
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "32px" }}
        >
          close
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default DynamicPortal;
