import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">

        <div className="p-8">

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>

          <p className="text-center text-gray-500 text-sm mt-2 mb-6">
            Join our community of curious creatives and start learning today.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Choose a unique username"
                value={form.username}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to SkillShare’s{" "}
            <span className="text-indigo-600 cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="text-indigo-600 cursor-pointer">Privacy Policy</span>.
          </p>

          {/* Login */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Already a member?{" "}
            <Link to='/login' className="text-indigo-600 font-medium cursor-pointer">
              Log In
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Signup;