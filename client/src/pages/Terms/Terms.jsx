import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to MicroWork. By using our platform, you agree to our terms of
        service. These terms govern your use of the platform, job postings,
        freelance work, and payments.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>You must be at least 18 years old to use MicroWork.</li>
        <li>Freelancers and clients must communicate respectfully.</li>
        <li>All transactions must go through the platform.</li>
        <li>Violations may result in account suspension.</li>
      </ul>
    </div>
  );
};

export default Terms;
