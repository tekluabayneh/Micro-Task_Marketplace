import React from "react";
import { Check } from "lucide-react";

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${
                  index < currentStep
                    ? "bg-green-400 text-white"
                    : index === currentStep
                    ? "bg-green-400 border-2 font-medium"
                    : "bg-gray-100 text-gray-400"
                }
                transition-colors duration-300
              `}
              >
                {index < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div
                className={`
                mt-2 text-sm font-medium
                ${index <= currentStep ? "text-black" : "text-gray-400"}
              `}
              >
                {step}
              </div>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`
                flex-1 h-0.5 mx-2
                ${index < currentStep ? "bg-green-500" : "bg-gray-200"}
              `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
