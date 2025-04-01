const ClientInfo = ({ client }) => {
  return (
    <div className="border-t pt-6 p-6 custom-shadow m-4 flex gap-3 flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-4">About the Client</h2>
      <div className="mb-4 flex flex-col gap-3">
        <p className="text-gray-700 font-medium">{client.name}</p>
        <p className="text-sm text-gray-600">{client.location}</p>
        <p className="text-sm text-gray-600">
          Member Since: {client.memberSince}
        </p>
        <p className="text-sm text-gray-600">
          Total Spent: {client.totalSpent}
        </p>
        <p className="text-sm text-gray-600">Hire Rate: {client.hireRate}</p>
      </div>
    </div>
  );
};

export default ClientInfo;
