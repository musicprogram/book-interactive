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
  currentStep1

} from '../../GlobalState';

function NavMain() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useRecoilState(categoryNavigation);
  const synth = useRecoilValue(synthGlobal);
  const firsCategoriesData = useRecoilValue(firstCategory);
  const [menu, setMenu] = useState([]);
  const secondCategoriesData = useRecoilValue(secondCategory);
  const [menu1, setMenu1] = useState([]);
  const [step, setStep] = useRecoilState(currentStep);
  const [colorMain, setColorMain] = useRecoilState(color);
  const [colorText, setColorText] = useState('');
  const [step1, setStep1] = useRecoilState(currentStep1);




  useEffect(()=>{
    if(category === 1 || category === 4){
      setColorText('color-1')
    }else if(category === 2) {
      setColorText('color-2')
    }else if(category === 3) {
      setColorText('color-3')
    }

    let men = [];
    let men1 = [];

    firsCategoriesData.map((category, i)=>{
      let obj = {
        id: category.id,
        title: category.titleIn
      }

      men.push(obj)

    })

    secondCategoriesData.map((category, i)=>{
      let obj = {
        id: category.id,
        title: category.titleIn
      }

      men1.push(obj)

    })

    setMenu1(men1);
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
              menu.map((cat, i)=>{
               return(
                 <NavDropdown.Item
                   href="#"
                   className={`color-1 ${step === cat.id ? ' font-weight-bold' : ''}`}
                   onClick={()=>{
                     setStep(cat.id);
                     localStorage.setItem("stepFormOne", `${cat.id}`)
                      setCategory(-1);
                      setTimeout(()=>{
                        setCategory(1);
                      },1500);
                     stopSynth();
                   }}>
                   {cat.title}
                 </NavDropdown.Item>
               )
              })
            }
          </NavDropdown>

          <NavDropdown
            title="Second category"
            id="basic-nav-dropdown"
            className={`my-nav-kink  ${category === 2 ? 'font-weight-bold text-uppercase text-dark' : ''}`}>
            {
              menu1.map((cat, i)=>{
                return(
                  <NavDropdown.Item
                    href="#"
                    className={`color-2 ${step1 === cat.id ? 'font-weight-bold' : ''}`}
                    onClick={()=>{
                      setStep1(cat.id);
                      localStorage.setItem("stepFormSecond", `${cat.id}`)
                      setCategory(-1);
                      setTimeout(()=>{
                        setCategory(2);
                      },1500);
                      stopSynth();
                    }}>
                    {cat.title}
                  </NavDropdown.Item>
                )
              })
            }
          </NavDropdown>

          <Nav.Link href="#" className={`my-nav-kink ${category === 3 ? 'font-weight-bold text-uppercase text-dark' : ''}`}  onClick={()=> {
            setCategory(3);
            stopSynth();
          }}>Third</Nav.Link>
          <Nav.Link href="#" className={`my-nav-kink ${category === 4 ? 'font-weight-bold text-uppercase text-dark' : ''}`}  onClick={()=> {
            setCategory(-1);
            setTimeout(()=>{
              setCategory(4);
            },1500);
            stopSynth();
          }}>Cuestionario 1</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavMain;


