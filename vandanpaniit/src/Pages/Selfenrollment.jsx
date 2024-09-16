import React from 'react'
import SelfEnrollmentTable from '../Componentsadminpanel/SelfEnrollmentTable'
import { useForm, Controller } from 'react-hook-form';

function Selfenrollment() {
  // for form validations
  const { register, handleSubmit, formState: { errors }, setValue, control, clearErrors, watch } = useForm();
  
  return  (
    <div className="main-section">
      
      <div className="data-table-section">
        <SelfEnrollmentTable />
      </div>
    </div>
  );
}

export default Selfenrollment