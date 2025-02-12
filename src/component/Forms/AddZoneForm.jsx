import React, { useState } from "react";

const AddZoneForm = ({onFormSubmit }) => {

  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    status: 'active',
    type: '',
  });

  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsBulkSpeaker(e.target.checked);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center" style={{ width: "100%" }}>
      {/* Main container with fixed width and height */}
      <div className="bg-white p-2 w-full max-w-[950px]">
        <form className="flex flex-wrap gap-6">
          {/* Left Side: Form Inputs (50% Width) */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Zone name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Zone number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter number"
              />
            </div>
        
        
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === 'inactive'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Inactive</span>
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="active"
                  checked={formData.type === 'active'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="inactive"
                  checked={formData.type === 'inactive'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Inactive</span>
              </label>
            </div>
          </div>

          {/* Right Side: Add Bulk Speaker (50% Width) */}
          <div className="border border-gray-300 rounded-lg p-4 w-[400px]">
            ok
          </div>
        </form>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gray-300 text-gray-700 py-3 px-12 rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddZoneForm;
