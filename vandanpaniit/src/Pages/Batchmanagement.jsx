import React, { useState } from "react";
import Select from 'react-select';
import BatchManagementTable from "../Componentsadminpanel/BatchManagementTable";
import { useForm, Controller } from 'react-hook-form';

function Batchmanagement() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors } = useForm();

  const teacherOptions = [
    { value: 'teacher1', label: 'Teacher 1' },
    { value: 'teacher2', label: 'Teacher 2' },
    { value: 'teacher3', label: 'Teacher 3' },
    { value: 'teacher4', label: 'Teacher 4' },
    { value: 'teacher5', label: 'Teacher 5' },
    { value: 'teacher6', label: 'Teacher 6' },
    { value: 'teacher7', label: 'Teacher 7' },
    { value: 'teacher8', label: 'Teacher 8' },
    { value: 'teacher9', label: 'Teacher 9' },
    { value: 'teacher10', label: 'Teacher 10' },
  ];

  const programOptions = [
    { value: 'program1', label: 'Program 1' },
    { value: 'program2', label: 'Program 2' },
    { value: 'program3', label: 'Program 3' },
    { value: 'program4', label: 'Program 4' },
    { value: 'program5', label: 'Program 5' },
    { value: 'program6', label: 'Program 6' },
    { value: 'program7', label: 'Program 7' },
    { value: 'program8', label: 'Program 8' },
    { value: 'program9', label: 'Program 9' },
    { value: 'program10', label: 'Program 10' },
  ];

  const studentOptions = [
    { value: 'student1', label: 'Student 1' },
    { value: 'student2', label: 'Student 2' },
    { value: 'student3', label: 'Student 3' },
    { value: 'student4', label: 'Student 4' },
    { value: 'student5', label: 'Student 5' },
    { value: 'student6', label: 'Student 6' },
    { value: 'student7', label: 'Student 7' },
    { value: 'student8', label: 'Student 8' },
    { value: 'student9', label: 'Student 9' },
    { value: 'student10', label: 'Student 10' },
  ];


  const [showCreateBatchModal, setShowCreateBatchModal] = useState(false);
  const [showEditBatchModal, setShowEditBatchModal] = useState(false);
  const handleOpenCreateBatchModal = () => {
    setShowCreateBatchModal(true);
  };
  const handleCloseCreateBatchModal = () => {
    setShowCreateBatchModal(false);
  };
  const handleOpenEditBatchModal = () => {
    setShowEditBatchModal(true);
  };
  const handleCloseEditBatchModal = () => {
    setShowEditBatchModal(false);
  };
  const handleClickOutsideModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleCloseCreateBatchModal();
      handleCloseEditBatchModal();
    }
  };
  const onSubmitCreateBatch = (data) => {
    console.log(data);
    // Handle form submission logic here

    // Close the modal after successful submission
    handleCloseCreateBatchModal();
  };
  const onSubmitEditBatch = (data) => {
    console.log(data);
    // Handle form submission logic here
    handleCloseEditBatchModal();
  };
  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px", // Change this value to your desired font size
    }),
    // menu: (provided) => ({
    //   ...provided,
    //   maxHeight: '200px', // Set the max height for the dropdown
    // }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '100px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
    }),
  };

  return (
    <div className="main-section batch-management-page">
      <div className="first-heading-row">
        <h1>Batch Management </h1>
        <button onClick={handleOpenCreateBatchModal}>
          Create Batch
        </button>
      </div>
      <div className="data-table-section">
      <BatchManagementTable handleOpenEditBatchModal={handleOpenEditBatchModal} />
</div>
      {/* Create Batch Modal */}
      {showCreateBatchModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal} >
          <div className="modal-content batch-management-modal showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseCreateBatchModal}>
              &times;
            </span>
            <h2>Create Batch</h2>
            <form className="teacher-enrollment-form" onSubmit={handleSubmit(onSubmitCreateBatch)}>
              <label
                className={
                  errors.BatchManagementCreateBatch ? "label-error" : ""
                }
              >
                Batch Name
              </label>
              <input
                type="text"
                {...register("BatchManagementCreateBatch", {
                  required: "*Batch Name is required",
               
                })}
                placeholder="Batch name"
              />
              {errors.BatchManagementCreateBatch && (
                <p className="errorMessage">
                  {errors.BatchManagementCreateBatch.message}
                </p>
              )}
              {/* <label>Batch Name</label>
              <input type="text" placeholder="Batch name" /> */}

              {/* <label>Select Program</label> */}
              {/* <select>
                <option>Select Program</option>
                <option>Figma</option>
                <option>Django</option>
                <option>Hacking</option>
              </select> */}
              {/* <Select
                options={programOptions}
                placeholder="Select Program"
                styles={customStyles}
              /> */}
              <label
                className={errors.BatchManagementProgram ? "label-error" : ""}
              >
                Select Program
              </label>
              <Controller
                name="BatchManagementProgram"
                control={control}
                rules={{ required: "*Select at least one Program" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={programOptions}
                    placeholder="Select Program"
                    onChange={(options) => {
                      setValue("BatchManagementProgram", options);
                      if (options) {
                        clearErrors("BatchManagementProgram");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.BatchManagementProgram && (
                <p className="errorMessage">
                  {errors.BatchManagementProgram.message}
                </p>
              )}


              {/* <label>Select Student</label> */}
              {/* <select>
                <option>Select User</option>
                <option>Smit</option>
                <option>Parag</option>
                <option>Anand</option>
              </select> */}
              {/* <Select
                isMulti
                options={studentOptions}
                placeholder="Select Student"
                styles={customStyles}
              /> */}
              <label
                className={errors.BatchManagementUser ? "label-error" : ""}
              >
                Select User
              </label>
              <Controller
                name="BatchManagementUser"
                control={control}
                rules={{ required: "*User is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={studentOptions}
                    isMulti
                    placeholder="Select User"
                    onChange={(option) => {
                      setValue("BatchManagementUser", option);
                      if (option) {
                        clearErrors("BatchManagementUser");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.BatchManagementUser && (
                <p className="errorMessage">
                  {errors.BatchManagementUser.message}
                </p>
              )}
              {/* <label>Select Teacher</label> */}
              {/* <select>
                <option>Select Teacher</option>
                <option>Print</option>
                <option>Neha</option>
                <option>Akash</option>
              </select> */}
              {/* <Select
                isMulti
                options={teacherOptions}
                placeholder="Select Teacher"
                styles={customStyles}
              /> */}
              <label
                className={errors.BatchManagementTeacher ? "label-error" : ""}
              >
                Select Teacher
              </label>
              <Controller
                name="BatchManagementTeacher"
                control={control}
                rules={{ required: "*Teacher is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={teacherOptions}
                    isMulti
                    placeholder="Select Teacher"
                    onChange={(option) => {
                      setValue("BatchManagementTeacher", option);
                      if (option) {
                        clearErrors("BatchManagementTeacher");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.BatchManagementTeacher && (
                <p className="errorMessage">
                  {errors.BatchManagementTeacher.message}
                </p>
              )}
              <button type="submit">Create Batch</button>
            </form>
          </div>
        </div>
      )}
      {showEditBatchModal && (
        <div className="modal-overlay account-management-create-user showModal-main" onClick={handleClickOutsideModal} >
          <div className="modal-content batch-management-modal showModal-modal-content">
            <span className="close-button showModal-close-button" onClick={handleCloseEditBatchModal}>
              &times;
            </span>
            <h2>Edit</h2>
            <form className="teacher-enrollment-form"  onSubmit={handleSubmit(onSubmitEditBatch)}>
              {/* <label>Batch Name</label>
              <input type="text" placeholder="Batch name" defaultValue="default name" /> */}
               <label
                className={errors.BatchManagementEditBatch ? "label-error" : ""}
              >
                Batch Name
              </label>
              <input
                type="text"
                disabled
                {...register("BatchManagementEditBatch", {
                  required: "*Batch Name is required",
                })}
                placeholder="Batch name"
                // defaultValue="default name"  
              />
              {errors.BatchManagementEditBatch && (
                <p className="errorMessage">
                  {errors.BatchManagementEditBatch.message}
                </p>
              )}

              {/* <label>Select Program</label> */}
              {/* <select>
              <option >Select Program</option>
              <option selected> Figma</option>
              <option>Django</option>
              <option>Hacking</option>
            </select> */}
              {/* <Select
                options={programOptions}
                placeholder="Select Program"
                styles={customStyles}
              /> */}
              <label
                className={errors.BatchManagementProgram ? "label-error" : ""}
              >
                Select Program
              </label>
              <Controller
                name="BatchManagementProgram"
                disabled
                control={control}
                rules={{ required: "*Program is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={programOptions}
                    placeholder="Select Program"
                    onChange={(option) => {
                      setValue("BatchManagementProgram", option);
                      if (option) {
                        clearErrors("BatchManagementProgram");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.BatchManagementProgram && (
                <p className="errorMessage">
                  {errors.BatchManagementProgram.message}
                </p>
              )}
<label
                className={errors.BatchManagementTeacher ? "label-error" : ""}
              >
                Select Teacher
              </label>
              <Controller
                name="BatchManagementTeacher"
                control={control}
                rules={{ required: "*Select at least one Teacher" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={teacherOptions}
                    isMulti
                    placeholder="Select Teacher"
                    onChange={(option) => {
                      setValue("BatchManagementTeacher", option);
                      if (option) {
                        clearErrors("BatchManagementTeacher");
                      }
                    }}
                    value={field.value}
                    styles={customStyles}
                  />
                )}
              />
              {errors.BatchManagementTeacher && (
                <p className="errorMessage">
                  {errors.BatchManagementTeacher.message}
                </p>
              )}
              {/* <label>Select Teacher</label> */}
              {/* <select>
              <option>Select Teacher</option>
              <option>Print</option>
              <option selected>Neha</option>
              <option>Akash</option>
            </select> */}
              {/* <Select
                isMulti
                options={teacherOptions}
                placeholder="Select Teacher"
                styles={customStyles}
              /> */}

              <label>Select Student</label>
              {/* <select>
              <option >Select User</option>
              <option>Smit</option>
              <option selected>Parag</option>
              <option>Anand</option>
            </select> */}
              <Select
                isMulti
                options={studentOptions}
                placeholder="Select Student"
                styles={customStyles}
              />

              <button type="submit">Done</button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default Batchmanagement;
