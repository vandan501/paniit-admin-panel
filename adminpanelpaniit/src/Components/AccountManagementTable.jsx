import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './commonTables.css';
import editicon from "../icons/edit.svg";
import deleteicon from "../icons/delete.svg";
import changepasswordicon from "../icons/changepassword.svg";

const UserTable = ({ handleOpenEditProfileModal, handleOpenChangePasswordModal, handleOpenDeleteModal }) => {
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
            <button className="edit-btn" onClick={handleOpenEditProfileModal}>
              <img src={editicon} alt='edit icon'/>
            </button>
            <button className="view-btn" onClick={handleOpenChangePasswordModal}>
              <img src={changepasswordicon} alt='change password icon'/>
            </button>
            <button className="delete-btn" onClick={handleOpenDeleteModal}>
              <img src={deleteicon} alt='delete icon'/>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenEditProfileModal, handleOpenChangePasswordModal, handleOpenDeleteModal]
  );

  const data = useMemo(
    () => [
      {
        "srNo": 1,
        "fullName": "Prit Patel",
        "email": "prit321@gmail.com",
        "aadharNumber": "6574 8367 9826",
        "roles": "Super Admin"
      },
      {
        "srNo": 2,
        "fullName": "Shyam Sharma",
        "email": "shyam354@gmail.com",
        "aadharNumber": "3432 3234 0987",
        "roles": "Super Admin"
      },
      {
        "srNo": 3,
        "fullName": "Neha Vachhani",
        "email": "neha344@gmail.com",
        "aadharNumber": "7654 6444 8907",
        "roles": "Super Admin"
      },
      {
        "srNo": 4,
        "fullName": "Nikhil Shah",
        "email": "nikhil3223@gmail.com",
        "aadharNumber": "3785 4000 6897",
        "roles": "Admin"
      },
      {
        "srNo": 5,
        "fullName": "Nikunj Shah",
        "email": "nikunj321@gmail.com",
        "aadharNumber": "4324 2233 5678",
        "roles": "Admin"
      },
      {
        "srNo": 6,
        "fullName": "Dipti Kikani",
        "email": "dipti321@gmail.com",
        "aadharNumber": "1878 3523 8798",
        "roles": "Admin"
      },
      {
        "srNo": 7,
        "fullName": "Ekta Raiyani",
        "email": "ekta321@gmail.com",
        "aadharNumber": "9087 5473 7666",
        "roles": "Teacher"
      },
      {
        "srNo": 8,
        "fullName": "Neha Siroya",
        "email": "neha321@gmail.com",
        "aadharNumber": "6567 9076 5443",
        "roles": "Student"
      },
      {
        "srNo": 9,
        "fullName": "Janvi Patel",
        "email": "janvi123@gmail.com",
        "aadharNumber": "8056 6379 3400",
        "roles": "Student"
      },
      {
        "srNo": 10,
        "fullName": "Pooja Bakraniya",
        "email": "pooja112@gmail.com",
        "aadharNumber": "6574 8367 4344",
        "roles": "Student"
      },
      {
        "srNo": 11,
        "fullName": "Raj Mehta",
        "email": "raj123@gmail.com",
        "aadharNumber": "9000 1234 5678",
        "roles": "Super Admin"
      },
      {
        "srNo": 12,
        "fullName": "Harsh Joshi",
        "email": "harsh@gmail.com",
        "aadharNumber": "1122 3344 5566",
        "roles": "Admin"
      },
      {
        "srNo": 13,
        "fullName": "Ishita Patel",
        "email": "ishita@gmail.com",
        "aadharNumber": "2211 3344 5566",
        "roles": "Teacher"
      },
      {
        "srNo": 14,
        "fullName": "Kiran Parmar",
        "email": "kiranp@gmail.com",
        "aadharNumber": "3344 5566 7788",
        "roles": "Student"
      },
      {
        "srNo": 15,
        "fullName": "Manoj Desai",
        "email": "manoj@gmail.com",
        "aadharNumber": "4455 6677 8899",
        "roles": "Admin"
      },
      {
        "srNo": 16,
        "fullName": "Richa Shah",
        "email": "richa@gmail.com",
        "aadharNumber": "5566 7788 9900",
        "roles": "Super Admin"
      },
      {
        "srNo": 17,
        "fullName": "Urvashi Mehta",
        "email": "urvashi@gmail.com",
        "aadharNumber": "6677 8899 0011",
        "roles": "Teacher"
      },
      {
        "srNo": 18,
        "fullName": "Yash Patel",
        "email": "yashp@gmail.com",
        "aadharNumber": "7788 9900 1122",
        "roles": "Student"
      },
      {
        "srNo": 19,
        "fullName": "Zara Khan",
        "email": "zara@gmail.com",
        "aadharNumber": "8899 0011 2233",
        "roles": "Admin"
      },
      {
        "srNo": 20,
        "fullName": "Ravi Desai",
        "email": "ravidesai@gmail.com",
        "aadharNumber": "9900 1122 3344",
        "roles": "Super Admin"
      },
      {
        "srNo": 21,
        "fullName": "Amit Kumar",
        "email": "amitkumar@gmail.com",
        "aadharNumber": "2233 4455 6677",
        "roles": "Teacher"
      },
      {
        "srNo": 22,
        "fullName": "Bhavika Patel",
        "email": "bhavikapatel@gmail.com",
        "aadharNumber": "3344 5566 7788",
        "roles": "Admin"
      },
      {
        "srNo": 23,
        "fullName": "Chirag Shah",
        "email": "chiragshah@gmail.com",
        "aadharNumber": "4455 6677 8899",
        "roles": "Super Admin"
      },
      {
        "srNo": 24,
        "fullName": "Devanshi Mehta",
        "email": "devanshi@gmail.com",
        "aadharNumber": "5566 7788 9900",
        "roles": "Teacher"
      },
      {
        "srNo": 25,
        "fullName": "Esha Sharma",
        "email": "esha@gmail.com",
        "aadharNumber": "6677 8899 0011",
        "roles": "Student"
      },
      {
        "srNo": 26,
        "fullName": "Maya Kapoor",
        "email": "maya.kapoor@gmail.com",
        "aadharNumber": "7788 9900 2233",
        "roles": "Teacher"
      },
      {
        "srNo": 27,
        "fullName": "Rajeev Kumar",
        "email": "rajeeve.kumar@gmail.com",
        "aadharNumber": "8899 0011 3344",
        "roles": "Admin"
      },
      {
        "srNo": 28,
        "fullName": "Sonia Gupta",
        "email": "sonia.gupta@gmail.com",
        "aadharNumber": "9900 2233 4455",
        "roles": "Student"
      },
      {
        "srNo": 29,
        "fullName": "Kunal Desai",
        "email": "kunal.desai@gmail.com",
        "aadharNumber": "2233 4455 5566",
        "roles": "Super Admin"
      },
      {
        "srNo": 30,
        "fullName": "Sneha Patel",
        "email": "sneha.patel@gmail.com",
        "aadharNumber": "3344 5566 6677",
        "roles": "Teacher"
      },
      {
        "srNo": 31,
        "fullName": "Ravi Mehta",
        "email": "ravi.mehta@gmail.com",
        "aadharNumber": "4455 6677 7788",
        "roles": "Admin"
      },
      {
        "srNo": 32,
        "fullName": "Pooja Desai",
        "email": "pooja.desai@gmail.com",
        "aadharNumber": "5566 7788 8899",
        "roles": "Super Admin"
      },
      {
        "srNo": 33,
        "fullName": "Ankit Sharma",
        "email": "ankit.sharma@gmail.com",
        "aadharNumber": "6677 8899 9900",
        "roles": "Student"
      },
      {
        "srNo": 34,
        "fullName": "Gita Patel",
        "email": "gita.patel@gmail.com",
        "aadharNumber": "7788 9900 1122",
        "roles": "Teacher"
      },
      {
        "srNo": 35,
        "fullName": "Vikram Singh",
        "email": "vikram.singh@gmail.com",
        "aadharNumber": "8899 0011 2233",
        "roles": "Admin"
      },
      {
        "srNo": 36,
        "fullName": "Neha Patel",
        "email": "neha.patel@gmail.com",
        "aadharNumber": "9900 2233 3344",
        "roles": "Super Admin"
      },
      {
        "srNo": 37,
        "fullName": "Jitendra Sharma",
        "email": "jitendra.sharma@gmail.com",
        "aadharNumber": "2233 4455 5566",
        "roles": "Teacher"
      },
      {
        "srNo": 38,
        "fullName": "Priya Kapoor",
        "email": "priya.kapoor@gmail.com",
        "aadharNumber": "3344 5566 6677",
        "roles": "Student"
      },
      {
        "srNo": 39,
        "fullName": "Manish Patel",
        "email": "manish.patel@gmail.com",
        "aadharNumber": "4455 6677 7788",
        "roles": "Admin"
      },
      {
        "srNo": 40,
        "fullName": "Siddharth Singh",
        "email": "siddharth.singh@gmail.com",
        "aadharNumber": "5566 7788 8899",
        "roles": "Super Admin"
      },
      {
        "srNo": 41,
        "fullName": "Arun Sharma",
        "email": "arun.sharma@gmail.com",
        "aadharNumber": "6677 8899 9900",
        "roles": "Teacher"
      },
      {
        "srNo": 42,
        "fullName": "Seema Desai",
        "email": "seema.desai@gmail.com",
        "aadharNumber": "7788 9900 1122",
        "roles": "Student"
      },
      {
        "srNo": 43,
        "fullName": "Sunil Gupta",
        "email": "sunil.gupta@gmail.com",
        "aadharNumber": "8899 0011 2233",
        "roles": "Admin"
      },
      {
        "srNo": 44,
        "fullName": "Aarti Patel",
        "email": "aarti.patel@gmail.com",
        "aadharNumber": "9900 2233 3344",
        "roles": "Teacher"
      },
      {
        "srNo": 45,
        "fullName": "Rajeev Mehta",
        "email": "rajeeve.mehta@gmail.com",
        "aadharNumber": "2233 4455 5566",
        "roles": "Super Admin"
      },
      {
        "srNo": 46,
        "fullName": "Madhuri Sharma",
        "email": "madhuri.sharma@gmail.com",
        "aadharNumber": "3344 5566 6677",
        "roles": "Student"
      },
      {
        "srNo": 47,
        "fullName": "Ravi Kumar",
        "email": "ravi.kumar@gmail.com",
        "aadharNumber": "4455 6677 7788",
        "roles": "Teacher"
      },
      {
        "srNo": 48,
        "fullName": "Meera Singh",
        "email": "meera.singh@gmail.com",
        "aadharNumber": "5566 7788 8899",
        "roles": "Admin"
      },
      {
        "srNo": 49,
        "fullName": "Suresh Patel",
        "email": "suresh.patel@gmail.com",
        "aadharNumber": "6677 8899 9900",
        "roles": "Super Admin"
      },
      {
        "srNo": 50,
        "fullName": "Sangeeta Kumar",
        "email": "sangeeta.kumar@gmail.com",
        "aadharNumber": "7788 9900 2233",
        "roles": "Teacher"
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

export default UserTable;
