import React, { useState, useEffect, useMemo } from 'react'; // Added useState and useEffect
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';
import editicon from "../icons/edit.svg";
import deleteProgramicon from "../icons/deleteProgram.svg";

const ProgramCreationTable = ({ handleOpenEditProgramCreationModal, handleOpenDeleteProgramCreationModal }) => {
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    fetch('http://localhost:4000/programs') // Update the URL to match your JSON server endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only on component mount

  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'SrNo',
      },
      {
        Header: 'Program Name',
        accessor: 'Program Name',
      },
      {
        Header: 'Status',
        accessor: 'Status',
        Cell: ({ value }) => {
          const statusClass = value
          .toString()        // Ensure the value is a string
          .toLowerCase()    // Convert to lowercase
          .replace(/\s+/g, '-')  // Replace spaces with hyphens
          .trim();          // Trim any leading or trailing whitespace
      
          return <span className={`status-${statusClass}`}>{value}</span>;
        },
      },
      {
        Header: 'Start Date',
        accessor: 'Start Date',
      },
      {
        Header: 'End Date',
        accessor: 'End Date',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button className="edit-btn" onClick={handleOpenEditProgramCreationModal}>
              <img src={editicon} alt='edit icon' className='edit-img-program-creation'/>
            </button>
            <button className="delete-btn delete-btn-program-creation" onClick={handleOpenDeleteProgramCreationModal}>
              <img src={deleteProgramicon} alt='delete icon' className='delete-image-program-creation'/>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    usePagination
  );

  const handlePageChange = (pageNumber) => {
    gotoPage(pageNumber);
  };

  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, data.length);

  return (
    <div className="table-container">
      <div className="second-filter-row">
        <div className="entries-filter">
          <label htmlFor="entries">Show</label>
          <select id="entries" name="entries" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
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
            onChange={e => setGlobalFilter(e.target.value)}
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
          {page.map(row => {
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
          <span>Show {startRow} to {endRow} of {data.length} entries</span>
        </div>
        <div className="pagination-controls">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          {pageOptions.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
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

export default ProgramCreationTable;
