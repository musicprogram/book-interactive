import React, {Fragment, useEffect} from 'react';
import StepWizard from 'react-step-wizard';

import {currentStep, secondCategory, currentStep1, thirdCategory} from '../../GlobalState'
import {
  useRecoilState, useRecoilValue
} from 'recoil';

import Category from "./categories/Category";

function SecondCategory() {
  const [step, setStep] = useRecoilState(currentStep);
  const step1 = useRecoilValue(currentStep1);

  const dataCategories = useRecoilValue(thirdCategory);

  useEffect(()=>{
  },[step])

  return (
    <div>
      <StepWizard initialStep={step1}>
        {
          dataCategories.map((category, i)=>{
            return(
              <Category category={category} key={i}/>
            )
          })
        }
      </StepWizard>
    </div>
  );
}

export default SecondCategory;
