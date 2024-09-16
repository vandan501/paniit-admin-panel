import React, { useState, useEffect, useMemo } from 'react'; // Import useState and useEffect
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';
import editicon from "../icons/edit.svg";
import deleteicon from "../icons/delete.svg";
import changepasswordicon from "../icons/changepassword.svg";

const AccountManagementTable = ({ handleOpenEditProfileModal, handleOpenChangePasswordModal, handleOpenDeleteModal }) => {
  const [data, setData] = useState([]); // State to store fetched data


  useEffect(() => {
    fetch('http://localhost:4000/users') // Update this URL to match your JSON server endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only on component mount

  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'srNo',
      },
      {
        Header: 'Full Name',
        accessor: 'fullName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Aadhar Number',
        accessor: 'aadharNumber',
      },
      {
        Header: 'Roles',
        accessor: 'roles',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button className="edit-btn edit-btn-account-management" onClick={handleOpenEditProfileModal}>
              <img src={editicon} alt='edit icon' className='edit-image-account-management'/>
            </button>
            <button className="view-btn changepass-btn-account-management" onClick={handleOpenChangePasswordModal}>
              <img src={changepasswordicon} alt='change password icon' className='changepass-image-account-management'/>
            </button>
            <button className="delete-btn delete-btn-account-management" onClick={handleOpenDeleteModal}>
              <img src={deleteicon} alt='delete icon' className='delete-image-account-management'/>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenEditProfileModal, handleOpenChangePasswordModal, handleOpenDeleteModal]
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

export default AccountManagementTable;
