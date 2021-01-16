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

// redux 
import {
  selectEmail,
  logoutUser,
} from "../features/user/SignInSlice";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // redux
  let userEmail = useSelector(selectEmail);

  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logoutUser({
      email: "",
      password: ""
    }))
  }
  return (
    <Navbar id="header" light expand="md">
      <NavbarBrand href="/">
        <img src={Logo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto link" navbar>
          <NavItem>
            <NavLink><Link to="/" className="text-white">Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/about" className="text-white">About</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/contact" className="text-white">Contact</Link></NavLink>
          </NavItem>
          <React.Fragment id="button__design">
            {userEmail ? (
              <NavItem>
                <NavLink href="/signin"><Button color="danger" className="text-white" type="button" onClick={signout}> sign out</Button></NavLink>
              </NavItem>
            ) : (
                <React.Fragment>
                  <NavItem>
                    <NavLink href="/signin"><Button outline color="primary" className="text-white" type="button"> sign in</Button></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup"><Button outline color="primary" className="text-white" type="button"> sing up</Button></NavLink>
                  </NavItem>
                </React.Fragment>
              )}

          </React.Fragment>


        </Nav>
      </Collapse >
    </Navbar >
  )
}

export default Header
