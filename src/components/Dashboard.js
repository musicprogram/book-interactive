import React, {Fragment, useEffect, useState} from 'react';
import {firstCategoryData} from '../data/data'
import {Image, Spinner} from 'react-bootstrap';
import Helmet from 'react-helmet';

import {
  useRecoilValue, useRecoilState
} from 'recoil';

import {categoryNavigation, firstCategory } from '../GlobalState'


import undraw from '../assets/img/undraw.svg';



import Init from "./UI/Init";
import NavMain from "./UI/NavMain";
import OneCategory from "./study_categories/OneCategory";

import loading from '../assets/img/loading.svg'
import leftBanner from "../assets/img/background-2.svg";
import backTwo from "../assets/img/undraw_web_shopping_dd4l.svg";
import backThree from "../assets/img/Work  abroad.svg";

function Dashboard() {
  const category = useRecoilValue(categoryNavigation);
  const [imageBody, setImageBody] = useState(leftBanner);
  const [firsCategoriesData, setFirsCategoriesData] = useRecoilState(firstCategory);

  useEffect(()=>{
    setFirsCategoriesData(firstCategoryData);
    if(category === 0){
      setImageBody(leftBanner);
    }else if(category === 1){
      setImageBody(undraw);
    }else if(category === -1){
      setImageBody('');
    }else if(category === 2){
      setImageBody(backTwo);
    }else if(category === 3){
      setImageBody(backThree);
    }
  },[category])

  return (
      <Fragment>

        <Helmet bodyAttributes={{style: `background-image : url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),  
        url("${imageBody}")`}}/>



        {
          category === 0 ? (
            <Init/>
          ):(
            <NavMain/>
          )
        }
        {
          category === 1 && <OneCategory/>
        }
        {
          category === -1 && (
            <div>
              <div className="d-flex justify-content-center" >
                <Image src={loading} roundedCircle className="loading-img"/>
              </div>
              <div className="d-flex justify-content-center" >
                <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
                <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
                <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
              </div>
            </div>

          )
        }
      </Fragment>
  );
}

export default Dashboard;
