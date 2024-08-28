import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import './UserTable.css';
import editicon from "../icons/edit.svg"
import deleteicon from "../icons/delete.svg"
import changepasswordicon from "../icons/changepassword.svg"

const UserTable = ({handleOpenEditProfileModal,handleOpenChangePasswordModal,handleOpenDeleteModal}) => {
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
            <img src={changepasswordicon} alt='edit icon'/>
            </button>
            <button className="delete-btn" onClick={handleOpenDeleteModal}>
            <img src={deleteicon} alt='delete icon'/>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        srNo: 1,
        fullName: "Prit Patel Prit Patel Prit Patel Prit Patel",
        email: "prit321@gmail.com",
        aadharNumber: "6574 8367 9826",
        roles: "Super Admin",
      },
      {
        srNo: 2,
        fullName: "Shyam Sharma",
        email: "shyam354@gmail.com",
        aadharNumber: "3432 3234 0987",
        roles: "Super Admin",
      },
      {
        srNo: 3,
        fullName: "Neha Vachhani",
        email: "neha344@gmail.com",
        aadharNumber: "7654 6444 8907",
        roles: "Super Admin",
      },
      {
        srNo: 4,
        fullName: "Nikhil Shah",
        email: "nikhil3223@gmail.com",
        aadharNumber: "3785 4000 6897",
        roles: "Admin",
      },
      {
        srNo: 5,
        fullName: "Nikunj Shah",
        email: "nikunj321@gmail.com",
        aadharNumber: "4324 2233 5678",
        roles: "Admin",
      },
      {
        srNo: 6,
        fullName: "Dipti Kikani",
        email: "dipti321@gmail.com",
        aadharNumber: "1878 3523 8798",
        roles: "Admin",
      },
      {
        srNo: 7,
        fullName: "Ekta Raiyani",
        email: "ekta321@gmail.com",
        aadharNumber: "9087 5473 7666",
        roles: "Teacher",
      },
      {
        srNo: 8,
        fullName: "Neha Siroya",
        email: "neha321@gmail.com",
        aadharNumber: "6567 9076 5443",
        roles: "Student",
      },
      {
        srNo: 9,
        fullName: "Janvi Patel",
        email: "janvi123@gmail.com",
        aadharNumber: "8056 6379 3400",
        roles: "Student",
      },
      {
        srNo: 10,
        fullName: "Pooja Bakraniya",
        email: "pooja112@gmail.com",
        aadharNumber: "6574 8367 4344",
        roles: "Student",
      },
      {
        srNo: 11,
        fullName: "Raj Mehta",
        email: "raj123@gmail.com",
        aadharNumber: "9000 1234 5678",
        roles: "Super Admin",
      },
      {
        srNo: 12,
        fullName: "Harsh Joshi",
        email: "harsh@gmail.com",
        aadharNumber: "1122 3344 5566",
        roles: "Admin",
      },
      {
        srNo: 13,
        fullName: "Ishita Patel",
        email: "ishita@gmail.com",
        aadharNumber: "2211 3344 5566",
        roles: "Teacher",
      },
      {
        srNo: 14,
        fullName: "Kiran Parmar",
        email: "kiranp@gmail.com",
        aadharNumber: "3344 5566 7788",
        roles: "Student",
      },
      {
        srNo: 15,
        fullName: "Manoj Desai",
        email: "manoj@gmail.com",
        aadharNumber: "4455 6677 8899",
        roles: "Admin",
      },
      {
        srNo: 16,
        fullName: "Richa Shah",
        email: "richa@gmail.com",
        aadharNumber: "5566 7788 9900",
        roles: "Super Admin",
      },
      {
        srNo: 17,
        fullName: "Urvashi Mehta",
        email: "urvashi@gmail.com",
        aadharNumber: "6677 8899 0011",
        roles: "Teacher",
      },
      {
        srNo: 18,
        fullName: "Yash Patel",
        email: "yashp@gmail.com",
        aadharNumber: "7788 9900 1122",
        roles: "Student",
      },
      {
        srNo: 19,
        fullName: "Zara Khan",
        email: "zara@gmail.com",
        aadharNumber: "8899 0011 2233",
        roles: "Admin",
      },
      {
        srNo: 20,
        fullName: "Ravi Desai",
        email: "ravidesai@gmail.com",
        aadharNumber: "9900 1122 3344",
        roles: "Super Admin",
      },
      {
        srNo: 21,
        fullName: "Amit Kumar",
        email: "amitkumar@gmail.com",
        aadharNumber: "2233 4455 6677",
        roles: "Teacher",
      },
      {
        srNo: 22,
        fullName: "Bhavika Patel",
        email: "bhavikapatel@gmail.com",
        aadharNumber: "3344 5566 7788",
        roles: "Admin",
      },
      {
        srNo: 23,
        fullName: "Chirag Shah",
        email: "chiragshah@gmail.com",
        aadharNumber: "4455 6677 8899",
        roles: "Super Admin",
      },
      {
        srNo: 24,
        fullName: "Devanshi Mehta",
        email: "devanshi@gmail.com",
        aadharNumber: "5566 7788 9900",
        roles: "Teacher",
      },
      {
        srNo: 25,
        fullName: "Esha Sharma",
        email: "esha@gmail.com",
        aadharNumber: "6677 8899 0011",
        roles: "Student",
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
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}
            className='heading'
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
