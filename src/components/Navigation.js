import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/lwt-logo.png';

const Navigation = () => {
  return(
    <Navbar bg="light" expand="lg" className='justify-content-between'>
  <Navbar.Brand href="#home">
    <img
        src={logo}
        width="150"
        height="auto"
        className="d-inline-block align-top"
        alt="Latino World Travelers logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Services</Nav.Link>
      <Nav.Link href="#link">Destinations</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;