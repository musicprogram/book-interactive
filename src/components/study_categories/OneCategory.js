import React, {Fragment, useEffect} from 'react';
import StepWizard from 'react-step-wizard';

import {currentStep, firstCategory} from '../../GlobalState'
import {
  useRecoilState, useRecoilValue
} from 'recoil';

import FirstCategory from "./firsts_categories/first_category";
import leftBanner from "../../assets/img/Work  abroad.svg";
function OneCategory() {
  const [step, setStep] = useRecoilState(currentStep);
  const firsCategoriesData = useRecoilValue(firstCategory);

  useEffect(()=>{
  },[step])

  return (
    <div style={{
      "backgroundImage": `url("${leftBanner}")`,
      "backgroundAttachment": "fixed",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "cover",
      "backgroundPosition": "center center"

    }}>
      <StepWizard initialStep={step}>
        {
          firsCategoriesData.map((category, i)=>{
            return(
              <FirstCategory category={category} key={i}/>
            )
          })
        }
      </StepWizard>
    </div>
  );
}

export default OneCategory;
