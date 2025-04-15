import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";
import CoverLetter from "./CoverLetter";
import ReviewSubmit from "./ReviewSubmit";
import StepIndicator from "./StepIndicator";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  jobTitle: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  skills: [],
  coverLetter: "",
};

const steps = [
  "Personal Info",
  "Experience",
  "Skills",
  "Cover Letter",
  "Review & Submit",
];

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFields = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    ({
      title: "Application Submitted!",
      description: "Your job application has been successfully submitted.",
      duration: 3000,
    });

    // Redirect to success page
    window.location.href = "/FreelancerDashboard";

    setIsSubmitting(false);
  };

  const stepComponents = [
    <PersonalInfo key="personal" {...formData} updateFields={updateFields} />,
    <Experience key="experience" {...formData} updateFields={updateFields} />,
    <Skills key="skills" {...formData} updateFields={updateFields} />,
    <CoverLetter key="cover" {...formData} updateFields={updateFields} />,
    <ReviewSubmit
      key="review"
      formData={formData}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />,
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-fade-in custom-shadow rounded-md mt-12">
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-3xl font-extrabold p-1">Job Application Form</h1>
        <p className="text-sm">
          Complete the form below to submit your application
        </p>
      </div>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <div className="mt-8">
        <div className="pt-6">
          <div className="min-h-[400px]">{stepComponents[currentStep]}</div>

          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-green-500 p-2 rounded-sm text-white hover:bg-black cursor-pointer flex items-center gap-1"
                disabled={isSubmitting}
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
            )}
            {currentStep === 0 && <div />}

            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-500 p-2 rounded-sm text-white hover:bg-black cursor-pointer flex items-center gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4 " />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
