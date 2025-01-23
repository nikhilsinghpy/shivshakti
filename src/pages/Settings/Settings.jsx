import React from 'react';
import "./Settings.css";
import { MapPin, Map, Camera, Building2, Users, UploadCloud, Smartphone } from "lucide-react";
import { IconCard } from '../../component/cards/IconCard';

const Settings = () => {

    const cardData = [
        {
            id: 1,
            to: "/location",
            icon: MapPin, // Icon for "Location"
            title: "Location",
            bgColor: "bg-blue-100",
        },
        {
            id: 2,
            to: "/sub-location",
            icon: Map, // Icon for "Sub-location"
            title: "Sub-location",
            bgColor: "bg-blue-100",
        },
        {
            id: 3,
            to: "/camera-list",
            icon: Camera, // Icon for "Camera list"
            title: "Camera list",
            bgColor: "bg-blue-100",
        },
        {
            id: 4,
            to: "/department",
            icon: Building2, // Icon for "Department"
            title: "Department",
            bgColor: "bg-blue-100",
        },
        {
            id: 5,
            to: "/designation",
            icon: Users, // Icon for "Designation"
            title: "Designation",
            bgColor: "bg-blue-100",
        },
        {
            id: 6,
            to: "/imports",
            icon: UploadCloud, // Icon for "Import"
            title: "Import",
            bgColor: "bg-blue-100",
        },
        {
            id: 7,
            to: "/mobile-devices",
            icon: Smartphone, // Icon for "Mobile Devices"
            title: "Mobile Devices",
            bgColor: "bg-blue-100",
        },
    ];
    
    

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-4">
                {/* Card Section */}
                <IconCard data={cardData}  />
            </div>
        </div>
    );
}

export default Settings;
