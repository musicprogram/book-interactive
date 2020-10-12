import React, {Fragment, useEffect} from 'react';
import StepWizard from 'react-step-wizard';

import {currentStep, firstCategory} from '../../GlobalState'
import {
  useRecoilState, useRecoilValue
} from 'recoil';

import Category from "./categories/Category";

function OneCategory() {
  const [step, setStep] = useRecoilState(currentStep);
  const firsCategoriesData = useRecoilValue(firstCategory);

  useEffect(()=>{
  },[step])

  return (
    <div>
      <StepWizard initialStep={step}>
        {
          firsCategoriesData.map((category, i)=>{
            return(
              <Category category={category} key={i}/>
            )
          })
        }
      </StepWizard>
    </div>
  );
}

export default OneCategory;
