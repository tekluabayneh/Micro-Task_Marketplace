import React from "react";
import ProfileHeader from "../../components/Freelancer/ProfileHeader";
import SkillsSection from "../../components/Freelancer/SkillsSection";
import OverviewSection from "../../components/Freelancer/OverviewSection";
import WorkHistorySection from "../../components/Freelancer/WorkHistorySection";
import ReviewsSection from "../../components/Freelancer/ReviewsSection";
import FreelancerSidebar from "../../components/Freelancer/FreelancerSidebar";
const Profile = () => {
  return (
    <main
      className="p-5  mt-12
    "
    >
      {/* Profile Header */}
      <ProfileHeader />

      <div className="flex flex-col md:flex-row gap-2">
        <FreelancerSidebar />
        <div>
          {/* Skills Section */}
          <SkillsSection />

          {/* Overview Section */}
          <OverviewSection />

          {/* Work History Section */}
          <WorkHistorySection />

          {/* Reviews Section */}
          <ReviewsSection />
        </div>
      </div>
    </main>
  );
};

export default Profile;
