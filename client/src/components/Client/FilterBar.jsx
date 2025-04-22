// FilterBar.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clientSearch } from "../Slices/clientSearchSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm({});
  const selectedCountry = watch("country");
  const selectedSkill = watch("skill");

  useEffect(() => {
    dispatch(clientSearch({ Search: selectedSkill }));
  }, [selectedSkill]);

  useEffect(() => {
    dispatch(clientSearch({ Search: selectedCountry }));
  }, [selectedCountry]);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <label htmlFor="country">Select a Country:</label>
      <select
        name="country"
        className="px-4 py-2 text-sm border rounded-md"
        {...register("country")}
      >
        <option value="">All Countries</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Canada">Canada</option>
        <option value="Germany">Germany</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Australia">Australia</option>
        <option value="France">France</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Kenya">Kenya</option>
        <option value="Brazil">Brazil</option>
        <option value="Japan">Japan</option>
        <option value="China">China</option>
        <option value="South Africa">South Africa</option>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="Mexico">Mexico</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Sweden">Sweden</option>
      </select>

      <select
        name="role"
        className="px-4 py-2 text-sm border rounded-md"
        {...register("skill")}
      >
        <option value="">All Roles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Mobile App Developer">Mobile App Developer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Machine Learning Engineer">
          Machine Learning Engineer
        </option>
        <option value="Cloud Engineer">Cloud Engineer</option>
        <option value="QA Engineer">QA Engineer</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Security Analyst">Security Analyst</option>
        <option value="Game Developer">Game Developer</option>
        <option value="Technical Writer">Technical Writer</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="System Administrator">System Administrator</option>
      </select>
    </div>
  );
};

export default FilterBar;
