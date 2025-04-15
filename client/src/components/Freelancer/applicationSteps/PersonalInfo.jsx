import React from "react";
const PersonalInfo = ({
  firstName,
  lastName,
  email,
  phone,
  location,
  updateFields,
}) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
      <p className="text-gray-600">
        Let us know who you are and how to reach you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            placeholder="John"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            placeholder="Doe"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            placeholder="john.doe@example.com"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            placeholder="(123) 456-7890"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => updateFields({ location: e.target.value })}
            placeholder="City, Country"
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
