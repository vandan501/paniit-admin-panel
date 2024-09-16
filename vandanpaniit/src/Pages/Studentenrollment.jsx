import React, { useEffect, useState } from "react";
import importicons from "../icons/Vector.svg";
import StudentEnrollmentTable from "../Componentsadminpanel/StudentEnrollmentTable";
import Select from 'react-select'; 
import crossicon from "../icons/deleteuser.svg"
import { useForm, Controller } from 'react-hook-form';


function Studentenrollment() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch } = useForm();
  
  const [studentenrolldata, setStudentEnrollData] = useState([]); 
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const ProgramOptions = [
    { value: 'Super Admin', label: 'Super Admin' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Course Creator', label: 'Course Creator' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' },
  ];

  const StudentOptions = [
    { value: 'Super Admin', label: 'Super Admin' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Course Creator', label: 'Course Creator' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' },
  ];

  const [showStudentEnrollmentModal, setshowStudentEnrollmentModal] = useState(false);
  const [showStudentEnrollmentBulkUserModal, setshowStudentEnrollmentBulkUserModal] = useState(false);
  
  const [deleteStudentEnrollmentModal, setdeleteStudentEnrollmentModal] = useState(false);
  const [uploadbulkstudentenrollmentfile, setuploadbulkstudentenrollmentfile] = useState("");

  // **Added state to manage error messages for file upload validation**
  const [fileUploadError, setFileUploadError] = useState("");

  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleOpenCreateUserModal = () => {
    setshowStudentEnrollmentModal(true);
  };
  const handleCloseCreateUserModal = () => {
    setshowStudentEnrollmentModal(false);
  };

  const handleOpenbulkUserModal = () => {
    setshowStudentEnrollmentBulkUserModal(true);
    setFileUploadError("");
  };

  const handleCloseBulkUserModal = () => {
    setshowStudentEnrollmentBulkUserModal(false);
  };

  const handleOpenDeleteModal = () => {
    setdeleteStudentEnrollmentModal(true);
  };
  const handleCloseDeleteModal = () => {
    setdeleteStudentEnrollmentModal(false);
  };


 
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "text/csv") {
        setFileUploadError("*Please select a CSV file only.");
        setuploadbulkstudentenrollmentfile("");
      } else {
        setuploadbulkstudentenrollmentfile(file.name);
        setFileUploadError(""); // Clear error if valid CSV is selected
      }
    } else {
      setuploadbulkstudentenrollmentfile("");
      setFileUploadError("*Please select a CSV file.");
    }
  };


  // **Added function to handle the bulk upload form submission**
  const handleBulkUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadbulkstudentenrollmentfile) {
      setFileUploadError("*Please select a CSV file."); // Set error if no file is selected
    } else {
      setFileUploadError("");
      console.log("Uploading file:", uploadbulkstudentenrollmentfile);
 
      handleCloseBulkUserModal();
    }
  };

  

  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseCreateUserModal();
      handleCloseBulkUserModal();
      handleCloseDeleteModal();
    }
  }
  const onSubmitStudentEnrollment = (data) => {
    console.log(data);
    // Handle form submission logic here
    handleCloseCreateUserModal();
  };

  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px", 
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '100px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
    })
  };

async function handleGetStudentEnrollData() {
  try {
    const formData = new FormData();
    formData.append('search', search);
    formData.append('page', pageIndex);
    formData.append('length', pageSize);

    const response = await fetch('http://local.edly.io:8000/api/studentenrollment/', {
      method: 'POST',
      body: formData
    });
    

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
   if (result) {
    setStudentEnrollData(result?.studentdetails); 
    setTotalCount(result.totalCount);
    console.log("Fetched data:", result.studentdetails); 
    } 
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
}

useEffect(() => {
  handleGetStudentEnrollData();
}, [search, pageIndex, pageSize]);
  return (
    <div className="main-section student-enrollment">
      <div className="first-heading-row">
        <h1>Student Enrollment</h1>
        <div className="right-side-content">
          <div className="account-management">
            <button onClick={handleOpenCreateUserModal} className="student-enrollment-button-width">Student Enrollment</button>
            <button onClick={handleOpenbulkUserModal}>Bulk Enrollment</button>
          </div>
        </div>
      </div>
     <div className="data-table-section">
        {studentenrolldata &&
        <StudentEnrollmentTable
          handleOpenDeleteModal={handleOpenDeleteModal}
          data={studentenrolldata}
          page={pageIndex}
          pageSize={pageSize}
          totalCount={totalCount}
          setPage={setPageIndex}
          setPageSize={setPageSize}
          setSearch={setSearch}
        />
      }
      </div>
      {/* StudentEnrollmentModal Modal */}
      {showStudentEnrollmentModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseCreateUserModal}>
              &times;
            </span>
            <h2>Student Enrollment</h2>
            <form className="teacher-enrollment-form" onSubmit={handleSubmit(onSubmitStudentEnrollment)}>
              <label
                className={errors.studentEnrollmentProgram ? "label-error" : ""}
              >
                Select Program
              </label>
              <Controller
                name="studentEnrollmentProgram"
                control={control}
                rules={{ required: "*Please select one Program" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={ProgramOptions}
                    placeholder="Select Problem"
                    onChange={(option) => {
                      setValue("studentEnrollmentProgram", option);
                      if (option) {
                        clearErrors("studentEnrollmentProgram");
                      }
                    }}
                    value={field.value}
                    // styles={{ option: (provided) => ({ ...provided, fontSize: '13px' }) }}
                    styles={customStyles}
                  />
                )}
              />
              {errors.studentEnrollmentProgram && (
                <p className="errorMessage">
                  {errors.studentEnrollmentProgram.message}
                </p>
              )}
              {/* <label>Select Program</label>
              <Select
                options={ProgramOptions}
                value={selectedPrograms}
                onChange={setSelectedPrograms}
                placeholder="Select Role"
                styles={customStyles} 
              /> */}
              <label
                className={errors.StudentSelectStudent ? "label-error" : ""}
              >
                Select Student
              </label>
              <Controller
                name="StudentSelectStudent"
                control={control}
                rules={{ required: "*Please select at least one Student" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={StudentOptions}
                    isMulti
                    placeholder="Select Student"
                    onChange={(options) => {
                      setValue("StudentSelectStudent", options);
                      if (options) {
                        clearErrors("StudentSelectStudent");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.StudentSelectStudent && (
                <p className="errorMessage">
                  {errors.StudentSelectStudent.message}
                </p>
              )}
              {/* <label>Select Student</label>
              <Select
                options={StudentOptions}
                value={selectedCourses}
                isMulti
                onChange={setSelectedCourses}
                placeholder="Select Role"
                styles={customStyles} 
              /> */}



              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      )}
      {/* Bulk User Modal */}
      {showStudentEnrollmentBulkUserModal && (
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
          <div className="modal-content bulkusermodal">
            <span className="close-button" onClick={handleCloseBulkUserModal}>
              &times;
            </span>
            <h2>Bulk User Enrollment</h2>
            <form onSubmit={handleBulkUploadSubmit}>
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
                    {uploadbulkstudentenrollmentfile
                      ? uploadbulkstudentenrollmentfile
                      : "Upload Your CSV File here..."}
                  </div>
                </label>
              </div>
               {/* **Added error message display for file upload** */}
               {fileUploadError && (
                <p className="errorMessage">{fileUploadError}</p>
              )}
              <label className="bulk-user-label">
                Sample File For Bulk User Creation <span> Click Here </span>to
                Download.
              </label>
              <div className="bulkuser-button-section">
                <button
                  type="button"
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
      {/* Edit StudentEnrollment Modal */}


      {/* DeleteStudentEnrollmentModal */}
      {deleteStudentEnrollmentModal && (
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

export default Studentenrollment;
