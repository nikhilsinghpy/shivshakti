import React from "react";

const PopupDialog = ({ isOpen, onClose, title, children, height, width }) => {
    if (!isOpen) return null;    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{zIndex: 999}}>
            <div
                className="bg-white rounded-2xl shadow-lg p-6 relative"
                style={{
                    height: height || "auto", 
                    width: width || "100%",
                    maxWidth: "90%", 
                }}
            >
                <div className="flex justify-between items-center ">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                    onClick={onClose}
                    className=" text-gray-500 hover:text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                </div>

                {/* Modal Body */}
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default PopupDialog;
