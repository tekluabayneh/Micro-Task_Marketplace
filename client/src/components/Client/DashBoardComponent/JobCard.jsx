// src/components/dashboard/JobCard.tsx
import React from "react";
import { Clock, MapPin, DollarSign, Briefcase } from "lucide-react";


const JobCard = ({
  title,
  company,
  location,
  salary,
  description,
  tags,
  postedDate,
  applicants,
  isActive = true,
}) => {
  return (
    <div
      className={`overflow-hidden transition-all hover:shadow-md ${
        !isActive ? "opacity-75" : ""
      }`}
    >
      <div className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-semibold">{title}</div>
            <div className="font-medium text-gray-600">{company}</div>
          </div>
          {isActive ? (
            <div
              variant="outline"
              className="border-green-400 text-green-600 bg-green-50"
            >
              Active
            </div>
          ) : (
            <div
              variant="outline"
              className="border-gray-400 text-gray-600 bg-gray-50"
            >
              Closed
            </div>
          )}
        </div>
      </div>
      <div className="pb-3">
        <div className="flex flex-wrap gap-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mr-4">
            <DollarSign size={16} className="mr-1" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center mr-4">
            <Clock size={16} className="mr-1" />
            <span>{postedDate}</span>
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-1" />
            <span>{applicants} applicants</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              variant="secondary"
              className="bg-brand-soft-gray text-gray-700"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2 flex justify-between">
        <button variant="outline" size="sm">
          View Details
        </button>
        <button variant="secondary" size="sm">
          Edit
        </button>
      </div>
    </div>
  );
};

export default JobCard;
