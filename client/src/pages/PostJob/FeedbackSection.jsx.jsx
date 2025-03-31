import StarRating from "./StarRating.jsx";


const FeedbackSection = ({ feedback }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Feedback</h3>
      <ul className="space-y-3">
        {feedback.map((review, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={review.rating} />
              <span className="text-sm text-gray-600">
                Rating: {review.rating}/5
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackSection;
