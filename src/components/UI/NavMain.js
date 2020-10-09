import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import {
  useRecoilState
} from 'recoil';

import {categoryNavigation} from '../../GlobalState'

function NavMain() {
  const [category, setCategory] = useRecoilState(categoryNavigation);

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#" onClick={()=> setCategory(0)}>
        <h1 className="text-brand color-main font-weight-bold text-shadow">
          Book Interactive
        </h1>
      </Navbar.Brand>
      <Nav.Link href="#" className="my-nav-kink" onClick={()=> setCategory(1)}>First</Nav.Link>
      <div className="mx-auto order-0">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="my-nav-kink"  onClick={()=> setCategory(2)}>Second</Nav.Link>
        </Nav>
      </div>
      <Nav.Link href="#" className="my-nav-kink"  onClick={()=> setCategory(3)}>Third</Nav.Link>
    </Navbar>
  );
}

export default NavMain;


