import React from 'react'
import "./Manageuser.css"
import { Key, UserCog, IdCard, Server, Plus } from "lucide-react";
import { IconCard } from '../../component/cards/IconCard';

const cardData = [
    {
        id: 1,
        to: "/manage-password",
        icon: Key,
        title: "Manage password",
        bgColor: "bg-blue-100",
    },
    {
        id: 2,
        to: "/access-rights",
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
];
const Manageuser = () => {
    return (
        <div className='w-full'>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Header Section */}
                <div className="bg-blue-500 text-white text-center py-12 rounded-3xl min-h-[260px] flex flex-col items-center justify-center">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <Plus className="text-blue-500 text-2xl" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mt-4">Create an account</h1>
                </div>

                {/* Card Section */}
                <div className='w-full mt-5 flex justify-center items-center'>
                    <IconCard data={cardData} contentClass='justify-center items-center'  cardClass='w-[270px] h-[250px] ' />
                </div>
            </div>

        </div>
    )
}

export default Manageuser
