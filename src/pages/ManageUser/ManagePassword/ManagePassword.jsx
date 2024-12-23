import React from 'react'
import "./ManagePassword.css"
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManagePassword = () => {
    const recordings = [
        { name: "Recording 1", duration: "00:09:48.49" },
        { name: "Recording 1", duration: "00:09:48.49" },
        { name: "Recording 1", duration: "00:09:48.49" },
        { name: "Recording 1", duration: "00:09:48.49" },
        { name: "Recording 1", duration: "00:09:48.49" },
    ];

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4 flex">
                <div className="w-1/2 text-white">
                    <div className="max-w-xs">
                        <form className="bg-white shadow-md rounded-2xl px-8 pt-10 pb-12 mb-4 w-[520px] min-h-[590px]">
                            <div className="mb-4 w-full">
                                <label className="block text-gray-500 text-lg font-bold mb-2" for="username">
                                    User name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-500 text-lg font-bold mb-2" for="Old Password">
                                    Old Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Old Password"
                                    type="password"
                                    placeholder="Old Password"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-500 text-lg font-bold mb-2" for="New Password">
                                    New Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="New Password"
                                    type="password"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-500 text-lg font-bold mb-2" for="Confirm Password">
                                    Confirm Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Confirm Password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="flex items-center justify-center mt-12">
                                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-medium focus:outline-none focus:shadow-outline" type="button">
                                    Change Password
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
                <div className="w-1/2 text-black min-h-[600px]">
                    <div className="max-w-5xl mx-auto p-8 bg-white shadow rounded-2xl min-h-[590px]">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-semibold">List of users</h1>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border rounded-md px-3 py-1 focus:outline-blue-500"
                                />
                                <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                                    <img
                                        src="https://img.icons8.com/ios-filled/20/000000/ms-excel.png"
                                        alt="Export CSV"
                                    />
                                    <span>Export csv.</span>
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="border-gray-200">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-blue-500 text-white">
                                        <th className="w-1/2 px-4 py-2 text-left">Recording Name</th>
                                        <th className="w-1/2 px-4 py-2 text-left">Recording duration</th>
                                        <th className="w-1/4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recordings.map((record, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100 border-b border-gray-200"
                                        >
                                            <td className="px-4 py-4">{record.name}</td>
                                            <td className="px-4 py-4">{record.duration}</td>
                                            <td className="px-4 py-4 flex items-center space-x-6">
                                                <button className="text-gray-500 hover:text-gray-700 text-2xl">
                                                    <CiEdit />
                                                </button>
                                                <button className="text-gray-500 hover:text-gray-700 text-2xl">
                                                    <RiDeleteBin5Line />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManagePassword
