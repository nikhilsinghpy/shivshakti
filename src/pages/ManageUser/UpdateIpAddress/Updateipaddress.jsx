import React from 'react'
import "./Updateipaddress.css"
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb'

const Updateipaddress = () => {
  const breadcrumbItems = [
    { label: 'Manage user', link: '/manage-user' },
    { label: 'Update IP address', link: '/manage-user/update-ip-address' },
  ]

  return (
    <div className="w-full p-5">
      <Breadcrumb items={breadcrumbItems} />
      <div className="bg-gray-100 mt-5 flex w-full justify-between gap-4 h-[70vh]">
        <div className="bg-white rounded-3xl p-8 w-full ">
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1 above1440:text-lg"
                htmlFor="oldIpAddress"
              >
                Old IP Address
              </label>
              <input
                type="text"
                id="oldIpAddress"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none above1440:py-3 above1440:text-lg"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1 above1440:text-lg"
                htmlFor="newIpAddress"
              >
                New IP Address
              </label>
              <input
                type="password"
                id="newIpAddress"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none above1440:py-3 above1440:text-lg"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1 above1440:text-lg"
                htmlFor="confirmIpAddress"
              >
                Confirm IP Address
              </label>
              <input
                type="password"
                id="confirmIpAddress"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none above1440:py-3 above1440:text-lg"
              />
            </div>
            <div className='flex justify-center items-center h-[30vh]'>
              <button
                type="submit"
                className="w-[200px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring focus:ring-green-200 focus:outline-none above1440:w-[250px] above1440:py-3 above1440:text-lg"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Updateipaddress
