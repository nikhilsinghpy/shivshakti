import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/SipTok_Logo.png'
import { GetMethodAPI } from '../../api/GetMethondAPi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cloud_name: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let formErrors = {}

    if (!formData.username.trim()) {
      formErrors.username = 'Username is required'
    }
    if (!formData.password) {
      formErrors.password = 'Password is required'
    }
    if (!formData.cloud_name.trim()) {
      formErrors.cloud_name = 'Cloud name is required'
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) {
      return;
    }
  
    setLoading(true);
    const toastId = toast.loading("Login in process");
  
    try {
      const response = await GetMethodAPI(
        'login.php',
        `username=${formData.username}&password=${formData.password}&cloud_name=${formData.cloud_name}`
      );
      // console.log(response.Sucess)
      if (response.Sucess === "true") {  
        toast.dismiss(toastId);
        toast.success(response.Message);
        sessionStorage.setItem("data", JSON.stringify(response.Data))
        setTimeout(() => {
          navigate("/home")
        }, 2000);
        // console.log("Login successful:", response.Message);
      } else {
        toast.dismiss(toastId);
        toast.warn(response.Message);
        // console.log("Login failed:", response.Message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("An error occurred: " + error.message);  
      // console.log("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      style={{
        background:
          'linear-gradient(151deg, rgba(205,232,255,1) 35%, rgba(5,74,218,1) 100%)',
        height: '100vh',
      }}
      className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center"
    >
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full overflow-hidden h-full">
        {/* Left Side (Login Form) */}
        <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">LOGIN</h2>
          <p className="text-gray-600 mb-4">Get Start a new Experience</p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-indigo-500`}
                placeholder="Username"
                name="username"
                onChange={handleChange}
                disabled={loading}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-indigo-500`}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                disabled={loading}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Cloud Name</label>
              <input
                type="text"
                className={`w-full p-3 border ${errors.cloud_name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-indigo-500`}
                placeholder="Cloud Name"
                name="cloud_name"
                onChange={handleChange}
                disabled={loading}
              />
              {errors.cloud_name && <p className="text-red-500 text-sm">{errors.cloud_name}</p>}
            </div>

            <button
              className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300 flex justify-center items-center"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Login Now"
              )}
            </button>
          </form>
        </div>
        {/* Right Side (Image and Text) */}
        <div className="w-1/2 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800 relative flex items-center justify-center">
          <div className="text-center px-6">
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <img src={logo} alt="" className="w-[200px] mx-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
