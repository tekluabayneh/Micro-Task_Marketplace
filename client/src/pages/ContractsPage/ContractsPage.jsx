import React from "react";

const contracts = [
  {
    id: 1,
    project: "Landing Page Design",
    client: "John Doe",
    amount: 250,
    status: "Active",
  },
  {
    id: 2,
    project: "React Admin Dashboard",
    client: "TechCorp",
    amount: 600,
    status: "Completed",
  },
];

const ContractsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">My Contracts</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="py-2 px-4 border-b">Project</th>
            <th className="py-2 px-4 border-b">Client</th>
            <th className="py-2 px-4 border-b">Amount ($)</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id} className="text-sm">
              <td className="py-2 px-4 border-b">{contract.project}</td>
              <td className="py-2 px-4 border-b">{contract.client}</td>
              <td className="py-2 px-4 border-b">{contract.amount}</td>
              <td className="py-2 px-4 border-b">{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsPage;
