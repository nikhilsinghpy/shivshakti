import React, { useState } from 'react';
import './Imports.css'
const Imports = () => {
    const [activeTab, setActiveTab] = useState("distinct");

    return (
        <div className="w-full p-6 bg-white shadow rounded-3xl m-3">
            {/* Header */}
            <h1 className="text-xl font-semibold mb-6">Upload employee details</h1>

            {/* File Upload Section */}
            <div className="flex items-center gap-4 mb-6">
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                />
                <label
                    htmlFor="file-upload"
                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600 cursor-pointer transition"
                >
                    Choose File
                </label>

                <label className="flex items-center text-sm text-gray-700">
                    <input
                        type="checkbox"
                        className="mr-2 border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                    Upload default format
                </label>
                <button className="bg-green-500 text-white px-12 py-2 rounded-lg font-medium hover:bg-green-600 transition">
                    Upload
                </button>

            </div>

            {/* Tabs Section */}
            <div className="flex items-center justify-between mb-6 relative">
                {/* Background Indicator */}
                <div
                    className={`side-n absolute h-[100px] w-[220px] bg-gray-100  transition-all duration-300 mt-4 ${activeTab === "distinct" ? "left-0 active" : "left-30 active"}`}
                    style={{
                        left: activeTab === "distinct" ? "0px" : "200px", // Replace "120px" with your desired pixel value
                        zIndex: 1, // Lower z-index to ensure it's behind
                        borderBottomLeftRadius: activeTab === "distinct" ? "50px" : "0px",
                        borderBottomRightRadius: activeTab === "invalid" ? "50px" : "0px",
                    }}
                
                ></div>

                {/* Tabs Section */}
                <div className="flex items-center gap-4 z-10">
                    <button
                        onClick={() => setActiveTab("distinct")}
                        className={`px-6 py-2 text-sm font-medium rounded-full ${activeTab === "distinct"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                            } hover:bg-blue-500 hover:text-white transition`}
                    >
                        Distinct Employee Record
                    </button>
                    <button
                        onClick={() => setActiveTab("invalid")}
                        className={`px-6 py-2 text-sm font-medium rounded-full ${activeTab === "invalid"
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-600"
                            } hover:bg-red-500 hover:text-white transition`}
                    >
                        Invalid / Duplicate Employee Record
                    </button>
                </div>

                {/* Download Template Button */}
                <button className="flex items-center text-green-600 font-medium hover:underline z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4m-4 4l-4-4-4 4m4-4v10"
                        />
                    </svg>
                    Download Template
                </button>
            </div>


            {/* Content Section */}
            <div className="bg-gray-100 rounded-medium p-4 text-gray-700 min-h-[420px] p-6">
                {activeTab === "distinct" &&
                    <div className="">
                        sample 1
                    </div>
                }
                {activeTab === "invalid" && (
                    <p className="text-sm">No invalid records found</p>
                )}
            </div>
        </div>
    );
};

export default Imports;
