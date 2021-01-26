import React,{useEffect}  from 'react';
import {NavDropdown} from "react-bootstrap";


function DropDownTest(props) {



  const changeCategory = (setCategory, number) =>{
    setCategory(-1);
    setTimeout(()=>{
      setCategory(number);
    },1500);
  }

  return(
    <NavDropdown.Item
      href="#"
      className={`color-${props.cat.color} ${props.cat.id === props.category ? 'font-weight-bold': ''}`}
      onClick={()=>{
        changeCategory(props.setCategory, props.cat.id);
        props.stopSynth()
      }}>
      {props.cat.title}
    </NavDropdown.Item>
  )
}

export default DropDownTest;
