import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import CoverLetter from "./CoverLetter";
import ReviewSubmit from "./ReviewSubmit";
import StepIndicator from "./StepIndicator";
import Attachment_urlPage from "./Attachment_urlPage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const INITIAL_DATA = {
  coverLetter: "",
  Attachment_url: [],
  urlsStore: [],
};

const steps = ["Cover_Letter", "Attachment_url", "Review_&_Submit"];

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

  const applyJob = async (data) => {
    let response = await axios.post(
      "https://micro-task-marketplace.onrender.com/api/jobs/apply",
      data
    );
    return response;
  };

  const mutate = useMutation({
    mutationFn: applyJob,
    onSuccess: (response) => {
      toast.success("You have applied for the job successfully!");
      // Redirect to dashboard after success
      window.location.href = "/Freelancer/Dashboard";
    },
    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong while applying for the job.");
      // setIsSubmitting(false);
    },
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      let UserEmail = localStorage.getItem("userEmail");
      let jobId = localStorage.getItem("job_id");
      let clientId = localStorage.getItem("client_id");

      if (
        !UserEmail ||
        !formData.Attachment_url[formData.Attachment_url.length - 1].preview ||
        !jobId ||
        !formData.coverLetter ||
        !clientId
      ) {
        toast.error("you to fill of fields to applying for the job.");
        setIsSubmitting(false);
        return;
      }

      await mutate.mutateAsync({
        email: UserEmail,
        attachment_url:
          formData.Attachment_url[formData.Attachment_url.length - 1].preview,
        client_id: clientId,
        job_id: jobId,
        cover_letter: formData.coverLetter,
      });
           setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while submitting.");
      setIsSubmitting(false);
    }
  };
  const stepComponents = [
    <CoverLetter key="cover" {...formData} updateFields={updateFields} />,
    <Attachment_urlPage
      key="Attachment"
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
