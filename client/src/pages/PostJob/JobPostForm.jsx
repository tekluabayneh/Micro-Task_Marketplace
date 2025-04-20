import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "react-hot-toast";
import JobTitle from "../../components/Client/PostJob_form/JobTitle";
import Experience from "../../components/Client/PostJob_form/Experience";
import Skills from "../../components/Client/PostJob_form/Skills";
import ReviewSubmit from "../../components/Client/PostJob_form/ReviewSubmit";
import StepIndicator from "../../components/Client/PostJob_form/StepIndicator";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Description_and_budget from "../../components/Client/PostJob_form/Description_budget";

const INITIAL_DATA = {
  jobTitle: "",
  jobSize: "",
  experience: "",
  description: "",
  budget: "",
  skills: [],
  email: localStorage.getItem("userEmail"),
};

const steps = [
  "Title for The job",
  "Experience & Level",
  "Skills",
  "budget & Describe Info",
  "Review & Submit",
];

const JobPostForm = () => {
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
  const PostJob = async (data) => {
    let response = await axios.post("http://localhost:5000/api/postJob", data);
    return response;
  };

  const Mutate = useMutation({
    mutationFn: PostJob,
    onSuccess: (response) => {
      console.log(response);
      setIsSubmitting(false);
      toast.success("Your job Job Post has been successfully submitted.");

      setTimeout(() => {
        window.location.href = "/Client/MyPostJobs";
      }, 1000);
    },
    onError: (err) => {
      console.log(err);

      const msg = err?.response?.data?.message;
      const msg1 = err?.response?.data;

      if (msg && msg.includes("Please log in with a client account")) {
        toast.error(msg);
      } else if (
        msg1 &&
        msg1.includes("You must have an account to post a job")
      ) {
        toast.error(msg1);
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if one of those data are mess
    if (
      !formData.jobTitle ||
      !formData.budget ||
      !formData.description ||
      !formData.experience ||
      !formData.jobSize
    ) {
      toast.error("Make shure you fill all job form, Please try again.");
      return;
    }
    // check if one of those data are mess
    if (formData.skills.length === 0) {
      toast.error("Make shure you fill all job form, Please try again.");
      return;
    }

    Mutate.mutate(formData);
    setIsSubmitting(true);
    console.log(formData);
  };

  const stepComponents = [
    <JobTitle key="personal" {...formData} updateFields={updateFields} />,
    <Experience key="experience" {...formData} updateFields={updateFields} />,
    <Skills key="skills" {...formData} updateFields={updateFields} />,
    <Description_and_budget
      key="cover"
      {...formData}
      updateFields={updateFields}
    />,
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
        <h1 className="text-3xl font-extrabold p-1">Job Posting Form</h1>
        <p className="text-sm">
          Complete the form below to submit your Job Post
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

export default JobPostForm;
