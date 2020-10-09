import React from 'react';
import {
  useRecoilValue
} from 'recoil';

import {categoryNavigation} from '../GlobalState'

import Init from "./UI/Init";
import FirstCategory from "./study_categories/firsts_categories/first_category";
import NavMain from "./UI/NavMain";

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
          category === 1 && <FirstCategory/>
        }
      </div>
  );
}

export default Dashboard;
