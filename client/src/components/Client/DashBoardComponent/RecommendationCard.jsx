import React from "react";
import { Star, Check, ChevronRight } from "lucide-react";
const RecommendationCard = ({
  name,
  title,
  skills,
  matchPercentage,
  rating,
  completedJobs,
  verified,
}) => {
  return (
    <div className="overflow-hidden transition-all hover:shadow-md">
      <dvi className="pb-3 flex flex-row items-start gap-4">
        <div className="h-12 w-12 border border-gray-200">
          <div className="bg-brand-light-purple flex items-center justify-center h-full text-lg text-brand-purple font-medium">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-lg font-semibold flex items-center">
            {name}
            {verified && (
              <div
                variant="outline"
                className="ml-2 border-brand-blue bg-blue-50 text-brand-blue"
              >
                <Check size={10} className="mr-1" />
                Verified
              </div>
            )}
          </div>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-brand-purple">
            {matchPercentage}%
          </span>
          <span className="text-xs text-gray-600">Match</span>
        </div>
      </dvi>
      <div className="pb-3">
        <div className="flex items-center mb-3 text-sm">
          <div className="flex items-center mr-4">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-600">{completedJobs} jobs completed</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              variant="secondary"
              className="bg-brand-soft-gray text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2 border-t border-gray-100">
        <button
          variant="ghost"
          className="w-full text-brand-purple hover:bg-brand-light-purple hover:text-brand-purple flex justify-between"
        >
          <span>View Profile</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
