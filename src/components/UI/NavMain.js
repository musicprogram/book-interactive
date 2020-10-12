import React, {useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import {
  useRecoilState, useRecoilValue
} from 'recoil';

import {categoryNavigation,
  currentStep,
  firstCategory,
  synthGlobal,
  color

} from '../../GlobalState';

function NavMain() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useRecoilState(categoryNavigation);
  const synth = useRecoilValue(synthGlobal);
  const firsCategoriesData = useRecoilValue(firstCategory);
  const [menu, setMenu] = useState([]);
  const [step, setStep] = useRecoilState(currentStep);
  const [colorMain, setColorMain] = useRecoilState(color);
  const [colorText, setColorText] = useState('');



  useEffect(()=>{
    if(category === 1){
      setColorText('color-1')
    }else if(category === 2) {
      setColorText('color-2')
    }else if(category === 3) {
      setColorText('color-3')
    }

    let men = [];

    firsCategoriesData.map((category, i)=>{
      let obj = {
        id: category.id,
        title: category.titleEs
      }

      men.push(obj)

    })
    setMenu(men);
  },[category])

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
        Book Interactive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title="One category"
            id="basic-nav-dropdown"
            className={`my-nav-kink  ${category === 1 ? 'font-weight-bold text-uppercase text-dark' : ''}`}>
            {
              menu.map((category, i)=>{
               return(
                 <NavDropdown.Item
                   href="#"
                   className={`${step === category.id ? 'font-weight-bold' : ''}`}
                   onClick={()=>{
                     setStep(category.id);
                     localStorage.setItem("stepFormOne", `${category.id}`)
                     setCategory(1);
                      setCategory(-1);
                      setTimeout(()=>{
                        setCategory(1);
                      },1500);
                     stopSynth();
                   }}>
                   {category.title}
                 </NavDropdown.Item>
               )
              })
            }
          </NavDropdown>


          <Nav.Link href="#" className={`my-nav-kink ${category === 2 ? 'font-weight-bold text-uppercase text-dark' : ''}`}  onClick={()=> {
            setCategory(2);
            stopSynth();
          }}>Second</Nav.Link>
          <Nav.Link href="#" className={`my-nav-kink ${category === 3 ? 'font-weight-bold text-uppercase text-dark' : ''}`}  onClick={()=> {
            setCategory(3);
            stopSynth();
          }}>Third</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavMain;


