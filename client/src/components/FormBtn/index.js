import React from 'react';
import './style.css'


export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  
export function FormBtn(props) {
    return (
      <button
        {...props}
        style={{ float: "right", marginBottom: 10 }}
        className={ 
          props.purpose =='add' 
          ? 
          `btn btn-success ${props.stylename} `
          : 
          `btn btn-danger ${props.stylename}`
        }
      >
        {props.children}
      </button>
    )
  }