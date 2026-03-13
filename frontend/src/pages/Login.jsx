import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
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
                        Welcome Back
                    </h2>

                    <p className="text-center text-gray-500 text-sm mt-2 mb-6">
                        Login to continue learning on SkillShare.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                            Log In
                        </button>

                    </form>

                    {/* Signup link */}
                    <p className="text-sm text-center mt-6 text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Login;