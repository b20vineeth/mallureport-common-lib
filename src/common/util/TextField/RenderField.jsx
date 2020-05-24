import React  from 'react'
export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">

           {label?<Label label={label}/>:""}
            {type=='textarea' ? <textarea   {...input} class="form-control"  type={type} /> :
             <input {...input} placeholder={label} type={type} className="form-control" />}
           {touched &&
             ((error && <span className="errorMsg"> {
               error
               }</span>) ||
             (warning && <span className="warningMsg">{warning}</span>))}
           
          </div>
  )
  
function Label(props) {

  return  <label htmlFor={props.label}>{props.label}</label>;
}