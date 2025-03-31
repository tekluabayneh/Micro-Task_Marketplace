const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center gap-4">
        {/* Profile Picture */}
        <div className="relative">
          <span
            className="material-symbols-outlined absolute bottom-0  border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xl"
            style={{ fontSize: "18px" }}
          >
            edit
          </span>
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-green-600"
          />
        </div>

        {/* Name, Title, Location */}
        <div className="relative flex gap-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
            <div className="flex gap-2 mt-1">
              <div className="flex gap-2 ">
                <span
                  className="material-symbols-outlined   border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xs"
                  style={{ fontSize: "14px" }}
                >
                  location_on
                </span>
                <p className="text-sm text-gray-600 text-xs">Ethiopia</p>
              </div>

              <p className="text-xs text-gray-500">7:00 pm local Time</p>
            </div>
          </div>
          <span
            className="material-symbols-outlined absolute top-0 left-32 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
            style={{ fontSize: "18px" }}
          >
            edit
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
