import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This policy explains what data we
        collect and how we use it.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          We collect only necessary information like name, email, and payment
          data.
        </li>
        <li>We don’t sell or share your data with third parties.</li>
        <li>Cookies are used for better user experience.</li>
        <li>You can request to delete your data anytime.</li>
      </ul>
    </div>
  );
};

export default Privacy;
