import { useForm } from "react-hook-form";

const JobHeader = () => {
  const { register, formState = { errors } } = useForm({});
  return (
    <div className="mb-6 custom-shadow h-60 md:h-32 rounded-sm p-5">
      <form action="" className="flex flex-col gap-5 md:flex-row">
        <label className="text-xl" htmlFor="Title">
          Title
        </label>
        <input
          className="border rounded-sm w-full p-1"
          type="text"
          name="Title"
          placeholder="UX/Developer"
        />

        <label className="text-xl" htmlFor="description">
          description
        </label>
        <input
          className="border rounded-sm w-full p-1"
          type="text"
          name="description"
          placeholder="we want someone.."
        />
      </form>
    </div>
  );
};

export default JobHeader;
