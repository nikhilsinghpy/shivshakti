import React from 'react';
import { RiUserAddLine, RiKeyLine, RiUserSettingsLine } from "react-icons/ri";
import { FaServer, FaIdCardAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Cards.css";

const Cards = ({settingsItems}) => {

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {settingsItems.map((item, index) => (
                        <div key={index} className="p-4 text-center">
                            <div className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center min-h-[230px] w-60 mx-auto">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                                    {item.icon}
                                </div>
                            </div>
                            <Link to={item.link}>
                                <p className="text-gray-700 font-bold mt-4">{item.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
