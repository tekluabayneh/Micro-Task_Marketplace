import React from "react";

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
          className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow min-h-48"
        />
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-sm font-semibold">
          Tips for a great cover letter:
        </h3>
        <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
          <li>Address why you're interested in this specific position</li>
          <li>Highlight your most relevant experience and skills</li>
          <li>Mention specific achievements that relate to the job</li>
          <li>Keep it concise, focused, and professional</li>
        </ul>
      </div>
    </div>
  );
};

export default CoverLetter;
