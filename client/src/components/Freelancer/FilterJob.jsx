// FilterBar.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { freelancerSearch } from "../Slices/freelancerSearchSlice";

const FilterJob = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm({});

  const selectedExperience = watch("experience");
  const selectedBudget = watch("budget");
  const selectedJobTitle = watch("jobTitle");
  const proposalCount = watch("proposal");
  useEffect(() => {
    dispatch(freelancerSearch({ Search: selectedJobTitle }));
  }, [selectedJobTitle]);

  useEffect(() => {
    dispatch(freelancerSearch({ Search: selectedExperience }));
  }, [selectedExperience]);

  useEffect(() => {
    dispatch(freelancerSearch({ Search: selectedBudget }));
  }, [selectedBudget]);

  useEffect(() => {
    dispatch(freelancerSearch({ Search: proposalCount }));
  }, [proposalCount]);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <select
        name="jobTitle"
        className="px-4 py-2 text-sm border rounded-md cursor-pointer"
        {...register("jobTitle")}
      >
        <option value="All">All Job Titles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Mobile App Developer">Mobile App Developer</option>
        <option value="React Developer">React Developer</option>
        <option value="Node.js Developer">Node.js Developer</option>
        <option value="Python Developer">Python Developer</option>
        <option value="PHP Developer">PHP Developer</option>
        <option value="WordPress Developer">WordPress Developer</option>
        <option value="Shopify Developer">Shopify Developer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="Cloud Engineer">Cloud Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Machine Learning Engineer">
          Machine Learning Engineer
        </option>
        <option value="AI Engineer">AI Engineer</option>
        <option value="Cybersecurity Specialist">
          Cybersecurity Specialist
        </option>
        <option value="QA Engineer">QA Engineer</option>
        <option value="Game Developer">Game Developer</option>
        <option value="Blockchain Developer">Blockchain Developer</option>
        <option value="Technical Writer">Technical Writer</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="System Administrator">System Administrator</option>
        <option value="Database Administrator">Database Administrator</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Content Writer">Content Writer</option>
        <option value="SEO Specialist">SEO Specialist</option>
        <option value="Digital Marketer">Digital Marketer</option>
        <option value="Customer Support">Customer Support</option>
        <option value="Virtual Assistant">Virtual Assistant</option>

        {/* Add more roles as needed */}
      </select>

      <select
        name="experience"
        {...register("experience")}
        className="px-4 py-2 text-sm border rounded-md cursor-pointer"
      >
        <option value="All">All Experience Levels</option>
        <option value="Entry">Entry-level</option>
        <option value="Mid">Mid-level</option>
        <option value="Senior">Senior / Expert</option>
      </select>

      <select
        name="budget"
        {...register("budget")}
        className="px-4 py-2 text-sm border rounded-md cursor-pointer"
      >
        <option value="All">All Budgets</option>
        <option value="0-100">$0 - $100</option>
        <option value="100-500">$100 - $500</option>
        <option value="500-1000">$500 - $1000</option>
        <option value="1000+">$1000+</option>
      </select>
      <select
        name="proposal"
        className="px-4 py-2 text-sm border rounded-md cursor-pointer"
        {...register("proposal")}
      >
        <option value="All">All Proposals</option>
        <option value="0">0 Proposals</option>
        <option value="5">1–5 Proposals</option>
        <option value="10">6–10 Proposals</option>
        <option value="20">10+ Proposals</option>
      </select>
    </div>
  );
};

export default FilterJob;
