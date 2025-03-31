const AccountSection = ({ username }) => {
  return (
    <div className="mb-4 shadow-md p-4 h-70 custom-shadow relative">
      <span
        className="material-symbols-outlined absolute top-2 right-6
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h3 className="text-xl font-medium text-gray-700 pb-4">Account</h3>
      <p className="text-sm text-gray-600 pb-2">{username}</p>
      <p className="text-sm text-gray-600">Client Marketplace Teklu Abayneh</p>
    </div>
  );
};
export default AccountSection;
