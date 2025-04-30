import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
const TaskDetailsPage = React.lazy(() =>
  import("../../components/TaskDetail/TaskDetail")
);
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadMore from "../../components/LoadMoreButton/LoadMore";
import FilterJob from "../../components/Freelancer/FilterJob";
import {
  freelancerSearch,
  StoreResult,
} from "../../components/Slices/freelancerSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import Loading from "../../components/Loading/Loading";

const FreelancerSearch = memo(() => {
  const [CurrentJob, setCurrentJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);
  const [CustomLoading, setLoading] = useState(true);
  const [Search, setSearch] = useState("");
  const [Customerror, setError] = useState(null);
  const [Jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [triggerSearch, setTriggerSearch] = useState(true);

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

  const GetFilterJob = async () => {
    let URL = `http://localhost:5000/api/searchJob/filter?Search=${useSelectorProfile}`;
    let response = await axios.get(URL);
    dispatch(StoreResult({ response: response.data || [] }));
    return response;
  };

  const { data, loading, error } = useQuery({
    queryKey: ["key", Search],
    queryFn: GetFilterJob,
    keepPreviousData: true,
  });

  if (error) {
    setError(error);
  }
  if (loading) {
    setLoading(true);
  }

  useEffect(() => {
    GetFilterJob();
  }, [dispatch, useSelectorProfile, triggerSearch]);

  if (CustomLoading) {
    return <p>Loading...</p>;
  }

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onReset = () => {
    dispatch(freelancerSearch({ Search: "All" }));
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
      <FilterJob setTriggerSearch={setTriggerSearch} />
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

      {Array.from(useSelectorProfileStore).length == 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center bg-gray-50 rounded-lg shadow-sm">
          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3 animate-fade-in">
            No Jobs Found for "{useSelectorProfile}"
          </h1>

          {/* Subtext for Guidance */}
          <p className="text-base md:text-lg text-gray-500 max-w-md mb-6">
            Try adjusting your search term or filters to find more
            opportunities.
          </p>

          {/* Optional Reset Button */}
          <button
            onClick={onReset}
            className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Clear Filters
          </button>
        </div>
      ) : CustomLoading ? (
        <Loading />
      ) : (
        <ul className="space-y-1">
          {Array.from(useSelectorProfileStore).map((job) => (
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
      )}

      <div className="p-6">
        <LoadMore count={page} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
});

export default FreelancerSearch;
// `http://localhost:5000/api/searchJob/filter?Search=${useSelectorProfile}`;
