import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import "./UserTable.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SelfEnrollmentTable = () => {

  const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);


  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'srNo',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Adhar Number',
        accessor: 'adharNumber',
      },
      {
        Header: 'Full Name',
        accessor: 'fullname',
      },
      {
        Header: 'Program Name',
        accessor: 'programname',
      },
      {
        Header: 'Requested Date',
        accessor: 'requesteddate',
      },
      {
        Header: 'Select Status',
        accessor: 'selectstatus',
        Cell: ({ value }) => (
          <select  className='select-status'>
            <option selected disabled value=" " hidden>Status</option>
            <option value="Approve">Approve</option>
            <option value="Reject">Reject</option>
          </select>
        ),
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        srNo: 1,
        email: 'john.doe@example.com',
        adharNumber: '1234-5678-9012',
        fullname: 'John Doe',
        programname: 'Computer Science',
        requesteddate: '2024-08-01',
        selectstatus: 'Status',
      },
      {
        srNo: 2,
        email: 'jane.smith@example.com',
        adharNumber: '2345-6789-0123',
        fullname: 'Jane Smith',
        programname: 'Mechanical Engineering',
        requesteddate: '2024-08-02',
        selectstatus: 'Status',
      },
      {
        srNo: 3,
        email: 'michael.jones@example.com',
        adharNumber: '3456-7890-1234',
        fullname: 'Michael Jones',
        programname: 'Electrical Engineering',
        requesteddate: '2024-08-03',
        selectstatus: 'Status',
      },
      {
        srNo: 4,
        email: 'emily.brown@example.com',
        adharNumber: '4567-8901-2345',
        fullname: 'Emily Brown',
        programname: 'Civil Engineering',
        requesteddate: '2024-08-04',
        selectstatus: 'Status',
      },
      {
        srNo: 5,
        email: 'william.wilson@example.com',
        adharNumber: '5678-9012-3456',
        fullname: 'William Wilson',
        programname: 'Information Technology',
        requesteddate: '2024-08-05',
        selectstatus: 'Status',
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
    <div className="table-container self-enrollment-table">
      <div className="first-heading-row">
        <h1>Self Enrollment </h1>
        <div className='filter-section-divs'>
        <div className='filter-section'>
        <label>Filter By Program:-</label>
        <select name="" id="">
           <option selected disabled value=" " hidden>Select Program</option>
           <option>Figma</option>
           <option>Advanced Django</option>
           <option>Athical Hacking</option>
        </select>
        </div>
        <div className='filter-section'>
        <label >Filter By Name:-</label>
        <select name="name" id="">
           <option selected disabled value=" " hidden>Select Name</option>
          <option>Vishal</option>
           <option>Shyam</option>
           <option>Shiv</option>
        </select>
        </div>
        <div className='filter-section'>
        <label>Filter By Status:-</label>
        <select name="status" id="">
           <option selected disabled value=" " hidden>Select Status</option>
           <option>Approved</option>
           <option>Rejected</option>
           <option>Pending</option>
        </select>
        </div>
        <div className='filter-section'>
        <label>Filter By Date Range:-</label>
                    <DatePicker
                selectsRange={true}
                startDate={startDate}
                className='select'
                endDate={endDate}
                onChange={(update) => {
                    const [start, end] = update;
                    setStartDate(start);
                    setEndDate(end);
                }}
                value={ startDate && endDate ? `${startDate ? startDate : ''} to ${endDate ? endDate : ''}` : "Select Date"} 
                dateFormat="dd-MMMM"
            />
        </div>


        </div>
      </div>
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

export default SelfEnrollmentTable;
