import React, { useState } from "react";
import { Edit2, Trash2, Search } from "lucide-react";
import csvIcon from "../../assets/Csv.png";
import "./Datatable.scss";

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
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="data-table">
      <div className="data-table__header">
        <h2 className="data-table__header-title">{title}</h2>
        <div className="data-table__header-actions">
          <div className="search-bar">
            <Search />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn--csv" onClick={exportCsv}>
            <img src={csvIcon} alt="Export CSV" />
            Export CSV
          </button>
          {customButton && (
            <button className="btn btn--custom" onClick={customButton.onClick}>
              {customButton.label}
            </button>
          )}
        </div>
      </div>

      <div className="data-table__table">
        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.accessor}>{col.label}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.accessor}>{row[col.accessor]}</td>
                ))}
                <td className="action-buttons">
                  {onEdit && (
                    <button className="edit" onClick={() => onEdit(row)}>
                      <Edit2 />
                    </button>
                  )}
                  {onDelete && (
                    <button className="delete" onClick={() => onDelete(row)}>
                      <Trash2 />
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="text-center">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="data-table__footer">
        <span>
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length}
        </span>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
            &lt;
          </button>
          {getPageNumbers().map((page) => (
            <button
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
