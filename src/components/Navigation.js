import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo-white.png';



const Navigation = () => {

  return(
    <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-transparent fixed-top p-4 text-white">
  <Link to='/' className="navbar-brand">
    <img src={logo} alt='Logo' height="60" width='160' />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
        <Link to='/' className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to='/destinations' className="nav-link" href="#">Destinations</Link>
      </li>
      <li className="nav-item">
        <Link to='/community' className="nav-link" href="#">Community</Link>
      </li>
      <li className="nav-item">
        <Link to='/blog' className="nav-link" href="#">Blog</Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' className="nav-link" href="#">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navigation;