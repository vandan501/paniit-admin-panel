
import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './UserTable.css';
import { useNavigate } from 'react-router-dom';
import editicon from "../icons/edit.svg";
import viewicon from "../icons/view.svg"

const BatchManagementTable = ({handleOpenEditBatchModal}) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('batch-details/');
  };
  const columns = useMemo(
    () => [
      {
        Header: 'Sr. No',
        accessor: 'srNo',
      },
      {
        Header: 'Batch Name',
        accessor: 'batchname',
      },
      {
        Header: 'Program Name',
        accessor: 'programname',
      },
      {
        Header: 'Teacher Name',
        accessor: 'teachername',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button className="edit-btn" >
              <img src={editicon} alt='edit icon' className='edit-image-batch-management' onClick={handleOpenEditBatchModal}/>
            </button>
            <button className="edit-btn" onClick={handleIconClick}>
              <img src={viewicon} alt='view icon'/>
            </button>
          </div>
        ),
      },
    ],[]
  );

  const data = useMemo(
    () => [
        {
          "srNo": 1,
          "batchname": "Batch 1",
          "programname": "A.N.M Nursing",
          "teachername": "Priti,Neha"
        },
        {
          "srNo": 2,
          "batchname": "Batch 2",
          "programname": "G.N.M Nursing",
          "teachername": "Rahul,Amit"
        },
        {
          "srNo": 3,
          "batchname": "Batch 3",
          "programname": "B.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 4,
          "batchname": "Batch 4",
          "programname": "M.Sc Nursing",
          "teachername": "Priti,Sneha"
        },
        {
          "srNo": 5,
          "batchname": "Batch 5",
          "programname": "A.N.M Nursing",
          "teachername": "Neha,Rohit"
        },
        {
          "srNo": 6,
          "batchname": "Batch 6",
          "programname": "G.N.M Nursing",
          "teachername": "Rahul,Amit"
        },
        {
          "srNo": 7,
          "batchname": "Batch 7",
          "programname": "B.Sc Nursing",
          "teachername": "Priti,Neha"
        },
        {
          "srNo": 8,
          "batchname": "Batch 8",
          "programname": "M.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 9,
          "batchname": "Batch 9",
          "programname": "A.N.M Nursing",
          "teachername": "Priti,Rahul"
        },
        {
          "srNo": 10,
          "batchname": "Batch 10",
          "programname": "G.N.M Nursing",
          "teachername": "Neha,Amit"
        },
        {
          "srNo": 11,
          "batchname": "Batch 11",
          "programname": "B.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 12,
          "batchname": "Batch 12",
          "programname": "M.Sc Nursing",
          "teachername": "Priti,Rahul"
        },
        {
          "srNo": 13,
          "batchname": "Batch 13",
          "programname": "A.N.M Nursing",
          "teachername": "Neha,Amit"
        },
        {
          "srNo": 14,
          "batchname": "Batch 14",
          "programname": "G.N.M Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 15,
          "batchname": "Batch 15",
          "programname": "B.Sc Nursing",
          "teachername": "Priti,Rahul"
        },
        {
          "srNo": 16,
          "batchname": "Batch 16",
          "programname": "M.Sc Nursing",
          "teachername": "Neha,Amit"
        },
        {
          "srNo": 17,
          "batchname": "Batch 17",
          "programname": "A.N.M Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 18,
          "batchname": "Batch 18",
          "programname": "G.N.M Nursing",
          "teachername": "Priti,Rahul"
        },
        {
          "srNo": 19,
          "batchname": "Batch 19",
          "programname": "B.Sc Nursing",
          "teachername": "Neha,Amit"
        },
        {
          "srNo": 20,
          "batchname": "Batch 20",
          "programname": "M.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 21,
          "batchname": "Batch 21",
          "programname": "A.N.M Nursing",
          "teachername": "Priti,Neha"
        },
        {
          "srNo": 22,
          "batchname": "Batch 22",
          "programname": "G.N.M Nursing",
          "teachername": "Rahul,Amit"
        },
        {
          "srNo": 23,
          "batchname": "Batch 23",
          "programname": "B.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 24,
          "batchname": "Batch 24",
          "programname": "M.Sc Nursing",
          "teachername": "Priti,Sneha"
        },
        {
          "srNo": 25,
          "batchname": "Batch 25",
          "programname": "A.N.M Nursing",
          "teachername": "Neha,Rohit"
        },
        {
          "srNo": 26,
          "batchname": "Batch 26",
          "programname": "G.N.M Nursing",
          "teachername": "Rahul,Amit"
        },
        {
          "srNo": 27,
          "batchname": "Batch 27",
          "programname": "B.Sc Nursing",
          "teachername": "Priti,Neha"
        },
        {
          "srNo": 28,
          "batchname": "Batch 28",
          "programname": "M.Sc Nursing",
          "teachername": "Sneha,Rohit"
        },
        {
          "srNo": 29,
          "batchname": "Batch 29",
          "programname": "A.N.M Nursing",
          "teachername": "Priti,Rahul"
        },
        {
          "srNo": 30,
          "batchname": "Batch 30",
          "programname": "G.N.M Nursing",
          "teachername": "Neha,Amit"
        }
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

export default BatchManagementTable;
