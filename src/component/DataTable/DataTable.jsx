import React, { useState } from "react";
import { Edit2, Trash2, File, Search } from "lucide-react";
import csv from "../../assets/Csv.png";

const DataTable = ({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  exportCsv,
  title = "Table",
  itemsPerPage = 7,
  customButton,
  searchbarclass = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Data
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Generate Page Numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-white w-full min-h-[500px] rounded-2xl">
        {/* Header */}
        <div className="data-table-header p-7">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-lg font-[600] text-[#000000] lg:text-[14px] above1440:text-[22px]">
              {title}
            </h2>
            <div className="data-table-header-right-section flex gap-2">
              {/* Search Input */}
              <div
                className={`${searchbarclass} flex items-center border border-gray-300 rounded-[14px] px-4 py-2 lg:w-[160px] above1440:py-3 above1440:px-6`}
              >
                <Search className="above1440:w-6 above1440:h-6" />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 outline-none border-none w-full text-gray-700 placeholder-gray-400 above1440:text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Export CSV Button */}
              <button
                className="flex items-center border border-gray-300 rounded-[14px] px-4 py-2 shadow-sm hover:bg-gray-100 above1440:py-3 above1440:px-6"
                onClick={exportCsv}
              >
                <img src={csv} alt="csv" className="w-5 h-5 above1440:w-6 above1440:h-6" />
                <span className="ml-2 text-[#292D32] font-[400] text-[14px] above1440:text-[16px]">
                  Export CSV
                </span>
              </button>

              {customButton && (
                <button
                  className="flex items-center border border-gray-300 rounded-[14px] px-4 py-2 bg-[#64AE5F] text-white text-sm shadow-sm hover:bg-green-500 above1440:py-3 above1440:px-6 above1440:text-lg"
                  onClick={customButton.onClick}
                >
                  <span className="ml-2 text-[#FFFFFF] font-[400] text-[14px] above1440:text-[16px]">
                    {customButton.label}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 above1440:text-base">
            <thead className="text-xs text-white uppercase font-[600] bg-[#00ADEE] above1440:text-[18px]">
              <tr>
                {columns.map((col) => (
                  <th key={col.accessor} className="px-6 py-3 above1440:px-8 above1440:py-4">
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-3 above1440:px-8 above1440:py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b hover:bg-gray-50 above1440:py-6"
                >
                  {columns.map((col) => (
                    <td key={col.accessor} className="px-6 py-4 above1440:px-8 above1440:py-6">
                      {row[col.accessor]}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex gap-2 justify-between above1440:px-8 above1440:py-6">
                    {onEdit && (
                      <button
                        className="w-4 h-4 above1440:w-6 above1440:h-6"
                        onClick={() => onEdit(row)}
                      >
                        <Edit2 />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="w-4 h-4 text-red-700 above1440:w-6 above1440:h-6"
                        onClick={() => onDelete(row)}
                      >
                        <Trash2 />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-6 py-4 text-center text-gray-500 above1440:text-lg"
                  >
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-5">
          <span className="text-gray-400 above1440:text-lg">
            Showing data {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
            {filteredData.length}
          </span>
          <div className="flex justify-center items-center space-x-2 mt-4">
            {/* Previous Button */}
            <button
              className={`px-3 py-1 border rounded-md ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500"
              } above1440:px-4 above1440:py-2`}
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
              <button
                key={page}
                className={`px-3 py-1 border rounded-md ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "text-blue-500"
                } above1440:px-4 above1440:py-2`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
            {/* Next Button */}
            <button
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500"
              } above1440:px-4 above1440:py-2`}
              onClick={() =>
                currentPage < totalPages && onPageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
