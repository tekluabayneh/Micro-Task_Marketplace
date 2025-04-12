import React from "react";
import Loadingimg from "../../assets/Loading.Gif";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={Loadingimg} alt="" />
    </div>
  );
};

export default Loading;
