import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
const TaskDetailsPage = React.lazy(() =>
  import("../../components/TaskDetail/TaskDetail")
);
import axios from "axios";
import LoadMore from "../../components/LoadMoreButton/LoadMore";
import FilterJob from "../../components/Freelancer/FilterJob";
import {
  freelancerSearch,
  StoreResult,
} from "../../components/Slices/freelancerSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

const FreelancerSearch = memo(() => {
  const [CurrentJob, setCurrentJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [Jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [triggerSearch, setTriggerSearch] = useState(false);

  const useSelectorProfile = useSelector(
    (state) => state.freelancerSearchSlice.SearchFreelancer
  );

  const useSelectorProfileStore = useSelector(
    (state) => state.freelancerSearchSlice.SearchStore
  );

  useEffect(() => {
    const FetchJobsProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/jobs/GetAll"
        );
        setJobs(response.data.response || []);
      } catch (error) {
        console.error("❌ Error fetching client profile:", error);
        setError("Failed to fetch profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    FetchJobsProfile();
  }, []);

  const handleSerach = () => {
    dispatch(freelancerSearch({ Search: Search }));
    setSearch("");
    setTriggerSearch(true);
  };

  useEffect(() => {
    console.log("Triggered on search change", useSelectorProfile);
    const FetchFreelancerProfile = async () => {
      setLoading(true);
      if (!triggerSearch) return;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/searchJob/filter?Search=${useSelectorProfile}`
        );
        setLoading(false);
        dispatch(StoreResult({ response: response.data }));
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
        setTriggerSearch(false); // Reset flag to prevent loop
      }
    };
    FetchFreelancerProfile();
  }, [useSelectorProfile]);

  console.log("this is the result we get", useSelectorProfileStore);
  console.log("this is what you type", useSelectorProfile);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const HandeleisApplied = (job) => {
    setIsApplied((prev) => !prev);
    setCurrentJob(job);
  };
  return (
    <div className="p-1 mt-12">
      <h2 className="text-2xl font-semibold m-1 pl-3 capitalize">
        your Jobs Searches
      </h2>
      <FilterJob />
      <TaskDetailsPage
        SingleJobDescription={CurrentJob ?? ""}
        isApplied={isApplied}
        setIsApplied={setIsApplied}
      />
      <div className="w-full relative flex items-center">
        <div
          onClick={handleSerach}
          className="absolute top-1.5 left-1 cursor-pointer"
        >
          <MdSearch size={26} />
        </div>
        <input
          className="w-full custom-shadow text-xs rounded-sm my-1 p-1.5 placeholder:text-xs pl-8 outline-none"
          type="text"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For Job"
        />
      </div>

      <ul className="space-y-1">
        {Jobs.map((job) => (
          <li
            key={job.id}
            className="p-2 group bg-gray-50 custom-shadow cursor-pointer h-64 hover:bg-gray-100 overflow-hidden"
          >
            <div
              onClick={() => HandeleisApplied(job)}
              className="w-full h-full z-40 flex flex-col justify-start gap-1 md:gap-2"
            >
              <p className="text-gray-500 text-xs">
                Posted: {new Date(job.created_at).toLocaleString()}
              </p>
              <h1 className="text-lg group-hover:text-green-500 font-medium hover:underline">
                {job.jobTitle}
              </h1>
              <div className="flex gap-5">
                <p className="text-xs">{job.isPixPrice ?? "Not specified"}</p>
                <p className="text-xs">jobSize: {job.jobSize}</p>
                <p className="text-xs ">
                  status: <span className="text-green-500">{job.status}</span>
                </p>
                <p className="text-gray-600 flex gap-1 text-nowrap text-xs">
                  <span>Budget:</span>
                  <span>${job.budget}</span>
                </p>
              </div>

              <p className="text-xs">experience: {job.experience}</p>
              <p className="text-gray-500 text-xs">
                description: {job.description}
              </p>
              <div className="flex gap-3 overflow-x-auto custom-ScrollTum">
                {JSON.parse(job.skills)?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-600 rounded-lg px-3 -pt-8 text-xs text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs ">
                Payment: <span className="text-green-700">{job.payment}</span>
              </p>
              <p className="text-xs">proposal: {job.proposal}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-6">
        <LoadMore count={page} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
});

export default FreelancerSearch;
