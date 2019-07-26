import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
 
class Navigation extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/people">People</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>   
        </Navbar>
    );
  }
}
 
export default Navigation;
