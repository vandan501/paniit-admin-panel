
import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';

const BatchManagementStudentTable = ({handleOpenEditBatchModal}) => {

  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'srNo',
      },
      {
        Header: 'Student Name',
        accessor: 'studentname',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );

  const data = useMemo(
    () => [
        {
          "srNo": 1,
          "studentname": "Swati",
          "email": "swati.mishra@gmail.com"
        },
        {
          "srNo": 2,
          "studentname": "Ravi",
          "email": "ravi.kumar@gmail.com"
        },
        {
          "srNo": 3,
          "studentname": "Pooja",
          "email": "pooja.sharma@gmail.com"
        },
        {
          "srNo": 4,
          "studentname": "Amit",
          "email": "amit.singh@gmail.com"
        },
        {
          "srNo": 5,
          "studentname": "Neha",
          "email": "neha.verma@gmail.com"
        },
        {
          "srNo": 6,
          "studentname": "Rohit",
          "email": "rohit.jain@gmail.com"
        },
        {
          "srNo": 7,
          "studentname": "Kavita",
          "email": "kavita.patel@gmail.com"
        },
        {
          "srNo": 8,
          "studentname": "Vikas",
          "email": "vikas.mehra@gmail.com"
        },
        {
          "srNo": 9,
          "studentname": "Geeta",
          "email": "geeta.bhatt@gmail.com"
        },
        {
          "srNo": 10,
          "studentname": "Rahul",
          "email": "rahul.malhotra@gmail.com"
        },
        {
          "srNo": 11,
          "studentname": "Anjali",
          "email": "anjali.sinha@gmail.com"
        },
        {
          "srNo": 12,
          "studentname": "Manoj",
          "email": "manoj.pandey@gmail.com"
        },
        {
          "srNo": 13,
          "studentname": "Simran",
          "email": "simran.kaur@gmail.com"
        },
        {
          "srNo": 14,
          "studentname": "Akash",
          "email": "akash.jain@gmail.com"
        },
        {
          "srNo": 15,
          "studentname": "Sneha",
          "email": "sneha.kulkarni@gmail.com"
        },
        {
          "srNo": 16,
          "studentname": "Priya",
          "email": "priya.sharma@gmail.com"
        },
        {
          "srNo": 17,
          "studentname": "Raj",
          "email": "raj.patel@gmail.com"
        },
        {
          "srNo": 18,
          "studentname": "Vandana",
          "email": "vandana.sharma@gmail.com"
        },
        {
          "srNo": 19,
          "studentname": "Arvind",
          "email": "arvind.kumar@gmail.com"
        },
        {
          "srNo": 20,
          "studentname": "Nisha",
          "email": "nisha.jain@gmail.com"
        },
        {
          "srNo": 21,
          "studentname": "Deepak",
          "email": "deepak.gupta@gmail.com"
        },
        {
          "srNo": 22,
          "studentname": "Vivek",
          "email": "vivek.singh@gmail.com"
        },
        {
          "srNo": 23,
          "studentname": "Suman",
          "email": "suman.singh@gmail.com"
        },
        {
          "srNo": 24,
          "studentname": "Ritu",
          "email": "ritu.agarwal@gmail.com"
        },
        {
          "srNo": 25,
          "studentname": "Meena",
          "email": "meena.jain@gmail.com"
        },
        {
          "srNo": 26,
          "studentname": "Arun",
          "email": "arun.kumar@gmail.com"
        },
        {
          "srNo": 27,
          "studentname": "Vivek",
          "email": "vivek.goyal@gmail.com"
        },
        {
          "srNo": 28,
          "studentname": "Rohit",
          "email": "rohit.sharma@gmail.com"
        },
        {
          "srNo": 29,
          "studentname": "Naveen",
          "email": "naveen.kumar@gmail.com"
        },
        {
          "srNo": 30,
          "studentname": "Karan",
          "email": "karan.verma@gmail.com"
        }
      ]
      ,[]
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


    <div className="table-container batch-management-table">

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

export default BatchManagementStudentTable;
