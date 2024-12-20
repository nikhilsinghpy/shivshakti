import React from "react";
import { Eye, Edit, Trash, FileText, Search } from "lucide-react";

const DataTable = ({ data, onEdit, onDelete, onView, exportCsv }) => {
  return (
    // <div className="p-4 bg-gray-100 rounded-lg">
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-xl font-bold">Call logs</h2>
    //     <div className="flex items-center">
    //       <div className="relative">
    //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>
    //       <button
    //         className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow flex items-center space-x-2 hover:bg-green-600"
    //         onClick={exportCsv}
    //       >
    //         <FileText className="w-4 h-4" />
    //         <span>Export CSV</span>
    //       </button>
    //     </div>
    //   </div>
    //   <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
    //     <thead>
    //       <tr className="bg-blue-500 text-white text-left">
    //         <th className="py-2 px-4">Caller ↓</th>
    //         <th className="py-2 px-4">Callee ↓</th>
    //         <th className="py-2 px-4">Call Type ↓</th>
    //         <th className="py-2 px-4">Call Start Time ↓</th>
    //         <th className="py-2 px-4">Image ↓</th>
    //         <th className="py-2 px-4 text-center">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row, index) => (
    //         <tr
    //           key={index}
    //           className={`${
    //             index % 2 === 0 ? "bg-gray-50" : "bg-white"
    //           } hover:bg-gray-100`}
    //         >
    //           <td className="py-2 px-4">{row.caller}</td>
    //           <td className="py-2 px-4">{row.callee}</td>
    //           <td className="py-2 px-4">{row.callType}</td>
    //           <td className="py-2 px-4">{row.startTime}</td>
    //           <td className="py-2 px-4 text-center">
    //             <img
    //               src={row.image}
    //               alt="Call Image"
    //               className="w-8 h-8 rounded-full mx-auto"
    //             />
    //           </td>
    //           <td className="py-2 px-4 flex justify-center space-x-2">
    //             <button
    //               className="p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    //               onClick={() => onView(row)}
    //             >
    //               <Eye className="w-4 h-4" />
    //             </button>
    //             <button
    //               className="p-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
    //               onClick={() => onEdit(row)}
    //             >
    //               <Edit className="w-4 h-4" />
    //             </button>
    //             <button
    //               className="p-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
    //               onClick={() => onDelete(row)}
    //             >
    //               <Trash className="w-4 h-4" />
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   <div className="flex justify-between items-center mt-4">
    //     <p className="text-sm text-gray-600">
    //       Showing data 1 to {data.length} of 256 entries
    //     </p>
    //     <div className="flex space-x-1">
    //       <button className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
    //         1
    //       </button>
    //       <button className="px-3 py-1 bg-gray-300 rounded shadow hover:bg-gray-400">
    //         2
    //       </button>
    //       <button className="px-3 py-1 bg-gray-300 rounded shadow hover:bg-gray-400">
    //         3
    //       </button>
    //       {/* Add more buttons for pagination as needed */}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col p-4">
        <div className="bg-white w-full min-h-[500px] p-4 rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reiciendis.
        </div>
    </div>
  );
};

export default DataTable;
