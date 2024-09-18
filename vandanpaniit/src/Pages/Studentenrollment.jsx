import React, { useEffect, useState } from "react";
import importicons from "../icons/Vector.svg";
import StudentEnrollmentTable from "../Componentsadminpanel/StudentEnrollmentTable";
import Select from 'react-select'; 
import crossicon from "../icons/deleteuser.svg"
import { useForm, Controller } from 'react-hook-form';


function Studentenrollment() {
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch,reset } = useForm();
  
  const [studentenrolldata, setStudentEnrollData] = useState([]); 
  const [start,setStart]=useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [students,setStudents]=useState([]);
  const [programs,setPrograms]=useState([]);
  const [programOptions, setProgramOptions] = useState([]);
  
  const [studentOptions, setStudentOptions] = useState([]);

  const [showStudentEnrollmentModal, setshowStudentEnrollmentModal] = useState(false);
  const [showStudentEnrollmentBulkUserModal, setshowStudentEnrollmentBulkUserModal] = useState(false);
  
  const [deleteStudentEnrollmentModal, setdeleteStudentEnrollmentModal] = useState(false);
  const [uploadbulkstudentenrollmentfile, setuploadbulkstudentenrollmentfile] = useState("");

  const [fileUploadError, setFileUploadError] = useState("");
  const [studentData, setStudentData] = useState("");
  console.log("student data=====>",studentData)
  const handleOpenCreateUserModal = () => {
    
    setshowStudentEnrollmentModal(true);
  };
  const handleCloseCreateUserModal = () => {
    reset();
    setshowStudentEnrollmentModal(false);
  };

  const handleOpenbulkUserModal = () => {
    setshowStudentEnrollmentBulkUserModal(true);
    setFileUploadError("");
  };

  const handleCloseBulkUserModal = () => {
    reset();
    setshowStudentEnrollmentBulkUserModal(false);
  };

  const handleOpenDeleteModal = (studentData) => {
    setStudentData(studentData); 
    console.log("Student enroll ID being passed:", studentData);
    setdeleteStudentEnrollmentModal(true);
  };
  const handleCloseDeleteModal = () => {
    reset();
    setStudentData(null);
    setdeleteStudentEnrollmentModal(false);
  };


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "text/csv") {
        setFileUploadError("*Please select a CSV file only.");
        setuploadbulkstudentenrollmentfile(null); 
      } else {
        setuploadbulkstudentenrollmentfile(file); 
        setFileUploadError(""); 
      }
    } else {
      setuploadbulkstudentenrollmentfile(null); 
      setFileUploadError("*Please select a CSV file.");
    }
  };
  
  const handleBulkUploadSubmit = async (e) => {
    e.preventDefault();
  
    if (!uploadbulkstudentenrollmentfile) {
      setFileUploadError("*Please select a CSV file.");
      return;
    }
  
    setFileUploadError("");  
    console.log("Uploading file:", uploadbulkstudentenrollmentfile);
  
    
    const formData = new FormData();
    formData.append('bulk_user_enroll_file', uploadbulkstudentenrollmentfile);
  
    try {
      const response = await fetch('http://local.edly.io:8000/api/enrollbulkstudents/', {
        method: 'POST',
        body: formData, 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("File uploaded successfully:", result);
  
      // Close the modal after a successful upload
      handleCloseBulkUserModal();
    } catch (error) {
      console.error("Error uploading file:", error);
      setFileUploadError("Error uploading file. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (!studentData) return;
  
    // Extract the unique identifier (student_enroll_id) from studentData
    const { student_enroll_id, email, program_id } = studentData;
  
    // Log the unique identifier and student data for confirmation
    console.log("Deleting student with ID:", student_enroll_id);
    console.log("Student data being sent:", { student_enroll_id, email, program_id });
  
    const formData = new FormData();
    formData.append('student_enroll_id', student_enroll_id);
    formData.append('email', email);
    formData.append('program_id', program_id);
  
    // Log FormData for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await fetch('http://local.edly.io:8000/api/unenrollstudent/', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        console.error("HTTP error:", errorData);
        return;
      }
  
      const result = await response.json();
      console.log("Deletion successful:", result);
  
      handleCloseDeleteModal();
    } catch (error) {
      console.error("Error deleting student enrollment:", error);
    }
  };
  
  

  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      reset()
      handleCloseCreateUserModal();
      handleCloseBulkUserModal();
      handleCloseDeleteModal();
    }
  }
  async function onSubmitStudentEnrollment(data) {
    const programId = data.studentEnrollmentProgram ? data.studentEnrollmentProgram.value : "";
    const userIds = data.StudentSelectStudent ? data.StudentSelectStudent.map(student => student.value) : [];
    
    const payload = {
      program_id: programId,
      user_ids: userIds, // This will be sent as a list
    };
    console.log("Payload",payload)
    try {
      const response = await fetch('http://local.edly.io:8000/api/enrollstudent/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Submission result:", result);
  
    } catch (error) {
      console.error("Error while submitting data:", error);
    }
  
    handleCloseCreateUserModal();
  }
  
  
  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px", 
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '100px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
    })
  };

  

  async function fetchProgramsAndStudents() {
    try {
      const response = await fetch('http://local.edly.io:8000/api/studentenrollment/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPrograms(data.programs);
      setStudents(data.students);
    } catch (error) {
      console.error("Error fetching programs and students:", error);
    }
  }
  
  async function fetchStudentEnrollData(search,pageIndex,pageSize,start) {
    try {
      const formData = new FormData();
      formData.append('search', search);
      formData.append('draw', pageIndex+ 1);
      formData.append('length', pageSize);
      formData.append('start', start);

      const response = await fetch('http://local.edly.io:8000/api/studentenrollment/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setStudentEnrollData(result?.studentdetails);
      setTotalCount(result?.total_count);
    } catch (error) {
      console.error("Error while fetching student enroll data:", error);
    }
  }


  useEffect(() => {
    fetchProgramsAndStudents();
    fetchStudentEnrollData(search,pageIndex,pageSize,start);
  }, [search, pageIndex, pageSize,start]);

  useEffect(() => {
    const updatedProgramOptions = programs.map(program => ({
      value: program.id,
      label: program.name,
    }));
    setProgramOptions(updatedProgramOptions);

    const updatedStudentOptions = students.map(student => ({
      value: student.id,
      label: student.username,
    }));
    setStudentOptions(updatedStudentOptions);
  }, [programs, students]);

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
          pageIndex={pageIndex}
          pageSize={pageSize}
          setPageIndex={setPageIndex}
          setStart={setStart}
          start={start}
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
                    options={programOptions}
                    placeholder="Select Program"
                    onChange={(option) => {
                      setValue("studentEnrollmentProgram", option);
                      if (option) {
                        clearErrors("studentEnrollmentProgram");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.studentEnrollmentProgram && (
                <p className="errorMessage">
                  {errors.studentEnrollmentProgram.message}
                </p>
              )}
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
                    options={studentOptions}
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
            name="bulk_user_enroll_file"
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
              <div>
                {uploadbulkstudentenrollmentfile
                  ? uploadbulkstudentenrollmentfile.name // Display file name
                  : "Upload Your CSV File here..."}
              </div>
            </div>
          </label>
        </div>
        {/* Error message display for file upload */}
        {fileUploadError && (
          <p className="errorMessage">{fileUploadError}</p>
        )}
        <label className="bulk-user-label">
          Sample File For Bulk User Creation <span>Click Here</span> to Download.
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
              <button type="submit" className="delete-btn" onClick={handleDelete}>
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
