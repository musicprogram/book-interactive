import React, {Fragment, useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import {categoryNavigation} from "../../../GlobalState";


const menuCatArray = [
  {
    category: 1, title: "Textil"
  },
  {
    category: 2, title: "Corte"
  },
  {
    category: 3, title: "Confección"
  }
]


function ButtonsModalCategories(props) {
  const [category, setCategory] = useRecoilState(categoryNavigation);
  const [categories, setCategories] = useState(menuCatArray);
  useEffect(()=>{


  },[]);

  const handleClick = (cat) =>{
    setCategory(cat);
  }

  return (
      <div className="d-flex flex-row bd-highlight mb-3 btn-group btn-group-toggle" data-toggle="buttons">
        {
          categories.map((cat)=>{
            return(
              <label
                onClick={()=> handleClick(cat.category)}
                className={`btn btn-secondary active`}>
                <input type="radio" name="options" checked/>
                {cat.title}
              </label>
            )
          })
        }
      </div>

  );
}

export default ButtonsModalCategories;
