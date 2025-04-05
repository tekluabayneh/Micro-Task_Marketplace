const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Go back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
