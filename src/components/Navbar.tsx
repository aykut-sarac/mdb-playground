import React, { Component } from "react";
import { Link } from "react-router-dom";
import solace from "../images/solace.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

interface Props {}
interface State {
  isWideEnough: boolean;
  collapse: boolean;
}

export default class Navbar extends Component<Props, State> {
  state = {
    isWideEnough: false,
    collapse: false,
  };
  handleToggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <MDBNavbar
        color="black"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarBrand href="/">
          <img src={solace} width="50" height="50" alt="Solace" />
        </MDBNavbarBrand>
        {!this.state.isWideEnough && (
          <MDBNavbarToggler onClick={this.handleToggle} />
        )}
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/items/">items</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
