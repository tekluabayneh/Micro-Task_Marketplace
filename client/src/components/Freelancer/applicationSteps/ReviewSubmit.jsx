import React from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import Separator from "../../Separator";

const ReviewSubmit = ({ formData, onSubmit, isSubmitting }) => {
  const { coverLetter, Attachment_url, urlsStore } = formData;
  console.log(Attachment_url);

  // const firstFileItem =
  //   Attachment_url.find((arr) => arr.length > 0)?.[0] ??
  //   "you Didn't upload image";
  const firstUrlItem = urlsStore.find((arr) => arr.length > 0)?.[0];

  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
      <p className="text-gray-600">
        Please review all information before submitting your application.
      </p>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-gray-700">Cover Letter</h3>
          <Separator className="my-2" />
          <div className="mt-3 w-full overflow-scroll h-32">
            <p className="whitespace-pre-wrap">
              {coverLetter || "No cover letter provided"}
            </p>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-semibold text-gray-700">
            Attachment_url
          </h3>
          <Separator className="my-2" />
          <div className="mt-3 w-full overflow-scroll h-72">
            <p className="whitespace-pre-wrap">
              <img
                src={Attachment_url.preview}
                alt="preview"
                width={100}
                className="w-96 rounded-sm mx-auto"
              />
            </p>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-semibold text-gray-700">urls</h3>
          <Separator className="my-2" />
          <div className="mt-3 w-full overflow-scroll h-72">
            {firstUrlItem && (
              <div key={firstUrlItem.id}>
                <a
                  href={firstUrlItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {firstUrlItem.url}
                </a>
              </div>
            )}
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
