import React from "react";

const Experience = ({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
  updateFields,
}) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
      <p className="text-gray-600">
        Tell us about your most recent work experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            onChange={(e) => updateFields({ jobTitle: e.target.value })}
            placeholder="Software Developer"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={company}
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            onChange={(e) => updateFields({ company: e.target.value })}
            placeholder="Acme Inc."
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="month"
            value={startDate}
            onChange={(e) => updateFields({ startDate: e.target.value })}
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="month"
            value={endDate}
            onChange={(e) => updateFields({ endDate: e.target.value })}
            placeholder="Present (leave empty if current)"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => updateFields({ description: e.target.value })}
            placeholder="Describe your responsibilities and achievements..."
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow min-h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
