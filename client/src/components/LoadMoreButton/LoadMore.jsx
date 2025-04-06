import React from "react";

const LoadMore = ({ count, onPrev, onNext }) => {
  return (
    <div className="w-full flex items-center justify-center gap-4 bg-gray-100 px-4 py-2 rounded-full shadow-md w-fit">
      <span
        onClick={onPrev}
        className="material-symbols-outlined  border border-green-600 cursor-pointer bg-white shadow-2xl rounded-full text-green-600 text-xl"
        style={{ fontSize: "18px" }}
      >
        chevron_right
      </span>

      <span className="text-xs font-semibold ">{count} of 100</span>

      <span
        onClick={onNext}
        className="material-symbols-outlined  border border-green-600 cursor-pointer bg-white shadow-2xl rounded-full text-green-600 text-xl"
        style={{ fontSize: "18px" }}
      >
        chevron_left
      </span>
    </div>
  );
};

export default LoadMore;
