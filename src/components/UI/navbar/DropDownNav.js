import React from 'react';
import {NavDropdown} from "react-bootstrap";


function DropDownNav(props) {

  const changeCategory = (id, varLocal, setStep, setCategory, number) =>{
    setStep(id);
    localStorage.setItem(varLocal, `${id}`)
    setCategory(-1);
    setTimeout(()=>{
      setCategory(number);
    },1500);
  }

  return(
    <NavDropdown
      title={props.title}
      id="basic-nav-dropdown"
      className={`my-nav-kink  ${props.category === props.number ? 'font-weight-bold text-uppercase text-dark' : ''}`}>
      {
        props.menu.map((cat, i)=>{
          return(
            <NavDropdown.Item
              key={i}
              href="#"
              className={`color-${props.number} ${props.step === cat.id ? ' font-weight-bold' : ''}`}
              onClick={()=>{
                changeCategory(cat.id, props.varLocal, props.setStep, props.setCategory, props.number);
                props.stopSynth()
              }}>
              {cat.title}
            </NavDropdown.Item>
          )
        })
      }
    </NavDropdown>
  )
}

export default DropDownNav;
