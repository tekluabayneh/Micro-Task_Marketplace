import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Briefcase,
  Calendar,
  Clock,
} from "lucide-react";

const StatsCard = ({ title, value, change, icon, color ,trend}) => {
  const getIcon = () => {
    const iconMap = {
      briefcase: <Briefcase size={24} />,
      users: <Users size={24} />,
      calendar: <Calendar size={24} />,
      clock: <Clock size={24} />,
    };

    return iconMap[icon];
  };

  const getColorClasses = (color) => {
    const colorMap = {
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
      },
      // Add more if needed
    };

    return colorMap[color] || colorMap.blue;
  };

  const colorClasses = getColorClasses(color);
  return (
    <div>
      <div className="p-6 custom-shadow rounded-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>

            {change && (
              <div className="flex items-center mt-2">
                {trend === "up" ? (
                  <ArrowUpRight className="text-green-500 mr-1" size={16} />
                ) : (
                  <ArrowDownRight className="text-red-500 mr-1" size={16} />
                )}
                <span
                  className={`text-sm ${
                    trend === "up"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {change}%
                </span>
                <span className="text-sm text-gray-500 ml-1 text-nowrap">
                  vs last month
                </span>
              </div>
            )}
          </div>
          <div
            className={`p-3 rounded-full ${colorClasses.bg} ${colorClasses.text}`}
          >
            {getIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
