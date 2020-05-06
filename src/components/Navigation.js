import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/lwt-logo.png';

const Navigation = () => {
  return(
    <Navbar expand="lg">
  <Navbar.Brand href="/">
    <img
        src={logo}
        width="160"
        height="auto"
        className="d-inline-block align-top"
        alt="Latino World Travelers logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/about'>About</Link></Nav.Link>
      <Nav.Link><Link to='/services'>Services</Link></Nav.Link>
      <Nav.Link><Link to='/destinations'>Destinations</Link></Nav.Link>
      <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
      <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;