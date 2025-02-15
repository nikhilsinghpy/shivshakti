import React, { useEffect, useState } from 'react'
import { GetMethodAPI } from '../../api/GetMethondAPi'
import { parsedUserInfo } from './AddSpeakerForm'

export const EditSpeaker = () => {
  const [location, setLocation] = useState([])
  const [subLocation, setSubLocation] = useState([])
  const [formData, setFormData] = useState({
    exten_id: 'no',
    dialplan_id: '46',
    exten_name: '',
    exten_loc: '',
    exten_subloc: '',
    exten_remarks: '',
    exten_status: '',
    exten_type: 'speaker',
    vol : '1'
  })

  const fetchLocation = async () => {
    if (!parsedUserInfo?.cloud_id) return

    console.log('this function is running')
    try {
      const response = await GetMethodAPI(
        'getlocation.php',
        `cloud_id=${parsedUserInfo.cloud_id}`
      )
      setLocation(response.Data || [])
    } catch (error) {
      console.error('Error fetching locations:', error)
    }
  }

  // Fetch Sub Locations
  const fetchSubLocation = async (value) => {
    try {
      const response = await GetMethodAPI(
        'getsublocation.php',
        `loc_id=${value}`
      )
      setSubLocation(response.Data || [])
    } catch (error) {
      console.error('Error fetching sub-locations:', error)
    }
  }

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'exten_loc') {
      fetchSubLocation(value)
    }
  }

  const handleClick = async () => {
    console.log(formData)
    if (!parsedUserInfo?.cloud_id) {
      console.error('Cloud ID missing')
      return
    }

    try {
      const response = await GetMethodAPI(
        'create_extention.php',
        `exten_id=${formData.exten_id}&dialplan_id=${formData.dialplan_id}&exten_name=${formData.exten_name}&exten_loc=${formData.exten_loc}&exten_subloc=${formData.exten_subloc}&exten_remarks=${formData.exten_remarks}&exten_status=${formData.exten_status}&exten_type=${formData.exten_type}&cloud_id=${parsedUserInfo.cloud_id}`
      )
      console.log('Extension Created:', response)
    } catch (error) {
      console.error('Error creating extension:', error)
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  return (
    <div>
      <form className="flex flex-wrap gap-6">
        {/* Left Side: Form Inputs (50% Width) */}
        <div className="w-full">
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
              {location.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
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
              {subLocation.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
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
          <div className="mb-4">
            <label
              htmlFor="remark"
              className="block text-sm font-medium text-gray-700"
            >
              Volume
            </label>
            <input
              type="range"
              id="remark"
              name="vol"
              min="1"
              max="100"
              value={formData.vol}
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
  )
}
