import React, { useState } from 'react'

const AddScheduleForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        Select_speaker_group: '',
        Select_recording: '',
        Select_frequency: '',
        day: '',
        fromTime: '', // Renamed 'remark' to 'fromTime' for 'From' input
        toTime: '',   // Renamed 'remark' to 'toTime' for 'To' input
        time: '',     // Renamed 'remark' to 'time' for 'Time' input
        status: 'active',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleButtonClick = (event, day) => {
        event.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            day: day,
        }))
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(formData)
    }

    return (
        <div>
            <div className="bg-gray-50 flex flex-col items-center" style={{ width: '100%' }}>
                <div className="bg-white p-2 w-full max-w-[950px]">
                    <form className="flex flex-wrap gap-6" onSubmit={handleSubmit}>
                        {/* Left Side: Form Inputs (50% Width) */}
                        <div className="w-full">
                            <div className="mb-4">
                                <label htmlFor="Select_speaker_group" className="block text-sm font-medium text-gray-700">
                                    Select speaker group
                                </label>
                                <input
                                    type="text"
                                    id="Select_speaker_group"
                                    name="Select_speaker_group"
                                    value={formData.Select_speaker_group}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter speaker group"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="Select_recording" className="block text-sm font-medium text-gray-700">
                                    Number
                                </label>
                                <input
                                    type="text"
                                    id="Select_recording"
                                    name="Select_recording"
                                    value={formData.Select_recording}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter number"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="Select_frequency" className="block text-sm font-medium text-gray-700">
                                    Select frequency
                                </label>
                                <input
                                    type="text"
                                    id="Select_frequency"
                                    name="Select_frequency"
                                    value={formData.Select_frequency}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter frequency"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="day" className="block text-sm font-medium text-gray-700">
                                    Repeat
                                </label>
                                <div className="flex space-x-2">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                        <button
                                            key={day}
                                            className="px-4 py-2 text-sm bg-white text-gray-800 border-1 border-gray-300 rounded"
                                            onClick={(e) => handleButtonClick(e, day)} // Trigger the handleButtonClick function
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* From, To, and Time Input Fields */}
                            <div className="mb-4 flex space-x-4">
                                <div className="w-full">
                                    <label htmlFor="fromTime" className="block text-sm font-medium text-gray-700">
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        id="fromTime"
                                        name="fromTime"
                                        value={formData.fromTime}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter start time"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="toTime" className="block text-sm font-medium text-gray-700">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        id="toTime"
                                        name="toTime"
                                        value={formData.toTime}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter end time"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                        Time
                                    </label>
                                    <input
                                        type="text"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter time"
                                    />
                                </div>
                            </div>


                            {/* Status Radio Buttons */}
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="active"
                                        checked={formData.status === 'active'}
                                        onChange={handleChange}
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Active</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="inactive"
                                        checked={formData.status === 'inactive'}
                                        onChange={handleChange}
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Inactive</span>
                                </label>
                            </div>
                        </div>
                    </form>

                    {/* Save Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="bg-gray-300 text-gray-700 py-3 px-12 rounded-lg"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddScheduleForm;
