import React, {useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import {
  useRecoilState, useRecoilValue
} from 'recoil';

import {
  categoryNavigation,
  currentStep,
  firstCategory,
  synthGlobal,
  color,
  secondCategory,
  currentStep1,
  thirdCategory,
  currentStep3

} from '../../../GlobalState';
import {thirdCategoryData} from "../../../data/thirdCategoryData";

import DropDownNav from "./DropDownNav";
import DropDownTest from "./DropDownTest";



const menuTestArray = [
  {
    id: 5, title: 'Concéntrese', color: 1
  },
  {
    id: 4, title: 'Selección múltiple', color: 3
  },
  {
    id: 6, title: 'Completar', color: 2
  }
]

function NavMain() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useRecoilState(categoryNavigation);
  const synth = useRecoilValue(synthGlobal);

  const [menuOne, setMenuOne] = useState([]);
  const [menuTwo, setMenuTwo] = useState([]);
  const [menuThree, setMenuThree] = useState([]);

  const firsCategoriesData = useRecoilValue(firstCategory);
  const secondCategoriesData = useRecoilValue(secondCategory);
  const thirdCategoriesData = useRecoilValue(thirdCategory);

  const [step, setStep] = useRecoilState(currentStep);
  const [colorMain, setColorMain] = useRecoilState(color);
  const [colorText, setColorText] = useState('');
  const [step1, setStep1] = useRecoilState(currentStep1);
  const [step3, setStep3] = useRecoilState(currentStep3);

  const [menuTest, setMenuTest] = useState(menuTestArray)


  useEffect(()=>{
    if(category === 1 || category === 5){
      setColorText('color-1')
    }else if(category === 2) {
      setColorText('color-2')
    }else if(category === 3 || category === 4) {
      setColorText('color-3' )
    }
    setMenuTwo(convertMenu(secondCategoriesData));
    setMenuOne(convertMenu(firsCategoriesData));
    setMenuThree(convertMenu(thirdCategoryData));
  },[category]);

  const convertMenu = (categories) =>{
    let menu = [];
    categories.map((category, i)=>{
      let obj = {
        id: category.id,
        title: category.titleEs
      }
      menu.push(obj)
    });
    return menu;
  }

  const stopSynth = () =>{
    if(synth.speaking){ /* stop narration */
      synth.cancel();
    }
  }



  return (

    <Navbar
      expand="sm"
      className="background-nav"
      variant="light"
      collapseOnSelect
      expanded={isExpanded}
      onToggle={()=> setIsExpanded(!isExpanded)}
    >

      <Navbar.Brand  className={`brand-text ${colorText}`}
       onClick={()=> {
        setCategory(0);
        stopSynth()
      }}>
        Interactive Manual
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <DropDownNav
            category={category}
            menu={menuOne}
            step={step}
            setStep={setStep}
            setCategory={setCategory}
            stopSynth={stopSynth}
            number={1}
            varLocal="stepFormOne"
            title="Defectos por proceso textil"
          />

          <DropDownNav
            category={category}
            menu={menuTwo}
            step={step1}
            setStep={setStep1}
            setCategory={setCategory}
            stopSynth={stopSynth}
            number={2}
            varLocal="stepFormSecond"
            title="Defectos por proceso de corte"
          />

          <DropDownNav
            category={category}
            menu={menuThree}
            step={step3}
            setStep={setStep3}
            setCategory={setCategory}
            stopSynth={stopSynth}
            number={3}
            varLocal="stepFormThird"
            title="Defectos por proceso de confección"
          />

          <NavDropdown
            title="Pruebas"
            id="basic-nav-dropdown"
            className={`my-nav-kink`}>
            {
              menuTest.map((cat, i)=> {
               return <DropDownTest
                 setCategory={setCategory}
                 key={i}
                 cat={cat}
                 category={category}
                 stopSynth={stopSynth}
               />

              })
            }
          </NavDropdown>

          <Nav.Item>
            <Nav.Link
              onClick={()=> {
                setCategory(7);
                stopSynth()
              }}
            >Introducción</Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavMain;


