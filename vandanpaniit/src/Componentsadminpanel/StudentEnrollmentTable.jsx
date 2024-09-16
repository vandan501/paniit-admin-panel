import React, { useMemo } from 'react'; // Import useState and useEffect
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';
import deleteicon from "../icons/deleteTeacher.svg";

const StudentEnrollmentTable = ({ handleOpenDeleteModal, data, page, totalCount, setPage, setSearch, setPageSize }) => {
  // Define columns with useMemo
  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'sr_no',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Aadhar Number',
        accessor: 'Aadhar Number',
      },
      {
        Header: 'Full Name',
        accessor: 'Full Name',
      },
      {
        Header: 'Program Name',
        accessor: 'enrolled_programs',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button className="delete-btn" onClick={() => handleOpenDeleteModal(row.original)}>
              <img src={deleteicon} alt='delete icon' className='delete-image-student-management'/>
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
    setPageSize: setTablePageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: page, pageSize: 10 } }, // default pageSize of 10 if not provided
    useGlobalFilter,
    usePagination
  );

  // Update local pageSize if changed from the select dropdown
  const handlePageSizeChange = (event) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    setTablePageSize(newSize);
  };

  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalCount);

  return (
    <div className="table-container">
      <div className="second-filter-row">
        <div className="entries-filter">
          <label htmlFor="entries">Show</label>
          <select
            id="entries"
            name="entries"
            value={pageSize || 10} // Use default value of 10 if pageSize is undefined
            onChange={handlePageSizeChange}
          >
            {[10, 20, 30, 40, 50].map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {tablePage.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="footer-info">
          <span>Showing {startRow} to {endRow} of {totalCount} entries</span>
        </div>
        <div className="pagination-controls">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          {pageOptions.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() =>  (pageNumber)}
              className={pageIndex === pageNumber ? 'active' : ''}
            >
              {pageNumber + 1}
            </button>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrollmentTable;
