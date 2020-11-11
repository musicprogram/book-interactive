
import React from 'react';


function CheckBoxLanguage(props) {

  return (
    <div className="d-flex justify-content-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={props.english}
          onClick={()=> {
            props.setEnglish(!props.english);
            props.setShowMemory(false);
            setTimeout(()=>{
              props.setShowMemory(true);
            },200)
          }}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          {
            props.english? 'Change language' : 'Cambiar lenguage'
          }
        </label>
      </div>
    </div>
  );
}

export default CheckBoxLanguage;
