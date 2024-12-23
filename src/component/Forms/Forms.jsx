import React, { useState } from 'react';

const Forms = ({onSubmitForm}) => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formData)
    };

    return (
        <div>
            <form
                className="bg-white"
                onSubmit={onHandleSubmit}
            >
                <div className="mb-4 w-full">
                    <label className="block text-gray-500 text-lg font-bold mb-2" htmlFor="username">
                        User name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="name" // Ensure this matches the state key
                        type="text"
                        placeholder="Username"
                        value={formData.name}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 w-full">
                    <label className="block text-gray-500 text-lg font-bold mb-2" htmlFor="oldPassword">
                        Old Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="oldPassword"
                        name="password" // Ensure this matches the state key
                        type="password"
                        placeholder="Old Password"
                        value={formData.password}
                        onChange={handleInput}
                    />
                </div>
                <div className="flex items-center justify-center mt-12">
                    <button
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-medium focus:outline-none focus:shadow-outline"
                        type="submit" // Use type="submit" to trigger the form submit
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Forms;
