import React from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import Separator from "../../Separator";

const ReviewSubmit = ({ formData, onSubmit, isSubmitting }) => {
  const { jobTitle, jobSize, experience, description, skills, budget } =
    formData;

  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
      <p className="text-gray-600">
        Please review all information before submitting your application.
      </p>
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-gray-700">
            Jobs Information
          </h3>
          <Separator className="my-2" />
          <div className="my-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <span className="text-sm text-gray-500">experienceLevel</span>
              <p>{experience}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">jobSize</span>
              <p>{jobSize || "Not provided"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">budget</span>
              <p>{budget || "Not provided"}</p>
            </div>
          </div>
        </section>
        <section>
          <Separator className="my-2" />
          <div className="my-2" />
          <div className="space-y-3 mt-3">
            <div>
              <span className="text-sm text-gray-500">Job Title</span>
              <p>{jobTitle}</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <Separator className="my-2" />
          <div className="mt-3">
            {skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-upwork-light text-upwork px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No skills provided</p>
            )}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-700">description</h3>
          <Separator className="my-2" />
          <div className="mt-3 w-full overflow-scroll h-32 custom-ScrollTum">
            <p className="whitespace-pre-wrap">
              {description || "No description provided"}
            </p>
          </div>
        </section>

        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-sm font-medium text-black">
              All fields are complete! Your application is ready to be
              submitted.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="text-black bg-green-500 rounded-md px-8 py-4 cursor-pointer text-lg flex items-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmit;
