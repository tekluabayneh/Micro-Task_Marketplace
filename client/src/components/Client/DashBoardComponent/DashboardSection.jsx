import React from "react";
import { cn } from "./utils";

const DashboardSection = ({
  title,
  description,
  rightContent,
  children,
  className,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        {rightContent && <div className="mt-2 md:mt-0">{rightContent}</div>}
      </div>
      {children}
    </div>
  );
};

export default DashboardSection;
