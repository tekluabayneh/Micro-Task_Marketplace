const ReviewsSection = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "John did an excellent job on our project. Highly recommend!",
    },
    {
      name: "Bob Smith",
      rating: 4,
      comment: "Great communication and delivered on time.",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Client Reviews
      </h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-gray-800 font-medium">{review.name}</h3>
            <div className="flex items-center text-yellow-500 text-sm">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
