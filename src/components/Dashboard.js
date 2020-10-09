import React from 'react';
import {
  useRecoilValue
} from 'recoil';

import {categoryNavigation} from '../GlobalState'

import Init from "./UI/Init";
import NavMain from "./UI/NavMain";
import OneCategory from "./study_categories/OneCategory";

function Dashboard() {
  const category = useRecoilValue(categoryNavigation);

  return (
      <div>
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
      </div>
  );
}

export default Dashboard;
