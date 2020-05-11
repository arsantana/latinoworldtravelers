import React, {useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo-white.png';
import window from 'global/window';


const Navigation = () => {

  const [navBackground, setNavBackground] = useState();

  const scrollEvent = e => {
    if (window.scrollY < 73) {
      return setNavBackground('navBackground');
    } else if (window.scrollY > 70) {
      return setNavBackground('navBackground2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent)
  }, []);

  return(
    <nav 
      className={`navbar navbar-dark navbar-expand-lg navbar-light  fixed-top p-4 text-white ${navBackground}`}
      >
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