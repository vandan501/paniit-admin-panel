import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import "./UserTable.css";
import deleteicon from "../icons/deleteTeacher.svg";

const StudentEnrollmentTable = ({
  handleOpenDeleteModal,
  data,
  pageIndex,
  totalCount,
  setPage,
  start,
  search,
  pageSize,
  setStart,
  setPageIndex,
  setSearch,
  setPageSize,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: "Sr. No",
        accessor: "sr_no",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Aadhar Number",
        accessor: "Aadhar Number",
      },
      {
        Header: "Full Name",
        accessor: "Full Name",
      },
      {
        Header: "Program Name",
        accessor: "enrolled_programs",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button
              className="delete-btn"
              onClick={() => handleOpenDeleteModal(row.original)}
            >
              <img
                src={deleteicon}
                alt="delete icon"
                className="delete-image-student-management"
              />
            </button>
          </div>
        ),
      },
    ],
    [handleOpenDeleteModal]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page: tablePage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize: setTablePageSize, // Renaming setPageSize to avoid conflict
    state: { pageIndex: tablePageIndex, pageSize: tablePageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      pageCount: Math.ceil(totalCount / pageSize),
    },
    useGlobalFilter,
    usePagination
  );

  const handlePageSizeChange = (newPageSize) => {
    const currentPage = tablePageIndex;
    const newPageIndex = Math.floor(start / newPageSize);
    const newStart = newPageIndex * newPageSize;
    
    setPageSize(newPageSize); 
    setTablePageSize(newPageSize); 
    setStart(newStart); 
    setPageIndex(newPageIndex); 
    gotoPage(newPageIndex); 
  };

  const handlePageChange = (newPageIndex) => {
    const newStart = newPageIndex * tablePageSize;
    setPageIndex(newPageIndex);  
    setStart(newStart);  
    gotoPage(newPageIndex);  
  };

  const startRow = tablePageIndex * tablePageSize + 1;
  const endRow = Math.min((tablePageIndex + 1) * tablePageSize, totalCount);

  return (
    <div className="table-container">
      <div className="second-filter-row">
        <div className="entries-filter">
          <label htmlFor="entries">Show</label>
          <select
            id="entries"
            name="entries"
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            {(() => {
              const availableSizes = [10, 20, 30, 40, 50];
              let filteredSizes = availableSizes.filter(
                (size) => size <= totalCount
              );

              if (totalCount > Math.max(...filteredSizes) && totalCount < 50) {
                filteredSizes.push(Math.ceil(totalCount / 10) * 10);
              }

              if (totalCount >= 50) {
                filteredSizes = availableSizes;
              }

              return filteredSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ));
            })()}
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={(e) => {
              const query = e.target.value;
              if (query.length >= 4) {
                setSearch(query);
                setStart(0);  
                setPageIndex(0);  
              } else {
                setSearch("");
              }
            }}
          />
        </div>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {tablePage.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="footer-info">
          <span>
            Showing {startRow} to {endRow} of {totalCount} entries
          </span>
        </div>
        <div className="pagination-controls">
          <button onClick={() => handlePageChange(tablePageIndex - 1)} disabled={!canPreviousPage}>
            Previous
          </button>
          {pageOptions.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)} 
              className={tablePageIndex === pageNumber ? "active" : ""}
            >
              {pageNumber + 1}{" "}
            </button>
          ))}
          <button onClick={() => handlePageChange(tablePageIndex + 1)} disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrollmentTable;
