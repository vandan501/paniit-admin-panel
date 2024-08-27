import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  { name: "srNo", label: "Sr. No" },
  { name: "fullName", label: "Full Name" },
  { name: "email", label: "Email" },
  { name: "aadharNumber", label: "Aadhar Number" },
  { name: "roles", label: "Roles" },
  {
    name: "action",
    label: "Action",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div>
            <button onClick={() => alert(`Edit ${tableMeta.rowIndex + 1}`)}>
              ✏️
            </button>
            <button onClick={() => alert(`View ${tableMeta.rowIndex + 1}`)}>
              🔍
            </button>
            <button onClick={() => alert(`Delete ${tableMeta.rowIndex + 1}`)}>
              🗑️
            </button>
          </div>
        );
      },
    },
  },
];

const data = [
  {
    srNo: 1,
    fullName: "Prit Patel",
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
];

// const options = {
// filterType: 'checkbox',
// selectableRows: 'none',
// responsive: 'standard'
// };

const Accounttable = () => {
  return (
    <div className="accounttable">
      <MUIDataTable
        // title={"User List"}
        data={data}
        columns={columns}
        hideColumnHeaders="True" // This hides the column headers
        hideFooter
        // options={options}
      />
    </div>
  );
};

export default Accounttable;
