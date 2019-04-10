import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import logo from "../../assets/logo.png";
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar className="nav-bar fixed-top" color="light" light expand="md">
          <NavbarBrand href="/">
            <img alt="logo" src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="collapse" isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto sticky-top" navbar>
              <NavItem>
                <NavLink href="">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Notifications</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Login/Sign up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Help</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
