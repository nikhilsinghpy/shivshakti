import React, { useEffect, useState } from 'react'
import { getapi } from '../../api/GetAPI'
import { GetMethodAPI } from '../../api/GetMethondAPi';
const user_info = sessionStorage.getItem('user_info');
export const parsedUserInfo = user_info ? JSON.parse(user_info) : null;
const AddSpeakerForm = ({ onFormSubmit }) => {
  const [isBulkSpeaker, setIsBulkSpeaker] = useState(false);
  const [location, setLocation] = useState([]);
  const [subLocation, setSubLocation] = useState([]);
  const [formData, setFormData] = useState({
    exten_id: 'no',
    dialplan_id: '46',
    exten_name: '',
    exten_loc: '',
    exten_subloc: '',
    exten_remarks: '',
    exten_status: '',
    exten_type: 'speaker',
  });

  // Fetch Locations
  const fetchLocation = async () => {
    if (!parsedUserInfo?.cloud_id) return;


    console.log("this function is running")
    try {
      const response = await GetMethodAPI('getlocation.php', `cloud_id=${parsedUserInfo.cloud_id}`);
      setLocation(response.Data || []);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  // Fetch Sub Locations
  const fetchSubLocation = async (value) => {
    try {
      const response = await GetMethodAPI('getsublocation.php', `loc_id=${value}`);
      setSubLocation(response.Data || []);
    } catch (error) {
      console.error('Error fetching sub-locations:', error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'exten_loc') {
      fetchSubLocation(value);
    }
  };

  // Handle Submit
  const handleClick = async () => {
    console.log(formData);
    if (!parsedUserInfo?.cloud_id) {
      console.error('Cloud ID missing');
      return;
    }

    try {
      const response = await GetMethodAPI(
        'create_extention.php',
        `exten_id=${formData.exten_id}&dialplan_id=${formData.dialplan_id}&exten_name=${formData.exten_name}&exten_loc=${formData.exten_loc}&exten_subloc=${formData.exten_subloc}&exten_remarks=${formData.exten_remarks}&exten_status=${formData.exten_status}&exten_type=${formData.exten_type}&cloud_id=${parsedUserInfo.cloud_id}`
      );
      console.log('Extension Created:', response);
    } catch (error) {
      console.error('Error creating extension:', error);
    }
  };

  // Handle Checkbox Change
  const handleCheckboxChange = (e) => {
    setIsBulkSpeaker(e.target.checked);
  };

  useEffect(() => {
    fetchLocation();
  }, []); // Runs only once on mount

  return (
    <div
      className="bg-gray-50 flex flex-col items-center"
      style={{ width: '100%' }}
    >
      {/* Main container with fixed width and height */}
      <div className="bg-white p-2 w-full max-w-[950px]">
        <form className="flex flex-wrap gap-6">
          {/* Left Side: Form Inputs (50% Width) */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="exten_name"
                value={formData.exten_name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Number
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
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <select
                id="location"
                name="exten_loc"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select location</option>
                {
                  location.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="subLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Sub location
              </label>
              <select
                id="subLocation"
                name="exten_subloc"
                value={formData.subLocation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select sub location</option>
                {
                  subLocation.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="remark"
                className="block text-sm font-medium text-gray-700"
              >
                Remark
              </label>
              <input
                type="text"
                id="remark"
                name="exten_remarks"
                value={formData.exten_remarks}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter remark"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="exten_status"
                  value="Active"
                  checked={formData.exten_status === 'Active'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="exten_status"
                  value="InActive"
                  checked={formData.exten_status === 'InActive'}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Inactive</span>
              </label>
            </div>
          </div>

          {/* Right Side: Add Bulk Speaker (50% Width) */}
          <div className="border border-gray-300 rounded-lg p-4 w-[400px]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Add Bulk Speaker
              </h3>
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-500 focus:ring-blue-500"
                checked={isBulkSpeaker}
                onChange={handleCheckboxChange}
              />
            </div>
            {isBulkSpeaker && (
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="numberOfSpeakers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of speakers
                  </label>
                  <input
                    type="number"
                    id="numberOfSpeakers"
                    name="numberOfSpeakers"
                    value={formData.numberOfSpeakers}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="startingNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Starting number
                  </label>
                  <input
                    type="number"
                    id="startingNumber"
                    name="startingNumber"
                    value={formData.startingNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter starting number"
                  />
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gray-300 text-gray-700 py-3 px-12 rounded-lg"
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddSpeakerForm
