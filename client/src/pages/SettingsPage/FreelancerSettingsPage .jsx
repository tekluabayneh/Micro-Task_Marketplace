import React, { useState } from "react";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skills: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved data:", formData);
    alert("Settings updated!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Account Settings
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white shadow-md rounded-xl p-8 border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. React, Node.js, UI/UX"
                className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 rounded-md"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
