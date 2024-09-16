import React, { useState } from "react";
import Select from 'react-select'; // Added import for react-select
import TeacherTable from "../Componentsadminpanel/TeacherTable";
import crossicon from "../icons/deleteuser.svg";
import { useForm, Controller } from 'react-hook-form';


function Teacherenrollment() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch } = useForm();

  const [showEnrollTeacherModal, setShowEnrollTeacherModal] = useState(false);
  const [editEnrollTeacherModal, setEditEnrollTeacherModal] = useState(false);
  const [deleteEnrollTeacherModal, setDeleteEnrollTeacherModal] = useState(false);

  // Added state for form values
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Sample options for dropdowns
  const teacherOptions = [
    { value: 'teacher1', label: 'Teacher 1' },
    { value: 'teacher2', label: 'Teacher 2' },
    { value: 'teacher3', label: 'Teacher 3' },
    { value: 'teacher4', label: 'Teacher 4' },
    { value: 'teacher5', label: 'Teacher 5' },
    { value: 'teacher6', label: 'Teacher 6' },
    { value: 'teacher7', label: 'Teacher 7' },
  ];

  const programOptions = [
    { value: 'program1', label: 'Program 1' },
    { value: 'program2', label: 'Program 2' },
    { value: 'program3', label: 'Program 3' },
    { value: 'program4', label: 'Program 4' },
    { value: 'program5', label: 'Program 5' },
    { value: 'program6', label: 'Program 6' },
    { value: 'program7', label: 'Program 7' },
  ];

  const courseOptions = [
    { value: 'course1', label: 'Course 1' },
    { value: 'course2', label: 'Course 2' },
    { value: 'course3', label: 'Course 3' },
    { value: 'course4', label: 'Course 4' },
  ];

  const handleOpenEnrollTeacherModal = () => {
    setShowEnrollTeacherModal(true);
  };
  const handleCloseEnrollTeacherModal = () => {
    setShowEnrollTeacherModal(false);
  };

  const handleOpenEditEnrollTeacherModal = () => {
    setEditEnrollTeacherModal(true);
  };
  const handleCloseEditEnrollTeacherModal = () => {
    setEditEnrollTeacherModal(false);
  };

  const handleOpenDeleteEnrollTeacherModal = () => {
    setDeleteEnrollTeacherModal(true);
  };
  const handleCloseEnrollTeacherDeleteModal = () => {
    setDeleteEnrollTeacherModal(false);
  };
  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseEnrollTeacherModal();
      handleCloseEditEnrollTeacherModal();
      handleCloseEnrollTeacherDeleteModal();
    }
  }

  // Added form submission handler - By Meet
  // onSubmit={handleEnrollSubmit}
  // const handleEnrollSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Enrolled:', { selectedTeacher, selectedProgram, selectedCourses });
  //   // Add your enrollment logic here
  //   handleCloseEnrollTeacherModal();
  // };

  const onSubmitEnrollTeacher = data => {
    console.log(data);
    // Handle form submission logic here


    // Close the modal after successful submission
    handleCloseEnrollTeacherModal();
  };
  const onSubmitEditEnrollTeacher = data => {
    console.log(data);
    // Handle form submission logic here
    handleCloseEditEnrollTeacherModal()
  };
  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px", // Change this value to your desired font size
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '100px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '13px'
    }),
  };

  return (
    <div className="main-section">
      <div className="first-heading-row">
        <h1>Teacher Enrollment</h1>
        <div className="right-side-content">
          <div className="account-management">
            <button onClick={handleOpenEnrollTeacherModal}>Enroll Teacher</button>
          </div>
        </div>
      </div>
      {/* <div className="second-filter-row">
        <div className="entries-filter">
          <label htmlFor="entries">Show</label>
          <select id="entries" name="entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>entries</span>
        </div>

        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" />
        </div>
      </div> */}
      <div className="data-table-section">
        <TeacherTable
          handleOpenEditEnrollTeacherModal={handleOpenEditEnrollTeacherModal}
          handleOpenDeleteEnrollTeacherModal={handleOpenDeleteEnrollTeacherModal}
        />
      </div>

      {/* Program EnrollTeacher modal */}
      {showEnrollTeacherModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseEnrollTeacherModal}>
              &times;
            </span>
            <h2>Enroll Teacher</h2>
            <form className="teacher-enrollment-form" onSubmit={handleSubmit(onSubmitEnrollTeacher)}>
              <label className={errors.teacherEnrollTeacher ? 'label-error' : ''}>Select Teacher</label>
              <Controller
                name="teacherEnrollTeacher"
                control={control}
                rules={{ required: '*Please select one Teacher' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={teacherOptions}
                    placeholder="Select Teacher"
                    className="teacher-select-placeholder"
                    onChange={options => {
                      setValue('teacherEnrollTeacher', options);
                      if (options) {
                        clearErrors('teacherEnrollTeacher');
                      }
                    }}
                    styles={customStyles}
                    value={field.value}
                  />)}
              />
              {errors.teacherEnrollTeacher && <p className="errorMessage">{errors.teacherEnrollTeacher.message}</p>}
              {/*  */}
              <label className={errors.teacherEnrollProgram ? 'label-error' : ''}>Select Program</label>
              <Controller
                name="teacherEnrollProgram"
                control={control}
                rules={{ required: '*Please select one Program' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={programOptions}
                    placeholder="Select Program"
                    className="teacher-select-placeholder"
                    onChange={options => {
                      setValue('teacherEnrollProgram', options);
                      if (options) {
                        clearErrors('teacherEnrollProgram');
                      }
                    }}
                    styles={customStyles}
                    value={field.value}
                  />)}
              />
              {errors.teacherEnrollProgram && <p className="errorMessage">{errors.teacherEnrollProgram.message}</p>}


              {/*  */}
              <label className={errors.teacherEnrollCourse ? 'label-error' : ''}>Select Course</label>
              <Controller
                name="teacherEnrollCourse"
                control={control}
                rules={{ required: '*Please select atleast one Course' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={courseOptions}
                    isMulti
                    placeholder="Select Course"
                    className="teacher-select-placeholder"
                    onChange={options => {
                      setValue('teacherEnrollCourse', options);
                      if (options.length > 0) {
                        clearErrors('teacherEnrollCourse');
                      }
                    }}
                    styles={customStyles}
                    value={field.value}
                  />)}
              />
              {errors.teacherEnrollCourse && <p className="errorMessage">{errors.teacherEnrollCourse.message}</p>}


              <button type="submit">Enroll</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Teacher Modal */}
      {editEnrollTeacherModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span
              className="close-button showModal-close-button"
              onClick={handleCloseEditEnrollTeacherModal}
            >
              &times;
            </span>
            <h2>Edit</h2>
            <form className="teacher-enrollment-form" onSubmit={handleSubmit(onSubmitEditEnrollTeacher)}>
              {/* <label>Select Teacher</label> */}
              {/* Changed to react-select */}
              {/* <Select
                options={teacherOptions}
                placeholder="Select Teacher"
                className="teacher-select-placeholder"
                styles={customStyles}
              /> */}
              {/* <input type="text" defaultValue="default teacher name" disabled /> */}
              <label className={errors.editSelectTeacher ? "label-error" : ""}>
                Select Teacher
              </label>
              <input
                type="text"
                defaultValue="default teacher name"
                disabled
                {...register("editSelectTeacher")}
              />

              {/* <label>Select Program</label> */}
              {/* Changed to react-select */}
              {/* <Select
                options={programOptions}
                placeholder="Select Program"
                styles={customStyles}
              /> */}
              {/* <input type="text"  defaultValue="default program name" disabled /> */}
              <label
                className={
                  errors.editProgramNameInTeacherEnroll ? "label-error" : ""
                }
              >
                Select Program
              </label>
              <input
                type="text"
                defaultValue="default program name"
                disabled
                {...register("editProgramNameInTeacherEnroll")}
              />
              {/* <label>Select Course</label> */}
              {/* Changed to react-select with isMulti prop */}
              {/* <Select
                options={courseOptions}
                isMulti
                placeholder="Select Course"
                styles={customStyles}
              /> */}
              <label
                className={
                  errors.courseseditInTeacherEnroll ? "label-error" : ""
                }
              >
                Select Course
              </label>
              <Controller
                name="courseseditInTeacherEnroll"
                control={control}
                rules={{ required: "*Select at least one Course" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={courseOptions}
                    isMulti
                    placeholder="Select Course"
                    onChange={(options) => {
                      setValue("courseseditInTeacherEnroll", options);
                      if (options) {
                        clearErrors("courseseditInTeacherEnroll");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.courseseditInTeacherEnroll && (
                <p className="errorMessage">
                  {errors.courseseditInTeacherEnroll.message}
                </p>
              )}

              <button type="submit">Done</button>
            </form>
          </div>
        </div>
      )}

      {/* DeleteEnrollTeacherModal */}
      {deleteEnrollTeacherModal && (
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
          <div className="modal-content delete-modal">
            <span className="close-button" onClick={handleCloseEnrollTeacherDeleteModal}>
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
                onClick={handleCloseEnrollTeacherDeleteModal}
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

export default Teacherenrollment;