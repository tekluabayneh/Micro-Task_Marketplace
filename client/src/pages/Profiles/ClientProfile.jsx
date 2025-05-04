import React, { useEffect, useState } from "react";
import CompanyDetails from "../../components/Client/CompanyDetail";
import AccountSection from "../../components/Client/AccountSection";
import MyInfo from "../../components/Client/MyInfo";
import SettingsPage from "../SettingsPage/ClientSettingsPage ";
import UpdatePorfile from "../../components/hooks/UpdatePorfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClientHeader from "../Header/ClientHeader";
import Loading from "../../components/Loading/Loading";

const ClientProfile = () => {
  const [ClientProfileData, setClientProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

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

  localStorage.setItem("userImg", ClientProfileData?.image ?? "not provided");
  localStorage.setItem(
    "C_username",
    ClientProfileData?.owner_name ?? "not provided"
  );

  return (
    <main className="w-full mt-20 flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-70">
        <SettingsPage
          image={ClientProfileData?.image ?? "not provided"}
          username={ClientProfileData?.owner_name ?? "not provided"}
        />
        <UpdatePorfile />
      </div>

      <div className="w-auto md:w-[36rem]">
        {/* MyInfo */}
        <MyInfo />

        {/* Account Section */}

        <AccountSection
          username={ClientProfileData?.owner_name ?? "not provided"}
          companyname={ClientProfileData?.company_name ?? "not provided"}
        />

        {/* Company Details */}

        <CompanyDetails
          companyName={ClientProfileData?.company_name ?? "not provided"}
          owner={ClientProfileData?.owner_name ?? "not provided"}
          phone={ClientProfileData?.phone}
          industry={ClientProfileData?.industry ?? "not provided"}
          address={ClientProfileData?.location ?? "not provided"}
        />
      </div>
    </main>
  );
};

export default ClientProfile;
