
import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';
import editicon from "../icons/edit.svg";
import viewicon from "../icons/view.svg"

const BatchManagementTeacherTable = ({handleOpenEditBatchModal}) => {

  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'srNo',
      },
      {
        Header: 'Teacher Name',
        accessor: 'teachername',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Course Name',
        accessor: 'coursename',
      },
    ],
    []
  );

  const data = useMemo(
    () => [
        {
          "srNo": 1,
          "teachername": "Preeti",
          "email": "preeti.vyas@gmail.com",
          "coursename": "English,Maths"
        },
        {
          "srNo": 2,
          "teachername": "Neha",
          "email": "neha.sharma@gmail.com",
          "coursename": "Science,Maths"
        },
        {
          "srNo": 3,
          "teachername": "Amit",
          "email": "amit.kumar@gmail.com",
          "coursename": "History,Geography"
        },
        {
          "srNo": 4,
          "teachername": "Ravi",
          "email": "ravi.patel@gmail.com",
          "coursename": "Physics,Chemistry"
        },
        {
          "srNo": 5,
          "teachername": "Suman",
          "email": "suman.singh@gmail.com",
          "coursename": "Biology,Maths"
        },
        {
          "srNo": 6,
          "teachername": "Meena",
          "email": "meena.jain@gmail.com",
          "coursename": "English,History"
        },
        {
          "srNo": 7,
          "teachername": "Karan",
          "email": "karan.verma@gmail.com",
          "coursename": "Economics,Maths"
        },
        {
          "srNo": 8,
          "teachername": "Deepak",
          "email": "deepak.gupta@gmail.com",
          "coursename": "Political Science,Sociology"
        },
        {
          "srNo": 9,
          "teachername": "Ritu",
          "email": "ritu.agarwal@gmail.com",
          "coursename": "English,Physics"
        },
        {
          "srNo": 10,
          "teachername": "Anita",
          "email": "anita.sharma@gmail.com",
          "coursename": "Chemistry,Biology"
        },
        {
          "srNo": 11,
          "teachername": "Vivek",
          "email": "vivek.singh@gmail.com",
          "coursename": "Geography,History"
        },
        {
          "srNo": 12,
          "teachername": "Pooja",
          "email": "pooja.dubey@gmail.com",
          "coursename": "Maths,Physics"
        },
        {
          "srNo": 13,
          "teachername": "Arun",
          "email": "arun.kumar@gmail.com",
          "coursename": "Science,English"
        },
        {
          "srNo": 14,
          "teachername": "Nisha",
          "email": "nisha.jain@gmail.com",
          "coursename": "Maths,History"
        },
        {
          "srNo": 15,
          "teachername": "Rohit",
          "email": "rohit.kapoor@gmail.com",
          "coursename": "Chemistry,Physics"
        },
        {
          "srNo": 16,
          "teachername": "Priya",
          "email": "priya.sharma@gmail.com",
          "coursename": "English,Sociology"
        },
        {
          "srNo": 17,
          "teachername": "Manoj",
          "email": "manoj.pandey@gmail.com",
          "coursename": "Economics,Political Science"
        },
        {
          "srNo": 18,
          "teachername": "Sneha",
          "email": "sneha.kulkarni@gmail.com",
          "coursename": "Maths,Physics"
        },
        {
          "srNo": 19,
          "teachername": "Rahul",
          "email": "rahul.malhotra@gmail.com",
          "coursename": "Biology,Chemistry"
        },
        {
          "srNo": 20,
          "teachername": "Anjali",
          "email": "anjali.sinha@gmail.com",
          "coursename": "History,Geography"
        },
        {
          "srNo": 21,
          "teachername": "Vikas",
          "email": "vikas.mehra@gmail.com",
          "coursename": "Physics,Maths"
        },
        {
          "srNo": 22,
          "teachername": "Simran",
          "email": "simran.kaur@gmail.com",
          "coursename": "English,History"
        },
        {
          "srNo": 23,
          "teachername": "Raj",
          "email": "raj.patel@gmail.com",
          "coursename": "Geography,Chemistry"
        },
        {
          "srNo": 24,
          "teachername": "Kavita",
          "email": "kavita.singh@gmail.com",
          "coursename": "Biology,Maths"
        },
        {
          "srNo": 25,
          "teachername": "Arvind",
          "email": "arvind.kumar@gmail.com",
          "coursename": "Science,English"
        },
        {
            "srNo": 26,
            "teachername": "Swati",
            "email": "swati.mishra@gmail.com",
            "coursename": "Political Science,Sociology"
        },
        {
          "srNo": 27,
          "teachername": "Vandana",
          "email": "vandana.sharma@gmail.com",
          "coursename": "Economics,Maths"
        },
        {
          "srNo": 28,
          "teachername": "Naveen",
          "email": "naveen.kumar@gmail.com",
          "coursename": "Physics,Chemistry"
        },
        {
          "srNo": 29,
          "teachername": "Geeta",
          "email": "geeta.bhatt@gmail.com",
          "coursename": "History,Sociology"
        },
        {
          "srNo": 30,
          "teachername": "Akash",
          "email": "akash.jain@gmail.com",
          "coursename": "Maths,Economics"
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

export default BatchManagementTeacherTable;
