import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const PrimaryLayout = ({children}) => {
  return(
    <>
      <Navigation/>
      {children}
      
      <Footer />
    </>
  )
}

export default PrimaryLayout;