import React from 'react';
import "./Settings.css";
import { Key, UserCog, Server, IdCard } from "lucide-react";
import { IconCard } from '../../component/cards/IconCard';

const Settings = () => {
    const cardData = [
        {
            id: 1,
            to: "/managepassword",
            icon: Key,
            title: "Manage password",
            bgColor: "bg-blue-100",
        },
        {
            id: 2,
            to: "/accessrights",
            icon: UserCog,
            title: "Access rights",
            bgColor: "bg-blue-100",
        },
        {
            id: 3,
            to: "/addrole",
            icon: IdCard,
            title: "Add role",
            bgColor: "bg-blue-100",
        },
        {
            id: 4,
            to: "/updateipaddress",
            icon: Server,
            title: "Update IP address",
            bgColor: "bg-blue-100",
        },
        {
            id: 5,
            to: "/addrole",
            icon: IdCard,
            title: "Imports",
            bgColor: "bg-blue-100",
        },
        {
            id: 6,
            to: "/updateipaddress",
            icon: Server,
            title: "Mobile Devices",
            bgColor: "bg-blue-100",
        },
        {
            id: 7,
            to: "/updateipaddress",
            icon: Server,
            title: "Mobile Devices",
            bgColor: "bg-blue-100",
        },
    ];
    

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Card Section */}
                <IconCard data={cardData} contentClass=' ' cardClass='w-10 h-40' />
            </div>
        </div>
    );
}

export default Settings;
