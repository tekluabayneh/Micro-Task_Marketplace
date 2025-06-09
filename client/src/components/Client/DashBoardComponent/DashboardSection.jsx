import React from "react";
import { cn } from "./utils";

const DashboardSection = ({ title, rightContent, children, className }) => {
  return (
    <div data-testid="dash-class" className={cn("mb-8", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
        {rightContent && <div  data-testid="right-testid" className="mt-2 md:mt-0">{rightContent}</div>}
      </div>
      {children}
    </div>
  );
};

export default DashboardSection;
