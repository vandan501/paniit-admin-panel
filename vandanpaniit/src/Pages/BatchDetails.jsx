import React from 'react'
import BatchManagementTeacherTable from "../Componentsadminpanel/BatchManagementTeacherTable.jsx"
import BatchManagementStudentTable from "../Componentsadminpanel/BatchManagementStudentTable.jsx"
import "../App.js"
import {  useNavigate } from "react-router-dom"
import backicon from "../icons/backicon.svg"
function BatchDetails() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="batch-details-page"> 
      <h2 className="heading-of-batch"> <img src={backicon} style={{cursor:'pointer'}} alt="back-icon" onClick={handleBackClick} /> Batch 1</h2>
      <div className="main-section teacher-list">
         <h3>Program Name :- <span>A.N.M. Nursing</span></h3> 
          <div className="first-heading-row">
           <h4>Teacher List</h4>
           </div>
            <BatchManagementTeacherTable />
    </div>
    <div className="main-section user-list-table">
      <div className="first-heading-row">
        <h4>User List</h4>
      </div>
      <BatchManagementStudentTable/>
      </div>
    </div>
    
  );
}

export default BatchDetails  