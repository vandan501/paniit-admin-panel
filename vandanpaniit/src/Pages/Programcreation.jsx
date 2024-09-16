import React, { useState, useRef } from "react";
import ProgramCreationTable from "../Componentsadminpanel/ProgramCreationTable";
import Select from 'react-select';
import crossicon from "../icons/deleteuser.svg"
import { useForm, Controller } from 'react-hook-form';

function Programcreation() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch ,reset} = useForm();


  // Watch startDate and endDate fields
  const startDateCreateProgram = watch('startDateCreateProgram');
  const endDateCreateProgram = watch('endDateCreateProgram');

  // date validation function
  const validateDatesCreate = () => {
    if (startDateCreateProgram && endDateCreateProgram && new Date(endDateCreateProgram) < new Date(startDateCreateProgram)) {
      return 'End Date cannot be before Start Date';
    }
    return true;
  };
  const startDateEditProgram = watch('startDateEditProgram');
  const endDateEditProgram = watch('endDateEditProgram');

  // date validation function
  const validateDatesEdit = () => {
    if (startDateEditProgram && endDateEditProgram && new Date(endDateEditProgram) < new Date(startDateEditProgram)) {
      return 'End Date cannot be before Start Date';
    }
    return true;
  };


  const courseOptions = [
    { value: 'English', label: 'English' },
    { value: 'Maths', label: 'Maths' },
    { value: 'Science', label: 'Science' },
  ];
  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Draft', label: 'Draft' },
  ];
  const courseEditOptions = [
    { value: 'English', label: 'English' },
    { value: 'Maths', label: 'Maths' },
    { value: 'Science', label: 'Science' },
  ];
  const statusEditOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Draft', label: 'Draft' },
  ];


  const [showEnrollProgramModal, setShowEnrollProgramModal] = useState(false);
  const [editEnrollProgramModal, setEditEnrollProgramModal] = useState(false);
  const [deleteEnrollProgramModal, setDeleteEnrollProgramModal] = useState(false);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectededitCourses, setSelectededitCourses] = useState([]);
  const handleOpenProgramCreationModal = () => {
    setShowEnrollProgramModal(true);
  };
  const handleCloseProgramCreationModal = () => {
    reset()
    setShowEnrollProgramModal(false);
  };

  const handleOpenEditProgramCreationModal = () => {
    setEditEnrollProgramModal(true);
  };
  const handleCloseEditProgramCreationModal = () => {
    reset()
    setEditEnrollProgramModal(false);
  };

  const handleOpenDeleteProgramCreationModal = () => {
    setDeleteEnrollProgramModal(true);
    
  };
  const handleCloseProgramCreationDeleteModal = () => {
    setDeleteEnrollProgramModal(false);
  };

  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      reset()
      handleCloseProgramCreationModal();
      handleCloseEditProgramCreationModal();
      handleCloseProgramCreationDeleteModal();
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

  const onSubmitCreateProgram = data => {
    console.log(data);
    // Handle form submission logic here


    // Close the modal after successful submission
    handleCloseProgramCreationModal();
  };
  const onSubmitEditProgram = data => {
    console.log(data);
    // Handle form submission logic here
    handleCloseEditProgramCreationModal()
  };


  return (

    <div className="main-section program-creation">
      <div className="first-heading-row">
        <h1>Program Creation</h1>
        <div className="right-side-content">
          <div className="account-management">
            <button onClick={handleOpenProgramCreationModal}>Create Program</button>
          </div>
        </div>
      </div>
      <div className="data-table-section">
        <ProgramCreationTable handleOpenEditProgramCreationModal={handleOpenEditProgramCreationModal}
          handleOpenDeleteProgramCreationModal={handleOpenDeleteProgramCreationModal}
        />

      </div>
      {/* Enroll Program Modal */}
      {showEnrollProgramModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content procre showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseProgramCreationModal}>
              &times;
            </span>
            <h2>Create Program</h2>
            <form onSubmit={handleSubmit(onSubmitCreateProgram)}>

              <label className={errors.createProgramName ? 'label-error' : ''}>Program Name</label>
              <input type="text"  {...register('createProgramName', { required: '*Program Name is required' })} 
              placeholder="Program Name" 
              maxLength={255}
              />
              {errors.createProgramName && <p className="errorMessage">{errors.createProgramName.message}</p>}

              <label className={errors.createProgramAbout ? 'label-error' : ''}>Program About</label>

              {/* <input type="text" placeholder="Program About" {...register('createProgramAbout', { required: '*Program About is required' })} />
              {errors.createProgramAbout && <p className="errorMessage">{errors.createProgramAbout.message}</p>} */}
              <textarea
  placeholder="Program About"
  {...register('createProgramAbout', { required: '*Program About is required' })}
  className="form-control custom-textarea"
  rows={4}  // Adjust the number of rows to your preference
/>
{errors.createProgramAbout && <p className="errorMessage">{errors.createProgramAbout.message}</p>}

<div className="form-groupprocre custom-end-date">
                <label for="customImage" className={errors.createProgramImage ? 'label-error' : ''}>Select Program Image</label>
                <input
                  type="file"
                  id="customImage"
                  accept=".png, .jpeg, .svg, .jpg"
                  {...register('createProgramImage', { required: '*Program Image is required' })}
                  className="form-control custom-file-input fileinputcust"
                />
                {errors.createProgramImage && <p className="errorMessage">{errors.createProgramImage.message}</p>}
              </div>


              <div className="form-groupprocre custom-start-date">
                <label for="customStartDateInput" className={errors.startDateCreateProgram ? 'label-error' : ''}>Start Date</label>
                <input
                  placeholder="Start Date"
                  type="date"
                  id="customStartDateInput"
                  className="form-control custom-date-input"
                  min={new Date().toISOString().split("T")[0]} 
                  {...register('startDateCreateProgram', { required: '*Start Date is required' })}
                />
                {errors.startDateCreateProgram && <p className="errorMessage">{errors.startDateCreateProgram.message}</p>}
              </div>

              <div className="form-groupprocre custom-end-date">
                <label for="customEndDateInput" className={errors.endDateCreateProgram ? 'label-error' : ''}>End Date</label>
                <input
                  placeholder="End Date"
                  type="date"
                  id="customEndDateInput"
                  className="form-control custom-date-input"
                  min={new Date().toISOString().split("T")[0]} 
                  {...register('endDateCreateProgram', { required: '*End Date is required', validate: validateDatesCreate })}
                />
                {errors.endDateCreateProgram && <p className="errorMessage">{errors.endDateCreateProgram.message}</p>}
              </div>

             

              {/* Changed to react-select with isMulti prop */}
              <label className={errors.courses ? 'label-error' : ''}>Select Course</label>
              <Controller
                name="courses"
                control={control}
                rules={{ required: '*Select at least one course' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={courseOptions}
                    isMulti
                    placeholder="Select Course"
                    onChange={options => {
                      setValue('courses', options);
                      if (options.length > 0) {
                        clearErrors('courses');
                      }
                    }}
                    value={field.value}
                    // styles={{ option: (provided) => ({ ...provided, fontSize: '13px' }) }}
                    styles={customStyles}
                  />
                )}
              />
              {errors.courses && <p className="errorMessage errormsg">{errors.courses.message}</p>}

              <label className={errors.status ? 'label-error' : ''}>Select Status</label>
              <Controller
                name="status"
                control={control}
                rules={{ required: '*Status is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={statusOptions}
                    placeholder="Select Status"
                    onChange={option => {
                      setValue('status', option);
                      if (option) {
                        clearErrors('status');
                      }
                    }}
                    value={field.value}
                    // styles={{ option: (provided) => ({ ...provided, fontSize: '13px' }) }}
                    styles={customStyles}
                  />
                )}
              />
              {errors.status && <p className="errorMessage errormsg">{errors.status.message}</p>}

              <button type="submit" className="procrebtn create-program-btn" >Create Program</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Teacher Modal */}
      {editEnrollProgramModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal}>
          <div className="modal-content showModal-modal-content">
            <span
              className="close-button showModal-close-button"
              onClick={handleCloseEditProgramCreationModal}
            >
              &times;
            </span>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit(onSubmitEditProgram)}>
              <label className={errors.editProgramName ? 'label-error' : ''}>Program Name</label>
              <input type="text" placeholder="Program Name" {...register('editProgramName', { required: '*Program Name is required' })} />
              {errors.editProgramName && <p className="errorMessage">{errors.editProgramName.message}</p>}

              {/*  */}

              <div className="form-groupprocre custom-start-date">
                <label for="customStartDateInput" className={errors.startDateEditProgram ? 'label-error' : ''}>Start Date</label>
                <input
                  type="date"
                  id="customStartDateInputInEdit"
                  className="form-control custom-date-input"
                  {...register('startDateEditProgram', { required: '*Start Date is required' })}
                />
                {errors.startDateEditProgram && <p className="errorMessage">{errors.startDateEditProgram.message}</p>}
              </div>

              <div className="form-groupprocre custom-end-date">
                <label for="customEndDateInput" className={errors.endDateEditProgram ? 'label-error' : ''}>End Date</label>
                <input
                  type="date"
                  id="customEndDateInputInEdit"
                  className="form-control custom-date-input"
                  {...register('endDateEditProgram', { required: '*End Date is required', validate: validateDatesEdit })}
                />
                {errors.endDateEditProgram && <p className="errorMessage">{errors.endDateEditProgram.message}</p>}
              </div>


              <label className={errors.statusedit ? 'label-error' : ''}>Select Status</label>
              <Controller
                name="statusedit"
                control={control}
                rules={{ required: '*Status is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={statusOptions}
                    placeholder="Select Status"
                    onChange={option => {
                      setValue('statusedit', option);
                      if (option) {
                        clearErrors('statusedit');
                      }
                    }}
                    value={field.value}
                    // styles={{ option: (provided) => ({ ...provided, fontSize: '13px' }) }}
                    styles={customStyles}
                  />
                )}
              />
              {errors.statusedit && <p className="errorMessage errormsg">{errors.statusedit.message}</p>}



              <label className={errors.coursesedit ? 'label-error' : ''}>Select Course</label>
              <Controller
                name="coursesedit"
                control={control}
                rules={{ required: '*Select at least one course' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={courseOptions}
                    isMulti
                    placeholder="Select Course"
                    onChange={options => {
                      setValue('coursesedit', options);
                      if (options.length > 0) {
                        clearErrors('coursesedit');
                      }
                    }}
                    value={field.value}
                    // styles={{ option: (provided) => ({ ...provided, fontSize: '13px' }) }}
                    styles={customStyles}
                  />
                )}
              />
              {errors.coursesedit && <p className="errorMessage errormsg">{errors.coursesedit.message}</p>}


              <button type="submit">Done</button>
            </form>
          </div>
        </div>
      )}

      {/* DeleteEnrollTeacherModal */}
      {deleteEnrollProgramModal && (
        <div className="modal-overlay account-management-create-user" onClick={handleClickOutsideModal}>
          <div className="modal-content delete-modal">
            <span className="close-button" onClick={handleCloseProgramCreationDeleteModal}>
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
                onClick={handleCloseProgramCreationDeleteModal}
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

export default Programcreation;
