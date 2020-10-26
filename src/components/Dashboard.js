import React, {Fragment, useEffect, useState} from 'react';
import {firstCategoryData} from '../data/firstCategorydata';
import {secondCategoryData} from '../data/secondCategoryData';
import {thirdCategoryData} from '../data/thirdCategoryData';

import {Image, Spinner} from 'react-bootstrap';
import Helmet from 'react-helmet';

import {
  useRecoilValue, useRecoilState
} from 'recoil';

import {categoryNavigation, firstCategory, linksSvg, color, secondCategory, thirdCategory } from '../GlobalState'

import img from '../assets/img/fondo4.png';
import Init from "./UI/Init";
import NavMain from "./UI/navbar/NavMain";
import OneCategory from "./study_categories/OneCategory";
import SecondCategory from "./study_categories/SecondCategory";
import ThirdCategory from "./study_categories/ThirdCategory";
import QuestionMultipleAnswer from './games/question/QuestionMultipleAnswer';

import CompleteBoard from "./games/complete_information/CompleteBoard";

import Memoryboard from "./games/memory_game/MemoryBoard";


function Dashboard() {
  const category = useRecoilValue(categoryNavigation);
  const [imageBody, setImageBody] = useState(null);
  const [colorMain, setColorMain] = useRecoilState(color);

  const [firsCategoriesData, setFirsCategoriesData] = useRecoilState(firstCategory);
  const [secondCategoriesData, setSecondCategoriesData] = useRecoilState(secondCategory);
  const [thirdCategoriesData, setThirdCategoriesData] = useRecoilState(thirdCategory);

  const links = useRecoilValue(linksSvg);

  useEffect(()=>{
    setFirsCategoriesData(firstCategoryData);
    setSecondCategoriesData(secondCategoryData);
    setThirdCategoriesData(thirdCategoryData)
    if(category === 0){
      setImageBody(links[0].background);
      setColorMain("#fff7ed");
    }else if(category === 1){
      setImageBody(links[1].background);
      setColorMain("#ff873d");
    }else if(category === -1){
      setImageBody('');
      setColorMain("#f2f2f2");
    }else if(category === 2){
      setColorMain("#780116");
      setImageBody(links[2].background);
    }else if(category === 3){
      setColorMain("#F7B539");
      setImageBody(links[3].background);
    }else if(category === 4){
      setImageBody(img);
      setColorMain("#F7B539");
    }else if(category === 5){
      setImageBody(links[5].background);
      setColorMain("");
    }else if(category === 6){
      setColorMain("#780116");
    }
  },[category])

  return (
      <Fragment>

        <Helmet>
          {/* Define inline CSS for body tag */}
          <body/>
          {/* Or include in-file CSS */}
          <style>
            {`
                body {
                    background-color: ${colorMain};
                    background-image : url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),  
                     url("${imageBody}")
                }
             `}
          </style>
        </Helmet>



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
          category === 2 && <SecondCategory/>
        }
        {
          category === 3 && <ThirdCategory/>
        }
        {
          category === -1 && (
            <div>
              <div className="d-flex justify-content-center mt-5 mb-2 mr-4 ml-4" >
                <div className="loading-img">
                  <Image src={links[0].loading} className="img-fluid"/>
                  <div className="d-flex justify-content-center mt-3" >
                    <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
                    <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
                    <Spinner animation="grow" variant="dark" size="sm" className="mr-2"/>
                  </div>
                </div>
              </div>
            </div>

          )
        }
        {
          category === 4 && <QuestionMultipleAnswer/>
        }
        {
          category === 5 && <Memoryboard/>
        }
        {
          category === 6 && <CompleteBoard/>
        }
      </Fragment>
  );
}

export default Dashboard;
