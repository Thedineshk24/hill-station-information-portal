import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';


import {
  Link
} from "react-router-dom";

// logo

import Logo from "../assets/logo/hillstation_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <Navbar style={{backgroundColor:"#FCA311"}} light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/" className="text-white">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/about" className="text-white">About</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/contact" className="text-white">Contact</Link></NavLink>
            </NavItem>
            <div className="ml-auto buttonn">
              <NavLink href="/signin"><Button color="info" className="text-white" size="lg" outline type="button"> sign in</Button></NavLink>
              <NavLink href="/signup"><Button color="info" className="text-white" size="lg" outline type="button"> sing up</Button></NavLink>
            </div>


          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default Header
