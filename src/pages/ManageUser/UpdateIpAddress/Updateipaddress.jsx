import React from 'react'
import "./Updateipaddress.css"
const Updateipaddress = () => {
    return (
        <div>
            <div className="min-w-[1130px] mx-auto">
                <form className="bg-white shadow-md rounded-2xl px-8 pt-10 pb-12 m-4 min-h-[650px]">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-500 text-lg font-bold mb-2" for="Old IP Address">
                            Old IP Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Old IP Address"
                            type="text"
                            placeholder="Old IP Address"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-500 text-lg font-bold mb-2" for="Old IP Address">
                            New IP Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="New IP Address"
                            type="texx"
                            placeholder="New IP Address"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-500 text-lg font-bold mb-2" for="Confirm IP Address">
                            Confirm IP Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Confirm IP Address"
                            type="text"
                            placeholder="Confirm IP Address"
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
    )
}

export default Updateipaddress
