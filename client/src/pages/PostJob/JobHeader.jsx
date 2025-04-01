const JobHeader = () => {
  return (
    <div className="mb-6 custom-shadow h-96 rounded-sm p-5">
      <div className="flex  gap-5 flex-col">
        <label className="text-xl" htmlFor="Title">
          Title
        </label>

        <input
          className="border rounded-sm w-full h-8 p-1"
          type="text"
          name="Title"
          placeholder="UX/Developer"
        />

        <label className="text-xl" htmlFor="description">
          Describe what you need
        </label>
        <textarea 
          className="border rounded-sm md:h-50 w-full p-1"
          name="description"
          placeholder="we want someone..."
        />
      </div>
    </div>
  );
};

export default JobHeader;
