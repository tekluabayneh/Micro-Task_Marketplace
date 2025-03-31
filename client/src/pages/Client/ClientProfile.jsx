import React from "react";
import CompanyDetails from "../../components/Client/CompanyDetail";
import AccountSection from "../../components/Client/AccountSection";
import MyInfo from "../../components/Client/MyInfo";
import SettingsPage from "../../components/Client/Setting";

// Main Component: ClientProfile
const ClientProfile = () => {
  const clientData = {
    username: "T***yneh",
    email: "t***a@gmail.com",
    companyName: "Teklu Abayneh",
    owner: "T***yneh",
    phone: "", // Empty if not provided
    vatId: "", // Empty if not provided
    timeZone: "UTC+03:00 Baghdad, Kuwait, Nairobi, Riyadh",
    address: "Ethiopia",
  };

  return (
    <main className="w-full mt-20 flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-70">
        <SettingsPage />
      </div>

      <div className="w-auto md:w-[36rem]">
        {/* MyInfo */}
        <MyInfo />

        {/* Account Section */}
        <AccountSection username={clientData.username} />

        {/* Company Details */}
        <CompanyDetails
          companyName={clientData.companyName}
          owner={clientData.owner}
          phone={clientData.phone}
          vatId={clientData.vatId}
          timeZone={clientData.timeZone}
          address={clientData.address}
        />
      </div>
    </main>
  );
};

export default ClientProfile;
