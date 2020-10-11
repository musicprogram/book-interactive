import React, {Fragment, useEffect} from 'react';
import {firstCategoryData} from '../data/data'
import {Image, Spinner, Row, Col} from 'react-bootstrap';
import leftBanner from '../assets/img/left-banner.svg'
import {
  useRecoilValue, useRecoilState
} from 'recoil';

import {categoryNavigation, firstCategory} from '../GlobalState'

import Init from "./UI/Init";
import NavMain from "./UI/NavMain";
import OneCategory from "./study_categories/OneCategory";

import loading from '../assets/img/loading.svg'

function Dashboard() {
  const category = useRecoilValue(categoryNavigation);
  const [firsCategoriesData, setFirsCategoriesData] = useRecoilState(firstCategory);

  useEffect(()=>{
    setFirsCategoriesData(firstCategoryData)
  },[])

  return (
      <Fragment>

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
