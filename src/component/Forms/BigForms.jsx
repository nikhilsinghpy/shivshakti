import React, { useState } from 'react';

const BigForms = ({ onSubmitForm, formFields }) => {
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
            <form className="w-[900px] p-8 bg-white rounded-lg" onSubmit={onHandleSubmit}>
                <div className="flex flex-wrap -mx-4">

                    {
                        formFields.map((item, index) => (
                            <div className="w-full md:w-1/2 px-4 mb-6" key={index}>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={item.id}>
                                    {item.label}
                                </label>
                                <input
                                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-3"
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={formData[item.name] || ""}
                                    onChange={handleInput}
                                />
                            </div>
                        ))
                    }

                </div>

                <div className="flex items-center justify-center mt-12">
                    <button
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-medium focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default BigForms;
