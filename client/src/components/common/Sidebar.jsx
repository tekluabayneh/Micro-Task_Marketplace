import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Jobs", icon: "💼" },
    { name: "Proposals", icon: "📋" },
    { name: "Earnings", icon: "💰" },
    { name: "Profile", icon: "👤" },
  ];

  return (
    <aside className="md:w-44 bg-gray-50  h-full p-4">
      <ul className="space-y-2 flex gap-6 items-end md:flex-col">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <span>{item.name}</span>
            <span>{item.icon}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
