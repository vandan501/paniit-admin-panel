import React, { useState } from "react";
// import Accounttable from "../Components/Accounttable";
import importicons from "../icons/Vector.svg";
import AccountManagementTable from "../Componentsadminpanel/AccountManagementTable";
import Select from 'react-select'; // Added import for react-select
import crossicon from "../icons/deleteuser.svg"
import { useForm, Controller } from 'react-hook-form';


function Accountmanagement() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch ,reset } = useForm();

  const RoleOptions = [
    { value: 'Super Admin', label: 'Super Admin' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Course Creator', label: 'Course Creator' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' },
  ];

  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [showBulkUserModal, setShowBulkUserModal] = useState(false);
  const [edituserprofileModal, setEditUserProfileModal] = useState(false);
  const [changepasswordModal, setChangePasswordModal] = useState(false);
  const [deleteuserprofileModal, setDeleteUserProfileModal] = useState(false);
  const [uploadbulkuserfile, setUploadbulkuserfile] = useState("");
  const [showNewPassword, setShowPassword] = useState(false);
  const [showNewConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showNewPassword);
   };
  const togglePasswordVisibility2 = () => {
    setShowConfirmPassword(!showNewConfirmPassword);
  };
  const [selectedRoles, setSelectedRoles] = useState([]);
  // const [selectedFilterRoles, setSelectedFilterRoles] = useState(null);
  // const [inputFilterValue, setInputFilterValue] = useState('');

  const handleOpenCreateUserModal = () => {
    setShowCreateUserModal(true);
  };
  const handleCloseCreateUserModal = () => {
    reset();
    setShowCreateUserModal(false);
  };

  const handleOpenbulkUserModal = () => {
    setShowBulkUserModal(true);
  };

  const handleCloseBulkUserModal = () => {
    reset();
    setShowBulkUserModal(false);
  };
  const handleOpenEditProfileModal = () => {
    setEditUserProfileModal(true);
  };
  const handleCloseEditProfileModal = () => {
    reset();
    setEditUserProfileModal(false);
  };
  const handleOpenChangePasswordModal = () => {
    setChangePasswordModal(true);
  };
  const handleCloseChangePasswordModal = () => {
    reset();
    setChangePasswordModal(false);
  };
  const handleOpenDeleteModal = () => {
    setDeleteUserProfileModal(true);
  };
  const handleCloseDeleteModal = () => {
    reset();
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
  
  // const handleInputFilterChange = (inputFilterValue, { action }) => {
  //   if (action !== 'input-change') return;
  //   setInputFilterValue(''); 
  // };

  const onSubmitCreateUser = (data) => {
    console.log(data);
    // Handle form submission logic here

    // Close the modal after successful submission
    handleCloseCreateUserModal();
  };
  const onSubmitChangePassword = (data) => {
    console.log(data);
    // Handle form submission logic here

    // Close the modal after successful submission
    handleCloseChangePasswordModal();
  };
  const onSubmitBulkUser = (data) => {
    console.log(data);
    // Handle form submission logic here

    // Close the modal after successful submission
    handleCloseBulkUserModal();
  };
  const onSubmitEditUser = (data) => {
    console.log(data);
    // Handle form submission logic here
    handleCloseEditProfileModal();
  };

  const newPassword = watch("createUserAccountpwd1");



  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      reset();
      handleCloseBulkUserModal()
      handleCloseChangePasswordModal()
      handleCloseCreateUserModal()
      handleCloseDeleteModal()
      handleCloseEditProfileModal()
    }
  }

  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px", // Change this value to your desired font size
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '100px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '12px'
    }),
  };


  
  return (
    <div className="main-section account-management-page">
      <div className="first-heading-row">
        <h1>Account Management </h1>
        <div className="right-side-content">
          <div className="filter-by-row-div">
            <span>Filter by role:- </span>
            <select>
              <option value="" disabled selected>Filter By Role</option>
              <option>Super Admin</option>
              <option>Admin</option>
              <option>Course Creator</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>
            {/* <Select
                options={RoleOptions}
                value={selectedFilterRoles}
                onChange={setSelectedFilterRoles}
                // onChange={setSelectedRoles}
                placeholder="Filter By Role"
                styles={customStyles}
                // isSearchable={true}
                inputFilterValue={inputFilterValue}
                onInputChange={handleInputFilterChange}
                isSearchable={false}
              /> */}
          </div>
          <div className="account-management">
            <button onClick={handleOpenCreateUserModal}>Create User</button>
            <button onClick={handleOpenbulkUserModal}>Bulk User</button>
          </div>
        </div>
      </div>
      <div className="data-table-section">
        {/* <Accounttable/> */}
        <AccountManagementTable handleOpenEditProfileModal={handleOpenEditProfileModal}
          handleOpenChangePasswordModal={handleOpenChangePasswordModal}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />

      </div>
      {/* Create User Modal */}
      {showCreateUserModal && (
        // <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseCreateUserModal}>
              &times;
            </span>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit(onSubmitCreateUser)}>
              {/* <label>Full Name</label>
              <input type="text" placeholder="Full name" /> */}
              <label
                className={errors.createUserAccountFullnm ? "label-error" : ""}
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("createUserAccountFullnm", {
                  required: "*Full Name is required",
                })}
                placeholder="Full Name"
              />
              {errors.createUserAccountFullnm && (
                <p className="errorMessage">
                  {errors.createUserAccountFullnm.message}
                </p>
              )}
              <label
                className={errors.createUserAccountemail ? "label-error" : ""}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email Id"
                {...register("createUserAccountemail", {
                  required: "*Email is required",
                })}
              />
              {errors.createUserAccountemail && (
                <p className="errorMessage">
                  {errors.createUserAccountemail.message}
                </p>
              )}
              {/* <label>Email</label>
              <input type="email" placeholder="Email id" /> */}
              <label
                className={errors.createUserAccountAdhar ? "label-error" : ""}
              >
                Aadhar Number
              </label>
              <input
                type="text"
                maxLength={12}
                minLength={12}
                placeholder="Enter Aadhar Number"
                {...register("createUserAccountAdhar", {
                  required: "*Aadhar number is required",
                  validate: (value) => {
                    const isValid = /^\d{12}$/.test(value);
                    return isValid || "Aadhar number must be exactly 12 digits";
                  },
                })}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
           
              />
              {errors.createUserAccountAdhar && (
                <p className="errorMessage">
                  {errors.createUserAccountAdhar.message}
                </p>
              )}
              {/* <label>Aadhar Number</label>
              <input type="text" placeholder="Enter Aadhar number" /> */}
              <label className={errors.roleInCreateUser ? "label-error" : ""}>
                Select Role
              </label>
              <Controller
                name="roleInCreateUser"
                control={control}
                rules={{ required: "*Role is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={RoleOptions}
                    placeholder="Select Role"
                    onChange={(option) => {
                      setValue("roleInCreateUser", option);
                      if (option) {
                        clearErrors("roleInCreateUser");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.roleInCreateUser && (
                <p className="errorMessage errormsg">
                  {errors.roleInCreateUser.message}
                </p>
              )}
              {/* <label>Select Role</label> */}
              {/* <select>
                <option>Select role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Course Creator</option>
                <option>Teacher</option>
                <option>Students</option>
              </select> */}
              {/* <Select
                options={RoleOptions}
                value={selectedRoles}
                onChange={setSelectedRoles}
                placeholder="Select Role"
                styles={customStyles}
              /> */}

              {/* <label>Set Password</label>
              <input type="password" placeholder="Add password" /> */}
              <label
                className={errors.createUserAccountpwd ? "label-error" : ""}
              >
                Password
              </label>
              <div className="input-type-password">
              <input
                 type={showNewConfirmPassword ? "text" : "password"}
                placeholder="Add Password"
                {...register("createUserAccountpwd", {
                  required: "*Password is required",
                })}
              />
                {showNewConfirmPassword ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" onClick={togglePasswordVisibility2}> 
          <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7 0-70.7-57.3-128-128-128-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zm205.1 160.8l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3 0-5.5-.7-10.9-2-16h2c44.2 0 80 35.8 80 80 0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8l-37.7-29.7c-22.8 29.7-39.1 59.3-48.6 82.2-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47 43.8 111.7 80.6 192.5 80.6 47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128 13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"></path>
        </svg>):( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={togglePasswordVisibility2}>
          <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80zm0-208a128 128 0 110 256 128 128 0 110-256z"></path>
        </svg>)  }              
              </div>
              {errors.createUserAccountpwd && (
                <p className="errorMessage">
                  {errors.createUserAccountpwd.message}
                </p>
              )}
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      )}
      {/* Bulk User Modal */}
      {showBulkUserModal && (
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
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
                Sample File For Bulk User Creation <span>  <a href="../media/src/bulk_user_enroll_file.csv" download>
    <span> Click Here </span>
  </a> </span>to
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
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span
              className="close-button showModal-close-button"
              onClick={handleCloseEditProfileModal}
            >
              &times;
            </span>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit(onSubmitEditUser)}>
              {/* <label>Full Name</label>
              <input type="text" placeholder="Full name" /> */}
              <label
                className={errors.editUserAccountFullnm ? "label-error" : ""}
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("editUserAccountFullnm", {
                  required: "*Full Name is required",
                })}
                placeholder="Full Name"
              />
              {errors.editUserAccountFullnm && (
                <p className="errorMessage">
                  {errors.editUserAccountFullnm.message}
                </p>
              )}
              {/* <label>Email</label>
              <input type="email" placeholder="Email id" /> */}
              <label
                className={errors.editUserAccountemail ? "label-error" : ""}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email Id"
                {...register("editUserAccountemail", {
                  required: "*Email is required",
                })}
              />
              {errors.editUserAccountemail && (
                <p className="errorMessage">
                  {errors.editUserAccountemail.message}
                </p>
              )}
              <label
                className={errors.editUserAccountAdhar ? "label-error" : ""}
              >
                Aadhar Number
              </label>
              <input
                type="text"
                placeholder="Enter Aadhar Number"
                maxLength={12}
                minLength={12}
                {...register("editUserAccountAdhar", {
                  required: "*Aadhar number is required",
                  validate: (value) => {
                    const isValid = /^\d{12}$/.test(value);
                    return isValid || "Aadhar number must be exactly 12 digits";
                  },
                })}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              {errors.editUserAccountAdhar && (
                <p className="errorMessage">
                  {errors.editUserAccountAdhar.message}
                </p>
              )}
              {/* <label>Aadhar Number</label>
              <input type="text" placeholder="Enter Aadhar number" /> */}

              <label className={errors.roleInEditUser ? "label-error" : ""}>
                Select Role
              </label>
              <Controller
                name="roleInEditUser"
                control={control}
                rules={{ required: "*Role is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={RoleOptions}
                    placeholder="Select Role"
                    onChange={(option) => {
                      setValue("roleInEditUser", option);
                      if (option) {
                        clearErrors("roleInEditUser");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.roleInEditUser && (
                <p className="errorMessage errormsg">
                  {errors.roleInEditUser.message}
                </p>
              )}
              {/* <label>Select Role</label> */}
              {/* <select>
                <option>Select role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Course Creator</option>
                <option>Teacher</option>
                <option>Students</option>
              </select> */}
              {/* <Select
                options={RoleOptions}
                value={selectedRoles}
                onChange={setSelectedRoles}
                placeholder="Select Role"
                styles={customStyles}
              /> */}

              <button type="submit">Done</button>
            </form>
          </div>
        </div>
      )}
      {/* ChangePasswordModal */}
      {changepasswordModal && (
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
          <div className="modal-content close-password-modal">
            <span
              className="close-button"
              onClick={handleCloseChangePasswordModal}
            >
              &times;
            </span>
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit(onSubmitChangePassword)}>
              {/* <label>New Password</label>
              <input type="text" placeholder="New Password" /> */}
              <label
                className={errors.createUserAccountpwd1 ? "label-error" : ""}
              >
                New Password
              </label>
              <div className="input-type-password">
              <input
                 type={showNewPassword ? "text" : "password"}
                placeholder="New password"
                {...register("createUserAccountpwd1", {
                  required: "*New password is required",
                })}
              />
                {showNewPassword ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" onClick={togglePasswordVisibility}> 
          <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7 0-70.7-57.3-128-128-128-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zm205.1 160.8l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3 0-5.5-.7-10.9-2-16h2c44.2 0 80 35.8 80 80 0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8l-37.7-29.7c-22.8 29.7-39.1 59.3-48.6 82.2-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47 43.8 111.7 80.6 192.5 80.6 47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128 13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"></path>
        </svg>):( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={togglePasswordVisibility}>
          <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80zm0-208a128 128 0 110 256 128 128 0 110-256z"></path>
        </svg>)  }              
              </div>
              {errors.createUserAccountpwd1 && (
                <p className="errorMessage">
                  {errors.createUserAccountpwd1.message}
                </p>
              )}
              {/* <label>Confirm Password</label>
              <input type="text" placeholder="Confirm Password" /> */}
              <label
                className={errors.createUserAccountpwd2 ? "label-error" : ""}
              >
                Confirm Password
              </label>
              <div className="input-type-password">
           
              <input
                 type={showNewConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("createUserAccountpwd2", {
                  required: "*Confirm password is required",
                  validate: (value) =>
                    value === newPassword || "*Passwords do not match",
                })}
              />
               {showNewConfirmPassword ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" onClick={togglePasswordVisibility2}> 
          <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7 0-70.7-57.3-128-128-128-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zm205.1 160.8l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3 0-5.5-.7-10.9-2-16h2c44.2 0 80 35.8 80 80 0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8l-37.7-29.7c-22.8 29.7-39.1 59.3-48.6 82.2-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47 43.8 111.7 80.6 192.5 80.6 47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128 13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"></path>
        </svg>):( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={togglePasswordVisibility2}>
          <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80zm0-208a128 128 0 110 256 128 128 0 110-256z"></path>
        </svg>)  }              
              </div>
              {errors.createUserAccountpwd2 && (
                <p className="errorMessage">
                  {errors.createUserAccountpwd2.message}
                </p>
              )}
              <div className="button-section-flex">
                <button
                  className="resetpassword-btn main"
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
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
          <div className="modal-content delete-modal">
            <span className="close-button" onClick={handleCloseDeleteModal}>
              &times;
            </span>
            <div className="delete-icon">
              <img src={crossicon} alt="delete-icon" />
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
