import React from "react";

// Component: SidebarSection
const SidebarSection = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-800 mb-2">{title}</h3>
      <ul className="space-y-1 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="hover:text-blue-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component: SettingsPage
const SettingsPage = () => {
  const sections = [
    {
      title: "Secondary",
      items: ["My info", "Billing & Payments", "Password & Security"],
    },
    {
      title: "Membership Settings",
      items: ["Teams", "Notification Settings", "Members & Permissions"],
    },
    {
      title: "Tax Information",
      items: ["Tax Details", "VAT ID Management"],
    },
    {
      title: "Connected Services",
      items: ["Linked Accounts", "API Integrations"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white custom-shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Render Each Section */}
      {sections.map((section, index) => (
        <SidebarSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default SettingsPage;
