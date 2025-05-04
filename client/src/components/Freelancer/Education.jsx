import React from "react";

const Education = ({ Education }) => {
  return (
    <div className="relative">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
      {Education > 0 ? (
        <p>{Education}</p>
      ) : (
        <p className="text-gray-600">No education details available.</p>
      )}
    </div>
  );
};

export default Education;
