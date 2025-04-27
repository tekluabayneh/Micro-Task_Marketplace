import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileHeader from "../../components/Freelancer/ProfileHeader";
import SkillsSection from "../../components/Freelancer/SkillsSection";
import OverviewSection from "../../components/Freelancer/OverviewSection";
import WorkHistorySection from "../../components/Freelancer/WorkHistorySection";
import ReviewsSection from "../../components/Freelancer/ReviewsSection";
import FreelancerSidebar from "../../components/Freelancer/FreelancerSidebar";
import FR_PortFolio from "../../components/Freelancer/Portfolio";
import UpdateFreelancerPorfile from "../../components/hooks/UpdatefreelancerProfile";
const Profile = () => {
  const [FreelancerProfileData, setFreelancerProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchFreelancerProfile = async () => {
      try {
        let email = localStorage.getItem("userEmail");
        const response = await axios.get(
          "http://localhost:5000/api/FreelancerProfileData",
          {
            params: { email },
          }
        );
        console.log(response.data);
        // Make sure we got valid data before setting
        if (response.data && response.data.length > 0) {
          setFreelancerProfileData(response.data);
        } else {
          setFreelancerProfileData(null);
        }
      } catch (error) {
        console.error("❌ Error fetching client profile:", error);
        setError("Failed to fetch profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    FetchFreelancerProfile();
  }, []);

  // Prevent error on first render
  if (loading) {
    return <div className="mt-20 text-center">Loading profile...</div>;
  }

  if (error) {
    return <div className="mt-20 text-center text-red-500">{error}</div>;
  }

  const userData = FreelancerProfileData?.[0] ?? {};
  localStorage.setItem("f_userImg", userData.image ?? "not provided");
  localStorage.setItem("F_username", userData.name ?? "not provided");

  return (
    <main className="p-5  mt-12">
      {/* Profile Header */}
      <ProfileHeader data={FreelancerProfileData ?? "not provided"} />
      <UpdateFreelancerPorfile />
      <div className="flex flex-col md:flex-row gap-2">
        <FreelancerSidebar data={userData ?? "not provided"} />
        <div>
          {/* Skills Section */}
          <SkillsSection data={userData ?? "not provided"} />

          {/* Overview Section */}
          <OverviewSection data={userData ?? "not provided"} />

          {/* Work History Section */}
          <WorkHistorySection data={userData ?? "not provided"} />

          <FR_PortFolio data={userData ?? "not provided"} />

          {/* Reviews Section */}
          <ReviewsSection data={userData ?? "not provided"} />
        </div>
      </div>
    </main>
  );
};

export default Profile;
