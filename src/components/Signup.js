import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [errors, setErrors] = useState({}); // State to store validation errors
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "This field is required.";
    }

    if (!email.trim()) {
      newErrors.email = "This field is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "This field is required.";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "This field is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!isTermsChecked) {
      newErrors.isTermsChecked = "You must agree to the terms.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here (e.g., send data to server)
      alert(`Name: ${fullName}, Email: ${email}, Password: ${password}`);
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setIsTermsChecked(false);
      setErrors({}); // Clear errors after successful submission
      navigate("/intro");
    }
  };

  return (
    <>
      <div className="text-3xl font-semibold text-center m-5">teach:able</div>
      <hr className="border-b-2 border-black font-bold" />
      <div className="flex justify-center">
        <div>
          <h1 className="text-3xl text-center mt-12 mb-10">
            Get started with Teachable
          </h1>
          <div className="custom_h3">
            <h3 className="text-center mb-10 ">
              Join more than 100,000 creators who've sold over
              <strong> $1 billion</strong> in courses and coaching.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="px-[120px] custom_div">
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`shadow-sm bg-gray-50 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md w-80 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.fullName}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`shadow-sm bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md w-80 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="text-xs text-red-500 mt-1">{errors.email}</div>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`shadow-sm bg-gray-50 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md w-80 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`shadow-sm bg-gray-50 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-md w-80 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="mt-8 mb-8">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 h-5 w-5"
                  checked={isTermsChecked}
                  onChange={(e) => setIsTermsChecked(e.target.checked)}
                />
                <div className="ml-2 text-sm text-gray-700 custom_text">
                  I agree to the &nbsp;
                  <a href="#" className="text-black-600 font-bold underline">
                    Terms of Use
                  </a>
                  &nbsp; and &nbsp;
                  <a href="#" className="text-black-600 font-bold underline">
                    Privacy Policy
                  </a>
                </div>
              </label>
              {errors.isTermsChecked && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.isTermsChecked}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-flex items-center bg-gray-900 px-4 py-2 text-white rounded-md"
              >
                Create Account
              </button>
            </div>
            <div className="mb-6 text-center">
              <p className="text-gray-700 mt-4">
                Already have an account? &nbsp;
                <a href="#" className="text-black-600 font-bold  underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
