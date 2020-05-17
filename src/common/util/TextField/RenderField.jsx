import React  from 'react'
export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
         <label htmlFor={label}>{label}</label>
             <input {...input} placeholder={label} type={type} className="form-control" />
           {touched &&
             ((error && <span className="errorMsg"> {
               error
               }</span>) ||
             (warning && <span className="warningMsg">{warning}</span>))}
      
          </div>
  )
  
  