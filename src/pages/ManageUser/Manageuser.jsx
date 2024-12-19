import React from 'react'
import "./Manageuser.css"
import { RiUserAddLine, RiKeyLine, RiUserSettingsLine } from "react-icons/ri";
import { FaServer,FaIdCardAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Manageuser = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Header Section */}
                <div className="bg-blue-500 text-white text-center py-12 rounded-3xl min-h-[260px] flex flex-col items-center justify-center">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <RiUserAddLine className="text-blue-500 text-2xl" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mt-4">Create an account</h1>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-8">
                    {/* Card 1: Manage Password */}
                    <div className="p-4 text-center">
                        <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center min-h-[230px] w-60 mx-auto">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                <RiKeyLine className="text-blue-500 text-3xl" />
                            </div>
                        </div>
                        <Link to="/managepassword"><p className="text-gray-900 font-bold mt-4">Manage password</p></Link>
                        
                    </div>
                    <div className="p-4 text-center">
                        <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center min-h-[230px] w-60 mx-auto">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                <RiUserSettingsLine className="text-blue-500 text-3xl" />
                            </div>
                        </div>
                        <Link to="/accessrights"><p className="text-gray-700 font-bold mt-4">Access rights</p></Link>
                    </div>
                    <div className="p-4 text-center">
                        <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center min-h-[230px] w-60 mx-auto">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                <FaIdCardAlt className="text-blue-500 text-3xl" />
                            </div>
                        </div>
                        <Link to="/addrole"><p className="text-gray-700 font-bold mt-4">Add role</p></Link>
                    </div>
                    <div className="p-4 text-center">
                        <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center min-h-[230px] w-60 mx-auto">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                <FaServer className="text-blue-500 text-3xl" />
                            </div>
                        </div>
                        <Link to="/updateipaddress"><p className="text-gray-700 font-bold mt-4">Update IP address</p></Link>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Manageuser
