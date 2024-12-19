import React from 'react'
import "./Addrole.css"
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
const Addrole = () => {
    const recordings = [
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
        { name: "Speaker 1", duration: "00:09:48.49" },
    ];
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                <div className="mx-auto p-8 bg-white shadow rounded-2xl min-h-[590px]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">All roles</h1>
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
                            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1.5 px-8 rounded-medium focus:outline-none focus:shadow-outline" type="button">
                                Add role
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="border-gray-200">
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="w-1/2 px-4 py-2 text-left">Role name</th>
                                    <th className="w-1/2 px-4 py-2 text-left">Remarks</th>
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
    )
}

export default Addrole
