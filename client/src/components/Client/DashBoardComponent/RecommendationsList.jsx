import React from "react";
import RecommendationCard from "./RecommendationCard";

const RecommendationsList = ({ recommendations, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[180px] rounded-md bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          No recommendations yet
        </h3>
        <p className="text-gray-600">Post a job to get AI recommendations</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {recommendations.map((recommendation) => (
        <RecommendationCard key={recommendation.id} {...recommendation} />
      ))}
    </div>
  );
};

export default RecommendationsList;
