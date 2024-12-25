import React, { useState } from 'react'
import { Edit2, Trash2, File, Search } from 'lucide-react'

const DataTable = ({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  exportCsv,
  title = 'Table',
  itemsPerPage = 7,
  customButton,
  searchbarclass = '',
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  // Filtered Data
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // Generate Page Numbers
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPageNumbers = 5
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2))
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1)

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white w-full min-h-[500px] rounded-2xl">
        {/* Header */}
        <div className="data-table-header p-7">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-gray-500">{title}</h2>
            <div className="data-table-header-right-section flex gap-2">
              {/* Search Input */}
              <div className={`${searchbarclass} flex items-center border border-gray-300 rounded-md px-4 py-2 `}>
                <Search />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 outline-none border-none w-full text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Export CSV Button */}
              <button
                className="flex items-center text-sm border border-gray-300 rounded-md px-4 py-2 shadow-sm text-gray-400 hover:bg-gray-100"
                onClick={exportCsv}
              >
                <File className="w-5 h-5 text-green-400" />
                <span className="ml-2">Export CSV</span>
              </button>

              {customButton && (
                <button
                  className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-[#64AE5F] text-white  text-sm shadow-sm text-gray-500 hover:bg-green-500 "
                  onClick={customButton.onClick}
                >
                  <span className="ml-2">{customButton.label}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
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
                  <td className="px-6 py-4 flex gap-2 justify-between">
                    {onEdit && (
                      <button className="w-4 h-4" onClick={() => onEdit(row)}>
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
              {paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="px-6 py-4 text-center text-gray-500"
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
          <span className="text-gray-400">
            Showing data {startIndex + 1} to{' '}
            {Math.min(startIndex + itemsPerPage, filteredData.length)} of{' '}
            {filteredData.length}
          </span>
          <div className="flex justify-center items-center space-x-2 mt-4">
            {/* Previous Button */}
            <button
              className={`px-3 py-1 border rounded-md ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-500'
              }`}
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
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500'
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
            {/* Next Button */}
            <button
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-500'
              }`}
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
  )
}

export default DataTable
