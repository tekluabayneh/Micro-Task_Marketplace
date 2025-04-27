import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const UserTypeSelector = () => {
  const [UserType, setUserType] = useState("");
  const [TypeError, setTypeError] = useState("");
  const navigate = useNavigate();

  const GetType = () => {
    if (!UserType) {
      setTypeError(" type must be provided to Continue");
      return;
    }
    localStorage.setItem("userType", UserType);
    navigate("/register");
  };

  return (
    <main className="w-full h-96 my-32 flex flex-col items-center justify-center">
      <h1 className="text-lg font-medium">
        When logging in, please make sure to choose the same option you selected
        during registration.
      </h1>

      <dvi className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            You are a:
          </label>
          <div className="flex gap-5">
            <div className="flex w-32 h-32 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-sm  items-center  gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="client"
                  onChange={() => setUserType("Client")}
                />
                <span>Client</span>
              </label>
            </div>
            <div className="flex w-32 h-32 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-sm  items-center  gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="freelancer"
                  onChange={() => setUserType("Freelancer")}
                />
                <span>Freelancer</span>
              </label>
            </div>
          </div>
        </div>
        <div className="text-red-600">{TypeError ? TypeError : ""}</div>
        <button
          type="button"
          onClick={GetType}
          className="bg-green-600 cursor-pointer  hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </dvi>
    </main>
  );
};
export default UserTypeSelector;
