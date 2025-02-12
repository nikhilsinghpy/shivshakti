import React, { useState } from "react";

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [fromData ,setFormData] = useState({
    name: "",
    mobile:"",
    email: "",
    oldPassword:"",
    newPassword: "",
    confirmPassword: "",

  })

  const handleChangeInput = (e) =>{
    const {name, value} = e.target;
    setFormData((prevdata)=>({
        ...prevdata,
        [name] : value,
    }))
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () =>{
    console.log(fromData);
    console.log("asdas");
    
  }
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-2" style={{width:"100%"}}>
      <header className="w-full max-w-4xl flex justify-between items-center mb-3">
        <h1 className="text-2xl text-black">My profile</h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 flex items-center">
          <span className="mr-2">🔒</span> Logout
        </button>
      </header>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full h-screen max-w-[970px]">
      <form className="flex flex-col md:flex-row gap-2">
          {/* Left Column (Form Fields) */}
          <div className="md:w-1/2 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your mobile number"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter old password"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm new password"
                onChange={handleChangeInput}
              />
            </div>
          </div>

          {/* Right Column (Profile Image) */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="w-full max-w-[300px] h-full max-h-[500px] border-2 border-dashed border-blue-400 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <label htmlFor="imageUpload" className="cursor-pointer text-blue-500 text-lg">
                    <span className="text-3xl">+</span>
                    <p>Add image</p>
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </>
              )}
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
