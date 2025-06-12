
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import axios from "axios";


import { useNavigate } from "react-router-dom";
const DashboardTabs = ({ tab1, tab2 }) => {
    let [isActive, setisActive] = useState(true);
    const [ClientProfileData, setClientProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const FetchClientProfile = async () => {
            try {
                let email = localStorage.getItem("userEmail");
                const response = await axios.get(
                    "https://micro-task-marketplace.onrender.com/api/ClientProfileData",
                    {
                        params: { email },
                    }
                );
                // Make sure we got valid data before setting
                if (response.data && response.data.length > 0) {
                    setClientProfileData(response.data[0]);
                } else {
                    setClientProfileData(null);
                }
            } catch (error) {
                console.error("❌ Error fetching client profile:", error);
                setError("Failed to fetch profile. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        FetchClientProfile();
    }, [setisActive, ClientProfileData]);

    // Prevent error on first render
    if (loading) {
        return (
            <div className="mt-20 text-center">
                {" "}
                <Loading />
            </div>
        );
    }

    if (error) {
        return <div className="mt-20 text-center text-red-500">{error}</div>;
    }

    const message = () => {
        setisActive(false);
        if (
            !ClientProfileData ||
            !ClientProfileData.company_name ||
            !ClientProfileData.owner_name
        ) {
            navigate("/Client/ClientProfile");
            // Info message
            toast.warn(
                "You have to fill out your profile before going to the AI recommendation list.",
                {
                    autoClose: 7000,
                }
            );
        }
    };
    return (
        <div className="w-full">
            <div className="grid w-full grid-cols-2 mb-6 gap-2">
                <button
                    onClick={() => setisActive(true)}
                    className={`${isActive ? "bg-green-300" : "bg-white"
                        } p-3 cursor-pointer rounded-sm custom-shadow font-medium`}
                >
                    Jobs
                </button>
                <button
                    onClick={message}
                    className={`${!isActive ? "bg-green-300" : "bg-white"
                        } p-3 cursor-pointer rounded-sm custom-shadow font-medium`}
                >
                    AI Recommendations
                </button>
            </div>

            {isActive ? tab1 : tab2}
        </div>
    );
};

export default DashboardTabs;
