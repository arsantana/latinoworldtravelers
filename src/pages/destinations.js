import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Jumbotron from '../components/Jumbotron';
import dest from '../images/dest.jpg';
import { Container } from 'react-bootstrap';

const DestinationsPage = () => {
  return(
    <PrimaryLayout>
        <Jumbotron 
        img={dest}
        heading='Destinations'
      />
      <Container>
        
      </Container>
    </PrimaryLayout>
  )
}

export default DestinationsPage;