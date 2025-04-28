import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const CoverLetter = ({ coverLetter, updateFields }) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Cover Letter</h2>
      <p className="text-gray-600">
        Tell us why you're a good fit for this position.
      </p>

      <div className="space-y-2">
        <label htmlFor="coverLetter">Cover Letter</label>
        <textarea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => updateFields({ coverLetter: e.target.value })}
          placeholder="Write a brief cover letter explaining why you are interested in this position and what makes you a great candidate..."
          className="w-full h-[400px] p-6 text-gray-700 border border-gray-200 rounded-lg shadow-inner resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="bg-soft-purple p-6 rounded-lg border border-light-purple">
        <h3 className="text-lg font-semibold text-vivid-purple mb-3">
          Writing Tips
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-vivid-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>
              Address why you're interested in this specific position and
              company
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-vivid-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>
              Highlight your most relevant experience and skills that match the
              job requirements
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-vivid-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>
              Include specific achievements with measurable results when
              possible
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-vivid-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>
              Keep it concise, focused, and maintain a professional tone
              throughout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoverLetter;
