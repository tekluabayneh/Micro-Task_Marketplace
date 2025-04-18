import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const Skills = ({ skills, updateFields }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      updateFields({ skills: [...skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    updateFields({ skills: skills.filter((skill) => skill !== skillToRemove) });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
      <p className="text-gray-600">
        List the skills that are relevant to the position.
      </p>

      <div className="space-y-6">
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a skill (e.g., JavaScript)"
              className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            />
          </div>
          <button
            type="button"
            onClick={handleAddSkill}
            className="text-nowrap min-w-20 bg-green-500 cursor-pointer text-white h-10 flex items-center text-lg border-none rounded-sm outline-none py-1  pl-2 custom-shadow"
          >
            <Plus className="h-4 w-4 mr-1" /> Add
          </button>
        </div>

        <div>
          <label>Your Skills</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.length === 0 && (
              <p className="text-gray-400 italic">No skills added yet</p>
            )}

            {skills.map((skill) => (
              <div
                key={skill}
                className="text-ms flex  items-center cursor-pointer h-7 bg-gray-300 p-1 rounded-s"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-1.5  focus:outline-none"
                >
                  <X className="h-5.5 w-5.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg bg-gray-200">
          <h3 className="text-sm font-medium">
            Popular skills in this category:
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {["JavaScript", "React", "Node.js", "HTML/CSS", "TypeScript"].map(
              (skill) => (
                <button
                  key={skill}
                  type="button"
                  variant="outline"
                  className="text-xs h-7 bg-gray-50 p-1 rounded-s"
                  onClick={() => {
                    if (!skills.includes(skill)) {
                      updateFields({ skills: [...skills, skill] });
                    }
                  }}
                  disabled={skills.includes(skill)}
                >
                  {skill}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
