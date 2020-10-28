import React from 'react';
import {Button} from "react-bootstrap";
import {useRecoilState} from "recoil";
import {categoryNavigation} from "../../../GlobalState";


function ButtonNextDown() {
  const [categoryNav, setCategoryNav] = useRecoilState(categoryNavigation);

  const handleChangeTest = () =>{
    let cat;
    if(categoryNav === 1){
      cat = 5;
    }else if(categoryNav === 2){
      cat = 6;
    }else if(categoryNav === 3){
      cat = 4;
    }
    setCategoryNav(cat);
  }

  return (
    <div className="container mt-5 mb-4">
      <Button
        onClick={handleChangeTest}
        variant="dark"
        size="lg"
        block
      >
        >> Presentar prueba
      </Button>
    </div>
  );
}

export default ButtonNextDown;
