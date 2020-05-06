import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Jumbotron from '../components/Jumbotron';
import luggage from '../images/luggage.jpg';
import { Container } from 'react-bootstrap';

const ServicesPage = () => {
  return(
    <PrimaryLayout>
        <Jumbotron 
        img={luggage}
        heading='Services'
      />
      <Container>
       
      </Container>
    </PrimaryLayout>
  )
}

export default ServicesPage;