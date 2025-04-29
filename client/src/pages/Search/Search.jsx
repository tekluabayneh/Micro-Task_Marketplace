// ClientDashboard.jsx
import React, { useEffect, useState } from "react";
import FilterBar from "../../components/Client/FilterBar";
import { Link } from "react-router-dom";
import LoadMore from "../../components/LoadMoreButton/LoadMore";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../components/hooks/Fetch";
import axios from "axios";
import { storeResponse } from "../../components/Slices/clientSearchSlice";
import Loading from "../../components/Loading/Loading";

const ClientDashboard = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const useSelectorProfile = useSelector(
    (state) => state.clientSearchSlice.SearchClient
  );
  const useSelectorProfileStore = useSelector(
    (state) => state.clientSearchSlice.SearchStore
  );

  useEffect(() => {
    const FetchFreelancerProfile = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/search/filter?Search=${useSelectorProfile}`
        );
        setLoading(false);
        dispatch(storeResponse({ response: response.data }));
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    FetchFreelancerProfile();
  }, [useSelectorProfile, dispatch]);

  let data = useSelectorProfileStore;

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen  py-10 mt-12">
      <FilterBar />
      {!data && loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <ul className="space-y-1">
          {Array.isArray(data) &&
            data.map((freelancer) => (
              <li key={freelancer.id} className="relative overflow-hidden">
                <Link className="bg-white h-auto md:h-52 custom-shadow p-4 rounded-sm hover:bg-gray-50 cursor-pointer flex flex-col md:flex-row items-start gap-4">
                  <div className="flex gap-3 flex-col md:flex-row">
                    <div className="w-16 h-16 rounded-full  ">
                      <img
                        src={freelancer.image}
                        className="w-16 h-16 rounded-full object-cover mt-1 border"
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                      <h2 className="text-lg font-medium text-gray-600 leading-5">
                        {freelancer.name}
                      </h2>
                      <p className="text-lg text-gray-800 leading-3 font-bold">
                        {freelancer.title}
                      </p>
                      <p className="text-sm text-gray-500 leading-3 text-xs">
                        {freelancer.location}
                      </p>

                      <div className="flex gap-5 items-center ">
                        <p className="text-xs mt-1 text-gray-600 font-medium ">
                          Earned:{freelancer.earned}
                        </p>
                        <p className="text-xs mt-1 text-gray-600 font-medium">
                          Rate: {freelancer.hourly_rate}
                        </p>
                      </div>

                      <div className="flex gap-2 flex-wrap mt-1">
                        {freelancer?.skills?.split(",").map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs md:mt-1 text-gray-600 font-medium">
                        {freelancer.overview}...
                      </p>
                    </div>
                  </div>

                  {/*  */}
                  <button className="md:absolute right-2 top-0 capitalize md:mt-2 w-full md:w-auto text-nowrap self-start bg-[var(--primary-color)] text-white md:px-4 py-1.5 text-sm rounded-lg hover:bg-black cursor-pointer transition">
                    Invite to Job
                  </button>

                  {/*  */}
                </Link>
              </li>
            ))}
        </ul>
      )}
      <div className="p-6">
        <LoadMore count={page} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default ClientDashboard;
