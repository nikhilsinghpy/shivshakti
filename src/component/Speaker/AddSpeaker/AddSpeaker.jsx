import React, { useEffect, useState } from 'react';
import { GetMethodAPI } from '../../../api/GetMethondAPi';
import { RetrieveUserData } from '../../../utils/RetrieveUserData';

// Assuming GetMethodAPI and RetrieveUserData are already defined elsewhere in your project

export const AddSpeaker = ({ onOpenChange, isOpen }) => {

    const [location, setLocation] = useState([]);
    const [subLocation, setSubLocation] = useState([]);
    const [formData, setFormData] = useState({
        exten_id: '',
        dialplan_id: '46',
        exten_name: '',
        exten_loc: '',
        exten_subloc: '',
        exten_remarks: '',
        exten_status: '',
        exten_type: 'speaker',
    });

    const userInfo = RetrieveUserData()[0];

    const fetchLocation = () => {
        try {
            const response = GetMethodAPI('getlocation.php', `cloud_id=${userInfo.cloud_id}`);
            response.then((res) => {
                setLocation(res.Data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if(name === "exten_loc"){
            fetchSubLocation(value)
        }
    };

    const fetchSubLocation = (value) => {
        try {
            const response = GetMethodAPI('getsublocation.php', `loc_id=${value}`);
            response.then((res)=>{
                setSubLocation(res.Data)
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        console.log(formData); 
        try {
            const response = GetMethodAPI('create_extention.php', `exten_id=${formData.exten_id}&dialplan_id=${formData.dialplan_id}&exten_name=${formData.exten_name}&exten_loc=${formData.exten_loc}&exten_subloc=${formData.exten_subloc}&exten_remarks=${formData.exten_remarks}&exten_status=${formData.exten_status}&exten_type=${formData.exten_type}&cloud_id=${userInfo.cloud_id}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Add Speaker</h3>
                            <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-700">
                                &times;
                            </button>
                        </div>

                        <div className="mt-4 ">
                            <div>
                                <label htmlFor="exten_id">Exten Id</label>
                                <input
                                    type="number"
                                    name="exten_id"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="exten_name">Exten Name</label>
                                <input
                                    type="text"
                                    name="exten_name"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="exten_loc">Location</label>
                                <select
                                    name="exten_loc"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                >
                                    <option value="none">Select Location</option>
                                    {location?.map((item, index) => (
                                        <option value={item.name} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="exten_subloc">Sub Location</label>
                                <select
                                    name="exten_subloc"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                >
                                    <option value="none">Select Sub Location</option>
                                    {subLocation?.map((item, index) => (
                                        <option value={item.name} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="exten_remarks">Exten Remarks</label>
                                <input
                                    type="text"
                                    name="exten_remarks"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="exten_status">Exten Status</label>
                                <select
                                    name="exten_status"
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full mt-1"
                                >
                                    <option value="none">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                </select>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={() => onOpenChange(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClick}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
