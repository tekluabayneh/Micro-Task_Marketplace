import React from "react";
import ProfileHeader from "../../components/Client/ProfileHeader";
import SkillsSection from "../../components/client/SkillsSection";
import OverviewSection from "../../components/client/OverviewSection";
import WorkHistorySection from "../../components/client/WorkHistorySection";
import ReviewsSection from "../../components/client/ReviewsSection";
const Profile = () => {
  return (
    <main
      className="p-5  mt-12
    "
    >
      {/* Profile Header */}
      <ProfileHeader />

      <div className="flex gap-2">
        <div className="flex flex-col w-96">
          <h2>this is the sidebar</h2>
        </div>

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
