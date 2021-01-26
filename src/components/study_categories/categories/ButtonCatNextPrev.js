import React, {useEffect, useState} from 'react';

import ModalNext from "../ModalNext";

function ButtonCatNextPrev(props) {
  const [show, setShow] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(()=>{

  },[]);


  const ModalNextTest = ()=>{
    setShow(true);
  }

  const animatePage = () =>{
    props.setChangePage(true);
    setTimeout(()=>{
      props.setChangePage(false);
    },1000)
  }

  return (
    <div className="d-flex justify-content-center mb-2">
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === 1}
            onClick={()=>{
              animatePage();
              setFinish(false);
              props.stepsGlobal(1)
            }}> {'<<'} </button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={props.id === 1}
            onClick={()=>{
              animatePage();
                setFinish(false);
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
            onClick={()=>{
              animatePage();
              const finishObj = props.id === props.firstCategoriesLength
              if(finishObj){
                ModalNextTest();
              }else{
                if(props.category === 1){
                  props.stepsGlobal(props.step + 1);
                }else if(props.category === 2){
                  props.stepsGlobal(props.step1 + 1);
                }else if(props.category === 3){
                  props.stepsGlobal(props.step3 + 1);
                }
              }

            }}> {'>'}</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={()=>{
              animatePage()
              const finishObj = props.id === props.firstCategoriesLength
              if(finishObj){
                ModalNextTest();
              }else{
                props.stepsGlobal(props.firstCategoriesLength);
              }

            }}>{'>>'}</button>
        </div>
      </div>

      <ModalNext
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default ButtonCatNextPrev;
