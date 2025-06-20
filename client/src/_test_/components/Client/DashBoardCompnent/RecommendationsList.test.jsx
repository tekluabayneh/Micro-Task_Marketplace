import RecommendationsList from "../../../../components/Client/DashBoardComponent/RecommendationsList";
import React from "react";

 import { toast } from "sonner";

 

describe("RecommendationsList test", () => {
  test("should give message with the ui", () => {
    const invitedFreelancers = [];
    const setInvitedFreelancers = vi.fn();
    const freelancer = "John"
const handleInvite = (freelancer) => {
    if (invitedFreelancers.includes(freelancer)) {
      toast.error(`${freelancer} has already been invited`);
      return;
    }

    setInvitedFreelancers([...invitedFreelancers, freelancer]);
    toast.success(`Invitation sent to ${freelancer}`);
  };
  
  
  
  });
});
