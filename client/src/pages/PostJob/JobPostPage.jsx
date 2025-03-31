import BudgetSection from "./BudgetSection.jsx";
import ClientInfo from "./ClientInfo.jsx.jsx";
import FeedbackSection from "./FeedbackSection.jsx.jsx";
import JobHeader from "./JobHeader";
import SkillsSection from "./SkillsSection";


const JobPostPage = () => {
  const jobDetails = {
    title: "Fullstack Developer Needed for SaaS Platform",
    description:
      "We are looking for a skilled Fullstack Developer to help us build and maintain a scalable SaaS platform.",
    skillsRequired: ["React", "Node.js", "MongoDB", "AWS", "REST APIs"],
    budget: "$20 - $30 / hr",
    postedDate: "Posted 2 days ago",
    proposals: "50+ proposals",
    client: {
      name: "John Doe",
      location: "New York, USA",
      memberSince: "March 2020",
      totalSpent: "$50,000+",
      hireRate: "92%",
      feedback: [
        { rating: 5, comment: "Great communicator and pays on time." },
        { rating: 4, comment: "Professional and organized." },
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Job Header */}
      <JobHeader
        title={jobDetails.title}
        description={jobDetails.description}
      />

      {/* Skills Section */}
      <SkillsSection skills={jobDetails.skillsRequired} />

      {/* Budget Section */}
      <BudgetSection
        budget={jobDetails.budget}
        postedDate={jobDetails.postedDate}
        proposals={jobDetails.proposals}
      />

      {/* Client Information */}
      <ClientInfo client={jobDetails.client} />

      {/* Feedback Section */}
      <FeedbackSection feedback={jobDetails.client.feedback} />
    </div>
  );
};

export default JobPostPage;
