import React, {Fragment, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import StepWizard from 'react-step-wizard';

import {currentStep} from '../../GlobalState'
import {
  useRecoilState
} from 'recoil';

import FirstCategory from "./firsts_categories/first_category";
function OneCategory() {
  const [step, setStep] = useRecoilState(currentStep);

  useEffect(()=>{
    let stepFormOne = localStorage.getItem("stepFormOne");
    if(parseInt(stepFormOne)){
      setStep(parseInt(stepFormOne));
      //console.log(parseInt(stepFormOne));
    }
  },[])

  return (
    <Fragment>
      <StepWizard initialStep={parseInt(localStorage.getItem("stepFormOne")) ? (
        parseInt(localStorage.getItem("stepFormOne"))
      ) : (
        step
      )}>
        <FirstCategory/>
        <FirstCategory/>
        <FirstCategory/>
        <FirstCategory/>
      </StepWizard>
    </Fragment>
  );
}

export default OneCategory;
