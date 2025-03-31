const CompanyDetails = ({
  companyName,
  owner,
  phone,
  vatId,
  timeZone,
  address,
}) => {
  return (
    <div className="mb-4 custom-shadow p-4 h-70 rounded-sm relative">
      <span
        className="material-symbols-outlined absolute top-2 right-6
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h3 className="text-xl font-medium text-gray-700 pb-6">
        Company Details
      </h3>
      <ul className="space-y-1 text-sm text-gray-600">
        <li>
          <strong>Company Name:</strong> {companyName}
        </li>
        <li>
          <strong>Owner:</strong> {owner}
        </li>
        <li>
          <strong>Phone:</strong> {phone || "Not provided"}
        </li>
        <li>
          <strong>VAT ID:</strong>{" "}
          {vatId || "Enter your VAT ID to enable VAT invoicing"}
        </li>
        <li>
          <strong>Time Zone:</strong> {timeZone}
        </li>
        <li>
          <strong>Address:</strong> {address || "Not provided"}
        </li>
      </ul>
    </div>
  );
};

export default CompanyDetails;
