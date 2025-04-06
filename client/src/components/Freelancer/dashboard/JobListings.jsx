import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link, Links } from "react-router-dom";
import LoadMore from "../../LoadMoreButton/LoadMore";

const JobListings = () => {
  const [page, setPage] = useState(1);
  const jobs = [
    {
      title: "Build a React App",
      budget: "$500",
      posted: "2 days ago",
      isPixPrice: "PixPrice",
      skill: [
        "node",
        "css",
        "html",
        "Java",
        "JavaScript",
        "React",
        "css",
        "html",
        "Java",
        "JavaScript",
        "React",
      ],
      payment: "verified",
      proposal: "Less than 5",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: lean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Design a Logo",
      budget: "$100",
      posted: "1 day ago",
      payment: "verified",
      proposal: "Less than 5",
      isPixPrice: "PixPrice",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],

      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration nto guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      isPixPrice: "PixPrice",
      proposal: "Less than 5",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: livering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      proposal: "Less than 5",
      isPixPrice: "PixPrice",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      posted: "3 days ago",
      payment: "verified",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration mentation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      proposal: "Less than 5",
      payment: "verified",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration r smooth transitions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      proposal: "Less than 5",
      isPixPrice: "PixPrice",
      payment: "verified",
      posted: "3 days ago",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration  and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      isPixPrice: "PixPrice",
      proposal: "Less than 5",
      payment: "verified",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration tions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      isPixPrice: "PixPrice",
      payment: "verified",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration r smooth transitions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      isPixPrice: "PixPrice",
      isPixPrice: "PixPrice",
      proposal: "Less than 5",
      budget: "$200",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: - Desigt aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      isPixPrice: "PixPrice",
      proposal: "Less than 5",
      payment: "verified",
      budget: "$200",
      posted: "3 days ago",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integrationinto a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: - Designing the menu layout ms to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      isPixPrice: "PixPrice",
      payment: "verified",
      proposal: "Less than 5",
      posted: "3 days ago",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: le code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      proposal: "Less than 5",
      posted: "3 days ago",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes: project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      isPixPrice: "PixPrice",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      posted: "3 days ago",
      proposal: "Less than 5",
      payment: "verified",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration  Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      isPixPrice: "PixPrice",
      proposal: "Less than 5",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration h transitions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      isPixPrice: "PixPrice",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      budget: "$200",
      payment: "verified",
      proposal: "Less than 5",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration sitions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      isPixPrice: "PixPrice",
      payment: "verified",
      budget: "$200",
      proposal: "Less than 5",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into a Shopify website. The menu will be visually engaging, lightweight, and responsive across devices. Scope of work includes:  Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      isPixPrice: "PixPrice",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      budget: "$200",
      payment: "verified",
      posted: "3 days ago",
      proposal: "Less than 5",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration i full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      isPixPrice: "PixPrice",
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      proposal: "Less than 5",
      posted: "3 days ago",
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration ir smooth transitions - Ensuring full compatibility with Shopify’s theme structure -Delivering clean, reusable code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
    {
      title: "Write Blog Articles",
      budget: "$200",
      payment: "verified",
      proposal: "Less than 5",
      posted: "3 days ago",
      skill: ["node", "css", "html", "Java", "JavaScript", "React"],
      description:
        "Design and implement a custom SVG-based animated menu using Figma and JavaScript, fully optimized for seamless integration into code and implementation guidance This project aims to elevate the site's user experience with a modern, visually dynamic navigation element. See the examples below.moreaboute",
    },
  ];
  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="p-1">
      <h2 className="text-2xl font-semibold m-1 pl-3">Jobs you might like</h2>

      <div className="w-full relative flex items-center">
        <div
          className="absolute top-1.5 left-1 cursor-pointer"
          onClick={() => alert("as")}
        >
          <MdSearch size={26} />
        </div>
        <input
          className="w-full custom-shadow text-xs rounded-sm my-1 p-1.5 placeholder:text-xs pl-8 outline-none"
          type="text"
          placeholder="Search For Job"
        />
      </div>

      <ul className="space-y-1">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="p-2 group bg-gray-50 custom-shadow cursor-pointer h-64 hover:bg-gray-100 overflow-hidden"
          >
            <Link
              to={job.title}
              className="w-full h-full z-40 flex flex-col justify-start gap-1 md:gap-2"
            >
              <p className="text-gray-500 text-xs">Posted: {job.posted}</p>
              <h1 className="text-lg group-hover:text-green-500 font-medium hover:underline">
                {job.title}
              </h1>
              <div className="flex gap-5">
                <p className="text-xs">{job.isPixPrice}</p>
                <p className="text-gray-600 flex gap-1 text-nowrap text-xs">
                  <p>Budget:</p>
                  <p>{job.budget}</p>
                </p>
              </div>

              <p className="text-gray-500 text-xs">Posted: {job.description}</p>
              <div className="flex gap-3 overflow-x-auto custom-ScrollTum">
                {job.skill?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-600 rounded-lg px-3 -pt-8 text-xs text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs">Payment: {job.payment}</p>
              <p className="text-xs">proposal: {job.proposal}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-6">
        <LoadMore count={page} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default JobListings;
