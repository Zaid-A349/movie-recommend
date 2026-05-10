import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login feature will be added later");

    navigate("/");
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <Layout>
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto bg-gray-900 p-6 rounded"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
          />

          <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold">
            Login
          </button>

          <p className="text-center text-gray-400 mt-4 text-sm">
            Don’t have an account?{" "}

            <span
              onClick={() => navigate("/signup")}
              className="text-yellow-400 cursor-pointer"
            >
              Sign up
            </span>

          </p>
        </form>
      </Layout>
    </div>
  );
};

export default Login;