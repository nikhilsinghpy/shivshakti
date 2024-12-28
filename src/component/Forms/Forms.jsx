import React, { useState } from 'react';

const Forms = ({ onSubmitForm, formFields }) => {
    const [formData, setFormData] = useState(
        formFields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {})
    );

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
                className="bg-white mt-5"
                onSubmit={onHandleSubmit}
            >
                {
                    formFields.map((item, index) => (
                        (
                            <div className="mb-4 w-full" key={index}>
                                <label className="block text-gray-500 text-md font-[600] mb-2" htmlFor={item.id}>
                                    {item.label}
                                </label>
                                <input
                                    className="appearance-none border rounded-md w-full py-4 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={formData[item.name] || ""}
                                    onChange={handleInput}
                                />
                            </div>

                        )
                    ))
                }

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
