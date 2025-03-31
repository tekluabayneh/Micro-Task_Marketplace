const BudgetSection = ({ budget, postedDate, proposals }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Budget</h3>
        <p className="text-gray-700">{budget}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Proposals</h3>
        <p className="text-gray-700">{proposals}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Posted</h3>
        <p className="text-gray-700">{postedDate}</p>
      </div>
    </div>
  );
};

export default BudgetSection;
