import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function NavMain() {
  return (
    <Navbar bg="light" variant="light">
      <Nav.Link href="#" className="my-nav-kink">First</Nav.Link>
      <div className="mx-auto order-0">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="my-nav-kink">Second</Nav.Link>
        </Nav>
      </div>
      <Nav.Link href="#" className="my-nav-kink">Third</Nav.Link>
    </Navbar>
  );
}

export default NavMain;


