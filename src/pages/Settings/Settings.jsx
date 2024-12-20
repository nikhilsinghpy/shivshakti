import React from 'react'
import "./Settings.css"
import { RiUserAddLine, RiKeyLine, RiUserSettingsLine } from "react-icons/ri";
import { FaServer,FaIdCardAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cards from '../../component/SideNavNew/Cards/Cards';

const Settings = () => {
    const settingsItems = [
        {
            name: "Manage password",
            icon: <RiKeyLine className="text-blue-500 text-3xl" />,
            link: "/managepassword",
        },
        {
            name: "Access rights",
            icon: <RiUserSettingsLine className="text-blue-500 text-3xl" />,
            link: "/accessrights",
        },
        {
            name: "Add role",
            icon: <FaIdCardAlt className="text-blue-500 text-3xl" />,
            link: "/addrole",
        },
        {
            name: "Update IP address",
            icon: <FaServer className="text-blue-500 text-3xl" />,
            link: "/updateipaddress",
        },
        {
            name: "Imports",
            icon: <FaIdCardAlt className="text-blue-500 text-3xl" />,
            link: "/addrole",
        },
        {
            name: "Moblie Devices",
            icon: <FaServer className="text-blue-500 text-3xl" />,
            link: "/updateipaddress",
        }
    ];

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Card Section */}
                <Cards settingsItems={settingsItems}/>
            </div>
        </div>
    )
}

export default Settings
