import React, { useState } from "react";
import { cn } from "./utils";

const DashboardTabs = ({ tab1, tab2, className = "as" }) => {
  let [isActive, setisActive] = useState(false);
  return (
    <div className={cn("w-full", className)}>
      <div className="grid w-full grid-cols-2 mb-6 gap-2">
        <button
          onClick={() => setisActive(!isActive)}
          className={`${
            !isActive ? "bg-green-300" : "bg-white"
          } p-3 cursor-pointer rounded-sm custom-shadow font-medium`}
        >
          Jobs
        </button>
        <button
          onClick={() => setisActive(!isActive)}
          className={`${
            isActive ? "bg-green-300" : "bg-white"
          } p-3 cursor-pointer rounded-sm custom-shadow font-medium`}
        >
          AI Recommendations
        </button>
      </div>

      {isActive ? tab1 : tab2}
    </div>
  );
};

export default DashboardTabs;
