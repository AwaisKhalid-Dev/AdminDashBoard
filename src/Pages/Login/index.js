import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const serverAddress = "https://jx2th7-8080.csb.app/api/auth/signin";
  const validateForm = () => {
    let tempErrors = {};
    tempErrors.id = id ? "" : "ID is required";
    tempErrors.password = password ? "" : "Password is required";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const authenticateUser = async () => {
    try {
      const response = await axios.post(serverAddress, {
        id,
        password,
      });

      if (response.data.success) {
        console.log("Login successful");
      } else {
        console.error("Invalid ID or password");
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // authenticateUser();
      const response = {
        status: true,
        message: "user login succefuly",
        token: "token",
        user: {
          id: "1",
          role: "user",
          name: "awais",
          email: "dev.awaiskhalid@gmail.com",
        },
      };

      if (response.user.role === "admin") {
        navigate("/adminDashboard");
      } else if (response.user.role === "user") {
        navigate("/scanqr");
      } else {
        alert("invalid user role");
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="Enter Your Id Here"
              className={`shadow appearance-none border ${
                errors.id ? "border-red-500" : ""
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {errors.id && (
              <p className="text-red-500 text-xs italic">{errors.id}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Passcode Here"
              className={`shadow appearance-none border ${
                errors.password ? "border-red-500" : ""
              } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:w-[50%] h-[35px] rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
