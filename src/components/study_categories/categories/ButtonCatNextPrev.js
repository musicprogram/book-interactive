import React from 'react';


function ButtonCatNextPrev(props) {

  return (
    <div className="d-flex justify-content-center mb-2">
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === 1}
            onClick={()=>{
              props.stepsGlobal(1)
            }}> {'<<'} </button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === 1}
            onClick={()=>{
              if(props.category === 1){
                props.stepsGlobal(props.step - 1);
              }else if(props.category === 2){
                props.stepsGlobal(props.step1 - 1);
              }else if(props.category === 3){
                props.stepsGlobal(props.step3 - 1);
              }
            }}> {'<'}</button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === props.firstCategoriesLength}
            onClick={()=>{
              if(props.category === 1){
                props.stepsGlobal(props.step + 1);
              }else if(props.category === 2){
                props.stepsGlobal(props.step1 + 1);
                debugger
              }else if(props.category === 3){
                props.stepsGlobal(props.step3 + 1);
              }
            }}> {'>'}</button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === props.firstCategoriesLength}
            onClick={()=>{
              props.stepsGlobal(props.firstCategoriesLength);
            }}>{'>>'}</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonCatNextPrev;
