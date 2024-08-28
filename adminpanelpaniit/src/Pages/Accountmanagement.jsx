import React, { useState } from "react";
// import Accounttable from "../Components/Accounttable";
import importicons from "../icons/Vector.svg";
import UserTable from "../Components/UserTable";
import crossicon from "../icons/deleteuser.svg"
function Accountmanagement() {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [showBulkUserModal, setShowBulkUserModal] = useState(false);
  const [edituserprofileModal, setEditUserProfileModal] = useState(false);
  const [changepasswordModal, setChangePasswordModal] = useState(false);
  const [deleteuserprofileModal, setDeleteUserProfileModal] = useState(false);
  const [uploadbulkuserfile, setUploadbulkuserfile] = useState("");

  const handleOpenCreateUserModal = () => {
    setShowCreateUserModal(true);
  };
  const handleCloseCreateUserModal = () => {
    setShowCreateUserModal(false);
  };

  const handleOpenbulkUserModal = () => {
    setShowBulkUserModal(true);
  };

  const handleCloseBulkUserModal = () => {
    setShowBulkUserModal(false);
  };
  const handleOpenEditProfileModal = () => {
    setEditUserProfileModal(true);
  };
  const handleCloseEditProfileModal = () => {
    setEditUserProfileModal(false);
  };
  const handleOpenChangePasswordModal = () => {
    setChangePasswordModal(true);
  };
  const handleCloseChangePasswordModal = () => {
    setChangePasswordModal(false);
  };
  const handleOpenDeleteModal = () => {
    setDeleteUserProfileModal(true);
  };
  const handleCloseDeleteModal = () => {
    setDeleteUserProfileModal(false);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadbulkuserfile(file.name);
    } else {
      setUploadbulkuserfile("");
    }
  };

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
            <button onClick={handleOpenCreateUserModal}>Create User</button>
            <button onClick={handleOpenbulkUserModal}>Bulk User</button>
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
        {/* <Accounttable/> */}
        <UserTable handleOpenEditProfileModal={handleOpenEditProfileModal} 
        handleOpenChangePasswordModal={handleOpenChangePasswordModal}
        handleOpenDeleteModal={handleOpenDeleteModal}
        />
        
      </div>
      {/* Create User Modal */}
      {showCreateUserModal && (
        // <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal-overlay account-management-create-user">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseCreateUserModal}>
              &times;
            </span>
            <h2>Create User</h2>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Full name" />

              <label>Email</label>
              <input type="email" placeholder="Email id" />

              <label>Aadhar Number</label>
              <input type="text" placeholder="Enter Aadhar number" />

              <label>Select Role</label>
              <select>
                <option>Select role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Course Creator</option>
                <option>Teacher</option>
                <option>Students</option>
              </select>

              <label>Set Password</label>
              <input type="password" placeholder="Add password" />

              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      )}
      {/* Bulk User Modal */}
      {showBulkUserModal && (
        <div className="modal-overlay account-management-create-user">
          <div className="modal-content bulkusermodal">
            <span className="close-button" onClick={handleCloseBulkUserModal}>
              &times;
            </span>
            <h2>Create Bulk Users</h2>
            <form>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileUpload}
                  accept=".csv"
                  style={{ display: "none" }}
                />
                <label htmlFor="file-upload" className="file-upload-label">
                  <div className="file-upload-box">
                    <img
                      src={importicons}
                      className="upload-icon"
                      alt="upload-file-icon"
                    />
                    {uploadbulkuserfile
                      ? uploadbulkuserfile
                      : "Upload Your CSV File here..."}
                  </div>
                </label>
              </div>
              <label className="bulk-user-label">
                Sample File For Bulk User Creation <span> Click Here </span>to
                Download.
              </label>
              <div className="bulkuser-button-section">
                <button
                  type="close"
                  className="colse-bulk-user-btn"
                  onClick={handleCloseBulkUserModal}
                >
                  Close
                </button>
                <button type="submit" className="upload-bulk-user-btn">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Edit Profile Modal */}
      {edituserprofileModal && (
        <div className="modal-overlay account-management-create-user">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={handleCloseEditProfileModal}
            >
              &times;
            </span>
            <h2>Edit</h2>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Full name" />

              <label>Email</label>
              <input type="email" placeholder="Email id" />

              <label>Aadhar Number</label>
              <input type="text" placeholder="Enter Aadhar number" />

              <label>Select Role</label>
              <select>
                <option>Select role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Course Creator</option>
                <option>Teacher</option>
                <option>Students</option>
              </select>
              <button type="submit">Done</button>
            </form>
          </div>
        </div>
      )}
      {/* ChangePasswordModal */}
      {changepasswordModal && (
        <div className="modal-overlay account-management-create-user">
          <div className="modal-content close-password-modal">
            <span
              className="close-button"
              onClick={handleCloseChangePasswordModal}
            >
              &times;
            </span>
            <h2>Change Password</h2>
            <form>
              <label>New Password</label>
              <input type="text" placeholder="New Password" />

              <label>Confirm Password</label>
              <input type="text" placeholder="Confirm Password" />

              <div className="button-section-flex">
                <button
                  className="resetpassword-btn"
                >
                  Reset Password
                </button>
                <button type="submit" className="close-btn"
                onClick={handleCloseChangePasswordModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* DeleteProfileModal */}
      {deleteuserprofileModal && (
        <div className="modal-overlay account-management-create-user">
          <div className="modal-content delete-modal">
            <span className="close-button" onClick={handleCloseDeleteModal}>
              &times;
            </span>
            <div className="delete-icon">
              <img src={crossicon} alt="delete-icon"/>
            </div>
            <h1>Are you sure?</h1>
            <h2>Do you really want to perform this action?</h2>
            <div className="button-section-flex">
                <button
                  className="cancle-btn"
                  onClick={handleCloseDeleteModal}
                >
                  Cancel
                </button>
                <button type="submit" className="delete-btn">
                  Delete
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accountmanagement;
