import React, { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup logic");
    } else {
      console.log("Login logic");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Create Account" : "Login"}
          
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-3 border rounded-lg"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            required
          />

          {isSignup && (
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <p>
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsSignup(true)}
              >
                Create one
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
