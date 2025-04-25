import React, { useEffect, useState } from "react";
import CompanyDetails from "../../components/Client/CompanyDetail";
import AccountSection from "../../components/Client/AccountSection";
import MyInfo from "../../components/Client/MyInfo";
import SettingsPage from "../SettingsPage/ClientSettingsPage ";
import UpdatePorfile from "../../components/hooks/UpdatePorfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClientHeader from "../Header/ClientHeader";

const ClientProfile = () => {
  const [ClientProfileData, setClientProfileData] = useState(null);

  const dispatch = useDispatch();
  const profileData = useSelector(
    (state) => state.clientProfileSettingSlice.CL_slide
  );

  useEffect(() => {
    const FetchClientProfile = async () => {
      try {
        let email = localStorage.getItem("userEmail");
        const response = await axios.get(
          "http://localhost:5000/api/ClientProfileData",
          {
            params: { email },
          }
        );
        console.log(response);
        // Make sure we got valid data before setting
        if (response.data && response.data.length > 0) {
          setClientProfileData(response.data[0]);
        } else {
          setClientProfileData(null);
        }
      } catch (error) {
        console.error("❌ Error fetching client profile:", error);
      }
    };
    FetchClientProfile();
  }, []);

  // Prevent error on first render
  if (!ClientProfileData) {
    return <div className="mt-20 text-center">Loading profile...</div>;
  }
  localStorage.setItem("userImg", ClientProfileData.image);
  localStorage.setItem("username", ClientProfileData.owner_name);
  return (
    <main className="w-full mt-20 flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-70">
        <SettingsPage
          image={ClientProfileData?.image}
          username={ClientProfileData?.owner_name}
        />
        <UpdatePorfile />
      </div>

      <div className="w-auto md:w-[36rem]">
        {/* MyInfo */}
        <MyInfo />

        {/* Account Section */}
        {ClientProfileData && (
          <AccountSection
            username={ClientProfileData?.owner_name}
            companyname={ClientProfileData?.company_name}
          />
        )}

        {/* Company Details */}
        {ClientProfileData && (
          <CompanyDetails
            companyName={ClientProfileData.company_name}
            owner={ClientProfileData.owner_name}
            phone={ClientProfileData.phone}
            industry={ClientProfileData.industry}
            address={ClientProfileData.location}
          />
        )}
      </div>
    </main>
  );
};

export default ClientProfile;
