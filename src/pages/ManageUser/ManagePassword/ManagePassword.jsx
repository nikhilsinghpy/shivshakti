import React from 'react'
import './ManagePassword.css'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'
import DataTable from '../../../component/DataTable/DataTable'
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb'

const ManagePassword = () => {
  const exampleData = [
    {
      recording1: 'Recording1_File1.mp3',
      recording2: 'Recording2_File1.mp3',
    },
    {
      recording1: 'Recording1_File2.mp3',
      recording2: 'Recording2_File2.mp3',
    },
    {
      recording1: 'Recording1_File3.mp3',
      recording2: 'Recording2_File3.mp3',
    },
    {
      recording1: 'Recording1_File4.mp3',
      recording2: 'Recording2_File4.mp3',
    },
    {
      recording1: 'Recording1_File5.mp3',
      recording2: 'Recording2_File5.mp3',
    },
  ]

  const exampleColumns = [
    { label: 'Recording 1 ', accessor: 'recording1' },
    { label: 'Recording 2 ', accessor: 'recording2' },
  ]
  const breadcrumbItems = [
    { label: 'Manage user', link: '/manage-user' },
    { label: 'Manage password', link: '/manage-password' },
  ];


  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')

  return (
    <div className="w-full p-5">
        <Breadcrumb items={breadcrumbItems}/>
      <div className="bg-gray-100 mt-5 flex w-full justify-between gap-4">
        <div className="bg-white rounded-3xl p-8 w-[50%] ">
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="username"
              >
                User name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="oldPassword"
              >
                Old password
              </label>
              <input
                type="password"
                id="oldPassword"
                placeholder="Enter old password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="newPassword"
              >
                New password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className='flex justify-center items-center'>
              <button
                type="submit"
                className="w-[200px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring focus:ring-green-200 focus:outline-none"
              >
                Change password
              </button>
            </div>
          </form>
        </div>
        <div className='w-[50%]'>
        <DataTable
          data={exampleData}
          onEdit={handleEdit}
          columns={exampleColumns}
          onDelete={handleDelete}
          onView={handleView}
          exportCsv={handleExportCsv}
          title="List of Users"
        />
        </div>
      </div>
    </div>
  )
}

export default ManagePassword
