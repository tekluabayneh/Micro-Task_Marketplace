import React from "react";

const Language = () => {
  const profileData = {
    languages: [
      { name: "English", proficiency: "Fluent" },
      { name: "Amharic", proficiency: "Native or Bilingual" },
    ],
  };
  return (
    <div>
      {/* Languages */}
      <div className="mb-6 relative">
        <span
          className="material-symbols-outlined absolute top-3 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Languages</h2>
        <ul className="space-y-1 text-gray-700">
          {profileData.languages.map((language, index) => (
            <li key={index}>
              <strong>{language.name}:</strong> {language.proficiency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Language;
