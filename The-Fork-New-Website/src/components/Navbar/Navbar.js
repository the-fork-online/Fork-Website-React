import React, { useState } from 'react';

import Brand from "./logo.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media
  } from 'reactstrap';

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Media object src={Brand} alt="Generic placeholder image" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;