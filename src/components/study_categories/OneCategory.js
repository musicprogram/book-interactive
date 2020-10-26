import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {currentStep, firstCategory, randomImg} from '../../GlobalState'

import {changeBackground} from './functionsCategory';

import {
  useRecoilValue
} from 'recoil';

import Category from "./categories/Category";

function OneCategory() {
  const step = useRecoilValue(currentStep);
  const firsCategoriesData = useRecoilValue(firstCategory);
  const [objCategory, setObjCategory] = useState([]);
  const [imgBackground, setImgBackground] = useState('');


  useEffect(()=>{
    const category = firsCategoriesData.filter((category)=> category.id === step);
    //console.log(category)
    setObjCategory(category);
    changeBackground(step, setImgBackground);
  },[step])

  return (
    <div>
      <Helmet>
        {/* Define inline CSS for body tag */}
        <body/>
        {/* Or include in-file CSS */}
        <style>
          {imgBackground && `
                body {
                    background-image : url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),  
                     url("${imgBackground}")
                }
          `}
        </style>
      </Helmet>



      {
        objCategory.map((category, i)=>{
          return(
            <Category
              category={category}
              key={i}
              firstCategoriesLength={firsCategoriesData.length}
            />
          )
        })
      }
    </div>
  );
}

export default OneCategory;
