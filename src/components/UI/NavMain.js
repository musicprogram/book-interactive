import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import {
  useRecoilState
} from 'recoil';

import {categoryNavigation} from '../../GlobalState'

function NavMain() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useRecoilState(categoryNavigation);

  return (

    <Navbar
      expand="sm"
      className="background-nav mb-2"
      variant="light"
      collapseOnSelect
      expanded={isExpanded}
      onToggle={()=> setIsExpanded(!isExpanded)}
    >

      <Navbar.Brand  className="brand-text" onClick={()=> setCategory(0)}>
          Book Interactive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className={`my-nav-kink ${category === 1 ? 'font-weight-bold color-main text-uppercase text-dark' : ''}`} onClick={()=> setCategory(1)}>First</Nav.Link>
          <Nav.Link href="#" className={`my-nav-kink ${category === 2 ? 'font-weight-bold color-main text-uppercase text-dark' : ''}`}  onClick={()=> setCategory(2)}>Second</Nav.Link>
          <Nav.Link href="#" className={`my-nav-kink ${category === 3 ? 'font-weight-bold color-main text-uppercase text-dark' : ''}`}  onClick={()=> setCategory(3)}>Third</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavMain;


