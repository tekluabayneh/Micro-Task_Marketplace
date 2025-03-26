import React from "react";

const Footer = () => {
  // Define the footer data as an object
  const footerData = {
    "How to hire": [
      "Talent Marketplace",
      "Project Catalog",
      "Hire an agency",
      "Enterprise",
      "Business Plus",
      "Any Hire",
      "Contract-to-hire",
      "Direct Contracts",
      "Hire worldwide",
      "Hire in the USA",
    ],
    "For Talent": [
      "How to find work",
      "Direct Contracts",
      "Find freelance jobs worldwide",
      "Find freelance jobs in the USA",
      "Win work with ads",
      "Exclusive resources with Freelancer Plus",
    ],
    Resources: [
      "Help & support",
      "Success stories",
      "Upwork reviews",
      "Resources",
      "Blog",
      "Affiliate programme",
      "Free Business Tools",
    ],
    Company: [
      "About us",
      "Leadership",
      "Investor relations",
      "Careers",
      "Our impact",
      "Press",
      "Contact us",
      "Partners",
      "Trust, safety & security",
      "Modern slavery statement",
    ],
  };
  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "CA Notice at Collection",
    "Cookie Settings",
    "Accessibility",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 rounded-lg m-2">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Map over the footerData object */}
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-400 block text-xs">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Bottom section with copyright and legal links */}
      <div className="mt-6 border-t border-gray-700 pt-6">
        {/* Copyright notice */}
        <p className="text-xs text-gray-400 text-center">© 2025 MicroWork.</p>

        {/* Legal links */}
        <ul className="flex flex-wrap justify-center gap-4 mt-2">
          {legalLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
