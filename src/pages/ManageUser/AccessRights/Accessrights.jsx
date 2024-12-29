import React from 'react'
import './Accessrights.css'
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb'

export const Accessrights = () => {
  const menuItems = [
    'Speakers',
    'Zones',
    'Audio list',
    'Play list',
    'Schedule announcement',
    'Call logs',
    'Announcement logs',
    'Location',
    'Sub Location',
    'Hangup All',
    'Quick Play',
  ]

  const breadcrumditem = [
    { label: 'Manage User', link: '#' },
    { label: 'Access Rights', link: '#' },
  ]

  return (
    <div className="w-full p-5 above1440:p-10">
      <Breadcrumb items={breadcrumditem} />
      <div className="min-w-[260px] p-5 bg-white shadow rounded-3xl mt-5 above1440:p-10">
        {/* Role Input */}
        <div className="mb-4 above1440:mb-6">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-1 above1440:text-lg"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            placeholder=""
            className="w-full border rounded-md px-3 py-2 focus:outline-blue-500 above1440:px-4 above1440:py-3 above1440:text-lg"
          />
        </div>

        {/* Table */}
        <div className="border rounded-3xl overflow-x-auto">
          <table className="w-full table-auto text-sm text-left border-collapse above1440:text-base">
            <thead>
              <tr className="bg-[#00ADEE] text-white">
                <th className="px-4 py-2 border above1440:px-6 above1440:py-3">
                  Menu
                </th>
                <th className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                  <input type="checkbox" /> View
                </th>
                <th className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                  <input type="checkbox" /> Add
                </th>
                <th className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                  <input type="checkbox" /> Edit
                </th>
                <th className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                  <input type="checkbox" /> Delete
                </th>
                <th className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                  <input type="checkbox" /> Execute
                </th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-[500] above1440:px-6 above1440:py-3">
                    {item}
                  </td>
                  <td className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border text-left above1440:px-6 above1440:py-3">
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6 above1440:mt-8">
          <button className="bg-green-500 text-white px-20 py-2 rounded-xl hover:bg-green-600 above1440:px-24 above1440:py-3 above1440:text-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
