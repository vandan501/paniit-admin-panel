import React from "react";
import Accounttable from "../Components/Accounttable";

function Accountmanagement() {
  return (
    <div className="main-section">
      <div className="first-heading-row">
        <h1>Account Management </h1>
        <div className="right-side-content">
          <div className="filter-by-row-div">
            <span>Filter by role:- </span>
            <select>
              <option>Filter By Role</option>
              <option>Super Admin</option>
              <option>Admin</option>
              <option>Course Creator</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>
          </div>
          <div className="account-management">
            <button>Create User</button>
            <button>Bulk User</button>
          </div>
        </div>
      </div>
      <div className="second-filter-row">
        <div className="entries-filter">
          <label for="entries">Show</label>
          <select id="entries" name="entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <label for="search">Search:</label>
          <input type="text" id="search" name="search" />
        </div>
      </div>
      <div className="data-table-section">
      <Accounttable/>
      </div>
    </div>
  );
}

export default Accountmanagement;
