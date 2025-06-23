import React from "react";
import Loadingimg from "../../assets/Loading.gif";
const Loading = () => {
    return (
        <div role="status" className="flex items-center justify-center h-screen">
            <img src={Loadingimg} alt="" />
        </div>
    );
};

export default Loading;
