import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserTypeSelector = () => {
  return (
    <main className="w-full h-96 my-32 flex items-center justify-center">
      <dvi className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            You are a:
          </label>
          <div className="flex gap-5">
            <div className="flex w-32 h-32 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-sm  items-center  gap-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" value="client" />
                <span>Client</span>
              </label>
            </div>
            <div className="flex w-32 h-32 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-sm  items-center  gap-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" value="freelancer" />
                <span>Freelancer</span>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          <Link to={"/register"}> Next</Link>
        </button>
      </dvi>
    </main>
  );
};
export default UserTypeSelector;
