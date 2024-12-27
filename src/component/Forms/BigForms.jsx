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
            <form className="w-[900px] p-4 bg-white rounded-lg h-[510px]" onSubmit={onHandleSubmit}>
                <div className="flex flex-wrap -mx-8">

                    {
                        formFields.map((item, index) => (
                            <div className="w-full md:w-1/2 px-4 mb-4" key={index}>
                               <label className="block text-gray-500 text-lg font-bold mb-2" htmlFor={item.id}>
                                    {item.label}
                                </label>
                                <input
                                    className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2 py-2"
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

                <div className="flex items-center justify-center mt-2">
                    <button
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-medium focus:outline-none focus:shadow-outline"
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
