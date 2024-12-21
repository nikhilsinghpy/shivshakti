import React, { useState } from 'react';
import { Edit2, Trash2, File } from 'lucide-react';

const DataTable = ({ 
  data, 
  columns, 
  onEdit, 
  onDelete, 
  onView, 
  exportCsv, 
  title = "Table", 
  itemsPerPage = 8 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered and Paginated Data
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="flex flex-col p-4">
      <div className="bg-white w-full min-h-[500px] rounded-2xl">
        <div className="data-table-header p-7">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="data-table-header-right-section flex gap-2">
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 outline-none border-none w-full text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="flex items-center border border-gray-300 rounded-md px-4 py-2 shadow-sm text-gray-700 hover:bg-gray-100"
                onClick={exportCsv}
              >
                <File className="w-5 h-5 text-green-400" />
                <span className="ml-2">Export CSV</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-[rgb(0,173,238)]">
              <tr>
                {columns.map((col) => (
                  <th key={col.accessor} className="px-6 py-3">
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  {columns.map((col) => (
                    <td key={col.accessor} className="px-6 py-4">
                      {row[col.accessor]}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex gap-2">
                    {onEdit && (
                      <button
                        className="w-4 h-4"
                        onClick={() => onEdit(row)}
                      >
                        <Edit2 />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="w-4 h-4 text-red-700"
                        onClick={() => onDelete(row)}
                      >
                        <Trash2 />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center p-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
