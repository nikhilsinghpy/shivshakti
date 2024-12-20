import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import "./Sublocation.css";

const Sublocation = () => {
    const recordings = [
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
        { location: "Speaker 1", sublocation :"Speaker 1" , duration: "00:09:48.49" },
       
        // Add more data as needed...
    ];

    const itemsPerPage = 5;  // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = recordings.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(recordings.length / itemsPerPage);

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                <div className="mx-auto p-8 bg-white shadow rounded-2xl min-h-[650px]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">Sub Location</h1>
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
                                Add location
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="border-gray-200">
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="w-1/2 px-4 py-2 text-left">Location name</th>
                                    <th className="w-1/2 px-4 py-2 text-left">Sub location</th>
                                    <th className="w-1/2 px-4 py-2 text-left">Remarks</th>
                                    <th className="w-1/4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((record, index) => (
                                    <tr key={index} className="hover:bg-gray-100 border-b border-gray-200">
                                        <td className="px-4 py-4">{record?.location}</td>
                                        <td className="px-4 py-4">{record?.sublocation}</td>
                                        <td className="px-4 py-4">{record?.duration}</td>
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

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6">
                        <div className="text-sm text-gray-700">
                            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, recordings.length)} of {recordings.length} entries
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft/>
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sublocation;
